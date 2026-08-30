# Year Strong — app UI kit

The whole product, click-through, in light and dark.

| File | Screen |
| --- | --- |
| `index.html` | Shell: mode toggle, onboarding phone + live app phone |
| `Shell.jsx` | `Phone` frame, `StatusBar`, the `WORKOUT` and `MEALS` fixtures |
| `OnboardingScreen.jsx` | Three-step setup: intro, targets, behaviour |
| `TodayScreen.jsx` | Day strip, progress, exercise, set table, log sheet, action sheet |
| `FoodScreen.jsx` | Daily nutrition, meal rows, search, filters, reference teaser |
| `RecipeScreen.jsx` | Pushed detail: macros, iron rule, ingredient checklist, method |
| `LogScreen.jsx` | Stats, volume chart, sort menu, session list |
| `NotesScreen.jsx` | Sage note cards with a new-note sheet |
| `PhaseScreen.jsx` | The twelve-month arc, four phases with progress |
| `ReferenceScreen.jsx` | Searchable evidence library |

**Try:** Today → tap a set row → stepper → SAVE SET (progress fills, toast). Tap the "0 OF 8 DONE ⋯" counter for the action sheet. Food → tap a meal → recipe → tick ingredients. Log → Sort. Notes → NEW.

Every screen is composed from published components — nothing is re-implemented locally.
