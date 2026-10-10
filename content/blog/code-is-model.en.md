---
title: Code is the model: why we have the AI write CAD code instead of generating a mesh
description: There are two ways to do AI CAD, a mesh from a sentence or parametric code from a language model. We took the second, and this is why, and what it costs.
date: 2026-07-22
---

The first decision in building Forgent3D was not which model to use. It was what the AI should produce.

Two roads. One is mesh generation: you say "a mug with a handle", and seconds later there is a pile of triangles that looks about right. The other is to have a language model write CAD code: a piece of Python that describes a cylinder, cuts a hole, rounds an edge; the geometry only exists once the code has run.

We took the second road. Not because it is more elegant, but because the first one produces something that is useless for what we wanted to do.

## A mesh's problem is not precision, it is that it does not know what it is

A hole in a mesh is not a hole. It is a ring of thin triangles arranged in a circle. You cannot ask it for its diameter; it does not know. You want to change that hole from 6 mm to 6.4 mm so an M6 screw passes through, and there is no "change" operation, only "generate again", and what comes back is a different mug with the handle somewhere else.

A 3D printer does not care; it only wants triangles. But past the printer, nothing accepts a mesh: not CNC machining, not injection moulding, not opening the part in Fusion or SolidWorks to adjust it, not a quote from a machine shop. Let alone diffing two versions to see what changed.

## The code is the single source of truth

So we made one rule: a project has one source of truth, `model.py`. It holds the geometry, the identity of every body, the named features, the default appearance; the assembly relations are in there too. Everything else, the B-rep, the mesh, the thumbnail, the scene the viewer draws, is derived from it and can be deleted and rebuilt at any time.

The consequence is that a model goes into git, can be reviewed, can be diffed, can be opened ten months later to change one number and rebuild. When the AI gets something wrong, you edit its code instead of rolling the dice again.

## Change a number without destroying the formula

One thing we spent real effort on: letting a user change a dimension from the interface without breaking the intent in the code. Code the AI writes often looks like this:

```python
STOCK = 20
CLEAR = 1.5
PLATE_H = STOCK - 2*CLEAR
plate = Body("plate", geometry=extrude(profile, amount=PLATE_H))
```

The user sets the thickness to 15 in the panel. The lazy fix is to replace `PLATE_H` with a literal `15`, but then the formula is gone; it no longer follows `STOCK` and `CLEAR`, and the next time the stock changes the plate stays put. Keeping a separate "UI parameter table" with 15 in it creates a second source of truth: the code says one number, the panel another.

What we do instead is change the value and keep the formula. The expression the interpreter recorded is solved backwards: 15 = STOCK − 2 × 1.5, so `STOCK` becomes 18 and the `PLATE_H` line is not touched. When it cannot be solved, two parameters sharing one number for instance, it fails with a message rather than guessing. Extrude depths, sketch dimensions and a helper's arguments all go through the same path.

## The cost

The cost is plain: a language model writing code makes mistakes, and a geometric mistake is invisible in the code. A hole placed at 35 instead of 40 runs fine and looks plausible.

So the agent cannot just write code. It has to verify its own work: build after every change, measure, look at the render, and compare with what was asked. That is another article. The short version is that this verification is only possible on the "code is the model" road, because what gets measured is real geometry, not a heap of triangles.

The slogan came later: code is the model. The troubles above came first.
