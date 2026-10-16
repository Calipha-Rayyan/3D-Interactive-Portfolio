import { contact } from '../data/portfolio.js';

// No contact form: this site has no backend, so a form would not send anything.
// Professional links are shown instead.
export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-kicker reveal">Contact</p>
        <h2 className="reveal">Let's connect</h2>
        <div className="contact__grid">
          <div className="glass reveal">
            <p>The best way to reach me professionally is through LinkedIn.</p>
            <p>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn profile
              </a>
            </p>
            {contact.github ? (
              <p>
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                  GitHub profile
                </a>
              </p>
            ) : (
              <p className="muted small">GitHub profile link: pending confirmation of the account.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
