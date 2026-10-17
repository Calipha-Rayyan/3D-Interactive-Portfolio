import Navbar from './components/Navbar.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import useReveal from './hooks/useReveal.js';
import useNavigation from './hooks/useNavigation.js';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'];

export default function App() {
  useReveal();
  const { activeId, scrollToSection } = useNavigation(SECTION_IDS);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <ProgressBar />
      <Navbar activeId={activeId} onNavigate={scrollToSection} />
      <main id="main">
        <Hero onNavigate={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer onNavigate={scrollToSection} />
      <FloatingWhatsApp />
    </>
  );
}