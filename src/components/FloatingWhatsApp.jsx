import { useEffect, useState } from 'react';
import { contact } from '../data/portfolio.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating shortcut once user scrolls past hero section
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside className="floating-whatsapp-container" aria-label="Quick contact shortcut">
      <a
        href={contact.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label={`Chat with Muhammad Rayyan Bhatti on WhatsApp at ${contact.whatsapp.displayNumber} (opens in a new tab)`}
        title="Chat on WhatsApp"
      >
        <span className="floating-whatsapp-btn__pulse" aria-hidden="true" />
        <WhatsAppIcon size={24} className="floating-whatsapp-btn__icon" />
        <span className="floating-whatsapp-btn__label">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
