# Rapid Action & Rapid Response — Front-end demo

**One Report. Coordinated Response.**

> **DEMO ONLY.** No real emergency service is contacted. In a real emergency call **112**.
> Everything is stored in your browser only.

## Run

No install needed: double-click `index.html`.

For the in-app camera and GPS prompts, serve it from localhost instead
(browsers treat `http://localhost` as secure):

```
python -m http.server 8000      # then open http://localhost:8000
```

(or use the VS Code "Live Server" extension).

## Folders

```
index.html            page shell that links everything below
css/
  tokens.css          colors and dark-mode palette
  base.css            reset, typography, buttons, forms, focus
  components.css      cards, chips, banners, tables, dialog, toast
  layout.css          header/nav, citizen and command layouts, responsive rules
js/                   classic scripts sharing one scope; load order is in index.html
  config.js           constants, mock facilities, demo accounts
  helpers.js          escaping, time formatting, chips, logging, toast
  state.js            app state, localStorage persistence, report creation, seed data
  views-map.js        SVG map, filters, legend
  views-citizen.js    citizen screens
  views-auth.js       sign-in screen
  views-command.js    hospital / police / fire / admin screens
  actions.js          button actions
  app.js              render, event listeners, start-up (must load last)
```

Styling is plain hand-written CSS (no Tailwind or other framework).

## Demo accounts (password `demo1234`)

`user@demo.invalid` (citizen) · `hospital@`, `police@`, `fire@`, `admin@` + `demo.invalid`.
Client-side demo only, not authentication. Remove before any deployment.

## Using your own entries

Submit a report as a citizen. It appears on the hospital, police, fire and admin pages marked
**YOUR ENTRY**. Use a second tab for the agent side. Reset demo data (Settings) clears everything.

## Simulated / not implemented

Authentication, dispatch, notifications and ETAs are simulated. Maps are simple SVG with mock
facility positions. Video recording, Response History, Service Availability, operator management
and the audit log are not built.
