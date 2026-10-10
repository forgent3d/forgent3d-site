---
title: Green faces in the OpenSCAD preview, which color() wins, and what % and # actually draw
description: The walls of a hole come out green and that is not a mistake. The preview's colour conventions, why the outer color() wins, and what happens to % and # in preview and render.
date: 2026-10-06
---

Almost everyone who uses OpenSCAD asks this at some point: I cut a hole with `difference()`, pressed F5, and the walls of the hole are green while everything else is yellow. Did I do something wrong?

No. That is the preview's convention, and it is deliberate.

## What yellow and green mean

The default colour scheme is called Cornfield. Faces of the model are yellow, `#F9D72C`. Faces **left behind by a subtracted object** are green, `#9DCB51`. F5 renders with OpenCSG, an image-based CSG: every pixel on screen ends up belonging to the surface of one primitive. If that primitive was the one you subtracted, the pixel is drawn in the "back face" colour, so the walls of the hole are green.

The convention is useful when debugging. Green says "this surface was cut out", yellow says "this surface was there to begin with". Whether a hole goes all the way through, or whether two holes broke into each other, is faster to read from the colours than from rotating the model.

Press F6 and everything turns yellow. That is normal too. The old CGAL render path kept no colours at all and drew every face the same. Development builds of the last two years use Manifold as the geometry kernel, and Manifold remembers for every triangle which original primitive it came from; the colour and the "subtracted" flag travel through the booleans with it, so recent builds show colours in F6 as well.

## The rule for color(): the outer one wins

This one is counter-intuitive, but it is how it is defined:

```
color("red") color("blue") cube(10);
```

That cube is red. Not blue.

OpenSCAD walks the tree from the root downwards, records the first `color()` it meets, and ignores every `color()` below it. In the source it is one line: `if (!state.color().isValid()) state.setColor(node.color);`. So when a library module colours its own part and you wrap it in a `color()` of your own, yours replaces it. The other way round, colouring a group from the outside while keeping one part's own colour, cannot be done; you have to take that part out of the group.

A subtracted object that carries its own `color()` leaves faces in that colour, not green. If you want blue walls in the hole, give the cylinder `color("blue")`.

Colours can be written three ways: a name (the 147 SVG names, `"red"`, `"steelblue"`, `"lightgray"`, case does not matter), a hex string `"#RRGGBB"` or `"#RRGGBBAA"`, or a vector `[r, g, b]` or `[r, g, b, a]`. The vector components run from 0 to 1, not from 0 to 255. The fourth one is the alpha: `color("red", 0.5)` and `color([1, 0, 0, 0.5])` both make a part translucent, so you can see what sits behind it in the preview.

## % and #

`%` is the background modifier. A subtree marked with `%` is **left out of the render**: after F6 it does not exist, and it is not in the exported STL. In the F5 preview it is drawn in translucent grey. The common use is to put the thing a part will be mounted on next to it, as a reference:

```
%import("case.stl");       // the enclosure: look at it, do not build it
translate([12, 8, 3]) cube([30, 20, 2]);   // the PCB tray being designed
```

`#` is the debug modifier. A subtree marked with `#` **is rendered as usual**, and in the preview it is additionally drawn in translucent pink. It answers "where is this thing". The cylinder you subtract inside a `difference()` is invisible by nature; put a `#` in front of it and it shows up in pink, and you can see at once whether it sits where you meant. In the render and in exports `#` does nothing.

The other two modifiers, `!` and `*`, are less common: `!` renders only that subtree and nothing else, `*` disables the subtree entirely. Both are dealt with during evaluation and have nothing to do with colours.

## How our browser preview handles all this

The Forgent3D [online viewer](/en/openscad-viewer) runs the real OpenSCAD, so every point above carries over unchanged: yellow faces, green faces, the outer `color()` wins, `%` in translucent grey, `#` in translucent pink, `$preview` set to true. The one difference is that the preview geometry comes from Manifold's real booleans rather than OpenCSG's image compositing, so coincident faces do not flicker the way they do in F5. Colours exist only in the preview; the exported STEP carries none, just as the desktop's STL does not.
