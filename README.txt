INTERIORSYNC — SOURCE-PRESERVING HTML / CSS / JAVASCRIPT FRONTEND
==================================================================


HOW TO RUN
1. Extract ZIP.
2. Open InteriorSync_Exact_Design_Vanilla/index.html in Chrome or Edge.
3. On the original Login screen, use any non-empty password and one of:
   client@demo.local    -> Client
   designer@demo.local  -> Interior Designer
   manager@demo.local   -> Project Manager
   admin@demo.local     -> Administrator
4. Use the sidebar navigation and forms. Changes are stored locally in the browser where implemented.

SOURCE FILES
- index.html          Plain HTML application entry point
- app.js              Original JSX page/component code transpiled into ordinary JavaScript
                      (81 source JavaScript modules bundled in one file)
- runtime.js          Small browser DOM renderer + navigation/state support (not React)
- mock-api.js         Offline demo data, forms and fake responses to the original /api endpoints
- styles/             ALL 42 original stylesheets plus index.css and App.css from src(2).zip
- assets/hero.png     Original uploaded asset, preserved without modification

DESIGN FIDELITY
- ALL source page components are reused as converted native JavaScript DOM instructions.
- The original CSS rules, class names, layout structure, colors, and spacing are preserved.
- The CSS in index.html follows original page-import dependency order.
- Sidebar, dashboard, login, consultation, project, asset, version, render, and admin layouts
  come from the uploaded source, not from hand-built redesigned templates.
- The original used lucide-react icon components. These have been replaced with locally
  implemented SVG line icons. They may differ slightly in their exact stroke geometry.

LIMITATIONS
- This is an OFFLINE FRONTEND PROTOTYPE, not the production backend.
- Login is a demo role selector, not real authentication or access control.
- The adapter provides demo data and localStorage. It cannot perform real uploads,
  server-side downloads, authenticated API access, or real render processing.
- Some post/upload, approval and status actions are simulated; production API
  behavior is not guaranteed to match the original application.
- Browser rendering checked on the login and 38 role routes in a local in-memory
  headless Chromium test. Tests did not establish pixel-perfect identity to the
  original application because the original image assets and live backend are missing.

No React, JSX source parsing, NPM, Vite, external scripts, database, or backend is
required to RUN this frontend.
