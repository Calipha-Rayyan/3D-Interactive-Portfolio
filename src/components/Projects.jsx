import { useState } from 'react';
import { projects } from '../data/portfolio.js';
import ProjectCard from './ProjectCard.jsx';
import { SparklesIcon } from './Icons.jsx';

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'mcp', label: 'MCP & AI Agents', match: (p) => p.category.includes('MCP') },
  { id: 'rag', label: 'RAG & Vector Search', match: (p) => p.category.includes('Vector') || p.category.includes('RAG') },
  { id: 'ml', label: 'ML & Analytics', match: (p) => p.category.includes('Machine Learning') || p.category.includes('Analytics') || p.category.includes('Generative AI') },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    const cat = FILTER_CATEGORIES.find((c) => c.id === activeFilter);
    return cat && cat.match ? cat.match(project) : true;
  });

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <p className="section-kicker">
            <SparklesIcon size={14} className="inline-icon" />
            <span>Featured Engineering Work</span>
          </p>
          <h2 id="projects-title" className="section-title">
            Featured Projects &amp; AI Systems
          </h2>
          <p className="section-intro muted">
            Real software built across university coursework, the Zeppelin Labs AI Fellowship, and the Pak Angels GenAI Hackathon. Each card features genuine system screenshots or designed architecture previews, verified GitHub repositories, and architectural breakdowns.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="projects__filter-bar reveal" role="tablist" aria-label="Filter projects by technology category">
          {FILTER_CATEGORIES.map((filter) => {
            const isSelected = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`filter-pill ${isSelected ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="reveal">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}