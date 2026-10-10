---
title: Three months in, we found out the user was not who we thought
description: A retrospective after three months of data: we had been polishing for an engineer who reads drawings, while the maker who types one sentence and three dimensions was waiting elsewhere. Where it broke, and how we are validating next.
date: 2026-09-04
---

In early September we stopped and read the numbers. The conclusion was uncomfortable: the platform's problem was not that it did not work. It was that for three months we had been polishing for a user who never showed up, while the one who did show up was waiting in another direction.

## What the data said

From June to September the visitor count was flat, and almost all of it came through links in WeChat and QQ; search and GitHub brought a handful. Of the people who typed a request, the great majority came for one day. Those who used it for more than a week, once our own accounts are taken out, could be counted on one hand. The people who exported a model were a small group, and the paying ones smaller still.

The build failure rate was far too high, and the top two causes had nothing to do with modelling: stream errors from the upstream model, and the sandbox's 300-second timeout. On the chat page a crowd of people were rage-clicking the input box, the send button and the upload button, all disabled while a run was in progress.

Not numbers you can launch on. Enough for an honest retrospective.

## Who came

We went back through the last three weeks' 17 external sessions and grouped them by the kind of input in the first request.

**One sentence plus dimensions**, 7 sessions: 2 came out right the first time, 4 ended as half-finished parts, 1 went 14 rounds.

**A photo or a drawing**, 4 sessions: 0 came out looking like the thing.

**A vague sentence**, 6 sessions: 5 produced a respectable showpiece, 1 did not.

The group we had spent three months on was the second. We had built zoomable inspection tiles for engineering drawings, an evaluation that checks dimensions against drawings, rules for the agent about reading three-view sheets. Four such users came, and not one of them got a part.

The first group is makers: one sentence, two or three dimensions, no drawing, a concrete need and a pair of calipers. For simple parts about half get it on the first try; the other half take a few more rounds. Not a good number, but a real one.

## One snap-fit connector

There is one case we kept coming back to. A user wanted a snap-fit connector: three sessions, seven rounds, all failed. The same part took a Fusion beginner an hour.

In the retrospective, the agent had not asked a single question in three sessions. The user had sent a hand-drawn top view; the agent read it as a front view and built an 80 mm tall door frame. The agent's own comparison step then approved it from the same viewpoint. And when the same part was written as an eight-number spec, "a slotted plate with an undercut lip, plus a rail tongue", the engine built it on the first try.

The break was not in the engine. It was on the input side: the questions that should have been asked were not.

## What next

Validate first, build second, and change no code while validating, or the measurement is spoiled.

Three days of validation. Day one: ten requests in a maker's voice, one sentence and two or three dimensions each, through the live product, recording how many rounds it takes to get a printable part: a 90 × 60 × 25 drawer divider, a 32 mm knob with a D-shaped shaft hole, a headphone hook for an 18 mm desk edge, a corner bracket for 20 × 20 aluminium extrusion, and so on. The bar: six of ten within three rounds. Days two and three: three to five people who actually print things, half an hour each, making the part they need right now, no prompting, no teaching, only notes. The bar: three of five get something they would print.

Both bars cleared: build. One cleared: reorder the build list around the failed items and the observed sticking points. Neither: the problem is not polish, and the question is whether to continue at all.

The first week of the build list is what every user runs into regardless: interrupting a run, typing the next message while one is running, reconnecting automatically; retries for timeouts and stream errors; asking before building when the input is not enough, a photo with no dimensions, a sketch with no view marked, at most four questions. And instrumentation: without a "got a result" event, none of the later bars can be measured.

By the time this is published the validation has started. How it went is a post for a few weeks from now.
