# 3D Interactive Portfolio — Muhammad Rayyan Bhatti

Personal 3D interactive portfolio of **Muhammad Rayyan Bhatti**, BS Computer Science student at Quaid-i-Azam University, Islamabad (2023–present), aspiring front-end developer, and AI enthusiast (`Calipha-Rayyan-9`).

Live Reference Inspiration: [Muhammad Talha's Portfolio](https://www.the-muhammad-talha.com/)

---

## Key Upgrades & Architectural Highlights

### 1. Convincing 3D Spatial Hero Scene
- **Physics-Damped Pointer Tilt**: Uses damped spring interpolation (`requestAnimationFrame` with linear interpolation factor `0.08`) so the 3D core moves with realistic tactile weight rather than rigid linear snapping.
- **Dynamic Specular Light Reflection**: Tracks pointer/touch coordinates across the surface of the central frosted glass prism to produce a living specular spotlight (`radial-gradient` reflection).
- **Multi-Layer Depth Separation**:
  - **Back layer (-80px Z)**: Ambient space grid and dual rotating orbital rings.
  - **Main card (+25px Z)**: Frosted glass prism with beveled border glow, sculpted `MRB` monogram emblem, and tech badges.
  - **Satellite orbital chips (+75px Z)**: Detached floating badges (`⚡ MCP Native Architect`, `✨ React & Modern UI`, `🏛️ Quaid-i-Azam University`, `🧠 Vector RAG & Qdrant`) with independent parallax lag.
- **Accessible Motion Switch**: Replaced the former decorative badge with an accessible, interactive Glassmorphism Motion Switch (`role="switch"`, `aria-checked`) supporting mouse, touch drag, keyboard arrow keys, and full compliance with `prefers-reduced-motion`.

### 2. Bulletproof Anchor Navigation & Scroll-Spy Synchronization
- **Strict Sticky Header Offset**: Exact 72px offset calculation on smooth scrolling so every section heading and initial content lands cleanly in view without excessive top blank space.
- **Scroll-Lock Synchronization**: When any nav link or hero CTA (`Explore My Work` → `#projects`, `Let's Connect` → `#contact`) is clicked, intermediate sections are prevented from hijacking the active navigation indicator during smooth scroll.
- **Bottom-of-Page Protection**: Guarantees that reaching the bottom of the page always keeps `#contact` active without flickering back to `#projects`.
- **URL Hash Synchronization**: URL hash updates cleanly with `history.pushState` / `history.replaceState` while keeping browser Back/Forward functional.
- **Mobile Menu Auto-Close**: Mobile dropdown automatically closes on link selection, page scroll, outside click, or window resize.

### 3. Source-Backed Project Gallery & Real Media
Replaced all letter-only placeholders (`Q`, `K`, `F`, `N`) with real project previews extracted from public LinkedIn project posts and verified GitHub repositories:

| Project | Category | Media File | Origin / Type | Live Status |
|---|---|---|---|---|
| **Quill: MCP Blog Platform** | AI & Full-Stack / MCP | `quill-mcp-blog.jpg` | [LinkedIn Post](https://www.linkedin.com/posts/calipha-rayyan_mcp-modelcontextprotocol-ai-activity-7503065086660501504-c5Z_) / Screenshot | [GitHub](https://github.com/Calipha-Rayyan/Quill-MCP-Blog-Platform) |
| **Personal Knowledge Base (MCP)** | AI & Full-Stack / Vector Search | `personal-knowledge-base-mcp.jpg` | [LinkedIn Post](https://www.linkedin.com/posts/calipha-rayyan_ai-mcp-fastapi-activity-7501192588293533698-Xo8B) / Screenshot | [GitHub](https://github.com/Calipha-Rayyan/Personal-Knowledge-Base-MCP) |
| **NourishAI Pakistan** | Generative AI / Nutrition Tech | `nourish-ai-pakistan.jpg` | [LinkedIn Post](https://www.linkedin.com/posts/calipha-rayyan_nourishai-generativeai-ai-activity-7505110705361137664-QxdU) / Screenshot | [Live Demo](https://nourishai-studio.streamlit.app/) · [GitHub](https://github.com/Calipha-Rayyan/NourishAI-Pakistan) |
| **AI Study Companion** | EdTech / RAG Architecture | `ai-study-companion.jpg` | [LinkedIn Post](https://www.linkedin.com/posts/calipha-rayyan_zeppelinlabs-zeppelinfellowship-aifellowship-activity-7492232520034582528-qffj) / Screenshot | [GitHub](https://github.com/Calipha-Rayyan/AI-Study-Companion) |
| **Airline Flight Delay Predictor** | Machine Learning & Data Science | `flight-delay-predictor.jpg` | [LinkedIn Post](https://www.linkedin.com/posts/calipha-rayyan_machinelearning-datascience-python-activity-7507455182298042368-T25-) / Screenshot | [GitHub](https://github.com/Calipha-Rayyan/Airline-Flight-Delay-Analysis) |
| **FORESIGHT Nexus** | Predictive Analytics & Inventory | `foresight-nexus.svg` | [GitHub Repository](https://github.com/Calipha-Rayyan/Foresight-Nexus) / Designed UI Preview | [GitHub](https://github.com/Calipha-Rayyan/Foresight-Nexus) |

- **Interactive Category Filtering**: Explore projects by domain (`All Projects`, `MCP & AI Agents`, `RAG & Vector Search`, `ML & Analytics`).
- **Asset Manifest**: Documented in `public/images/projects/MANIFEST.md`.

### 4. Direct WhatsApp Integration & Contact Channel
- **WhatsApp Direct Link**: Verified international click-to-chat URL:
  `https://wa.me/923120551052?text=Assalam-o-Alaikum%20Rayyan%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.`
- **Display Phone**: `03120551052` (`+92 312 0551052`).
- **Featured Contact Card**: Includes pre-composed message preview, direct WhatsApp chat action, and live response time indicator.
- **Floating Quick-Action Button**: Non-intrusive floating WhatsApp action with glowing pulse indicator in the bottom-right corner.

### 5. Coherent Dark-Tech Visual Identity
- **Refined Color Palette**:
  - Deep Background: `#06181F`
  - Deep Teal: `#0B3036`
  - Mint Accent: `#5EEAD4`
  - Cyan Accent: `#67E8F9`
  - Indigo Accent: `#818CF8`
  - Violet Accent: `#A78BFA`
  - Main Text: `#F0FAF8`
  - Secondary Text: `#B8D0D0`
- **Design Tokens**: Standardized CSS custom properties in `src/styles/global.css`.

---

## Tech Stack

- **Framework**: React 19, Vite 6
- **Language**: JavaScript (ES6+), Modern CSS3
- **Icons**: Custom accessible SVG components
- **Testing**: Puppeteer-core with Google Chrome headless automation

---

## Local Development & Build

```powershell
# Install dependencies
npm install

# Start local development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Verification & QA Results

Tested across headless Google Chrome with automated scripts:

- **1440px Desktop**: Passed (Hero 3D tilt, navigation clicks, smooth landing, fullpage capture).
- **1024px Tablet Landscape**: Passed (Grid reflows cleanly, no overflow).
- **768px Tablet Portrait**: Passed (Mobile hamburger toggle opens, menu backdrop blur, links close menu).
- **375px Mobile Viewport**: Passed (Single-column layout, compact 3D core, card scaling).
- **360px Small Mobile Viewport**: Passed (No horizontal scroll, buttons span full width).
- **Console Errors**: 0 errors.

---

## Remaining Notes & Limitations

1. **Live Demos**: NourishAI Pakistan is verified and linked to its live Streamlit deployment (`https://nourishai-studio.streamlit.app/`). Quill, Personal Knowledge Base, AI Study Companion, Airline Flight Delay Predictor, and FORESIGHT Nexus link directly to their verified GitHub repositories; demo buttons honestly reflect pending live deployment.
2. **Contact Form**: An email or server contact form is omitted because the site has no backend service; all inquiries are directed through WhatsApp, LinkedIn, or GitHub.
3. **No Unapproved Git Operations**: No remote branches or destructive git operations were performed.
