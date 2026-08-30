# Post-migration UI audit

Measured 2026-08-30 in Chrome against `localhost:8765`, same probe and same
width pin as the baseline (`body{max-width:393px}` — honest here because the
layout is a fixed centred column).

## Result: the gate holds

| | Today | Food | Notes |
|---|---|---|---|
| **Light** — small targets / contrast / iOS-zoom / overflow | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 |
| **Dark** — small targets / contrast / iOS-zoom / overflow | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 |

No horizontal scroll on any tab in either mode. Matches the baseline, which
was light-only — the migration doubled the audited surface and still holds.

## Functional smoke test

- `localStorage` key is still `year-strong-log-v3` — unchanged, no new keys
- Logging a set grows the store (712 → 769 bytes), shape intact:
  `{ "<exercise-id>": [ {date, weight, reps} ] }`
- No JavaScript errors
- Tab bar still sets `document.body.dataset.dest`

## Contrast regressions found and fixed during the migration

The naive token swap introduced **15 contrast failures per tab in light and
15 in dark**. All were the same class of error: taking a token the design
system provides and using it somewhere it was never safe for.

| Token | Measured | Fix |
|---|---|---|
| `--ink-3 #8A857C` as 10–13px text | 3.13:1 on chip | Added `--ink-3-text #6E6A63` (4.59 chip / 4.94 paper / 5.20 card), still a visible step lighter than `--ink-2` so the ink hierarchy survives |
| `--pink #FF2E93` as live-row text | 3.18:1 | Added `--lg-live-ink: var(--pink-ink)`. Fills, borders and shadows keep bright `--lg-live`; only text changed |
| `--state-warn #B4741A` on its own wash | 3.38:1 | Added `--state-warn-ink #945F15` (4.72 on wash). Dark needed none — `#E0AE55` is already 7.43:1 |
| `--ink-3-text` in dark, on the sunken tier | 3.98:1 | `#8B867D` → `#989288`. The Tier-2 sunken cards sit on `--chip #2A2A27`, the *lightest* dark surface — the value had been derived against the card |
| `--sage` as small text in dark | 3.58–3.61:1 | Use `--green-text`, which resolves to `--sage` in light and `--sage-soft` in dark — the swap the design system's own `--text-ref` already specifies |

**The pattern worth remembering:** the design system says what a token *is*,
not where it is *safe*. `--text-muted: var(--ink-3)` is in the system as
shipped, and it cannot carry small text on any surface at AA. Three of the
five fixes above are text-safe companions to a fill token.

## Known, accepted

- 10 elements with text under 12px (10.5–11.5px mono labels). Unchanged from
  baseline and intentional — the system's own `--text-2xs` is 11px.
- `.recipe-tag.meat` still uses `--pink-wash` / `--pink-ink` as a categorical
  chip. It passes contrast, but it is decorative rather than actionable, so it
  sits slightly outside Decision 1.0. Left as-is; flag for eyeballing.


## UX comparison against the design mockup (2026-08-30, second pass)

Compared the built Today screen against Jessica's mockup screenshot. The token
migration was correct but had left the **Ledger's own component shapes** in
place — the migration tiers in Task 4 covered the field-guide classes
(`.phase-card`, `.recipe-card`, `.principle`) and never touched the `lg-`
components.

| Element | Was | Now |
|---|---|---|
| `.lg-log` (LOG SET) — the CTA | ink `#1A1A18`, square, no border, no shadow, Space Mono 13px | `--pink` pill, `--stroke-pen` border, `--shadow-sticker`, Gluten 19px, presses in on `:active` |
| `.lg-tab.is-on` indicator | ink top bar | `--pink` top bar |
| `.lg-obj` (`4 × 1 round`) | ink | `--pink-ink` (5.26:1 on paper) |

Contrast on the new pairings: ink on `--pink` is **5.03:1** — large text at
19px bold needs 3:1. Dark CTA is `--pink-soft` at **11.40:1**, per the design
system's own note that "hot pink at 6am is too much".

Re-audited after the change: **0/0/0/0 on all three tabs in both modes.**

## Still divergent from the mockup — structural, not styling

Two things in the mockup do not exist in the app, and neither is a CSS fix:

1. **A fourth tab, `LOG`.** The app has three; `Log` was folded into Notes by
   commit `4aae4f5` ("Collapse to three tabs — nothing scrolls past 3
   screens"). Restoring it reverses that decision.
2. **A "See the whole phase ›" link.** This links *into* phase content, which
   contradicts the request to make phases non-user-facing. See the phases note
   in `2026-08-30-design-decisions.md`.

Both need a decision, not an implementation.
