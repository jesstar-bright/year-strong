# Year Strong Design System Migration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the three stacked design languages currently living in `index.html` with the single brand system in `design-system/`, without changing markup, behaviour, or the localStorage contract.

**Architecture:** Do **not** link `design-system/styles.css`. The app's CSS is already ~85% variable-driven, so the brand flips by replacing one token block and aliasing the old variable names onto the new tokens — one cascade stays in charge. Then remove the `!important` rules that actively enforce the *opposite* visual language, clean up 54 hardcoded hex values, and apply the one-pink-per-screen rule by hand.

**Tech Stack:** Single static HTML file. No build step, no framework, no test runner. Google Fonts. Cache-first service worker.

**Spec:** `design-system/readme.md` plus `design-system/tokens/*.css` and `design-system/ui_kits/yearstrong/` as the reference renders.

---

## Global Constraints

- **Do not link `design-system/styles.css` from `index.html`.** It imports `tokens/base.css` and `components/components.css`, which set global element rules that collide with the 811 lines of inline CSS. It would also break offline use: `APP_SHELL` in `service-worker.js` lists no CSS file, so a linked stylesheet is never pre-cached and the app loses its styling at the gym with no signal.
- **Ignore every `.jsx` file** in `design-system/`. They export to a browser global and target React. This app has no build step.
- **Bump `CACHE_VERSION` in `service-worker.js`** (currently `year-strong-v29`) in every task that touches `index.html`. Cache-first means phones serve the old file otherwise. A PostToolUse hook enforces this.
- **Never change the localStorage key `year-strong-log-v3`.**
- **Keep every existing class name.** Markup is not to be edited except where a task says so explicitly. Ledger classes stay `lg-` prefixed.
- **Work on a branch, not `main`.** A push to `main` is an immediate live deploy with no staging.
- **Verification is visual + measured, not unit-tested.** There is no test runner. The gate for every task is: the `mobile-ui-audit` skill reports **0 contrast failures and 0 sub-44px touch targets** (the current documented state), plus a side-by-side against `design-system/ui_kits/yearstrong/`.

---

## What is actually in `index.html` today

Established by inspection on 2026-08-30, not estimated:

| | |
|---|---|
| Total lines | 3738 |
| CSS block | lines 24–835 (811 lines) |
| Markup + JS | lines 836–3738 |
| Destinations | **three** — Today, Food, Notes (`lg-tabbar`, line 2814) |
| Test runner / CI | none |
| Service worker | `CACHE_VERSION = 'year-strong-v29'`, `APP_SHELL` has no CSS entry |

**Three design languages are stacked in the one file:**

1. **Legacy warm-cookbook aliases** (line 27) — "old warm-cookbook names mapped onto the Superpower palette".
2. **The "Superpower palette"** (line 43 onward) — `--accent #B4232A`, `--ink #16181C`, `--line #DDE2DE`. Governs Food, Notes, recipes, workout cards.
3. **The Ledger** (lines 465–835) — `--lg-*`, scoped to `.today`, then *propagated* to the field guide at line 578 through override rules.

The Ledger propagation block at line 585 is the load-bearing obstacle:

```css
.phase-card, .workout, .starting-line, .intro-stat, .phase-stat, .trajectory,
.med-box, .note-box, .recipe-card, .principle, .week, .setup-panel, .log-summary-card {
  box-shadow: none !important; border-radius: 0 !important;
}
```

This enforces flat, square, shadowless. The new system is the exact opposite: `--radius-md:16px`, `--stroke-pen:2.5px`, and hard offset sticker shadows `--shadow-sticker:4px 5px 0 var(--shadow-ink)`. **These rules must be deleted, not overridden** — `!important` on a bare element selector cannot be beaten from a token.

**Name collisions.** `index.html` already defines `--pink` and `--sage` with *different values* from the design system:

| Variable | index.html today | design-system | Collides? |
|---|---|---|---|
| `--pink` | `#EC4899` | `#FF2E93` | **yes** |
| `--sage` | `#1C6B48` | `#2F5D50` | **yes** |
| `--ink` | `#16181C` | `#1A1A18` | yes (near-identical) |
| `--ink-2` | `#3D4147` | `#5A564F` | yes |
| `--ink-3` | `#5F646B` | `#8A857C` | yes |
| `--card` | `#FCFCFA` | `#FCFBF9` | yes |
| `--line` | `#DDE2DE` | `#CBC7BE` | yes |
| `--radius-sm` | `2px` | `10px` | **yes** |
| `--radius-md` | `0px` | `16px` | **yes** |

