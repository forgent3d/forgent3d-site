---
title: We spent 13 hours proving our own evaluation was useless
description: Eight experiment cells to answer "was that prompt better". No answer came back. What did: rerunning one configuration swings it by 16 points, while every difference we wanted to measure is under 10.
date: 2026-08-28
---

Late in August there was a concrete question: one day's agent evaluation report looked better than any recent one. Was that version of the prompt better? We set up a controlled comparison to find out.

It ran eight cells, about 13 hours. The question was not answered. This is why, and what we learned instead, which turned out to be more useful than the answer.

## The ruler

The evaluation uses drawing cases: hand the agent an engineering drawing, let it build the part, then check the geometry it built against dimensions transcribed by hand from the drawing. The checking step is offline, no language model, no sandbox, no network; the code stored in the report is rebuilt on a local kernel and checked line by line.

We picked four cases, 43 dimension checks in all: a stepped shaft with 20, an elliptical cam with 7, a triple-boss rocker with 8, a carry handle with 8. Cases that scored 100% three times in a row were excluded (saturated, nothing to measure), and so were cases where the baseline side itself had errored. The prompt, reference image and configuration of these four cases were byte-for-byte identical between the two code versions; we checked.

## Eight cells

Two code versions and four model channels, laid out as eight cells. Each cell runs once, ten cases per run.

The one line that matters first: **two of the cells were exactly the same configuration**, same version, same prompt, same channel, same cases, same ruler, just run twice. One scored 62.8%, the other 79.1%. A difference of 16.3 points; the number of wrong checks fell from 16 to 8, half.

Then the things we had meant to compare:

- old prompt versus new: 9.7 points apart.
- channel A versus channel B: 9.3 points.
- channel B versus channel C: 9.3 points.
- old code versus new: 7.9 points.

Not one of those exceeds 16.3. So this experiment could say nothing about the prompt, the code or the channel. The report that looked better had most likely just landed on the good side of the swing.

## Pass rates are worse than dimensions

We started with pass/fail and only later switched to per-dimension checks. The reason: the "better looking" report had been an interrupted run, five of ten cases unfinished, 8/10 once the missing ones were rerun. Checking out the whole old tree and rerunning the same ten cases gave 10/10. Neither of the original two failures reproduced; one of them had failed because of the interruption itself.

The noise at the pass/fail level is such that one interruption rewrites the conclusion.

## The ruler is blind sometimes

Per-dimension checks are not clean either. The scoring script has a comment in capitals that says, in effect: a cylinder check only works if the face is actually a cylinder. Four things turn a diameter on the drawing into something the ruler cannot read: a draft angle turns the cylinder into a cone, a loft or sweep turns it into a spline surface, a fillet on a round edge turns it into a torus, and the reader can simply throw. All four **look exactly like "the feature was never built"** in the data.

So every "wrong" has to be sorted into three bins before it means anything: the model was wrong, the ruler was blind, the environment broke. Without the sorting, the count of wrong checks is a mix of three different things and cannot be compared.

## The one lead

One single-channel cell scored 93.0%, the same as the good-looking report, with only 3 wrong checks and 19/20 on the stepped shaft, the best of the whole set. So the good report needed no "three channels rotating" explanation; one channel was enough. But that cell also ran once, and is statistically indistinguishable from the channel that swung 16 points. Confirming it means repeating it three to five times.

## How to run it next time

- Measure the variance before talking about effects. Run the same configuration at least three times, learn how much it swings by itself, and only then decide which differences count.
- Cells with n = 1 cannot be compared. This is the one conclusion of the whole experiment that a repeated sample directly verified.
- Sort the errors. Model wrong, ruler blind, environment broken; count them separately.
- Do not change the environment while the evaluation runs. In those thirteen hours we dug up three environment traps and one defect in the channel protocol on the side, each of them enough to contaminate a result.

This was written down not to keep a conclusion, but to keep "do not run it like this again".
