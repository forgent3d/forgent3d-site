---
title: What 7,378 Thingiverse .scad files taught us
description: We test the converter against seven thousand real OpenSCAD files from Thingiverse. Tests you write yourself are always too clean; real files tell you where you were wrong. A few of the lessons.
date: 2026-10-02
---

Early on in building [OpenSCAD to STEP](/en/openscad-to-step) we decided not to trust test files we wrote ourselves. Files you write are clean: `$fn` is sensible, every `include` is there, the syntax is current. Real files are not like that.

So we pulled 7,378 `.scad` files from Thingiverse, ran the whole batch, and compared the results with OpenSCAD's own render. Here are the things that stuck, in the order we ran into them.

## A tenth of the files do not parse in current OpenSCAD

After the first run, about one file in ten had failed before evaluation even started, every one with a syntax error. They all looked like this:

```
translate([10,,0]) cube(5);
module bracket(w, h,, t) { ... }
```

An extra comma. OpenSCAD 2021.01 accepted it; later versions tightened the grammar and reject it. These files were valid when their authors wrote them, still open on their authors' machines, and just stopped opening in newer builds.

What we did was put the tolerance for repeated commas back in our own OpenSCAD branch, and then check one thing: that no file which is valid under the strict grammar reads differently because of it. None did, so it stayed.

## A missing file is worse than an error

The second kind of failure was `include <lib/gears.scad>` with no such file, because the author uploaded only the main file.

OpenSCAD's reaction is a warning, and then it renders whatever is left. On the desktop that is fine; one look and you see a piece is missing. For a converter it is the worst possible outcome: it "succeeds", hands you a STEP with a chunk gone, and you may find out when the machine shop ships the part back.

So a missing file became a hard error: the build stops and names the file. Better no result than a wrong one that looks right.

## OpenSCAD renders past errors, so we must too

The third kind: OpenSCAD prints an ERROR and carries on anyway. The classic is `polygon(points = undef)`. It is an error, but OpenSCAD treats it as an empty polygon and renders the rest.

There were 128 such files, 91 of them from one origami template that indexes one past the end of a list in a loop. The author probably never noticed, because the model looks right.

That settled the rule: whatever OpenSCAD renders, we have to build. Errors of this kind are downgraded to warnings and attached to the result.

## Fonts that are DXF files

A set of files writes text with Write.scad. The library predates `text()` by years, and its "fonts" are DXF files: one file per alphabet, one layer per glyph. It is one of the built-in libraries, and the glyph outlines come from the DXF layers.

## An empty file name

`import("")`. Not typed by the author; it is a Customizer file field left blank. OpenSCAD reports that it cannot open the file and drops that part. We first treated it as a missing file and stopped, then found it was the default state of a whole batch from one author, and changed it to match OpenSCAD: drop it, warn.

## Is $fn geometry, or precision?

A cylinder with `$fn = 6` is a hexagonal prism, and that is the intent; a nut should have six sides. A cylinder with `$fn = 64` is the author saying "give me a circle", and the facet count is only the desktop's render precision.

A converter has to draw a line between the two. We drew it at 12: `$fn` of 12 or less keeps the polygon, above 12 every circle, cylinder, sphere and cone is rebuilt as an exact analytic surface. It is not perfect, but it matches the intent of nearly every file, and the rule is simple enough to print on the page.

## Operations with no general answer

`hull()` and `minkowski()` are exact for the common inputs, the hull of two cylinders, the Minkowski sum of a box and a sphere. In general they have no exact B-rep form. What we do is: exact where it can be, a faceted approximation where it cannot, with a warning at build time that states the facet count. Never silently.

## Checking the answers

For every file we let OpenSCAD render it itself and compare volume and bounding box with what we built. Anything beyond the threshold gets looked at one by one, and it is either a syntax problem or one of the categories above. Most files convert outright; the ones that do not fall into these categories, and every one of them was taught by a real file, not invented by us.
