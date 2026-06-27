# Year Strong — Deploy as a real app

This folder is everything you need to host the app on **GitHub Pages** (free, takes ~5 minutes) and install it on your iPhone like a real app (full-screen, icon, splash screen, persistent storage).

Files in this folder:

- `index.html` — the app (with PWA support added)
- `manifest.json` — tells iOS/Android this is an installable app
- `service-worker.js` — caches the app so it works offline (gym basement, no signal)
- `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` — app icons
- `apple-touch-icon.png` — iOS home-screen icon
- `favicon-32.png` — browser tab icon
- `README.md` — this file

---

## Part 1 — Push to GitHub Pages

### Step 1. Sign in to GitHub
Go to [github.com](https://github.com). If you don't have an account, sign up — it's free. Use your personal email, not BambooHR.

### Step 2. Create a new repository
- Click the **+** icon (top right) → **New repository**
- **Repository name:** `year-strong` (or whatever you want)
- **Visibility:** Public *(required for free GitHub Pages — the contents are visible but no one will find it unless you share the URL)*
- Leave everything else unchecked. Don't add a README, .gitignore, or license — we'll upload our own files.
- Click **Create repository**

### Step 3. Upload the files
On the empty repo page, click the link that says **"uploading an existing file"** (under "Quick setup").

- Drag *all 8 files* from this folder into the upload area
  - `index.html`, `manifest.json`, `service-worker.js`, `icon-192.png`, `icon-512.png`, `icon-512-maskable.png`, `apple-touch-icon.png`, `favicon-32.png`
- Scroll down. In the "Commit changes" section, the default message is fine.
- Click **Commit changes**.

### Step 4. Enable GitHub Pages
- Click the **Settings** tab (top of your repo)
- In the left sidebar, click **Pages**
- Under "Build and deployment" → "Source": pick **Deploy from a branch**
- Under "Branch": pick **main** and the folder **/ (root)**, then click **Save**.
- Wait ~30–60 seconds.
- Refresh the Pages settings page. At the top, you'll see:
  > ✅ Your site is live at `https://YOUR-USERNAME.github.io/year-strong/`

That's your app URL. Open it in your phone's Safari to confirm it loads.

---

## Part 2 — Install on iPhone

### Step 1. Open the URL on your iPhone Safari
Use Safari specifically — not Chrome, not in-app browsers. **Must be Safari for the home-screen install to work.**

Visit the URL from Part 1, Step 4.

### Step 2. Add to Home Screen
- Tap the **Share** icon at the bottom (the square with the up arrow)
- Scroll down in the share sheet
- Tap **Add to Home Screen**
- The default name "Year Strong" is fine, tap **Add**

Now check your home screen. You'll have a square orange "Y" icon. Tap it.

### What you'll notice
- Launches full-screen — no Safari address bar, no tabs
- Splash screen on launch (orange background, white Y)
- Behaves like a native app
- localStorage is now **persistent** — survives across launches, app closes, phone restarts. *This is what fixes the logging-not-saving bug from before.*

---

## Part 3 — Updating the app later

When you want to change something (new recipe, new workout, fix a bug):

1. Edit the files locally (or paste new HTML into Claude and download)
2. Go to your GitHub repo on the web
3. Click the file you want to replace (e.g., `index.html`)
4. Click the pencil icon (top right) to edit, *or* click the three-dots menu and "Upload files" to replace
5. Commit the change
6. Within ~30 seconds, GitHub Pages picks up the new version
7. On your phone, **force-close the Year Strong app and reopen it** — the service worker will fetch the new version

The service worker caches aggressively, so a hard refresh sometimes helps. If you want to be sure: on iPhone Safari (not the installed app), visit the URL → tap **aA** in the address bar → **Website Settings** → toggle off "Use Reader Automatically" *(this is just a way to force-reload)*. Or just wait — within a day or two the cache will refresh on its own.

---

## Part 4 — About the Google Sheets backend

Now that the app lives at a stable URL with persistent storage, you may not strictly need the Google Sheets backend anymore — localStorage will hold across sessions reliably. But Sheets gives you:

- **Cross-device sync** (phone + laptop see the same data)
- **A real database** you can open, chart, filter, export
- **A backup** in case anything ever goes wrong with the app

So I'd still recommend setting up Sheets when you have a spare 5 minutes. The Log tab walks you through it — paste your Apps Script Web App URL into the connect field and you're done.

---

## Troubleshooting

**Icons look like a generic globe instead of the orange Y on the home screen**
- The PWA files didn't deploy correctly. Double-check that `apple-touch-icon.png` and `manifest.json` are at the same level as `index.html` in your GitHub repo (not in a subfolder).

**"Add to Home Screen" doesn't appear in the Safari share sheet**
- You're not in Safari. iOS only allows this from Safari, not Chrome or in-app browsers.

**App still opens in Safari with the address bar when launched from home screen**
- Force-delete the home screen icon, then revisit the URL in Safari and re-add it. The first install was before the meta tags loaded.

**Logs still not saving after install**
- The PWA install needs a successful first launch from the home screen icon to claim persistent storage. Open it from the home screen icon once and log a test entry. Then close and reopen — it should persist.

**404 on the URL after enabling Pages**
- Pages takes up to 60 seconds to propagate the first time. Refresh after a minute. If still 404, check Settings → Pages and confirm the branch is `main` and folder is `/ (root)`.
