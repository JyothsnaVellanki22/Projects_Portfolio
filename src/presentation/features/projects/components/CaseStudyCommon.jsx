import React from 'react';
import { ArrowUpRightIcon, GithubIcon, FileTextIcon } from '../../../common/Icons';

export function CaseStudyNav({
  project,
  onBack,
  customBadge = null,
  docsLabel = 'Docs',
  codeLabel = 'Code',
  liveLabel = 'Live Demo'
}) {
  if (!project) return null;

  const isClient = project.projectType === 'client' || project.clientName;
  const categoryLabel = project.category === 'ai' 
    ? 'Generative AI & RAG' 
    : project.category === 'security' 
      ? 'Security & Audits' 
      : project.category === 'web' 
        ? 'Web Applications' 
        : (project.category || 'Engineering');

  return (
    <nav className="case-study-top-nav" aria-label="Case Study Navigation">
      <button 
        type="button" 
        className="btn-case-study-back" 
        onClick={onBack}
        title="Return to projects list"
      >
        <span>&larr; Back to All Projects</span>
      </button>

      <div className="case-study-breadcrumbs">
        <span>Projects</span>
        <span className="case-study-breadcrumb-sep">/</span>
        <span style={{ textTransform: 'capitalize' }}>{categoryLabel}</span>
        <span className="case-study-breadcrumb-sep">/</span>
        <span className="case-study-breadcrumb-active">{project.title}</span>
      </div>

      <div className="case-study-nav-links">
        {customBadge || (isClient && (
          <span 
            className="type-badge" 
            style={{ 
              backgroundColor: 'rgba(16, 185, 129, 0.12)', 
              border: '1px solid rgba(16, 185, 129, 0.3)', 
              color: '#10b981', 
              fontWeight: 600, 
              marginRight: '0.5rem' 
            }}
          >
            Client Work{project.clientName ? ` • ${project.clientName}` : ''}
          </span>
        ))}

        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-case-study-live"
            style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem' }}
            title="View Live Website"
          >
            <span>{liveLabel}</span>
            <ArrowUpRightIcon size={14} />
          </a>
        )}

        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-case-study-github"
            style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
            title="View GitHub repository"
          >
            <GithubIcon size={15} />
            <span>{codeLabel}</span>
          </a>
        )}

        {project.pdfUrl && (
          <a 
            href={project.pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-case-study-docs"
            style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
            title="View Research Paper / Documentation"
          >
            <FileTextIcon size={15} />
            <span>{docsLabel}</span>
          </a>
        )}
      </div>
    </nav>
  );
}

export function CaseStudyHeader({ title, subtitle }) {
  return (
    <header className="case-study-header">
      <h1 className="case-study-title">{title}</h1>
      {subtitle && <p className="case-study-subtitle">{subtitle}</p>}
    </header>
  );
}

export function CaseStudyCallout({ 
  badge = 'PROJECT OVERVIEW', 
  children, 
  badgeStyle = {}, 
  calloutStyle = {} 
}) {
  return (
    <div className="problem-statement-callout" style={calloutStyle}>
      <span className="problem-statement-badge" style={badgeStyle}>
        {badge}
      </span>
      {children}
    </div>
  );
}

export function CaseStudyTable({ 
  headers = ['Field', 'Details'], 
  rows = [], 
  colWidths = ['28%', '72%'] 
}) {
  return (
    <div className="case-study-table-wrapper">
      <table className="case-study-table">
        <thead>
          <tr>
            <th style={{ width: colWidths[0] }}>{headers[0]}</th>
            <th style={{ width: colWidths[1] }}>{headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td><strong>{row.label}</strong></td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CaseStudyMedia({ 
  src, 
  alt, 
  caption, 
  badge = null, 
  frameStyle = {}, 
  imgStyle = {} 
}) {
  return (
    <div className="case-study-media-frame" style={frameStyle}>
      <img 
        src={src} 
        alt={alt} 
        className="case-study-media-img" 
        style={imgStyle}
        loading="lazy"
      />
      {(caption || badge) && (
        <div className="case-study-media-caption" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          {caption && <span>{caption}</span>}
          {badge && (
            <span style={{ fontSize: '0.78rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: 'rgba(255, 255, 255, 0.15)', fontWeight: 600 }}>
              {badge}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export function CaseStudyBottomBar({ 
  project, 
  onBack, 
  metaLabel = null 
}) {
  return (
    <div className="case-study-bottom-bar">
      <div className="case-study-action-buttons">
        <span style={{ fontSize: '0.88rem', color: 'var(--color-ink-faint)' }}>
          {metaLabel || (project ? `${project.category?.toUpperCase() || 'ENGINEERING'} • ${project.title}` : '')}
        </span>
      </div>

      <button 
        type="button" 
        className="btn-case-study-back" 
        onClick={onBack}
        style={{ margin: 0 }}
      >
        <span>&larr; Back to All Projects</span>
      </button>
    </div>
  );
}

export function CaseStudyLayout({ 
  project, 
  onBack, 
  customBadge, 
  docsLabel,
  codeLabel,
  liveLabel,
  metaLabel,
  children 
}) {
  return (
    <div className="case-study-page-wrap">
      <div className="container case-study-container">
        <CaseStudyNav 
          project={project}
          onBack={onBack}
          customBadge={customBadge}
          docsLabel={docsLabel}
          codeLabel={codeLabel}
          liveLabel={liveLabel}
        />

        <CaseStudyHeader 
          title={project.title}
          subtitle={project.subtitle}
        />

        {children}

        <CaseStudyBottomBar 
          project={project}
          onBack={onBack}
          metaLabel={metaLabel}
        />
      </div>
    </div>
  );
}
