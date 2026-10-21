---
title: A CAD IR for language models should not be a feature tree
description: If the model should not write B-rep, what should it write? The layer between the language model and the kernel, a CAD IR. What that layer has to carry, how Zoo's KCL answers it, and why a feature tree written as text is not enough.
date: 2026-10-21
---

[The previous article](/en/blog/brep-not-for-transformers) ended on code that a CAD kernel compiles. That puts a layer between the language model and the kernel: the model writes it, the kernel turns it into B-rep, and a person reads and edits it, by hand or through an interface. Compilers call this kind of layer an intermediate representation. For CAD, call it a CAD IR.

The hard part is serving three readers at once. B-rep serves only the kernel. This article is about what the layer has to carry to serve all three, and why the most serious answer so far, Zoo's KCL, stops one level too low.

## What the layer has to do

Building Forgent3D taught us seven requirements.

**Short, and written in order.** A transformer writes left to right, and every token is another chance to go wrong. Across our 28 generators the code is a median of 2,768 tokens; their STEP files are a median of 63,746.

**Names instead of pointers.** `lid`, `boss`, `HOLE_D`. A name that does not exist fails on the line that used it.

**Each number written once, along with where it came from.** In our models every constant says whether the user stated it, it was derived, or it is a default:

```python
BORE_D = 9.0   # stated: bearing bore (mm)
WALL = 2.0     # default: printed wall (mm)
```

After the build we look for every stated number in the geometry: `BORE_D / 2` should show up as a cylinder of radius 4.5, and the report says whether it does. When someone drags a value in the interface, the edit is solved back into the constant it came from, and the formula around it stays a formula.

**Refer to geometry by meaning.** The top face, the edge where the rib meets the base, the feature called bores; not face 7. Parametric CAD has a name for what happens otherwise, the topological naming problem: an edit upstream renumbers the faces and a fillet lands on the wrong edge. Zoo met it from the other side, when their own engine changed how it splits faces: "If your CAD model has applied a fillet to edge #17, but that face is now edge #18, this new algorithm just changed which fillets were applied, breaking our stability promise." Our selectors rank references by how well they survive: a named feature first, then a query that matches exactly one thing, then an explicit ordering, and last of all the default order.

**Compile the same way every time, and fail out loud.** The same source gives the same solid in your browser and on our server. If a fillet does not fit, the build says so and says where; it is never quietly made smaller.

**Trace both ways.** Click a face and see the line that made it. Drag a number and see which constant it came from. That is what lets an interface and an agent point at the same thing.

**Something the model can already write.** Language models have read an enormous amount of Python, though much less CAD: in one 2025 study, off-the-shelf models' CadQuery failed to build at least 47% of the time, and fine-tuning brought that under 2%. A new language starts from documentation and examples alone.

## KCL, the most serious answer so far

Zoo, formerly KittyCAD, built a language for exactly this layer: KCL. Its premise is ours. In their words, "All artifacts—including parts and assemblies—should be represented as human-readable code", and "All GUI (or point-and-click) interactions should be actions performed on this code representation under the hood." Every click in Zoo Design Studio writes KCL, and their agent, Zookeeper, edits the same KCL. The interface and the agent share one source, which is the property the list is after.

Against the list, KCL does well where Python cannot. Variables cannot be reassigned. Arguments are named. Units are part of a number (`42mm`), with a default per file. References to edges are moving from tags to the faces around the edge, which, Zoo writes, "makes references more stable when earlier modeling operations change the body's topology." The language and the app are open source (MIT); the interpreter is Rust compiled to WebAssembly.

Here is a bracket profile in KCL 3.0, the version that became the default in October 2026, taken from Zoo's migration guide:

```
bracketProfile = sketch(on = XY) {
  bottom = line(start = [var 0mm, var 0mm], end = [var 30mm, var 0mm])
  right = line(start = [var 30mm, var 0mm], end = [var 30mm, var 20mm])
  top = line(start = [var 30mm, var 20mm], end = [var 0mm, var 20mm])
  left = line(start = [var 0mm, var 20mm], end = [var 0mm, var 0mm])
  coincident([bottom.end, right.start])
  coincident([right.end, top.start])
  coincident([top.end, left.start])
  coincident([left.end, bottom.start])
  horizontal(bottom)
  vertical(right)
  horizontal(top)
  vertical(left)
}
bracket = extrude(region(point = [15mm, 10mm], sketch = bracketProfile), length = 5mm)
```

A 30 × 20 × 5 mm plate: four segments, four coincidences, four orientation constraints, a region and an extrusion. Every line is clear. Together they are what parametric CAD has always stored, a feature tree. Zoo says as much: their roadmap describes the code editor as where "you write the code that defines the model and feature tree 1:1".

Three costs come with it:

- **The model has to learn it.** Nick Cameron, who worked on KCL's design, wrote: "Since KCL is a new language there is not much code to train AI on." In August 2025 Zoo reported bringing their generation error rate down from 50% to 16%.
- **It moves.** KCL 1.0 shipped in May 2025, 2.0 became the default in May 2026 and 3.0 in October 2026, and the pipeline style KCL was first written in is now deprecated. Old files keep working because they pin their version, but what a model learned last year is no longer what the documentation recommends.
- **The geometry comes from Zoo's engine,** which is closed and runs in their cloud or on an enterprise's own servers. Without a connection there is no model.

## A feature tree in text is not enough

NX and CATIA have stored feature trees for decades, on kernels (Parasolid, CGM) hardened by decades of industrial parts. Writing the tree as text makes it diffable and gives a language model something to write. It does not change what the model has to think in: segments, constraints, which edge gets the fillet.

That is not how people ask for parts. They ask for a lid that snaps shut, four holes for M3 heat-set inserts, a case for this board with the USB port open. We see our agent go wrong in the translation from one to the other: reading a hand sketch the wrong way round, or working out from scratch a number that comes from printing experience, like the hole for a heat-set insert. A CAD IR for a language model should carry what a feature tree never stored:

- **what each feature is for**: a clearance hole for M3, a boss for a heat-set insert, a snap fit, not a cylinder subtracted at some coordinates;
- **which numbers the user stated** and which are defaults, so the build can check that what was asked for is what came out;
- **requirements**: a minimum wall, a fit clearance, the printer bed the part has to fit on;
- **relationships between parts**: this lid slides in that groove with 0.2 mm to spare;
- **references to design objects**: the lid's mating face, the boss for the third screw, not faces and edges.

## Where we are

Our models are Python, in the style of build123d. Python is the "something the model can already write" on the list, and we lay part of the rest over it by convention:

- a component library, so a heat-set insert boss is one call with the numbers already worked out instead of a cylinder the model derives each time ([why](/en/blog/components-catalog));
- `stated` / `derived` / `default` on every constant, checked after the build;
- markers that turn constants into sliders on the page;
- selectors ranked by how well they survive an edit;
- a build report the agent reads after every change ([how](/en/blog/agent-that-measures)).

It is convention, and Python enforces none of it. A model can still put a hole at absolute coordinates, pick an edge by its index, write the same number in three places. The build catches some of that afterwards. The language catches none of it beforehand.

So neither answer is the IR the list describes. KCL put its rules in the language, at the level of the feature tree. We put ours above the feature tree, in conventions the language knows nothing about.

B-rep serves the kernel. A feature tree in text serves the kernel and the editor. A CAD IR for language models has to serve the model as well, in the terms people use when they ask for a part.
