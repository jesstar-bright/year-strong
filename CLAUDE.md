# Year Strong

Personal strength-training PWA. A single-file app that installs to the iPhone
home screen.

- **Live:** https://jesstar-bright.github.io/year-strong/ — **repo is PUBLIC**
- **Deploy:** GitHub Pages from `main`/root. **A push to `main` IS the deploy.**
  There is no staging.

## The whole app is one file

`index.html` holds styles, markup, and JS together. **Navigate by anchor, not by
line number** — the file is edited often and line numbers go stale immediately:

| To find | grep for |
|---|---|
| A specific exercise | `data-ex-id="goblet-squat"` |
| A workout day | `DAY C · WEDNESDAY` |
| The gym card logic | `function gymMode` |
| The ledger design tokens | `LEDGER · the Today card` |
| The bottom tab bar | `LEDGER · footer register` |
| Nav / destination routing | `function ledgerNav` |
| The set table (signature UI) | `lg-table` |

## Structure

**Four destinations**, driven by the fixed bottom tab bar (`.lg-tabbar`), which
sets `document.body.dataset.dest`:

- **Today** — `#todayCard`, the gym screen. The only view used mid-workout.
- **Food** — nutrition and recipes
- **Notes** — reference cards, rules, logged sets, Sheets setup

(Training Phases 1–4 exist in the markup but are hidden via `.lg-archive`
and unreachable. The auto-adjust logic they were hidden for was never built —
see `docs/superpowers/plans/2026-08-30-design-decisions.md`.)

Panels carry `data-dest` and optionally `data-sub`; `ledgerNav` toggles
`.active` and remembers scroll position per destination.

**Seven training days**, Mon–Sun, all at 6am. A–E are lifting; **F (Saturday)
and G (Sunday) are recovery/yoga** and carry `data-mode="recovery"`, which
suppresses progressive-overload advice and the rest timer.

## The design system

A full brand system lives in `design-system/` (added 2026-08-30). Read
`design-system/readme.md` before any UI or asset work — it is the index and
carries the voice rules. There is also a `year-strong-design` skill that points
at it.

- `tokens/*.css` — colour, type, spacing, motion. `styles.css` imports all of them.
- `components/components.css` — every `.ys-*` class, works on **plain markup**.
- `ui_kits/yearstrong/` — reference renders of every screen.
- `guidelines/*.card.html` — the reasoning behind each token.

**Ignore the `.jsx` files.** They are a future-React reference and export to a
browser global; this app is one static HTML file with no build step.

**This system supersedes "The Ledger" below — the migration has not happened
yet.** Until it does, the repo carries two design languages: `index.html` is
still Ledger (Zilla Slab, brick red), while `design-system/` is the new brand
(warm paper, Gluten, pink). Do not mix them in one screen.

## The design language: "The Ledger" — RETIRED 2026-08-30

**No longer live.** Migrated to the design system above. Kept here only so an
old screenshot or commit still makes sense. The `lg-` class prefix survives
(the markup was not touched) but the tokens behind it now resolve to the new
brand: `--lg-live` is pink, `--lg-done` is sage, `--lg-paper` is warm paper.


A hand-kept training ledger read like a game HUD. Deliberately NOT the
cream + serif + terracotta look, which is a documented AI-design default.

- Type: **Zilla Slab** display · **IBM Plex Mono** all numbers/labels ·
  **IBM Plex Sans** body. `font-variant-numeric: tabular-nums` throughout.
- Ruled rows and tables, **not cards**. No shadows, essentially no radius.
- One signal red (`--lg-live #B4232A`) for the live row only.
- **Every ledger class is prefixed `lg-`.** This is not optional — an
  unprefixed `.day` once silently inherited a white card background from the
  field guide's global `.day` rule.

## Non-negotiables

1. **Bump `CACHE_VERSION` in `service-worker.js` whenever `index.html` changes.**
   The service worker is cache-first — skip the bump and installed phones keep
   serving the OLD version, so the change looks like it did nothing. A
   PostToolUse hook (`~/.claude/hooks/year-strong-cache-guard.sh`) blocks on
   this, but understand *why* rather than just satisfying the hook.
2. **Never change the localStorage key `year-strong-log-v3`.** Existing logs are
   keyed to it and would orphan. Sessions are *derived* by grouping entries on
   local calendar day — no format change was ever needed.
3. **The two `slice(-400)` calls must match.** One is in `logExercise`, one in
   `mergeData`. If they drift, a Sheets sync silently re-truncates history.
4. Entries store `toISOString()` (UTC). Always convert back with `new Date(e.date)`
   before taking a calendar day, or evening workouts file under tomorrow.
5. After deploying, force-close and reopen the app on the phone.

## Audit before shipping UI

Run the `mobile-ui-audit` skill. It measures touch targets, contrast, iOS zoom
traps and safe-area handling at a real phone width. Current state: **0 contrast
failures and 0 sub-44px touch targets across all three tabs, in BOTH light and
dark.** Dark has no in-app toggle — switch macOS/iOS appearance and re-run.

**A token being in the design system does not make it safe as text.** The
migration introduced 15 contrast failures per tab by using `--ink-3`,
`--pink` and `--state-warn` as small text. Each now has a text-safe companion
(`--ink-3-text`, `--lg-live-ink`, `--state-warn-ink`). Before using any token
as text under 18px, measure it — see `baseline/audit-after.md`.

## Sheets sync

`year-strong-sheets.gs` is deployed as a Google Apps Script Web App under
jessicahtalbert@gmail.com. The app POSTs each log `{date,exercise,weight,reps}`
to its `/exec` URL, entered per-device in the Log tab's "Connect" field. Backend
is deployed and working — don't re-deploy it to fix a frontend problem.

## Because the repo is public

No secrets and no third-party real names in committed content.

**Health data: Jessica decided on 2026-08-29 to publish it knowingly.** She was
shown exactly what would become world-readable — PCOS, insulin resistance,
ferritin and iron labs, tirzepatide, menstrual cycle, a medication question,
start and goal weight — and chose to push rather than depersonalise or go
private. Do not quietly strip it back out, and do not re-ask. If she ever wants
it gone, note that deleting it in a new commit is NOT enough: git history,
forks and caches keep it, so it needs history rewriting or a private repo.

Still off-limits: API keys, tokens, credentials, her home address, and other
people's names.
