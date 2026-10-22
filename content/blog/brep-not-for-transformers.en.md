---
title: B-rep is not for transformers: why our AI does not write it directly
description: A B-rep is exact and every CAD program reads it, so why not have the model generate one? We measured what it is made of on our own parts: pointers that must all land, numbers that must agree in several places at once, many spellings of the same solid, and no record of what anything is for.
date: 2026-10-19
---

After [the article on why our AI writes CAD code instead of a mesh](/en/blog/code-is-model), the next question is always the same. Fine, a mesh does not know what it is. A B-rep does: it is exact, it is what a STEP file holds, and Fusion, SolidWorks and every CAM program read it. So why have the model write code at all? Why not generate the B-rep directly?

Our short answer: B-rep is the right thing to deliver and the wrong thing for a transformer to write. A language model does not produce a PDF byte by byte; it writes the text, and a program that never makes layout mistakes produces the PDF. For a part, that program is the CAD kernel, and what it produces is the B-rep.

The long answer is below, measured on our own parts.

## What a B-rep is made of

Take about the smallest part with a feature: a 40 × 30 × 10 mm plate with a Ø6 hole through the middle. As code it is three lines:

```python
plate = Box(40, 30, 10, align=(Align.MIN, Align.MIN, Align.MIN))
hole = Pos(20, 15, 5) * Cylinder(3, 10)
model = Model(bodies=[Body("plate", geometry=plate - hole)])
```

With the imports and a one-line description, the file is 148 tokens. The STEP file our exporter writes for the same plate is 504 lines and 6,835 tokens: 434 entities, 500 references from one entity to another, 397 numbers.

Those entities describe two things tied together. Topology: one solid, 7 faces, 15 edges, 10 vertices, which loop of edges bounds which face, which two faces share each edge. Geometry: the plane or cylinder each face lies on, the line or circle each edge follows, the point where each vertex sits. Across our parts, about half of a STEP file is a third thing: every edge written out again in 2D, in the coordinates of each face it bounds.

Here is the wall of the hole, and one of its rim edges, as they appear in the file:

```
#402 = ADVANCED_FACE('',(#403),#282,.F.);
#403 = FACE_BOUND('',#404,.F.);
#404 = EDGE_LOOP('',(#405,#406,#427,#428));
#282 = CYLINDRICAL_SURFACE('',#283,3.);
#283 = AXIS2_PLACEMENT_3D('',#284,#285,#286);
#284 = CARTESIAN_POINT('',(20.,15.,0.));
#285 = DIRECTION('',(0.,0.,1.));
#286 = DIRECTION('',(1.,0.,0.));
#265 = EDGE_CURVE('',#266,#266,#268,.T.);
#266 = VERTEX_POINT('',#267);
#267 = CARTESIAN_POINT('',(23.,15.,10.));
#268 = SURFACE_CURVE('',#269,(#274,#281),.PCURVE_S1.);
#269 = CIRCLE('',#270,3.);
#270 = AXIS2_PLACEMENT_3D('',#271,#272,#273);
#271 = CARTESIAN_POINT('',(20.,15.,10.));
```

Four things about this make it a poor thing for a transformer to write.

## It is a graph, written as pointers

A transformer writes one token after another. A B-rep is a graph with cycles: a face points at its loops, a loop at its edges, every edge is shared by two faces, every vertex by each edge that ends there. To write it as a sequence you number every entity and write the numbers, `#403`, `#404`, `#266`. The plate needs 500 of them, and each has to land on exactly the right entity, often hundreds of tokens back. A pointer that is off by one does not give a slightly wrong plate. It gives something that is not a solid.

Code has references too, but they are names: `plate`, `hole`. A name that does not exist stops the build on the line that used it.

## One number lives in several places, and they all have to agree

In the code, the hole's radius is written once. In the STEP it is written five times: the two rim circles, their two 2D copies on the top and bottom faces, and the cylinder. It is implied three more times, in the two vertices and the seam at x = 23, which are only right if they lie on those circles. The hole's position appears in eight points.

Change the hole from Ø6 to Ø6.4. In the code that is one number. In the STEP, exactly eight values in eight entities change, and they have to change together. Leave one vertex at x = 23 while its circle says 3.2, and the vertex no longer lies on its own edge; the tolerance written into the file is 1E-07 mm.

A transformer samples numbers one at a time, and a sample is approximately right. A B-rep needs numbers that sit far apart in the sequence to agree to a ten-thousandth of a micron. In code that agreement is not the model's job: where the hole meets the top face is an intersection the kernel works out, so it is right by construction.

## Change how many of something there are and it is a new file

