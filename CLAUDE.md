# Year Strong

Personal strength-training PWA. A single-file app that installs to the iPhone
home screen.

- **Live:** https://jesstar-bright.github.io/year-strong/ — **repo is PUBLIC**
- **Deploy:** GitHub Pages from `main`/root. **A push to `main` IS the deploy.**
  There is no staging.

## The whole app is one file

`index.html` (~2,400 lines) holds styles, markup, and JS together:

| Section | Lines |
|---|---|
| Styles | 21–316 |
| Phase nav | 341 |
| Phase 1 workouts (Mon–Fri) | 352–1063 |
| Phases 2 / 3 / 4 | 1064 / 1092 / 1124 |
| Nutrition | 1152 |
| Recipes | 1242 |
| Log + Sheets setup UI | 1899 |
| Principles | 1955 |
| All app JS | 2001–2414 |

Individual exercises carry `data-ex-id="..."` (e.g. `goblet-squat`), so grep
that attribute to jump to one.

## Non-negotiables

1. **Bump `CACHE_VERSION` in `service-worker.js` whenever `index.html` changes.**
   The service worker is cache-first — skip the bump and installed phones keep
   serving the OLD version, so the change looks like it did nothing. A
   PostToolUse hook (`~/.claude/hooks/year-strong-cache-guard.sh`) now blocks on
   this, but understand *why* rather than just satisfying the hook.
2. **Never change the localStorage key `year-strong-log-v3`** (index.html:2044).
   Existing workout logs are keyed to it and would orphan.
3. After deploying, force-close and reopen the app on the phone to fetch the
   new version.

## Sheets sync

`year-strong-sheets.gs` is deployed as a Google Apps Script Web App under
jessicahtalbert@gmail.com. The app POSTs each log `{date,exercise,weight,reps}`
to its `/exec` URL. The URL is entered per-device in the app's "Connect" field
(phone and laptop use the same URL). Backend is deployed and working — don't
re-deploy it to fix a frontend problem.

## Because the repo is public

No secrets, no personal health details beyond workout numbers, no real names
in committed content.
