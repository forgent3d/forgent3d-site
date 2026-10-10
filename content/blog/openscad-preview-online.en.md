---
title: Preview OpenSCAD code online: no install, paste it and look
description: Seeing what a piece of OpenSCAD code looks like does not require installing OpenSCAD. Paste it into a viewer in the browser, it renders when you pause, colours match the desktop, and the code can go into a link for someone else.
date: 2026-10-10
---

The traditional way to see what a piece of OpenSCAD code draws is: download the installer, install it, new file, paste, press F5. On your own machine that is a few minutes. On someone else's machine, on a phone, or when you only want a look at the twenty lines ChatGPT just wrote, those minutes are in the way.

[Forgent3D's OpenSCAD viewer](/en/openscad-viewer) exists for that one look.

## How it works

Open the page and paste the code into the editor at the bottom. There is nothing to click. Half a second after you stop typing the model appears above. Change a number and it redraws half a second later.

If you have a file, drop the .scad in. If you have a whole project, drop the folder in; `include` and `use` find their files in the real directory layout, and the common libraries, MCAD, Write.scad, BOSL2, are built in. Parameters declared with Customizer comments at the top of the file show up in the panel on the left; drag a slider and the source follows.

## What you see is what the desktop shows

The code is run by the real OpenSCAD, not something that imitates its syntax, so anything that runs on the desktop is read the same way here. The colours follow the desktop's conventions too: a part with `color()` shows its own colour, faces cut by `difference()` are green, anything marked `%` is drawn in translucent grey and anything marked `#` gets a translucent pink overlay.

The one difference is that it is closer to F6 than to F5: the geometry is actually computed, so two objects sharing a face do not flicker.

## Put the code in a link

Happy with the preview? Click "Copy link". The link carries the code you have open, and whoever opens it sees the rendered model without pasting anything.

It works the other way too. When you ask ChatGPT, Gemini or Claude for a piece of OpenSCAD, ask it for a Forgent3D preview link as well, of the form `https://app.forgent3d.com/scad#code=<code>`. Open it and the model is there. The link format is written out on the [viewer page](/en/openscad-viewer); copy it into the chat and the assistant will follow it.

## The code never leaves your browser

The preview runs in your browser and the .scad files are not uploaded; what comes after `#` in a link is not sent to the server either.

## On the side

If you want a file once the preview looks right, the same page exports STEP, real B-rep that Fusion, SolidWorks and FreeCAD open. That goes beyond a look; the details are on the [OpenSCAD to STEP](/en/openscad-to-step) page.

No code at hand? The viewer page has three ready examples: a flange, a pair of gears, a box with a lid. Open one and drag the parameters.
