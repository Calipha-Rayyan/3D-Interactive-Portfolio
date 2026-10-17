import { useEffect, useRef, useState } from 'react';
import { navItems, profile } from '../data/portfolio.js';

export default function Navbar({ activeId, onNavigate }) {
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
    const onScroll = () => {
      setOpen(false);
    };
    const onOutsideClick = (e) => {
      if (!e.target.closest('.navbar')) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onOutsideClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onOutsideClick);
    };
  }, [open]);

  // Close mobile menu whenever active section changes
  useEffect(() => {
    setOpen(false);
  }, [activeId]);

  // Close mobile menu on desktop viewport resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 780) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (event, href) => {
    event.preventDefault();
    setOpen(false);
    const targetId = href.replace(/^#/, '');
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Brand identity */}
        <a
          className="navbar__brand"
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          aria-label={`${profile.name}, scroll to top`}
        >
          <span className="navbar__mark" aria-hidden="true">
            {profile.monogram}
          </span>
          <div className="navbar__titles">
            <span className="navbar__name">{profile.name}</span>
            <span className="navbar__role-label">CS &amp; Front-End</span>
          </div>
        </a>

        {/* Mobile menu hamburger toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close main navigation menu' : 'Open main navigation menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="navbar__toggle-bars" aria-hidden="true" />
        </button>

        {/* Navigation links & Quick Actions */}
        <nav
          id="site-menu"
          className={`navbar__menu ${open ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="navbar__links">
            {navItems.map((item) => {
              const targetId = item.href.replace(/^#/, '');
              const isActive = activeId === targetId;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`navbar__link ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="navbar__link-indicator" aria-hidden="true" />}
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