import React, { useState } from 'react';
import Modal from '../../common/Modal';
import { ArrowUpRightIcon, GithubIcon } from '../../common/Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const screenshots = project.screenshots && project.screenshots.length > 0 
    ? project.screenshots 
    : [project.image];

  const [activeIdx, setActiveIdx] = useState(0);

  // Labels for screenshot previews if known
  const getScreenshotLabel = (url, idx) => {
    if (url.includes('dashboard')) return 'App Dashboard';
    if (url.includes('hero')) return 'Landing Page';
    if (url.includes('features')) return 'Core Features';
    return `Preview ${idx + 1}`;
  };

  return (
    <Modal isOpen={Boolean(project)} onClose={onClose} title={project.title}>
      <div className="modal-inner-flow">
        {/* Screenshots Showcase */}
        <div className="modal-gallery-wrap">
          <div className="modal-main-image-box">
            <img 
              src={screenshots[activeIdx]} 
              alt={`${project.title} screenshot ${activeIdx + 1}`} 
              className="modal-main-image"
              loading="lazy"
            />
          </div>

          {screenshots.length > 1 && (
            <div className="modal-thumbs-row">
              {screenshots.map((imgUrl, i) => (
                <button
                  key={i}
                  type="button"
                  className={`modal-thumb-btn ${activeIdx === i ? 'active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                  title={`View ${getScreenshotLabel(imgUrl, i)}`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${i + 1}`} className="modal-thumb-img" />
                  <span className="modal-thumb-label">{getScreenshotLabel(imgUrl, i)}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Header & Subtitle */}
        <div className="modal-header-block">
          <div className="modal-category-badge">{project.category} &bull; {project.status}</div>
          <h3 className="modal-project-heading">{project.title}</h3>
          <p className="modal-project-subheading">{project.subtitle}</p>
          <p className="modal-project-description">{project.description}</p>
        </div>

        {/* Key Metrics / Highlights */}
        {project.keyMetrics && project.keyMetrics.length > 0 && (
          <div className="modal-metrics-grid">
            {project.keyMetrics.map((metric, i) => (
              <div key={i} className="modal-metric-card">
                <span className="modal-metric-val">{metric.value}</span>
                <span className="modal-metric-lbl">{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Story & Problem Space */}
        {project.story && (
          <div className="modal-story-box">
            <h4 className="modal-section-title">The Engineering Challenge &amp; Story</h4>
            <p className="modal-story-text">{project.story}</p>
          </div>
        )}

        {/* Architecture Grid */}
        {project.architecture && (
          <div className="modal-architecture-wrap">
            <h4 className="modal-section-title">System Architecture &amp; Data Flow</h4>
            <div className="modal-arch-grid">
              {Object.entries(project.architecture).map(([key, val]) => (
                <div key={key} className="modal-arch-card">
                  <span className="modal-arch-key">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                  <p className="modal-arch-val">{val}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="modal-tech-wrap">
          <h4 className="modal-section-title">Tech Stack &amp; Libraries</h4>
          <div className="modal-tech-pills">
            {project.techStack.map((tech, i) => (
              <span key={i} className="modal-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="modal-actions-bar">
          {project.hasLiveDemo() && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-editorial-explore"
              title={`Launch live demo for ${project.title}`}
            >
              <span>Visit Live Website</span>
              <ArrowUpRightIcon size={14} />
            </a>
          )}

          {project.hasRepository() && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal-secondary-btn"
              title={`View source code on GitHub`}
            >
              <GithubIcon size={16} />
              <span>View Source Code</span>
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
