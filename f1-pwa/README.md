# F1 2026 Dashboard — installable PWA

A self-contained Formula 1 2026 season dashboard: calendar, live standings, an
animated points-race chart, 5-year title history, all-time records, 2026
regulations, and race-weekend ticket prices. Installs like an app on phone,
tablet, or desktop, and works offline after the first visit.

## Deploy it (first time)

**Netlify Drop (easiest, no account needed to try it):**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this whole folder (the one containing `index.html`) onto the page
3. Netlify gives you a live URL immediately

**Netlify with a persistent site (recommended, so the URL doesn't change):**
1. Create a free account at [netlify.com](https://netlify.com)
2. "Add new site" → "Deploy manually" → drag this folder in
3. Netlify assigns a permanent `*.netlify.app` URL (renameable in Site settings)

Either way: **to update the site later, just drag the folder in again.**
Netlify replaces the whole deployment — there's no extra setup required for
this to work every time.

## Installing it as an app

Once it's live on a URL:
- **iPhone/iPad (Safari):** open the URL → Share button → "Add to Home Screen"
- **Android (Chrome):** open the URL → you'll see an "Install App" button in
  the dashboard itself (top-right of the header), or use Chrome's menu →
  "Install app"
- **Desktop (Chrome/Edge):** an install icon appears in the address bar, or
  use the in-page "Install App" button

Once installed, it opens in its own window/icon, no browser chrome, and keeps
working without an internet connection (it'll show the last data it fetched).

## Updating the data every week

This is the only file you should need to touch:

```
js/data.js
```

It's plain, commented JavaScript — race results, standings, points-race
numbers, ticket prices, trivia, etc. are all arrays of plain objects near the
top of the file. Edit the numbers, save.

**Then, two things matter for the update to actually reach people who already
have the app installed:**

1. **Bump the version string** in *two* places — they should always match:
   - `APP_VERSION` at the top of `js/data.js`
   - `CACHE_VERSION` at the top of `sw.js`

   Any change works (e.g. `2026.12.1` → `2026.13.1` after a race weekend).
   This is what tells an already-installed app "there's something new,"
   which triggers the in-app "Refresh" banner.

2. **Redeploy** — drag the folder onto Netlify again (or `git push` if you've
   connected a repo instead — see below).

If you skip step 1, the site will still update for anyone loading it fresh in
a browser, but people who already installed it as an app may keep seeing
cached data until they force-refresh.

## Optional: connect a GitHub repo instead of drag-and-drop

If you'd rather not drag a folder every week:
1. Push this folder to a new GitHub repo
2. In Netlify: "Add new site" → "Import an existing project" → pick the repo
3. Build command: leave blank. Publish directory: `.` (repo root)
4. From then on, editing `js/data.js` on GitHub (or `git push`) auto-deploys

## File structure

```
index.html          the app shell — content is filled in by JS at load time
manifest.json        PWA metadata (name, icons, colors)
sw.js                 service worker — offline caching + update detection
netlify.toml          cache headers + SPA redirect, for Netlify specifically
css/style.css         all styling
js/data.js             ← EDIT THIS for weekly updates
js/app.js              rendering logic + PWA registration (rarely needs edits)
icons/                app icons at various sizes
```

## Notes on the data itself

- Most figures are sourced from Formula1.com's official standings/results
  pages, cross-checked against secondary sources where noted in the app's
  footer and section captions.
- The "Points Race" tab's round-by-round numbers were verified by re-summing
  each driver's per-round score and checking it against the official
  cumulative total — see the caption on that tab for the one round where an
  exact per-position breakdown wasn't yet published and a calculated
  points-delta was used instead.
- Ticket prices are sourced from GPDestinations.com's official 3-day pricing
  survey — attribute to them if you reuse that data elsewhere.
- Prize-money figures in the Regulations tab are explicitly flagged as
  estimates, since F1's Concorde Agreement payouts aren't publicly disclosed.

## Browser support

Works in any modern browser. Install-to-home-screen / offline support relies
on Service Worker + Web App Manifest, supported in Chrome, Edge, Safari
(iOS 16.4+), and Firefox. No build step, no dependencies to install — it's
plain HTML/CSS/JS.
