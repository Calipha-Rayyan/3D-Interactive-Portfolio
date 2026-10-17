import { contact } from '../data/portfolio.js';
import {
  WhatsAppIcon,
  LinkedInIcon,
  GitHubIcon,
  ExternalLinkIcon,
  SparklesIcon,
} from './Icons.jsx';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <p className="section-kicker">
            <WhatsAppIcon size={14} className="inline-icon" />
            <span>Get in Touch</span>
          </p>
          <h2 id="contact-title" className="section-title">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="section-intro muted">
            The fastest and most direct way to reach me is WhatsApp. LinkedIn and GitHub are also continuously monitored. I am open to front-end developer internships, engineering projects, and AI explorations.
          </p>
        </div>

        <div className="contact__grid">
          {/* Primary Featured Card: Direct WhatsApp Communication */}
          <div className="glass contact-card contact-card--featured reveal">
            <div className="contact-card__featured-badge">
              <span className="featured-badge__dot" aria-hidden="true" />
              <span>Recommended Direct Channel</span>
            </div>

            <div className="contact-card__header">
              <div className="contact-card__icon-circle contact-card__icon-circle--whatsapp">
                <WhatsAppIcon size={28} />
              </div>
              <div>
                <h3 className="contact-card__title">Direct WhatsApp Chat</h3>
                <p className="contact-card__subtitle muted">
                  Available directly on phone: <strong>{contact.whatsapp.displayNumber}</strong> ({contact.whatsapp.internationalDisplay})
                </p>
              </div>
            </div>

            <div className="contact-card__message-preview">
              <span className="message-preview__label">Pre-filled Message Preview:</span>
              <p className="message-preview__quote">
                &ldquo;{contact.whatsapp.message}&rdquo;
              </p>
            </div>

            <div className="contact-card__actions">
              <a
                className="button button--primary button--whatsapp"
                href={contact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with Muhammad Rayyan Bhatti on WhatsApp at ${contact.whatsapp.displayNumber} (opens in a new tab)`}
              >
                <WhatsAppIcon size={20} className="button__icon" />
                <span>Chat on WhatsApp</span>
                <ExternalLinkIcon size={16} className="button__icon-right" />
              </a>

              <span className="contact-card__response-time">
                <span className="online-indicator" aria-hidden="true" />
                <span>Quick response · Islamabad (PKT / UTC+5)</span>
              </span>
            </div>
          </div>

          {/* Secondary Professional Channels */}
          <div className="contact__secondary-column">
            {/* LinkedIn Card */}
            <div className="glass contact-card contact-card--channel reveal">
              <div className="contact-card__icon-circle contact-card__icon-circle--linkedin">
                <LinkedInIcon size={22} />
              </div>
              <div className="contact-card__channel-body">
                <h3 className="contact-card__channel-title">LinkedIn Profile</h3>
                <p className="muted small">Connect professionally and read project updates</p>
                <a
                  className="button button--ghost button--small contact-card__channel-btn"
                  href={contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Muhammad Rayyan Bhatti's LinkedIn profile (opens in a new tab)"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLinkIcon size={14} />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="glass contact-card contact-card--channel reveal">
              <div className="contact-card__icon-circle contact-card__icon-circle--github">
                <GitHubIcon size={22} />
              </div>
              <div className="contact-card__channel-body">
                <h3 className="contact-card__channel-title">GitHub Profile</h3>
                <p className="muted small">Inspect source code, repositories, and commits</p>
                <a
                  className="button button--ghost button--small contact-card__channel-btn"
                  href={contact.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Muhammad Rayyan Bhatti's GitHub repositories (opens in a new tab)"
                >
                  <span>Explore GitHub (@Calipha-Rayyan)</span>
                  <ExternalLinkIcon size={14} />
                </a>
              </div>
            </div>

            {/* Location & Status Info */}
            <div className="glass contact-card contact-card--status reveal">
              <div className="status-item">
                <span className="status-label">Location:</span>
                <span className="status-value">{contact.location}</span>
              </div>
              <div className="status-item">
                <span className="status-label">Status:</span>
                <span className="status-value text-mint">
                  <SparklesIcon size={13} className="inline-icon" />
                  <span>{contact.availability}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}