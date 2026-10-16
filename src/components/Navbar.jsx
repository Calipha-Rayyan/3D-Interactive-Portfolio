import { useEffect, useRef, useState } from 'react';
import { navItems, profile } from '../data/portfolio.js';

// Sticky header. On small screens the links move into a menu button.
// Escape closes the menu and returns focus to the button.
export default function Navbar({ activeId }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#home" onClick={close} aria-label={`${profile.name}, back to top`}>
          <span className="navbar__mark" aria-hidden="true">{profile.monogram}</span>
          <span className="navbar__name">Rayyan Bhatti</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="navbar__toggle-bars" aria-hidden="true" />
        </button>

        <nav id="site-menu" className="navbar__menu" aria-label="Main navigation" data-open={open}>
          <ul className="navbar__links">
            {navItems.map((item) => {
              const isActive = item.href === `#${activeId}`;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={close}
                    className={isActive ? 'is-active' : undefined}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}