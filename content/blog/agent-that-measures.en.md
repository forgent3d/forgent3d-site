---
title: A CAD agent that measures its own work
description: A language model cannot see in 3D; it only knows the code ran. We give it feedback it can read, a dimension report, orthographic views, throwaway probes, a knob test. What each one answers.
date: 2026-08-12
---

A language model writing CAD code has one fundamental handicap: it cannot see the result. If the code ran, it tends to assume the part is right. A hole that belongs at x = 40 and got written at 35 builds fine, reports no error, and looks plausible on screen.

So we put one sentence in the agent's instructions about what "build succeeded" means: **a clean build means it compiles, not that it is right.** The rest is giving it feedback it can read, so that it notices 35 is not 40 by itself.

## The build report: a fingerprint of the solid

After every edit the agent has to rebuild, and what comes back is not the word "success" but a report:

- bounding box and volume;
- every cylindrical face, its radius, **and where its axis runs**;
- every planar face, **at which coordinate it sits**;
- whether the part came apart into several solids;
- diagnostics.

The report is a fingerprint, not a verdict. The agent has to read it against the request. A Ø13 through-hole was asked for at x = 40; the report says `Ø13 @ x 35`; wrong place. A 4 mm step was asked for; the planar-face line should contain two coordinates 4 apart; it does not, so the step was never cut. An extra line saying "disjoint solids" means a fillet or a cut severed a boss.

Every diagnostic is taken seriously. `fillet-capped` says a fillet helper delivered less than you asked for, because the radius does not fit in that corner; the fix is to reshape the neighbourhood, not to accept the capped number. `body-interference` means two bodies share volume; a real defect, not noise, fixed by changing the gap or the placement, never by raising a tolerance. Touching is fine and does not appear.

## Snapshots: look before you measure

Once the report is clean, the next step is to look. `snapshot` renders a 2 × 2 sheet: top, isometric, front, right. The three orthographic views share one scale and one centre, so a feature can be matched across them.

A shaded render only draws visible outlines, so you never conclude from one that a hole is missing. For holding a part against an engineering drawing there is a line-art x-ray mode: edges hidden behind material are drawn dashed, the way a drawing does it, so a cavity, a wall thickness, a bore that stops short all show up, one projection at a time.

## Probes: write a snippet for what the report cannot answer

Some questions the report cannot answer: whether a seam really closed, how thick a wall is, whether a fillet reached the edge it was meant for. The agent can write a short snippet that runs appended to the model, with every top-level name in scope plus a `measure` library.

```python
def test_bore_position():
    bores = measure.cylinders(model, radius=6.5)
    assert len(bores) == 1
    assert abs(bores[0].at("X") - 40) < 0.01

def test_wall():
    walls = measure.walls(model)
    assert min(w.thickness for w in walls) >= 1.6
```

Each `test_*` runs in isolation, so one wrong API guess fails that check and the rest still run. The assertions are against the built geometry; asserting a constant against itself proves nothing.

One rule deserves its own line: **measure with `measure`, never with hand-filtered `.faces()`.** One condition too loose and an unrelated face averages into the number; the result is wrong but plausible, which is worse than an error.

Another: once the same step has failed twice, do not rebuild the whole model a third time. Isolate that step, print what it actually produces, edge count, area, volume, validity. One isolated probe pins the failing step; another blind rebuild does not.

## Knobs: push every slider to both ends

Constants marked `#@` in the model become sliders and switches on the shared page. That is a promise to whoever opens the link: this slider works from here to there. `knobs` moves each one alone to its extremes and builds, and reports OK, INERT (it moved but the geometry did not, usually a number that never reaches the geometry), WARNS or BROKEN. Run it before handing a model over.

## What this solves and what it does not

With all of this, simple parts often come out right the first time: a box, a bracket, a spacer, a plate with holes; the agent measures the misplacement itself and fixes it. Complex parts still take several rounds, especially assemblies that need spatial reasoning. And "it can measure" is not the same as "it measures every time"; getting it into the habit took as much work as building the tools.

How we know whether the rounds are getting better is another question, and the next article. That one is not pretty.
