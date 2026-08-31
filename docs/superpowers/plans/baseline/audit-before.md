# Pre-migration UI audit — baseline

Captured 2026-08-30 against `git show main:index.html`, served over HTTP at
`localhost:8765`, measured in Chrome with the `mobile-ui-audit` probe.

**Width caveat, stated honestly:** Chrome clamps its window at ~736px, so the
measurement used the skill's width pin (`body{max-width:393px !important}`).
That is honest for this layout specifically — Year Strong is a fixed centred
column (`body{max-width:430px;margin:0 auto}`), so viewport width controls
nothing except that column. 393px is an iPhone 15 Pro, narrower than the app's
own 430px cap.

| Tab | Interactive | Scroll px | Small targets | Low contrast | iOS zoom inputs | Overflow |
|---|---|---|---|---|---|---|
| Today | 16 | 1150 | **0** | **0** | 0 | 0 |
| Food | 16 | 1142 | **0** | **0** | 0 | 0 |
| Notes | 18 | 1910 | **0** | **0** | 0 | 0 |

Matches the state documented in `CLAUDE.md`. **The gate for the migration is
that these all stay at 0.**

Other measurements:
- `viewport-fit=cover` set; CSS uses `env(safe-area-inset-*)` — safe area handled
- Pinch zoom is NOT blocked (good — `user-scalable=no` is an accessibility failure)
- No horizontal scroll on any tab
- 10 elements with text under 12px (10.5–11.5px), all mono labels: `#todayDay`,
  `#todayCount`, `th`, `.lg-menu-k`, `.lg-slot-when`, `.recipe-tag`. Pre-existing
  and intentional — the design system's own `--text-2xs` is 11px. Not a
  regression target, but not to be made *worse*.
