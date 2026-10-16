import { navItems, profile } from '../data/portfolio.js';

// Top navigation. Links jump to section ids on the page.
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#home" aria-label={`${profile.name}, back to top`}>
          {profile.monogram}
        </a>
        <nav aria-label="Main navigation">
          <ul className="navbar__links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
