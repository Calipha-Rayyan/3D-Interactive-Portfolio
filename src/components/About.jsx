import { about, education, profile } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-kicker reveal">About</p>
        <h2 className="reveal">Background and goals</h2>
        <div className="about__grid">
          <div className="glass reveal">
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <h3>Strengths</h3>
            <ul className="list">
              {about.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="glass reveal">
            <h3>Learning goals</h3>
            <ul className="list">
              {about.learningGoals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Interests</h3>
            <ul className="tag-list">
              {profile.interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Education</h3>
            {education.map((edu) => (
              <div key={edu.degree}>
                <strong>{edu.degree}</strong>
                <div className="muted">{edu.institution}</div>
                <div className="muted">{edu.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
