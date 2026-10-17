import { about, education, experienceHighlights, profile } from '../data/portfolio.js';
import {
  GraduationCapIcon,
  CheckCircleIcon,
  SparklesIcon,
  CodeIcon,
} from './Icons.jsx';

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <p className="section-kicker">
            <GraduationCapIcon size={14} className="inline-icon" />
            <span>About &amp; Academic Background</span>
          </p>
          <h2 id="about-title" className="section-title">
            Engineering Philosophy &amp; Experience
          </h2>
          <p className="section-intro muted">
            Computer science undergraduate at Quaid-i-Azam University, Islamabad. I believe in practical mastery through building full-cycle projects—from architecture and UI design to testing and deployment.
          </p>
        </div>

        <div className="about__grid">
          {/* Left Column: Background, Strengths & Experience */}
          <div className="about__column">
            {/* Core Background Glass Card */}
            <div className="glass about-card reveal">
              <h3 className="about-card__title">
                <CodeIcon size={18} className="text-mint inline-icon" />
                <span>How I Build &amp; Learn</span>
              </h3>
              <div className="about-card__text">
                {about.paragraphs.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>

              <h4 className="about-subheading">Core Engineering Strengths</h4>
              <ul className="about-list">
                {about.strengths.map((item, idx) => (
                  <li key={idx} className="about-list__item">
                    <CheckCircleIcon size={15} className="text-mint about-list__icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fellowship & Hackathon Leadership Card */}
            <div className="glass about-card reveal">
              <h3 className="about-card__title">
                <SparklesIcon size={18} className="text-cyan inline-icon" />
                <span>Fellowships &amp; Team Leadership</span>
              </h3>
              <div className="experience-list">
                {experienceHighlights.map((exp, idx) => (
                  <div key={idx} className="experience-item">
                    <div className="experience-item__header">
                      <strong className="experience-item__role">{exp.role}</strong>
                      <span className="badge badge--cyan">{exp.badge}</span>
                    </div>
                    <span className="experience-item__org">{exp.organization}</span>
                    <p className="experience-item__desc muted small">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education Timeline, Learning Goals & Interests */}
          <div className="about__column">
            {/* Academic Credential Card */}
            <div className="glass about-card about-card--education reveal">
              <h3 className="about-card__title">
                <GraduationCapIcon size={18} className="text-indigo inline-icon" />
                <span>Formal Education</span>
              </h3>

              <div className="education-block">
                {education.map((edu, idx) => (
                  <div key={idx} className="education-item">
                    <div className="education-item__header">
                      <strong className="education-item__degree">{edu.degree}</strong>
                      <span className="badge badge--mint">{edu.status}</span>
                    </div>
                    <p className="education-item__institution">{edu.institution}</p>
                    <p className="education-item__period muted small">Timeline: {edu.period}</p>
                    <div className="education-item__focus">
                      <span className="focus-label">Key Focus Areas:</span>
                      <p className="focus-text muted small">{edu.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Goals Card */}
            <div className="glass about-card reveal">
              <h3 className="about-card__title">
                <SparklesIcon size={18} className="text-violet inline-icon" />
                <span>Current Learning Goals</span>
              </h3>
              <ul className="about-list">
                {about.learningGoals.map((goal, idx) => (
                  <li key={idx} className="about-list__item">
                    <span className="about-list__bullet about-list__bullet--violet" aria-hidden="true" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Interests Card */}
            <div className="glass about-card reveal">
              <h3 className="about-card__title">
                <span>Technical Interests</span>
              </h3>
              <ul className="tag-list" aria-label="Technical interests">
                {profile.interests.map((interest) => (
                  <li key={interest} className="interest-tag">
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}