Nine silent redefinitions. This is the concrete reason a linked stylesheet would produce a confusing half-broken page rather than a clean swap.

**Variable usage counts** — why the token-alias approach works:

```
42 var(--ink)     40 var(--lg-ink)   36 var(--ink-3)   34 var(--accent)
31 var(--ink-2)   30 var(--line)     30 var(--lg-pencil)  23 var(--line-2)
19 var(--green)   15 var(--app)      13 var(--lg-rule)  13 var(--lg-live)
```

Roughly 400 variable references against ~29 distinct hardcoded hex values (54 occurrences). Redefine the variables and most of the app reskins itself.

**This is a reversal, not a recolour.** Be honest about the size of it:

| | Ledger (now) | Design system (target) |
|---|---|---|
| Display face | Zilla Slab (slab serif) | **Gluten** (rounded, bouncy; Comic Sans MS fallback) |
| Body | IBM Plex Sans | Nunito |
| Mono | IBM Plex Mono | Space Mono |
| Radius | `0px` | `16px`, pills |
| Shadow | `none` | hard `4px 5px 0` solid-ink sticker offsets |
| Border | hairline rules | `2.5px` pen stroke |
| Signal colour | brick red `#B4232A` | hot pink `#FF2E93` |
| Label tracking | `.06em` | `.18em` |

---

## File Structure

| File | Responsibility | Change |
|---|---|---|
| `index.html` lines 18–23 | Font loading | Modify — swap the Google Fonts href |
| `index.html` lines 24–60 | Token definitions | **Replace** with design-system tokens + alias layer |
| `index.html` line 585 block | Anti-shadow/anti-radius `!important` | **Delete** |
| `index.html` lines 61–835 | Component CSS | Modify in place, class names untouched |
| `index.html` lines 836–3738 | Markup + JS | Untouched except Task 6 (`data-mode` toggle) |
| `service-worker.js` line 6 | Cache version | Bump once per task |
| `CLAUDE.md` | Repo docs | Fix the stale four-tab claim; retire the Ledger section on completion |

---

## Task 1: Visual baseline

No test runner exists, so the baseline *is* the regression suite. Do this before touching anything.

**Files:**
- Create: `docs/superpowers/plans/baseline/` (gitignored)

- [ ] **Step 1: Create the branch**

```bash
cd ~/Projects/year-strong
git checkout -b design-system-migration
```

- [ ] **Step 2: Capture the three tabs at phone width**

Run the `mobile-ui-audit` skill against `index.html` at 390px. Save its full report to `docs/superpowers/plans/baseline/audit-before.md`. Screenshot Today, Food and Notes.

- [ ] **Step 3: Record the numbers**

Expected, per CLAUDE.md: **0 contrast failures, 0 sub-44px touch targets.** If the baseline does not reproduce that, stop and report — the documented state is stale and the plan's gate needs rebasing before any migration work.

- [ ] **Step 4: Commit the baseline**

```bash
git add docs/superpowers/plans/baseline/audit-before.md
git commit -m "docs: capture pre-migration UI audit baseline"
```

---

## Task 2: Fonts

Smallest independently-visible change. Ship it alone so the type shift can be judged on its own before any colour moves.

**Files:**
- Modify: `index.html:23` (fonts link), `index.html:18-19` (preconnect — no change needed)

**Interfaces:**
- Produces: `--font-display`, `--font-body`, `--font-mono` — consumed by every later task.

- [ ] **Step 1: Swap the Google Fonts link**

Replace line 23:

```html
<link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

with the design system's three faces (from `design-system/tokens/fonts.css`):

```html
<link href="https://fonts.googleapis.com/css2?family=Gluten:wght@600;700;800;900&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

- [ ] **Step 2: Add the font role variables**

Into the `:root` block, copied verbatim from `design-system/tokens/typography.css`:

```css
  --font-display:"Gluten","Comic Sans MS",cursive;
  --font-body:"Nunito",-apple-system,system-ui,sans-serif;
  --font-mono:"Space Mono",ui-monospace,monospace;
```

- [ ] **Step 3: Repoint the three families**

