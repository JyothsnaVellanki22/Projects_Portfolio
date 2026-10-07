import React from 'react';
import { GithubIcon, ArrowUpRightIcon, FileTextIcon } from '../../common/Icons';
import './projects.css';

export default function ProjectCard({ project, onSelectProject, className }) {
  return (
    <article className={`editorial-card ${className || ''}`.trim()} data-project-id={project.id}>
      <figure className="editorial-card-figure">
        <img 
          src={project.image} 
          alt={project.title} 
          className="editorial-card-img"
          loading="lazy"
        />
      </figure>

      <div className="editorial-card-body">
        <div className="editorial-card-header-row">
          <span className="editorial-card-category">{project.category}</span>
          <span 
            className={`editorial-card-type-badge ${project.getProjectTypeClass()}`}
            title={project.clientName ? `Client: ${project.clientName}` : project.getProjectTypeLabel()}
          >
            {project.getProjectTypeLabel()}
          </span>
        </div>
        <h3 className="editorial-card-title">{project.title}</h3>
        <p className="editorial-card-subtitle">{project.subtitle}</p>

        <p className="editorial-card-summary">
          {project.summary}
        </p>

        <div className="editorial-card-stack">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span key={i} className="editorial-stack-pill">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="editorial-stack-pill">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="editorial-card-actions">
          <button 
            type="button" 
            className="btn-editorial-explore"
            onClick={() => onSelectProject(project)}
          >
            <span>Explore Details</span>
          </button>

          <div className="card-secondary-links">
            {project.hasPdf() && (
              <a 
                href={project.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-editorial-icon"
                aria-label={`Read research paper PDF for ${project.title}`}
                title="Read Research Paper (PDF)"
              >
                <FileTextIcon size={16} />
              </a>
            )}
            {project.hasLiveDemo() && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-editorial-icon"
                aria-label={`Live demo for ${project.title}`}
                title="Launch Live Application"
              >
                <ArrowUpRightIcon size={16} />
              </a>
            )}
            {project.hasRepository() && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-editorial-icon"
                aria-label={`GitHub repo for ${project.title}`}
                title="View GitHub Repository"
              >
                <GithubIcon size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
