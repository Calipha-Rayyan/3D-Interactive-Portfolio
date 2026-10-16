import { projects } from '../data/portfolio.js';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-kicker reveal">Projects</p>
        <h2 className="reveal">Featured work</h2>
        <p className="muted reveal section-intro">
          Repository links come from my public GitHub account. Live demos will be added once they are verified.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}