Edits to dimensions stay local as long as the topology holds. On our box generator, making the inside 5 mm longer is one token in the code and 753 entities in the STEP, 11% of the file. Change a count and it is a different file: a spur gear going from 20 teeth to 21 is one token in the code and rewrites three quarters of the STEP's entities, and from #16288 on everything is renumbered.

Most of what people ask an assistant for is the second kind of edit: one more tooth, two more holes, a third compartment. On a B-rep every one of those is a regeneration.

## The same solid has many spellings

We built the plate twice: once as a box minus a cylinder, once as a sketch of a rectangle with a circle taken out, extruded. Same 7 faces, same volume to the hundredth of a cubic millimetre. 61% of the lines in the two STEP files differ. The cylinder is the seventh face in one and the fifth in the other, the planes have different origins, the hole's seam is parameterised the other way round, and one loop has its orientation flag flipped.

To be fair to the exporter, it is consistent where it can be: cutting two holes in the opposite order gave a byte-identical file. But "this plate" is still not one sequence. It is a family of equally valid ones, and a model trained to reproduce one of them is penalised for writing another.

## And it does not know what anything is for

Nothing in those 434 entities says "hole", let alone "Ø6 because an M6 screw goes through", "these four holes are a pattern" or "this wall is 2 mm because it gets printed". Every face, edge and point in the file has an empty name. The intent lives in the code, in names, constants and comments. The B-rep is what is left after the code has run.

Size, the argument people usually reach for first, matters less than any of the above. Across our 28 generators the STEP has a median of 22 times as many tokens as the model.py. For a simple turned or prismatic part it is only 3 to 9 times, and OCCT's own B-rep format for our bolt-circle flange is about as long as its code. The ratio explodes where geometry repeats: a gear or a Gridfinity baseplate writes every tooth and every pocket out in full, which the code does with one loop.

## What others found

Research has tried both roads. DeepCAD, one of the first generative models of CAD (2021), chose command sequences over B-rep on purpose: "a command sequence can be easily converted into a B-rep, but the converse is hard, as different command sequences may result in the same B-rep."

The models that do generate B-rep treat validity as their headline number:

- SolidGen, a transformer that writes vertices, edges and faces through pointers, handles only lines, arcs and simple surfaces. It trains on parts with 8 to 130 faces and reports 83–88% valid solids.
- BrepGen, a diffusion model, recovers the topology by merging duplicated nodes and sewing the faces together in OpenCascade. It reports 62.9% and says plainly that it "does not guarantee watertight solids".
- Newer models do well on small parts and fall off as parts grow. One reports 99% valid under ten faces and 74.5% at 21 to 30.
- A 2026 paper that has a language model write STEP text directly trains only on files under 500 entities (our plate has 434), because "small errors in entity ordering or identifier usage can render the entire file invalid."

The clearest case is a company. When Zoo launched Text-to-CAD in December 2023, it generated B-rep surfaces you downloaded as STEP. In their own account, written in February 2026: "we initially pursued direct Text-to-B-Rep generation methods… Two developments ultimately inspired us to change course": their own CAD language, KCL, and the rise of large language models. Their agent now returns only KCL code, and the API endpoints that produced STEP directly were removed in August 2026. Writing about models that generate meshes, they put the whole argument in one line: "It is like training on compiled output instead of source code."

Not everyone agrees. Mike Haley of Autodesk says their neural CAD models "directly reason in geometry, rather than speaking to an API about geometry", and puts the case against code bluntly: "Tasking an LLM to work with a parametric CAD API is like hiring a plumber who has read every book on plumbing but has never touched a pipe." We agree with the diagnosis, not the cure. A model that writes code and never looks at the result is that plumber. Ours builds after every edit and reads back what the kernel made of it.

## Where B-rep belongs

None of this is an argument against B-rep. It is what we deliver: every STEP you download from Forgent3D is a B-rep the kernel built. It is also what the agent checks its work against. After every build it reads a report computed from the B-rep, every cylinder's radius and where its axis runs, the position of every flat face ([how that works](/en/blog/agent-that-measures)). The model reads a summary of the B-rep, never the B-rep itself.

B-rep is also a good input. Neural networks that read a B-rep as a graph of faces and edges, to classify a part or label its faces, work well. Being read by a graph network is a different job from being written by a sequence model.

## So what should the model write?

Code that a kernel compiles: short enough to read, with names instead of pointers, each number written once, and the kernel making sure the geometry agrees with itself. Which code, and what it has to carry beyond geometry, is a question of its own, and the subject of [the next article](/en/blog/cad-ir).
