import { contact, profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <nav className="footer__links" aria-label="Footer">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#home">Back to top</a>
        </nav>
      </div>
    </footer>
  );
}