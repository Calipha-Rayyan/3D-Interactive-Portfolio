# 3D Interactive Portfolio

Personal portfolio of **Muhammad Rayyan Bhatti**, built as the Week 2 task of the
Internlytic Technologies Front-End Development Internship (Phase 1, 2026).

**Design concept: "Depth Stack"**: a dark deep-teal page with glass panels and a
layered 3D hero. Background layers move slower on scroll than foreground layers
(parallax), and the front layer tilts toward the mouse or responds to a tap.

## Features

- Responsive single-page layout for phone, tablet, laptop, and desktop
- Real CSS 3D depth using `perspective`, `preserve-3d`, and `translateZ`
- Scroll parallax with three layers at different speeds (requestAnimationFrame-throttled)
- Mouse tilt on desktop; tap-to-lift on touch devices (no feature depends on hover)
- Gentle floating animation and fade-in reveal on scroll
- `prefers-reduced-motion` support: floating, tilt, reveal motion, and parallax are turned off
- Keyboard-accessible navigation, skip link, and visible focus styles
- Project cards that show a "pending verification" note instead of fake links

## Sections

Home, About (including education), Skills (grouped, no ratings), Projects, Contact.

## Technologies

React 19, Vite 6, plain CSS (no CSS framework), plain JavaScript. No 3D library is used,
so the page stays light.

## Installation and development (Windows PowerShell)

```powershell
npm install
npm run dev        # opens at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Project structure

```
src/
  App.jsx                 page layout and section order
  main.jsx                React entry point
  data/portfolio.js       ALL personal content (edit facts here only)
  components/             Navbar, Hero, DepthCard, About, Skills, Projects, ProjectCard, Contact, Footer
  hooks/                  useReducedMotion, useScrollParallax, usePointerTilt, useReveal
  styles/global.css       design tokens, base, navbar, buttons, grids, responsive rules
  styles/sections.css     3D hero, depth cards, project cards, reveal, reduced motion
```

## Screenshots

_Add screenshots after you run the site: place them in `docs/` and link them here._

## Deployment

_Pending. Add the live demo link here once deployed._

## Testing notes

Automated checks performed by the author during development:

- `npm install` completes without errors
- `npm run build` completes without errors (production bundle)

Manual checks the owner must still perform (see the testing checklist below):

- Desktop and mobile layout, horizontal overflow, and touch behavior
- Parallax and tilt feel, reduced-motion toggle in the operating system
- Every navigation link and external link

### Manual testing checklist

- [ ] Page loads with no console errors (F12 > Console)
- [ ] Each navbar link scrolls to the correct section
- [ ] `Tab` shows the skip link and a visible focus ring on each control
- [ ] No horizontal scrollbar at 375px, 768px, 1440px (DevTools device toolbar)
- [ ] Hero layers move at different speeds while scrolling (desktop)
- [ ] Mouse over the front hero card tilts it; moving away resets it
- [ ] On a phone or touch emulator, tapping the front card lifts it
- [ ] With "Reduce motion" enabled in Windows (Settings > Accessibility > Visual effects > Animation effects off), floating, tilt, and reveal motion stop
- [ ] LinkedIn link opens in a new tab

## Featured projects

Selected from the author's public GitHub account (https://github.com/Calipha-Rayyan):

- Quill: MCP Blog Platform (React dashboard, MCP tools, SQLite)
- Personal Knowledge Base (MCP) (React and FastAPI, vector search with Qdrant)
- FORESIGHT Nexus (Streamlit analytics, forecasting)
- NourishAI Pakistan (Streamlit AI meal planner)

Other public repositories (C++, Java, Dart coursework, and ML notebooks) are not featured
on the site.

## Known limitations

- No contact form: the site has no backend, so a form would not send messages. Professional links are shown instead.
- No live demo links yet: none were found in the repository READMEs. Demo links stay pending until verified.
- Resume and Achievements sections are not included until verified information is provided.
- Touch tilt uses a tap toggle, which can also fire after some scroll gestures.
- The Google Fonts stylesheet is loaded from the internet; without it, system fonts are used.

## Author

Muhammad Rayyan Bhatti: BS Computer Science, Quaid-i-Azam University, Islamabad.