There are 36 `font-family:'IBM Plex Mono',monospace;`, 6 `font-family:'Zilla Slab',Georgia,serif;`, and 3 IBM Plex Sans declarations. Replace by exact string:

```bash
cd ~/Projects/year-strong
sed -i '' "s/font-family:'IBM Plex Mono',monospace/font-family:var(--font-mono)/g" index.html
sed -i '' "s/font-family:'Zilla Slab',Georgia,serif/font-family:var(--font-display)/g" index.html
sed -i '' "s/font-family:'IBM Plex Sans',-apple-system,sans-serif/font-family:var(--font-body)/g" index.html
sed -i '' "s/font-family: 'IBM Plex Sans', -apple-system, sans-serif/font-family:var(--font-body)/g" index.html
sed -i '' "s/font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif/font-family:var(--font-body)/g" index.html
```

- [ ] **Step 4: Kill the dead declaration**

`font-family:'Hanken Grotesk',serif;` appears once and Hanken Grotesk is **not loaded** — it has been silently falling back to serif. Replace it with `var(--font-body)`.

- [ ] **Step 5: Verify no Plex/Zilla references survive**

```bash
grep -c "IBM Plex\|Zilla Slab\|Hanken" index.html
```

Expected: `0`. If not, the remaining ones are inside the fonts URL you already replaced, or a `!important` variant at line ~430 — handle it explicitly.

- [ ] **Step 6: Bump the cache and check in the browser**

```bash
sed -i '' "s/year-strong-v29/year-strong-v30/" service-worker.js
```

Open `index.html`. Expected: Gluten on titles, Nunito body, Space Mono on all numbers. **Judgement point — Gluten is a dramatic change from Zilla Slab. Stop and get sign-off here before continuing.**

- [ ] **Step 7: Commit**

```bash
git add index.html service-worker.js
git commit -m "feat(design): swap type to Gluten/Nunito/Space Mono"
```

---

## Task 3: Colour tokens

**Files:**
- Modify: `index.html:24-60` (the `:root` block)

**Interfaces:**
- Consumes: `--font-*` from Task 2.
- Produces: every token in `design-system/tokens/colors.css`, plus a compatibility alias layer so the ~400 existing `var()` references keep resolving.

- [ ] **Step 1: Paste the design-system palette into `:root`**

Copy `design-system/tokens/colors.css` `:root` block **verbatim** — all of it, `--paper` through `--ios-veil`. Do not retype the hex values; copy them, so the file stays diffable against its source.

- [ ] **Step 2: Add the compatibility alias layer**

This is the mechanism that makes the migration small. Old names keep working, new values flow through:

```css
/* ── Compatibility aliases ──────────────────────────────────────────
   The app has ~400 var() references to the pre-migration palette.
   Rather than rewrite every call site, the old names are re-pointed at
   design-system tokens. Delete an alias only when its last call site is
   gone. Source of truth: design-system/tokens/colors.css */
  --app:        var(--paper);
  --bg:         var(--chip);
  --sub:        var(--chip);
  --sub-2:      var(--line-soft);
  --black:      var(--ink);
  --ink-4:      var(--ink-3);
  --ink-3-text: var(--ink-2);        /* -3 fails AA as text; -2 is the text-safe step */
  --line-2:     var(--line);
  --rule:       var(--line-soft);
  --rule-warm:  var(--line);
  --paper-warm: var(--chip);
  --card-warm:  var(--chip);

  /* the signal colour: brick red -> pink. Fill vs text are DIFFERENT tokens. */
  --accent:      var(--pink);         /* fill only */
  --accent-text: var(--pink-ink);     /* 4.9:1 on paper — the bright pink FAILS as text */
  --accent-2:    var(--pink-ink);
  --accent-soft: var(--pink-wash);
  --terra:       var(--pink);
  --terra-dark:  var(--pink-ink);
  --terra-soft:  var(--pink-soft);

  /* the information colour */
  --green:      var(--sage);
  --green-text: var(--sage);
  --green-soft: var(--sage-wash);
  --sage-dark:  var(--sage);

  /* warn */
  --amber:      var(--state-warn);
  --amber-soft: var(--state-warn-wash);
  --ochre:      var(--state-warn);
  --yellow:     var(--state-warn);

  /* shape — the Ledger's zero-radius/no-shadow values are replaced */
  --radius:      var(--radius-md);
  --shadow:      var(--shadow-sticker);
  --shadow-sm:   var(--shadow-sticker-sm);
  --shadow-med:  var(--shadow-sticker);
  --shadow-soft: var(--shadow-sticker-sm);
```

