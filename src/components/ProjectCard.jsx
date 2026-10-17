import { GitHubIcon, ExternalLinkIcon, CheckCircleIcon } from './Icons.jsx';

export default function ProjectCard({ project }) {
  const isDesignedPreview = project.previewType === 'designed-preview';

  return (
    <article className={`project-card project-card--${project.accent || 'cyan'}`}>
      {/* Visual Preview Header */}
      <div className="project-card__media-wrapper">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="project-card__img"
          loading="eager"
          width="600"
          height="340"
        />

        <div className="project-card__media-overlay" aria-hidden="true" />

        {/* Honest Source Badge */}
        <div className="project-card__badge-bar">
          <span className={`media-badge ${isDesignedPreview ? 'media-badge--preview' : 'media-badge--verified'}`}>
            {isDesignedPreview ? (
              <>
                <span className="media-badge__dot" aria-hidden="true" />
                <span>Designed Architecture Preview</span>
              </>
            ) : (
              <>
                <span className="media-badge__dot media-badge__dot--live" aria-hidden="true" />
                <span>Verified System Screenshot</span>
              </>
            )}
          </span>

          <span className="project-card__category-tag">{project.category}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>
        </div>

        <p className="project-card__description">{project.description}</p>

        {/* Key Engineering Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="project-card__highlights">
            <p className="project-card__highlights-title">Key Architecture Highlights</p>
            <ul className="project-card__highlights-list">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="project-card__highlight-item">
                  <CheckCircleIcon size={14} className="highlight-icon" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Tags */}
        <ul className="tag-list project-card__tags" aria-label={`Technologies in ${project.title}`}>
          {project.technologies.map((tech) => (
            <li key={tech} className="tech-badge">
              {tech}
            </li>
          ))}
        </ul>

        {/* Card Actions */}
        <div className="project-card__actions">
          {project.repoUrl && (
            <a
              className="button button--ghost button--small project-card__btn"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub repository for ${project.title} (opens in a new tab)`}
            >
              <GitHubIcon size={16} />
              <span>Repository</span>
            </a>
          )}

          {project.demoUrl ? (
            <a
              className="button button--primary button--small project-card__btn project-card__btn--live"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title} (opens in a new tab)`}
            >
              <span>Live Application</span>
              <ExternalLinkIcon size={15} />
            </a>
          ) : (
            <span className="pending-badge" title="No live public demo currently deployed">
              Live Demo Pending Deployment
            </span>
          )}
        </div>
      </div>
    </article>
  );
}