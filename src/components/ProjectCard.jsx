// One project card. Links appear only when they exist. A demo that has not been
// verified is shown as a clear pending note, never as a fake button.
export default function ProjectCard({ project }) {
  return (
    <div className="reveal project-card-wrap">
      <article className="project-card">
        <div className={`project-card__preview project-card__preview--${project.preview}`} aria-hidden="true">
          <span className="project-card__initial">{project.initials}</span>
        </div>

        <div className="project-card__body">
          <p className="project-card__category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="muted">{project.description}</p>

          <ul className="tag-list" aria-label={`Technologies used in ${project.title}`}>
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="project-card__actions">
            {project.repoUrl && (
              <a
                className="button button--ghost button--small"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View repository for ${project.title} (opens in a new tab)`}
              >
                View Repository
              </a>
            )}
            {project.demoUrl ? (
              <a
                className="button button--primary button--small"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${project.title} (opens in a new tab)`}
              >
                Live Demo
              </a>
            ) : (
              <span className="pending-note">Live demo pending verification</span>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}