- [ ] **Step 3: Delete the three superseded palettes**

Remove the legacy warm-cookbook alias comment block (line ~27), the Superpower palette definitions, and the now-duplicated `--radius*`/`--shadow*` definitions. **Keep** `--lg-tabbar-h: 54px` — it is a layout metric, not a colour.

- [ ] **Step 4: Re-point the Ledger tokens**

At line 471 the `.today` block defines its own `--lg-*`. Repoint them rather than deleting, so the 40 `var(--lg-ink)` and 30 `var(--lg-pencil)` call sites survive:

```css
.today {
  --lg-paper:var(--paper); --lg-ink:var(--ink); --lg-rule:var(--line);
  --lg-rule-2:var(--line-soft); --lg-pencil:var(--ink-2);
  --lg-live:var(--pink); --lg-done:var(--sage);
```

Note `--lg-pencil` maps to `--ink-2`, not `--ink-3` — `--ink-3 #8A857C` is a muted token that fails AA as body text on paper.

- [ ] **Step 5: Verify no orphaned variables**

Every `var(--x)` must resolve to a defined `--x`:

```bash
cd ~/Projects/year-strong
comm -23 \
  <(grep -o 'var(--[a-z0-9-]*)' index.html | sed 's/var(--\(.*\))/\1/' | sort -u) \
  <(grep -o '\--[a-z0-9-]*:' index.html | sed 's/--\(.*\):/\1/' | sort -u)
```

Expected: **empty output.** Any name printed is a variable that is used but never defined — it will silently render as nothing.

- [ ] **Step 6: Bump cache, check all three tabs**

```bash
sed -i '' "s/year-strong-v30/year-strong-v31/" service-worker.js
```

- [ ] **Step 7: Commit**

```bash
git add index.html service-worker.js
git commit -m "feat(design): replace palette with design-system tokens"
```

---

## Task 4: Remove the anti-shape overrides

**Files:**
- Modify: `index.html:578-592` (the LEDGER propagation block)

- [ ] **Step 1: Delete the `!important` flattening rule**

Remove entirely:

```css
.phase-card, .workout, .starting-line, .intro-stat, .phase-stat, .trajectory,
.med-box, .note-box, .recipe-card, .principle, .week, .setup-panel, .log-summary-card {
  box-shadow: none !important; border-radius: 0 !important;
}
.workout, .phase-card, .recipe-card { border-left:none; border-right:none; }
```

These enforce the Ledger's "ruled, not stacked" rule, which is the opposite of the new system's card language. `!important` on a bare element selector cannot be overridden from a token, so this must be deleted rather than re-declared.

- [ ] **Step 2: Give those same elements the new card treatment**

```css
/* Cards in the new system are outlined and offset, not flat and ruled. */
.phase-card, .workout, .recipe-card, .med-box, .note-box,
.principle, .week, .setup-panel, .log-summary-card {
  background: var(--surface-card);
  border: var(--stroke-pen) solid var(--border-strong);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sticker-sm);
}
```

- [ ] **Step 3: Copy the shape tokens in**

`--stroke-pen`, `--stroke-hair`, `--stroke-rule`, `--radius-*`, `--shadow-sticker*`, `--shadow-ink`, `--press-shift` from `design-system/tokens/effects.css`, verbatim, into `:root`.

- [ ] **Step 4: Check the tab bar did not gain a shadow**

`.lg-tabbar` is fixed to the bottom and sits inside the iOS safe area. A sticker shadow on it will look wrong and may overlap the home indicator. Verify at 390px with a safe-area inset.

- [ ] **Step 5: Bump cache, verify, commit**

```bash
sed -i '' "s/year-strong-v31/year-strong-v32/" service-worker.js
git add index.html service-worker.js
git commit -m "feat(design): adopt sticker card shape, drop Ledger flattening"
```

---

## Task 5: Hardcoded hex values

54 occurrences of 29 distinct hex values bypass the token layer entirely and will still render in the old palette.

**Files:**
- Modify: `index.html` throughout the CSS block

- [ ] **Step 1: List them with context**

```bash
cd ~/Projects/year-strong
grep -n -o '.\{0,60\}#[0-9A-Fa-f]\{6\}.\{0,20\}' index.html
```

