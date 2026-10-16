import { skillGroups } from '../data/portfolio.js';

// Skills are grouped by category. No ratings or years of experience are shown.
export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-kicker reveal">Skills</p>
        <h2 className="reveal">Technologies I work with</h2>
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="glass reveal" key={group.category}>
              <h3>{group.category}</h3>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
