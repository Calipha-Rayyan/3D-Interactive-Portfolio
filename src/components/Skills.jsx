import { skillGroups } from '../data/portfolio.js';
import { CodeIcon, LayersIcon, SparklesIcon } from './Icons.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <p className="section-kicker">
            <CodeIcon size={14} className="inline-icon" />
            <span>Technical Capabilities</span>
          </p>
          <h2 id="skills-title" className="section-title">
            Technologies &amp; Engineering Tooling
          </h2>
          <p className="section-intro muted">
            Organized by functional engineering domain. All skills are verified through university coursework, fellowship capstone projects, and real applications. No arbitrary percentages or ratings.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`glass skill-card skill-card--${group.accent || 'cyan'} reveal`}
            >
              <div className="skill-card__header">
                <div className="skill-card__icon-wrap">
                  <LayersIcon size={18} className="skill-card__icon" />
                </div>
                <div>
                  <h3 className="skill-card__title">{group.category}</h3>
                  <p className="skill-card__summary muted small">{group.summary}</p>
                </div>
              </div>

              <ul className="skill-card__tags tag-list" aria-label={`Skills in ${group.category}`}>
                {group.items.map((item) => (
                  <li key={item} className="skill-badge">
                    <span className="skill-badge__bullet" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {group.note && (
                <div className="skill-card__note">
                  <SparklesIcon size={13} className="text-violet inline-icon" />
                  <span className="muted small">{group.note}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}