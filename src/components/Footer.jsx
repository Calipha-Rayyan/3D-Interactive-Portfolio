import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}