- [ ] **Step 2: Replace by mapping, one at a time**

| Hex | Occurrences | Replace with |
|---|---|---|
| `#FFF` / `#FFFFFF` | 11 | `var(--card)` — the brand never uses pure white |
| `#F7F7F4` | 4 | `var(--paper)` |
| `#C9D2CE` | 4 | `var(--line)` |
| `#B4232A` | 4 | `var(--pink)` if fill, `var(--pink-ink)` if text |
| `#1C6B48` | 4 | `var(--sage)` |
| `#16181C` | 4 | `var(--ink)` |
| `#EDEDE9` | 3 | `var(--chip)` |
| `#E3E6E2` | 3 | `var(--line-soft)` |
| `#8E1A20` | 3 | `var(--pink-ink)` |
| `#5F646B` | 3 | `var(--ink-2)` |
| `#000` | 3 | `var(--ink)` — the brand never uses pure black |

Remaining singletons (`#FCFCFA`, `#FBF1E2`, `#F1ECEA`, `#EFEDE3`, `#ECEAE6`, `#EC4899`, `#E7EEE9`, `#E2B43A`, `#E0B5B2`, `#C98A2E`, `#9B9A9F`, `#9AA0A6`, `#8A6516`, `#6B5A17`, `#5A4C13`, `#4E535A`, `#DDE2DE`, `#145236`) — decide each from its surrounding rule. **`#EC4899` is the old pink; it must become `var(--pink)` (`#FF2E93`).**

- [ ] **Step 3: Verify only the fonts URL retains a literal**

```bash
grep -c '#[0-9A-Fa-f]\{6\}' index.html
```

Expected: `0` inside the `<style>` block. Any survivor is a deliberate exception and needs a comment saying why.

- [ ] **Step 4: Bump cache, verify, commit**

```bash
sed -i '' "s/year-strong-v32/year-strong-v33/" service-worker.js
git add index.html service-worker.js
git commit -m "refactor(design): route hardcoded hex through tokens"
```

---

## Task 6: The one-pink rule

> **SUPERSEDED IN PART — read `2026-08-30-design-decisions.md` first.**
> The readme's "pink appears once per screen" is wrong; Jessica's own design
> uses pink six times on Today. The actual rule is **pink marks what is current
> or actionable, and never decorates.** Every allocation below is now decided —
> see Decision 1. Do not re-derive it.

`var(--accent)` currently has 34 call sites, so straight aliasing puts pink everywhere and destroys the signal.

**Files:**
- Modify: `index.html` CSS block

- [ ] **Step 1: Enumerate every pink call site per destination**

```bash
cd ~/Projects/year-strong
grep -n 'var(--accent)\|var(--pink)\|var(--lg-live)' index.html
```

- [ ] **Step 2: Pick the one pink element per screen**

Against `design-system/ui_kits/yearstrong/`:

- **Today** — the live set row and `LOG SET`. One of the two, not both.
- **Food** — the primary action only.
- **Notes** — reference material is sage; Notes may legitimately have **no** pink.

- [ ] **Step 3: Demote the rest**

Everything that loses its pink becomes `var(--ink)` for emphasis or `var(--sage)` where it marks something completed. Reference cards and completed checkboxes are sage by definition.

- [ ] **Step 4: Check text-weight pink**

```bash
grep -n 'color: *var(--pink)\|color:var(--pink)' index.html
```

Expected: **empty.** `--pink #FF2E93` is fill-only and fails contrast as text. Any text pink must be `var(--pink-ink)` `#C4156A` (4.9:1 on paper).

- [ ] **Step 5: Bump cache, verify, commit**

```bash
sed -i '' "s/year-strong-v33/year-strong-v34/" service-worker.js
git add index.html service-worker.js
git commit -m "feat(design): enforce one-pink-per-screen"
```

---

## Task 7: Dark mode

The design system ships a full dark palette under `[data-mode="dark"]`. The app has no toggle today.

**Files:**
- Modify: `index.html` `:root` area, `index.html:2831` (`ledgerNav` IIFE region) for the toggle

- [ ] **Step 1: Copy the dark block verbatim**

The entire `[data-mode="dark"]{...}` block from `design-system/tokens/colors.css`, plus the dark override in `effects.css`:

```css
[data-mode="dark"]{
  --shadow-ink:rgba(245,244,240,.9);
  --shadow-sheet:0 -8px 32px -8px rgba(0,0,0,.7);
}
```

