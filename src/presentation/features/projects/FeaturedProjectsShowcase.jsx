import React from 'react';
import { ArrowUpRightIcon, GithubIcon } from '../../common/Icons';
import './featured-showcase.css';

export default function FeaturedProjectsShowcase({ 
  projects = [], 
  onSelectProject, 
  onNavigateToAllProjects 
}) {
  return (
    <section id="projects" className="featured-showcase-wrap">
      <div className="container">
        <div className="featured-cards-list">
          {projects.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <article 
                key={project.id} 
                className={`featured-showcase-item ${isReversed ? 'reversed' : ''}`}
              >
                {/* Content Column */}
                <div className="featured-content-col">
                  <div className="featured-eyebrow-row">
                    <span className="featured-num-tag">
                      0{idx + 1} / FEATURED PROJECT
                    </span>
                  </div>

                  <h3 className="featured-project-title">{project.title}</h3>
                  <p className="featured-project-subtitle">{project.subtitle}</p>
                  
                  <p className="featured-project-summary">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="featured-actions-row">
                    <button 
                      type="button" 
                      className="btn-featured-primary"
                      onClick={() => onSelectProject(project)}
                    >
                      <span>Explore Details</span>
                      <ArrowUpRightIcon size={16} />
                    </button>

                    {project.hasRepository() && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-editorial-icon"
                        aria-label={`GitHub repo for ${project.title}`}
                        title="View GitHub repository"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Media Mockup Column */}
                <div 
                  className="featured-media-col"
                  onClick={() => onSelectProject(project)}
                  title={`Click to view ${project.title}`}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="featured-mockup-img"
                    loading="lazy"
                  />
                  <span className="featured-media-overlay-badge">
                    View Full System &rarr;
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* High-Impact "See More Projects" Callout Banner */}
        <div className="see-more-callout-card">
          <div className="see-more-callout-content">
            <h3 className="see-more-heading" style={{ margin: 0 }}>Explore all projects</h3>
          </div>

          <button 
            type="button" 
            className="btn-see-more-callout"
            onClick={onNavigateToAllProjects}
            title="Explore all projects"
          >
            <span>View All Projects</span>
            <ArrowUpRightIcon size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
