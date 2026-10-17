import { contact, profile } from '../data/portfolio.js';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon, ArrowDownIcon } from './Icons.jsx';

export default function Footer({ onNavigate }) {
  const handleBackToTop = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__info">
          <div className="footer__brand">
            <span className="footer__mark" aria-hidden="true">
              {profile.monogram}
            </span>
            <span className="footer__name">{profile.name}</span>
          </div>
          <p className="footer__bio muted small">
            BS Computer Science Undergraduate @ Quaid-i-Azam University, Islamabad.
            Engineering accessible web interfaces &amp; AI-integrated systems.
          </p>
          <span className="footer__copyright muted small">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
        </div>

        <nav className="footer__nav" aria-label="Footer Navigation">
          <div className="footer__links">
            <a
              href={contact.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp</span>
            </a>

            <a
              href={contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <LinkedInIcon size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href={contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <GitHubIcon size={16} />
              <span>GitHub</span>
            </a>
          </div>

          <a
            href="#home"
            onClick={handleBackToTop}
            className="footer__back-to-top"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <span className="rotate-180 inline-icon" aria-hidden="true">
              <ArrowDownIcon size={16} />
            </span>
          </a>
        </nav>
      </div>
    </footer>
  );
}