import { useRef, useState } from 'react';
import { profile } from '../data/portfolio.js';
import DepthCard from './DepthCard.jsx';
import useScrollParallax from '../hooks/useScrollParallax.js';
import useReducedMotion from '../hooks/useReducedMotion.js';

// Hero: real text on the left, a layered CSS 3D stack on the right.
// Back layer moves slowest on scroll, middle faster, front layer is tiltable.
// The stage is decorative (aria-hidden); every control is a real button.
export default function Hero() {
  const heroRef = useRef(null);
  const reduced = useReducedMotion();
  const [enhanced, setEnhanced] = useState(true);
  const effectsOn = enhanced && !reduced;

  useScrollParallax(heroRef);

  return (
    <section id="home" className="hero section" ref={heroRef} aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="section-kicker">Welcome</p>
          <h1 id="hero-title" className="hero__name">{profile.name}</h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a className="button button--primary" href={profile.primaryCta.href}>
              {profile.primaryCta.label}
            </a>
            <a className="button button--ghost" href={profile.secondaryCta.href}>
              {profile.secondaryCta.label}
            </a>
          </div>

          <div className="hero__options">
            <button
              type="button"
              className="motion-toggle"
              aria-pressed={enhanced}
              onClick={() => setEnhanced((value) => !value)}
            >
              3D effects: {effectsOn ? 'On' : 'Off'}
            </button>
            {reduced && (
              <p className="muted small">Your system asks for reduced motion, so 3D effects are off.</p>
            )}
          </div>
        </div>

        <div className="hero__stage" aria-hidden="true">
          <DepthCard layer="back" speed={0.04} float={false} className="hero__layer-back">
            <div className="hero__deco-lines" />
          </DepthCard>
          <DepthCard layer="mid" speed={0.1} className="hero__layer-mid">
            <p className="hero__chip-title">Interests</p>
            <ul className="tag-list">
              {profile.interests.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DepthCard>
          <DepthCard layer="front" speed={0.18} tilt={effectsOn} className="hero__layer-front">
            <div className="monogram">{profile.monogram}</div>
          </DepthCard>
        </div>
      </div>
    </section>
  );
}