Note the design system's own reasoning: in dark, the CTA becomes `--pink-soft`, because "hot pink at 6am is too much" — and 6am is exactly when this app is used.

- [ ] **Step 2: Add the toggle, persisted separately from the log**

```javascript
(function darkMode(){
  // Deliberately NOT stored under year-strong-log-v3 — that key holds logged
  // sets and must never take on unrelated shape.
  const KEY = 'year-strong-mode';
  const saved = localStorage.getItem(KEY);
  const prefers = matchMedia('(prefers-color-scheme: dark)').matches;
  const set = m => {
    document.documentElement.dataset.mode = m;
    localStorage.setItem(KEY, m);
  };
  set(saved || (prefers ? 'dark' : 'light'));
  document.getElementById('modeToggle')?.addEventListener('click', () =>
    set(document.documentElement.dataset.mode === 'dark' ? 'light' : 'dark'));
})();
```

- [ ] **Step 3: Confirm the selector target**

`design-system/tokens/colors.css` scopes dark to `[data-mode="dark"]`. Setting it on `<html>` (`document.documentElement`) makes it match. Do **not** set it on `<body>` — `body` already carries `data-dest` for nav, and `.today` carries `data-mode="recovery"` for rest-day behaviour. **`data-mode` is already in use on training days F and G.** Putting the theme on `body` or on `.today` would collide with recovery mode and silently re-enable progressive-overload advice on yoga days.

- [ ] **Step 4: Add the toggle control to the markup**

A `<button id="modeToggle">` in the header. Minimum 44×44px per the audit gate.

- [ ] **Step 5: Bump cache, verify both modes on all three tabs, commit**

```bash
sed -i '' "s/year-strong-v34/year-strong-v35/" service-worker.js
git add index.html service-worker.js
git commit -m "feat(design): add dark mode toggle"
```

---

## Task 8: Audit, docs, ship

**Files:**
- Modify: `CLAUDE.md`
- Create: `docs/superpowers/plans/baseline/audit-after.md`

- [ ] **Step 1: Run the audit against both modes**

Run `mobile-ui-audit` at 390px on Today, Food and Notes, in light **and** dark.

Gate: **0 contrast failures, 0 sub-44px touch targets** — matching the Task 1 baseline. Dark mode doubles the contrast surface and is the likely source of any regression.

- [ ] **Step 2: Diff against the baseline**

```bash
diff docs/superpowers/plans/baseline/audit-before.md \
     docs/superpowers/plans/baseline/audit-after.md
```

Any new failure blocks the merge. Report the actual output — do not summarise it as passing.

- [ ] **Step 3: Update `CLAUDE.md`**

- Replace the "The Ledger" section with the design system as the live language.
- **Fix the stale destinations list.** It currently claims four tabs (Today, Plan, Food, Log). The app has **three**: Today, Food, Notes (`index.html:2814`).
- Update the grep table: `LEDGER · the Today card` and `lg-table` anchors still resolve, but the palette anchors will have moved.
- Note that `data-mode` now carries both the theme (on `<html>`) and recovery mode (on `.today`).

- [ ] **Step 4: Merge and deploy**

```bash
cd ~/Projects/year-strong
git checkout main
git merge design-system-migration
git push origin main
```

- [ ] **Step 5: Force-close and reopen the app on the phone**

Cache-first service worker. Without this the phone keeps serving v29 and the whole migration looks like it did nothing.

---

## Self-Review

**Spec coverage.** `design-system/readme.md` sections map as: colour → Task 3; type → Task 2; the one rule → Task 6; shape/effects → Task 4; dark → Task 7. **Not covered:** the voice and microcopy rules (ALL CAPS button verbs, one italic aside per screen, mono numbers). That is a copy pass, not a CSS migration — it belongs in a separate plan, since it edits user-facing content rather than styling and needs Jessica's judgement per string.

**Known gaps, stated rather than hidden:**
- The `.ys-*` classes in `components/components.css` are **not** used by this plan. The app keeps its own class names; the design system's component CSS serves as reference for what each element should look like. Adopting `.ys-*` wholesale would require rewriting the markup and is out of scope.
- The `ui_kits/yearstrong/` renders show screens this app does not have (onboarding, Recipe, Log, Phase, Reference as separate destinations). The app has three tabs. Do not add screens to match the kit.
