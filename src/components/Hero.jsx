import { useRef, useState } from 'react';
import { profile } from '../data/portfolio.js';
import useSpatialTilt from '../hooks/useSpatialTilt.js';
import useReducedMotion from '../hooks/useReducedMotion.js';
import useScrollParallax from '../hooks/useScrollParallax.js';
import {
  ArrowRightIcon,
  SparklesIcon,
  SpatialCubeIcon,
  WhatsAppIcon,
  CheckCircleIcon,
} from './Icons.jsx';

export default function Hero({ onNavigate }) {
  const heroRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const is3DActive = !reducedMotion;

  const { containerRef, isEffectsActive } = useSpatialTilt({
    enabled: is3DActive,
    maxTilt: 16,
    damping: 0.08,
  });

  useScrollParallax(heroRef, isEffectsActive);

  const handleCtaClick = (e, targetId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero section" ref={heroRef} aria-labelledby="hero-name">
      {/* Dynamic ambient background glow */}
      <div className="hero__ambient-glow" aria-hidden="true" />

      <div className="container hero__grid">
        {/* Left Column: Typography, Credentials & Actions */}
        <div className="hero__copy">
          <div className="hero__status-badge">
            <span className="hero__status-dot" aria-hidden="true" />
            <span>Open to Front-End Roles &amp; AI Collaborations</span>
          </div>

          <h1 id="hero-name" className="hero__name">
            {profile.name}
          </h1>

          <p className="hero__role">
            <span className="hero__role-highlight">Front-End Developer</span> &amp; Computer Science Student
          </p>

          <p className="hero__tagline">{profile.tagline}</p>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a
              className="button button--primary"
              href="#projects"
              onClick={(e) => handleCtaClick(e, 'projects')}
              aria-label="Explore Muhammad Rayyan Bhatti's featured projects"
            >
              <span>Explore My Work</span>
              <ArrowRightIcon size={18} className="button__icon" />
            </a>

            <a
              className="button button--ghost"
              href="#contact"
              onClick={(e) => handleCtaClick(e, 'contact')}
              aria-label="Navigate to contact section to connect"
            >
              <span>Let&apos;s Connect</span>
              <WhatsAppIcon size={18} className="button__icon" />
            </a>
          </div>
        </div>

        {/* Right Column: Multi-Layered 3D Spatial Hologram Core */}
        <div
          className="hero__stage-wrapper"
          tabIndex={0}
          role="region"
          aria-label="Interactive 3D spatial developer core. Use pointer, touch drag, or arrow keys to rotate."
        >
          <div
            className={`hero__spatial-core ${is3DActive ? 'is-interactive' : ''}`}
            ref={containerRef}
          >
            {/* Layer 1: Ambient Space Grid & Energy Rings (Deep Parallax) */}
            <div className="spatial-layer spatial-layer--deep" data-speed="0.04" aria-hidden="true">
              <div className="spatial-grid-matrix" />
              <div className="spatial-energy-ring spatial-energy-ring--1" />
              <div className="spatial-energy-ring spatial-energy-ring--2" />
            </div>

            {/* Layer 2: Geometric Hologram Card (Main Focal Plane) */}
            <div className="spatial-layer spatial-layer--card" data-speed="0.09">
              <div className="spatial-glass-card">
                <div className="spatial-specular-light" aria-hidden="true" />
                <div className="spatial-card-border-glow" aria-hidden="true" />

                <div className="spatial-card-header">
                  <span className="spatial-chip">
                    <SparklesIcon size={12} />
                    <span>ENGINEERING CORE</span>
                  </span>
                  <span className="spatial-status-pill">QAU · ISB</span>
                </div>

                <div className="spatial-card-body">
                  <div className="spatial-monogram-wrap">
                    <div className="spatial-monogram-glow" aria-hidden="true" />
                    <span className="spatial-monogram-text">{profile.monogram}</span>
                  </div>

                  <h2 className="spatial-card-title">Muhammad Rayyan Bhatti</h2>
                  <p className="spatial-card-subtitle">BS Computer Science (2023 to Present)</p>

                  <div className="spatial-tech-row" aria-hidden="true">
                    <span className="tech-tag tech-tag--cyan">React 19</span>
                    <span className="tech-tag tech-tag--mint">FastMCP</span>
                    <span className="tech-tag tech-tag--indigo">Qdrant RAG</span>
                    <span className="tech-tag tech-tag--violet">FastAPI</span>
                  </div>
                </div>

                <div className="spatial-card-footer">
                  <span className="spatial-telemetry">
                    <CheckCircleIcon size={13} className="text-mint" />
                    <span>Verified Project Artifacts &amp; MCP Architecture</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Layer 3: Satellite Orbit Floating Chips (High Parallax Floating) */}
            <div className="spatial-layer spatial-layer--floating" data-speed="0.16" aria-hidden="true">
              <div className="satellite-chip satellite-chip--top-left">
                <span className="satellite-chip__icon">⚡</span>
                <span className="satellite-chip__text">MCP Native Architect</span>
              </div>

              <div className="satellite-chip satellite-chip--top-right">
                <span className="satellite-chip__icon">✨</span>
                <span className="satellite-chip__text">React &amp; Modern UI</span>
              </div>

              <div className="satellite-chip satellite-chip--bottom-left">
                <span className="satellite-chip__icon">🏛️</span>
                <span className="satellite-chip__text">Quaid-i-Azam University</span>
              </div>

              <div className="satellite-chip satellite-chip--bottom-right">
                <span className="satellite-chip__icon">🧠</span>
                <span className="satellite-chip__text">Vector RAG &amp; Qdrant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}