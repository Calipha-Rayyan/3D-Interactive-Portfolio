import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import useReveal from './hooks/useReveal.js';

// The page is a single scrolling document. Each section has an id that the
// navbar links to.
export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Navbar />
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
