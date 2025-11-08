# AssignReact

Assignment project — EZ (Sanidhey Singh)

Status: Completed

This repository contains the completed React assignment named "EZ" for Sanidhey Singh. The app is a small single-page site built with Vite and React. It implements client-side routing, service pages, and uses the provided design assets in `public/assn`.

## Assignment / Submission

- Repository: `EZ---SanidheySingh` (owner: `SanidheySingh`)
- Branch: `master` (current)

If you need to push this local project to the GitHub remote you added, from the project root run (PowerShell):

```powershell
# make sure you've committed your changes
git add .
git commit -m "Assignment: initial submission"
# if remote was set as shown in your terminal
git push -u origin master
```

If your remote expects the `main` branch instead of `master`, create or rename the branch before pushing:

```powershell
git branch -M main
git push -u origin main
```

---

Author & contact

- Author: Sanidhey Singh
- Repository: `https://github.com/SanidheySingh/EZ---SanidheySingh`

Verification

- Project runs locally with Vite (`npm run dev`).
- Design assets used from `public/assn/` (images & svgs).
- Example API payloads are included in `postmanDump.json` (contact form examples).

What's included (checked)

- [x] Complete UI implemented using components in `src/components`
- [x] Routing & service pages wired in `src/App.jsx`
- [x] Design assets placed under `public/assn`
- [x] Example API payloads in `postmanDump.json`


## Features

- React 19 with Vite for fast development
- Client-side routing with react-router-dom
- Modular component structure (NavBar, Hero, Services, Contact, etc.)
- Simple service pages: Film Production, Branding, Art Curation
- Uses webfonts via @fontsource

## Tech stack

- React 19
- Vite
- React Router DOM
- Tailwind (dev dependency present)
- ESLint for linting

## Quick start (Windows PowerShell)

1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm run dev
```

This launches the Vite dev server and opens the app at http://localhost:5173 (or another port Vite chooses).

3. Build for production

```powershell
npm run build
```

4. Preview the production build locally

```powershell
npm run preview
```

5. Lint the project

```powershell
npm run lint
```

## Project structure (important files)

- `index.html` - Application HTML entry with `#root` mount node.
- `src/main.jsx` - React entry file; mounts `<App />`.
- `src/App.jsx` - Top-level router and route definitions.
- `src/index.css`, `src/App.css` - Styles (Tailwind / custom CSS).
- `src/components/` - Reusable components:
  - `NavBar.jsx` - Top navigation
  - `Hero.jsx` - Hero/landing section
  - `AboutUs.jsx`, `AboutTeam.jsx` - About pages
  - `Contact.jsx` - Contact section
  - `Portfolio.jsx` - Portfolio listing
  - `Services.jsx` - Services list page
  - `Services/FilmProduction.jsx` - Film production service page
  - `Services/Branding.jsx` - Branding service page
  - `Services/ArtCuration.jsx` - Art curation service page
  - `Services/ServicePage.jsx` - Service page template

## Routing

Routes are defined in `src/App.jsx`:

- `/` -> `Home` (landing page)
- `/services/film-production` -> `FilmProduction`
- `/services/branding` -> `Branding`
- `/services/art-curation` -> `ArtCuration`

## Fonts & styling

This project imports fonts from `@fontsource` (e.g. `island-moments`, `halant`) in `src/main.jsx` and uses CSS files in the project root. Tailwind-related packages are present in `package.json`.

## Scripts (from package.json)

- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — locally preview production build
- `npm run lint` — run ESLint


Deployed Version : ez-sanidhey-singh.vercel.app


