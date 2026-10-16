import { contact } from '../data/portfolio.js';

// Honest contact area: WhatsApp click-to-chat and professional profile links.
// No form is shown, because the site has no backend that could send messages.
const whatsappUrl = `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(
  contact.whatsapp.message
)}`;

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-kicker reveal">Contact</p>
        <h2 className="reveal">Let's connect</h2>
        <p className="muted reveal section-intro">
          The fastest way to reach me is WhatsApp. LinkedIn and GitHub are available too.
        </p>

        <div className="contact__grid">
          <div className="glass contact-card reveal">
            <a
              className="button button--primary"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Rayyan on WhatsApp (opens in a new tab)"
            >
              Chat on WhatsApp
            </a>

            <ul className="contact-links">
              <li>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn profile
                </a>
              </li>
              <li>
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                  GitHub profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}