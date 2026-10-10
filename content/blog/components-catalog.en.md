---
title: Letting the AI reinvent the heat-set insert boss every time is a bad idea
description: When the agent makes a box, ten times out of ten it needs insert bosses on the base and a catch on the lid, and it derives the numbers from scratch each time. One wrong number is one failed print. So we made the most common 3D-print joints into a library.
date: 2026-10-09
---

Read enough agent session logs and one thing stands out: most of what it makes is not "a part", it is "a part plus a few small structures that let it be assembled". A box needs a lid, and the lid has to snap or catch. A base plate needs insert bosses, a PCB needs standoffs, a case needs a USB cutout and vent slots in its side, two panels need to turn on a pin.

These small structures have two properties. First, their geometry is easy; a heat-set insert boss is a cylinder with a hole. Second, their numbers are hard: whether the hole for an M3 heat-set insert should be 4.0 or 4.2, how thick the boss wall must be so the heat does not split it, how long the cantilever of a snap clip and how tall its barb so it both holds and releases. Those numbers come from printing experience, not from geometric intuition.

A language model derives them from scratch every time. It derives them confidently, and differently each time. One wrong number is one failed print for the user.

## So we made a library

The component library now holds twenty of the most common 3D-printed structures, roughly in groups:

- Fastening: screw holes, heat-set insert bosses, nut traps, a printable bolt and nut.
- Lids: a box with a lip lid, a box with a snap lid.
- Openings: cable slots, port cutouts in standard connector sizes, vent grilles.
- Motion: a pin hinge, a print-in-place hinge, a pin-and-bore pivot, a ball-and-socket joint, a dovetail slide.
- Locating and retaining: peg-and-socket registration, snap clips, snap pins, magnet pockets, a bearing seat, PCB standoffs.

Each component is a piece of code in our dialect plus a description: what problem it solves, what each parameter means, which numbers are print-experience values. When the agent models, it can list the components, read how one is done, and use it in its own part instead of inventing one.

## A component is a method, not a part

We got this wrong at first too. A "part library" sounds natural: hundreds of ready-made boxes, brackets and hooks, and the user picks one and changes the dimensions. But such a library never has the one you need, and the bigger it gets the harder it is to search.

A component is different. A heat-set insert boss is not a part; it is "how to put a heat-set insert boss on any part". It gets composed into the user's part: four on a base plate, two on the inside wall of a case. Its value is that the method is right, the numbers are right, and they are right the same way in every part that uses it.

So the library stays small. Twenty common ones are worth more than two hundred rare ones.

## The numbers are parameters, because printers differ

The numbers in the library are common experience values, not standards. The right hole for the same M3 insert differs by a few tenths of a millimetre between printers, materials and layer heights. So every such number is a parameter, with a default most people can use and a knob for when your printer disagrees. The agent changes it once and every use in the session follows.

A side benefit: the components work on their own. Without the agent, open the component page, drag the parameters, export, print. Someone who only wants a box with a lid does not need to talk to any AI.

## What we expect it to change

Mostly the kind of failure. A box with a lid used to fail at the lid not catching or the boss being too thin, errors the user only finds after printing. With the library those should largely stop, and the failures that remain go back to the part itself: a dimension misread, a shape misunderstood. Those, at least, are visible on screen.

The library will grow, but only with what is genuinely common.
