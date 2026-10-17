# 3D Interactive Portfolio | Muhammad Rayyan Bhatti

A high-performance, accessible, and responsive personal developer portfolio engineered with **React 19**, **Vite 6**, and **modern CSS**. Features a physics-damped 3D spatial hero experience, seamless anchor navigation, balanced skills layout, source-verified real-world projects, direct communication channels, and comprehensive accessibility compliance.

Developed by **Muhammad Rayyan Bhatti**, BS Computer Science undergraduate at Quaid-i-Azam University, Islamabad (2023 to Present).

---

## Live Links & Contact

- **GitHub Profile**: [github.com/Calipha-Rayyan](https://github.com/Calipha-Rayyan)
- **LinkedIn Profile**: [linkedin.com/in/calipha-rayyan](https://www.linkedin.com/in/calipha-rayyan)
- **Direct Email**: [muhammad313rayyan9@gmail.com](mailto:muhammad313rayyan9@gmail.com)
- **WhatsApp Direct**: [+92 312 0551052](https://wa.me/923120551052)
- **Live Demo (NourishAI Pakistan)**: [nourishai-studio.streamlit.app](https://nourishai-studio.streamlit.app/)

---

## Core Architecture & Engineering Highlights

### 1. Physics-Damped 3D Spatial Hero Scene
- **Spring-Interpolated Motion**: Implemented in `src/hooks/useSpatialTilt.js` using `requestAnimationFrame` with a linear interpolation factor (`0.08`) and velocity damping (`0.92`), producing fluid, realistic tactile weight rather than linear snapping.
- **Dynamic Specular Spotlight**: Real-time coordinates tracking maps a living specular spotlight (`radial-gradient`) across the central frosted glass prism as the pointer moves.
- **Multi-Layer Depth Composition**:
  - **Back Plane (-80px Z)**: Ambient space grid and dual rotating orbital rings.
  - **Prism Core (+25px Z)**: Frosted glass prism with beveled border glow, sculpted monogram emblem, and tech badges.
  - **Orbital Satellite Chips (+75px Z)**: Detached floating badges with independent parallax lag.
- **Zero Decorative Status Badges**: Removed artificial toggles; realistic 3D depth runs out of the box on capable hardware while strictly respecting `prefers-reduced-motion` for accessibility.

### 2. Streamlined Navigation & Bulletproof Scroll-Spy
- **Focused Header**: Clean single-row layout displaying only essential section anchors (`Home`, `About`, `Skills`, `Projects`, `Contact`) with zero text wrapping or button clipping at any viewport width.
- **Exact Offset Scrolling**: Strict 72px sticky header offset calculation ensures section headings and intro content land cleanly in view without excessive empty vertical gaps.
- **Scroll-Lock Synchronization**: Smooth scroll transitions lock active indicator updates to prevent intermediate sections from hijacking the active navigation link.
- **Bottom-of-Page Protection**: Ensures reaching the bottom of the viewport always locks `#contact` active without flickering back to previous sections.
- **Mobile Menu Auto-Close**: Mobile navigation drawer automatically closes upon link selection, scrolling, window resize, or outside click.

### 3. Balanced, Content-Driven Skills Grid
- **Structured Grid Alignment**: 4 distinct engineering domains presented in a 2x2 responsive CSS grid (`align-items: stretch`, `height: 100%`) eliminating hollow whitespace and awkward card heights.
- **Honest Competencies**: Skill tags categorized by domain (Front-End Development, Programming Languages, Backend & AI Tooling, Applied Technical Interests) with engineering notes, avoiding arbitrary percentage bars or fake proficiency meters.

### 4. Verified Projects & Real Media Previews
Every project represents authentic, reproducible engineering work backed by public GitHub repositories and public LinkedIn documentation:

| Project | Category | Tech Stack | Media / Type | Links |
|---|---|---|---|---|
| **Quill: MCP-Native Blog** | AI & Full-Stack / MCP | React, Node.js, FastMCP, SQLite, Docker | Real Screenshot (Cropped) | [GitHub](https://github.com/Calipha-Rayyan/Quill-MCP-Blog-Platform) |
| **Personal Knowledge Base** | AI & Full-Stack / Vector Search | React, FastAPI, Qdrant Vector DB, FastMCP | Real Screenshot (Cropped) | [GitHub](https://github.com/Calipha-Rayyan/Personal-Knowledge-Base-MCP) |
| **NourishAI Pakistan** | Generative AI / Nutrition Tech | Python, Streamlit, Groq API, Llama 3 | Real Screenshot (Cropped) | [Live Demo](https://nourishai-studio.streamlit.app/) · [GitHub](https://github.com/Calipha-Rayyan/NourishAI-Pakistan) |
| **AI Study Companion** | EdTech / RAG Architecture | Python, FastAPI, Sentence Transformers, Qdrant | Real Screenshot (Cropped) | [GitHub](https://github.com/Calipha-Rayyan/AI-Study-Companion) |
| **Certificate OCR System** | Computer Vision & OCR Pipeline | Python, Flask, Tesseract OCR, OpenCV, SQLite | Tailored SVG Preview | [GitHub](https://github.com/Calipha-Rayyan/Certificate-OCR-System) |
| **Customer Lifetime Value** | Machine Learning & Analytics | Python, Pandas, BG/NBD, Gamma-Gamma, Pytest | Tailored SVG Preview | [GitHub](https://github.com/Calipha-Rayyan/Customer-Lifetime-Value-Model) |
| **FORESIGHT Nexus** | Predictive Analytics & Inventory | Python, Streamlit, DuckDB, scikit-learn, ARIMA | Tailored SVG Preview | [GitHub](https://github.com/Calipha-Rayyan/Foresight-Nexus) |

- **Clean Browser Media**: All real screenshots were cropped to eliminate operating system tabs and address bars, presenting clean, professional application interfaces.
- **Interactive Filtering**: Real-time category filtering (`All Projects`, `MCP & AI Agents`, `RAG & Vector Search`, `ML & Analytics`).

### 5. Multi-Channel Contact & Floating Quick Action
- **Direct Email Card**: One-click communication via `muhammad313rayyan9@gmail.com`.
- **Verified WhatsApp Chat**: International click-to-chat integration with pre-filled greeting message.
- **Smart Floating WhatsApp**: Scroll-activated quick-action button appearing once users scroll past the hero fold (350px), featuring a non-intrusive frosted glass design and online indicator.
- **Verified Profiles**: Direct links to official GitHub and LinkedIn profiles in both Contact cards and Footer.

---

## Tech Stack & Design System

- **Framework**: React 19, Vite 6
- **Styling**: Modern CSS3 (CSS custom properties, glassmorphism, flexbox, CSS grid)
- **Color Palette**:
  - Deep Space Canvas: `#06181F`
  - Deep Teal Glass: `#0B3036`
  - Mint Glow: `#5EEAD4`
  - Electric Cyan: `#67E8F9`
  - Soft Indigo: `#818CF8`
  - Accent Violet: `#A78BFA`
  - Crisp Primary Text: `#F0FAF8`
  - Readable Muted Text: `#B8D0D0`
- **Typography**: Inter (UI prose) & Space Grotesk (headings and monospace telemetry)
- **Icons**: Custom, lightweight SVG icon suite (`src/components/Icons.jsx`)
- **Testing**: Automated Puppeteer-core test suite with headless Chrome

---

## Project Structure

```text
3d-interactive-portfolio/
├── index.html                    # HTML entry point with meta tags & Google Fonts
├── package.json                  # Dependencies & npm scripts
├── vite.config.js                # Vite build and server configuration
├── public/
│   ├── favicon.svg               # Vector brand favicon
│   └── images/
│       └── projects/             # Real project screenshots & SVG diagrams
├── src/
│   ├── main.jsx                  # React application root
│   ├── App.jsx                   # Main layout container
│   ├── data/
│   │   └── portfolio.js          # Central single source of truth for portfolio data
│   ├── hooks/
│   │   ├── useNavigation.js      # Scroll-spy & offset navigation hook
│   │   ├── usePointerTilt.js     # Light reflection tilt hook
│   │   └── useSpatialTilt.js     # Damped 3D physics engine hook
│   ├── components/
│   │   ├── Navbar.jsx            # Responsive navigation bar & mobile drawer
│   │   ├── Hero.jsx              # 3D spatial interactive hero section
│   │   ├── About.jsx             # Education, experience & engineering philosophy
│   │   ├── Skills.jsx            # 4-quadrant balanced skills matrix
│   │   ├── Projects.jsx          # Filterable project showcase
│   │   ├── ProjectCard.jsx       # Individual project card with live links
│   │   ├── Contact.jsx           # WhatsApp, Email, LinkedIn & GitHub channels
│   │   ├── FloatingWhatsApp.jsx  # Scroll-activated quick chat trigger
│   │   ├── Footer.jsx            # Monogram footer with quick anchors
│   │   └── Icons.jsx             # Accessible SVG icon collection
│   └── styles/
│       ├── global.css            # Design tokens, reset, typography & utility classes
│       ├── navigation.css        # Navbar and mobile menu styles
│       ├── hero-spatial.css      # 3D transforms, lighting & orbital animations
│       └── sections.css          # About, Skills, Projects, and Contact styling
└── scripts/
    ├── browser_qa.cjs            # Automated multi-viewport QA verification script
    └── crop_and_prepare_images.cjs # Image processing script
```

---

## Local Development & Setup

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Calipha-Rayyan/3D-Interactive-Portfolio.git

# Navigate into project directory
cd 3D-Interactive-Portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
# Compile optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Automated QA & Browser Verification

The project includes an automated multi-viewport testing suite run against real headless Google Chrome instances:

- **1440px Desktop**: Verified 3D physics tilt, smooth anchor scrolling, zero layout shifts, fullpage capture.
- **1024px Tablet Landscape**: Verified responsive reflow without horizontal scrolling.
- **768px Tablet Portrait**: Verified mobile hamburger toggle, backdrop blur, and menu link auto-close.
- **375px Mobile**: Verified single-column stacked layout, scaled 3D core, and legible touch targets.
- **360px Compact Mobile**: Verified zero horizontal clipping, responsive button widths, and edge padding.
- **Console Errors**: 0 errors, 0 unhandled promise rejections.

---

## License

This project is licensed under the [MIT License](LICENSE).
