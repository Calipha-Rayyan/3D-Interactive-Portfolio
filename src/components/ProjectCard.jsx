import DepthCard from './DepthCard.jsx';

// One project. Links are shown only when verified. Otherwise a plain
// "pending" note is displayed, so no fake link is ever rendered.
export default function ProjectCard({ project }) {
  return (
    <article className="reveal project-card-wrap">
      <DepthCard layer="mid" tilt float={false} className="project-card">
        <div className="project-card__header">
          <h3>{project.title}</h3>
          <span className="badge">{project.status}</span>
        </div>
        <p className="muted">{project.description}</p>

        {project.technologies.length > 0 ? (
          <ul className="tag-list">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        ) : (
          <p className="muted small">Technologies: pending owner confirmation.</p>
        )}

        <div className="project-card__links">
          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
          ) : (
            <span className="muted small">Demo link pending verification</span>
          )}
          {project.repoUrl ? (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          ) : (
            <span className="muted small">Repository link pending verification</span>
          )}
        </div>
      </DepthCard>
    </article>
  );
}
