import Navbar from './components/Navbar.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import useReveal from './hooks/useReveal.js';
import useActiveSection from './hooks/useActiveSection.js';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'];

// The page is a single scrolling document. Each section has an id that the
// navbar links to, and the navbar highlights the section currently on screen.
export default function App() {
  useReveal();
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <ProgressBar />
      <Navbar activeId={activeId} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}