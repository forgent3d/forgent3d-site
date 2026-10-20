"use client";

import { BeltCalculator } from "./belt";
import { BoltCircleCalculator } from "./bolt-circle";
import { HoleCalculator } from "./holes";

const WIDGETS = { "bolt-circle": BoltCircleCalculator, holes: HoleCalculator, belt: BeltCalculator };

/** The interactive part of a calculator page, picked by the registry's `widget` (app/lib/calculators.js). */
export function CalculatorWidget({ widget, locale, ui }) {
  const Widget = WIDGETS[widget];
  return Widget ? <Widget locale={locale} ui={ui} /> : null;
}
