# Design Migration — Decisions Log

Jessica's calls on what the design system changes, recorded as they're made.
Reviewed against rendered comparisons, not descriptions. Nothing here is
implemented yet — this is the record that governs the implementation plan
(`2026-08-30-design-system-migration.md`).

---

## Decision 1 — Where the pink goes

**Reviewed:** `pink-allocation.html`, `principle-numbers.html` (scratch, not in repo).
Both checked in light and dark mode.

### 1.0 The rule

**Pink marks what is current or actionable. It never decorates.**

This supersedes the readme's "pink appears once per screen," which her own
`explorations/today-final.html` contradicts — that design uses pink six times
on Today (progress segments, active day, live set row, CTA, active tab, mode
toggle). Those are not six competing accents; they are one rule applied
consistently across control groups, which is why the screen still reads calm.

**Action:** amend `design-system/readme.md`. As written, "once per screen"
misleads anyone reading the system — it already caused one wrong
recommendation in this session.

### 1.1 Today screen — **Variant A, as drawn**

Pink stays on all six: progress segments, active day underline, live set row,
`LOG SET`, active tab, mode toggle. No collapsing to a single element.

### 1.2 Decorative marks — **ink**

`.quote::before` · `.section-label::before` · `.workout-why::before` ·
`.recipe-ingredients li::before` · `.exercise.priority .ex-name::before`

Decoration is never pink, per 1.0.

### 1.3 Mono metadata — **ink**

`.ex-prescription` · `.meal-time` · `.workout-day` · `.phase-card .month-range`

These are Space Mono labels; the font carries them, not colour.

### 1.4 Principle numerals — **sage**

`.principle-num` — 48 instances, 34 of them on Notes.

Chosen over ink and pink after seeing all three at real density with measured
contrast. Rationale: Notes is the reference tab and sage is the information
colour, so sage is the system-consistent answer. Pink would have contradicted
1.0 (a numeral in a static list is neither current nor actionable) and had the
least contrast headroom.

Measured against the card, 19px bold (WCAG *large text*, 3:1 threshold):

| | Light `#FCFBF9` | Dark `#1E1E1C` |
|---|---|---|
| Ink | 16.85:1 | 15.17:1 |
| Pink | **3.35:1** | 5.08:1 |
| **Sage (chosen)** | **7.25:1** | **4.15:1** |

All three pass; this was taste, not compliance. Note the ranking inverts
between modes — re-measure if the numeral size ever drops below 18.66px bold,
because the threshold then becomes 4.5:1 and **pink and sage both fail in one
mode each**.

### 1.5 Danger states — **pink**

`.sync-dot.error` · `.log-summary .clear-btn:hover` ·
`.setup-form button#disconnectSheets:hover`

Three CSS rules only (`index.html:276`, `:285`, `:303`), so this is cheap to
revert. Flagged at decision time that pink reads as brand rather than danger,
and that the design system ships no error token at all — `--state-warn #B4741A`
is amber, not red. Jessica saw pink and brick red side by side and chose pink.
**If a pink error dot ever fails to catch the eye at the gym, this is the first
thing to revisit** — the fix is a fourth functional token, not a palette change.

### 1.6 Dead CSS found — **delete**

`h1.title em` has **zero instances** in the markup; only `lg-title` is used.
The rule at the WCAG-pass section is dead and should be removed rather than
migrated. (A comparison card in this session demoed it as if it were live —
it is not.)

---

## Decision 2 — Type

**Reviewed:** `type-stress-test.html`, `recipe-names.html` (scratch, not in repo).
Both checked in light and dark mode, against the app's *longest* real content
rather than the short strings the original mockup used.

### 2.0 The three faces — confirmed as drawn

`--font-display` **Gluten** · `--font-body` **Nunito** · `--font-mono` **Space Mono**

Not re-litigated; these were already chosen in `explorations/today-final.html`.
What was tested was whether they survive the dense screens that mockup never
covered.

### 2.1 Body — **Nunito**, confirmed

Verified across three stacked real paragraphs from the Food tab's
doctor's-notes content, not a single sentence.

### 2.2 Numbers — **Space Mono**, confirmed

Verified on real gym-glance content: `4 × 8 · 95 lb`, `3 × 10/leg`, the
four-up macro grid, `120 g`. This was the choice with a functional stake —
these are read mid-set — and it was made against IBM Plex Mono side by side.

### 2.3 Short titles — **Gluten at full display size**

`.workout-name` (longest: 11 chars, `Single-leg`) · `h2` / `.phase-card h2`
(longest: 27 chars, `Show up five times a week.`) · `.today-title`

### 2.4 Recipe names — **Gluten, sized down to 19px** (`--text-lg`)

`.recipe-name` runs 61–65 characters (`Pan-seared sirloin, cooled-then-crisped
potatoes, garlic broccoli`) and is the **only** long heading in the display set.
Chosen over full-size Gluten and over switching to Nunito bold: keeps the brand
face on every heading while dropping the volume where the text is long.

**This is a rule about place, not length.** CSS cannot branch on string length,
so the exception is scoped to the one selector where long headings occur.

### 2.5 Principle headings — **stay on the body face**

`.principle-body h4`, 48 instances, 16px/700.

These are the app's genuinely long headings (`Pull-up negatives → band-assisted
concentric`). They already render in the body face — but **by accident**, see
2.6. The migration should make this deliberate: Nunito 800, not Gluten.

### 2.6 Second dead selector found — **fix, don't migrate**

Line 592 lists `.principle h3` in the display-face rule, but every principle
uses `<h4>`. The selector has matched nothing since it was written. The
accident produced the right result, so the fix is to correct the selector to
`.principle-body h4` and keep it on the body face deliberately — not to give
it the display face.

Running list of dead CSS found while scoping: `h1.title em` (1.6),
`.principle h3` (2.6).

---

## Decision 3 — Shape, stroke and the sticker shadow

Not yet reviewed.
