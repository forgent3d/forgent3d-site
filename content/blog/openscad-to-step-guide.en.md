---
title: How to export STEP from OpenSCAD: the usual ways, and the one we built
description: OpenSCAD only exports meshes like STL, so getting a STEP file takes a detour. The FreeCAD workbench, mesh-to-STEP converters, remodelling by hand, each with its own cost. Which road fits which job, and an online converter that needs no install.
date: 2026-09-30
---

There is no STEP in OpenSCAD's export menu. That is not an omission, it is the design: OpenSCAD turns every model into triangles, and all it can export are mesh formats, STL, 3MF, OFF, AMF.

A printer does not mind. But the moment a part goes to a CNC shop, to injection moulding, or into Fusion, SolidWorks or FreeCAD for further work, what they want is STEP. In a STEP file a hole is a cylindrical face with a diameter; in a mesh it is a ring of thin triangles that CAD cannot select, cannot measure, and CAM does not recognise.

So "export STEP from OpenSCAD" is a question that comes up on the forums every few months. Here are the usual answers.

## The FreeCAD OpenSCAD workbench

FreeCAD can import a .scad file, or the .csg that OpenSCAD exports, rebuild the primitives inside as solids, and export STEP. It is the oldest and most often recommended route.

The cost is that you need both FreeCAD and OpenSCAD installed, and it cannot rebuild everything. Operations like `hull()` and `minkowski()` often come back as meshes, so the STEP ends up half solid, half facets. Multi-file projects and files that use libraries usually need tidying by hand first.

For: simple parts, both programs already installed, and the patience to handle failures manually.

## Mesh-to-STEP converters

Export STL from OpenSCAD first, then "wrap" it in a STEP file with a converter. There are many, online and desktop.

What they do is turn every triangle into a planar face. The file is a STEP and opens anywhere, but it is still a mesh: no cylinders, no holes to select, and thousands of tiny faces that can bring CAM software to its knees. Send one of these for a quote and the shop will probably ask for the "real" model.

For: when the other side only needs a file that opens and nobody will edit it.

## Remodel it by hand

Open a CAD program and redraw the part from its dimensions. The result is exact and the cleanest of all.

The cost is time, hours per part, and every change to the .scad means doing it again. For something parametric, that amounts to giving up the parameters.

For: a one-time conversion of a simple part.

## What we built: convert in the browser

[Forgent3D's OpenSCAD to STEP](/en/openscad-to-step) takes another route. The real OpenSCAD executes your code, so the language behaves exactly as on your machine, modules, functions, include, use, MCAD and BOSL2 included; a CAD kernel then rebuilds every primitive and boolean as exact geometry, a circle becomes a true cylinder, and that is exported as STEP.

Using it means dropping a .scad file or a whole project folder in, looking at the preview, and clicking export. Nothing to install, no sign-up. Customizer parameters become sliders, so you can set the dimensions before exporting.

It has limits too: `hull()` and `minkowski()` are exact for common shapes and approximated, with a clear warning, where no exact form exists; `linear_extrude` with `twist` has no exact form; an STL brought in by `import()` stays faceted. All of it is listed on the [compatibility](/en/openscad-to-step/compatibility) page. We test against several thousand real files from Thingiverse, and most convert outright.

## Which to pick

- You only need a file that opens and nobody will edit it: a mesh-to-STEP converter is fastest.
- It will be edited in CAD, sent to a shop, or machined: you need real B-rep, from the FreeCAD workbench or our converter.
- A simple part, converted once in its life: redrawing works too.

If you have not decided, drop the file into the [converter](/en/openscad-to-step) and see. If it cannot, it tells you why.
