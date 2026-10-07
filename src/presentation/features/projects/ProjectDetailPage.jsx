import React, { Suspense, lazy } from 'react';
import { ArrowUpRightIcon, GithubIcon, FileTextIcon } from '../../common/Icons';
import CaseStudyLoading from './components/CaseStudyLoading';
import './project-detail.css';

// Code-split case studies on demand to keep initial JavaScript bundle lean
const MyMindCaseStudy = lazy(() => import('./MyMindCaseStudy'));
const ScamDetectorCaseStudy = lazy(() => import('./ScamDetectorCaseStudy'));
const WHTCaseStudy = lazy(() => import('./WHTCaseStudy'));
const ChapterV2CaseStudy = lazy(() => import('./ChapterV2CaseStudy'));
const ChapterReadingAppCaseStudy = lazy(() => import('./ChapterReadingAppCaseStudy'));
const CONAMappingCaseStudy = lazy(() => import('./CONAMappingCaseStudy'));
const TPOCaseStudy = lazy(() => import('./TPOCaseStudy'));
const PureHarvestCaseStudy = lazy(() => import('./PureHarvestCaseStudy'));

export default function ProjectDetailPage({ 
  project, 
  onBack, 
  allProjects = [], 
  onSelectProject 
}) {
  if (!project) return null;

  const renderCaseStudy = () => {
    switch (project.id) {
      case 'mymind':
        return (
          <MyMindCaseStudy 
            project={project}
            onBack={onBack}
            allProjects={allProjects}
            onSelectProject={onSelectProject}
          />
        );
      case 'scam-mail-detector':
        return (
          <ScamDetectorCaseStudy 
            project={project}
            onBack={onBack}
            allProjects={allProjects}
            onSelectProject={onSelectProject}
          />
        );
      case 'wht':
        return (
          <WHTCaseStudy 
            project={project}
            onBack={onBack}
            allProjects={allProjects}
            onSelectProject={onSelectProject}
          />
        );
      case 'chapter-v2':
        return (
          <ChapterV2CaseStudy 
            project={project}
            onBack={onBack}
            allProjects={allProjects}
            onSelectProject={onSelectProject}
          />
        );
      case 'chapter-reading-llc':
        return (
          <ChapterReadingAppCaseStudy 
            project={project}
            onBack={onBack}
            allProjects={allProjects}
            onSelectProject={onSelectProject}
          />
        );
      case 'cona-mapping':
        return (
          <CONAMappingCaseStudy 
            project={project}
            onBack={onBack}
            allProjects={allProjects}
            onSelectProject={onSelectProject}
          />
        );
      case 'tpo-platform':
        return (
          <TPOCaseStudy 
            project={project}
            onBack={onBack}
            allProjects={allProjects}
            onSelectProject={onSelectProject}
          />
        );
      case 'pure-harvest':
        return (
          <PureHarvestCaseStudy 
            project={project}
            onBack={onBack}
            allProjects={allProjects}
            onSelectProject={onSelectProject}
          />
        );
      default:
        return null;
    }
  };

  const specificCaseStudy = renderCaseStudy();
  if (specificCaseStudy) {
    return (
      <Suspense fallback={<CaseStudyLoading onBack={onBack} />}>
        {specificCaseStudy}
      </Suspense>
    );
  }

  const screenshots = project.screenshots && project.screenshots.length > 0 
    ? project.screenshots 
    : [project.image];

  // Primary cover image (Hero preview)
  const heroImage = screenshots.find(s => s.includes('hero')) || project.image;
  // Dashboard screenshot if available
  const dashboardImage = screenshots.find(s => s.includes('dashboard')) || screenshots[1] || null;
  // Features screenshot if available
  const featuresImage = screenshots.find(s => s.includes('features')) || (screenshots.length > 2 ? screenshots[2] : null);

  // Compute Next / Prev project for pager
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const showRoleCol = Boolean(
    (project.contributions && project.contributions.length > 0) || project.role
  ) && project.id !== 'detection-illicit-messages';

  return (
    <div className="case-study-page-wrap">
      <div className="container case-study-container">
        {/* ===================================================================
            1. TOP SUB-NAV & BREADCRUMBS
            =================================================================== */}
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
            <span style={{ textTransform: 'capitalize' }}>{project.category}</span>
            <span className="case-study-breadcrumb-sep">/</span>
            <span className="case-study-breadcrumb-active">{project.title}</span>
          </div>

          <div className="case-study-nav-links">
            {project.hasPdf() && (
              <a 
                href={project.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-case-study-pdf"
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 1rem', 
                  fontSize: '0.82rem', 
                  fontWeight: 600,
                  backgroundColor: 'rgba(234, 88, 12, 0.12)', 
                  color: '#ea580c', 
                  border: '1px solid rgba(234, 88, 12, 0.3)',
                  borderRadius: 'var(--radius-full)',
                  textDecoration: 'none'
                }}
                title={`Read Research Paper PDF for ${project.title}`}
              >
                <FileTextIcon size={14} color="#ea580c" />
                <span>Read Paper (PDF)</span>
                <ArrowUpRightIcon size={13} color="#ea580c" />
              </a>
            )}
            {project.hasLiveDemo() && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-case-study-live"
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 1rem', 
                  fontSize: '0.82rem', 
                  fontWeight: 600,
                  backgroundColor: 'var(--color-ink)', 
                  color: 'var(--color-ink-inverse)', 
                  borderRadius: 'var(--radius-full)',
                  textDecoration: 'none'
                }}
                title={`Open live site for ${project.title}`}
              >
                <span>Live Site</span>
                <ArrowUpRightIcon size={14} color="var(--color-ink-inverse)" />
              </a>
            )}
            {project.hasRepository() && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-case-study-github"
                style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
                title="View GitHub repository"
              >
                <GithubIcon size={15} />
                <span>Code</span>
              </a>
            )}
          </div>
        </nav>

        {/* ===================================================================
            2. CASE STUDY HEADER (Title & Subtitle)
            =================================================================== */}
        <header className="case-study-header">
          <h1 className="case-study-title">{project.title}</h1>
          <p className="case-study-subtitle">{project.subtitle}</p>
        </header>

        {/* ===================================================================
            3. 3-COLUMN METADATA STRIP (Crema - Jog Format)
            =================================================================== */}
        <section 
          className="case-study-meta-strip" 
          aria-label="Project Overview Details"
          style={!showRoleCol ? { gridTemplateColumns: '1.2fr 1.8fr', maxWidth: '850px' } : undefined}
        >
          <div className="meta-strip-col">
            <span className="meta-strip-label">Timeline &amp; Status</span>
            <p className="meta-strip-text">
              {project.timeline || "Production System"}
              <br />
              <strong>Status:</strong> {project.status}
            </p>
          </div>

          {showRoleCol && (
            <div className="meta-strip-col">
              <span className="meta-strip-label">
                {project.isInternshipProject() 
                  ? "Role & Internship" 
                  : "Role & Contributions"}
              </span>
              {project.contributions && project.contributions.length > 0 ? (
                <ul className="meta-strip-list">
                  {project.contributions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="meta-strip-text">{project.role}</p>
              )}
            </div>
          )}

          <div className="meta-strip-col">
            <span className="meta-strip-label">
              {project.hasPdf() ? "Publications & Links" : "Repository & Live Site"}
            </span>
            <div className="meta-strip-links">
              {project.hasPdf() && (
                <a 
                  href={project.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="meta-strip-link"
                  style={{ fontWeight: 700, color: '#ea580c', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <FileTextIcon size={15} color="#ea580c" />
                  Read Full Paper (PDF) ↗
                </a>
              )}
              {project.hasLiveDemo() && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="meta-strip-link"
                  style={{ fontWeight: 600, color: 'var(--color-ink)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  View Live Site ↗
                </a>
              )}
              {project.hasRepository() && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="meta-strip-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  View GitHub Repository ↗
                </a>
              )}
              <span style={{ fontSize: '0.84rem', color: 'var(--color-ink-faint)', marginTop: '0.2rem' }}>
                Category: <strong>{project.category.toUpperCase()}</strong>
              </span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3.5. RESEARCH PUBLICATION BANNER (Rendered if Research Project / has PDF)
            =================================================================== */}
        {project.hasPdf() && (
          <section className="case-study-research-banner" aria-label="Research Publication Details" style={{
            margin: '2rem 0',
            padding: '1.75rem 2rem',
            borderRadius: 'var(--radius-lg, 12px)',
            background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.08) 0%, rgba(249, 115, 22, 0.03) 100%)',
            border: '1px solid rgba(234, 88, 12, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(234, 88, 12, 0.2)',
                  color: '#ea580c'
                }}>
                  Academic Publication
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-ink-faint)' }}>
                  18-Page Peer-Reviewed Research Study
                </span>
              </div>
              <a 
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: '#ea580c',
                  color: '#ffffff',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(234, 88, 12, 0.25)'
                }}
              >
                <FileTextIcon size={16} color="#ffffff" />
                <span>Download / Read Full Paper (PDF)</span>
                <ArrowUpRightIcon size={14} color="#ffffff" />
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '0.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(234, 88, 12, 0.15)' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--color-ink-faint)' }}>
                  Full Research Paper Title
                </span>
                <p style={{ margin: '0.35rem 0 0', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-ink)', lineHeight: 1.4 }}>
                  DETECTION OF POSSIBLE ILLICIT MESSAGES USING NATURAL LANGUAGE PROCESSING AND COMPUTERVISION ON TWITTER AND LINKED WEBSITES
                </p>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--color-ink-faint)' }}>
                  Authors &amp; Affiliation
                </span>
                <p style={{ margin: '0.35rem 0 0', fontSize: '0.88rem', color: 'var(--color-ink-muted)', lineHeight: 1.45 }}>
                  Dr. D. Maria manuel vianny, T. Ramya Priya, Achina Manikanta, Banala Rajashekhar, Chinnabathni Nishanth
                  <br />
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-ink-faint)' }}>
                    Department of CSE, Sri Indu Institute of Engineering &amp; Technology, Hyderabad
                  </span>
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ===================================================================
            4. ABOUT SECTION (2-Column Grid: Image Left, Narrative Right)
            =================================================================== */}
        <section className="case-study-section" aria-label={`About ${project.title}`}>
          <div className="case-study-about-grid">
            <div className="case-study-media-frame">
              <img 
                src={heroImage} 
                alt={`${project.title} Hero View`} 
                className="case-study-media-img"
              />
            </div>

            <div className="case-study-content-block">
              <h3 className="case-study-h3">About {project.title}</h3>
              <p className="case-study-paragraph">{project.description}</p>
              {project.story && (
                <p className="case-study-paragraph" style={{ color: 'var(--color-ink-faint)' }}>
                  {project.story}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. PROJECT BRIEF & GOALS (2-Column Grid with Divider Line)
            =================================================================== */}
        <section className="case-study-section" aria-label="Project Brief and Goals">
          <div className="case-study-brief-grid">
            <div className="case-study-brief-heading-col">
              <div className="case-study-divider-line"></div>
              <h3 className="case-study-h3">Project Brief &amp; Goals</h3>
            </div>

            <div className="case-study-brief-content-col">
              <p className="case-study-paragraph">
                For this system, the core architecture and development goals included:
              </p>

              {project.goals && project.goals.length > 0 ? (
                <ol className="case-study-goals-list">
                  {project.goals.map((goal, idx) => (
                    <li key={idx}>{goal}</li>
                  ))}
                </ol>
              ) : (
                <ol className="case-study-goals-list">
                  <li>Engineering an asynchronous backend pipeline for low-latency requests.</li>
                  <li>Designing an intuitive, responsive user experience with modern state management.</li>
                  <li>Ensuring strict security boundaries, authentication hygiene, and automated testing.</li>
                  <li>Deploying a containerized production environment with continuous monitoring.</li>
                </ol>
              )}
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. ENGINEERING PROCESS & ARCHITECTURE
            =================================================================== */}
        <section className="case-study-section" aria-label="Engineering Process">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">Engineering &amp; Architecture Process:</h2>
          </div>

          <div className="case-study-process-grid">
            <div className="case-study-process-label-col">
              <h4>System Design: Pipelines, State &amp; APIs</h4>
            </div>

            <div className="case-study-brief-content-col">
              <p className="case-study-paragraph">
                <strong>Purpose:</strong> To establish a robust, scalable architecture that provides sub-100ms response times while handling complex data interactions and model inference without blocking UI rendering.
              </p>

              {project.architecture && (
                <div className="case-study-arch-cards-grid">
                  {Object.entries(project.architecture).map(([key, val]) => (
                    <div key={key} className="case-study-arch-card">
                      <span className="case-study-arch-key">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <p className="case-study-arch-val">{val}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. VISUAL SHOWCASE: DASHBOARD & INTERFACE
            =================================================================== */}
        {dashboardImage && (
          <section className="case-study-visual-showcase" aria-label="Interactive Interface Showcase">
            <div className="case-study-large-media-box">
              <img 
                src={dashboardImage} 
                alt={`${project.title} Live Dashboard`} 
                className="case-study-large-img"
              />
            </div>

            <div className="case-study-caption-row">
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
                  Interactive User Experience
                </h4>
                <p className="case-study-paragraph">
                  The interface was engineered for clarity and immediate feedback. Key telemetry—including mood analytics, habit streaks, and contextual entries—are surfaced in an actionable digital headquarters.
                </p>
              </div>

              {project.takeaways && project.takeaways.length > 0 && (
                <div className="case-study-insights-box">
                  <h5 className="case-study-insights-title">Key Engineering Takeaways</h5>
                  <ul className="case-study-insights-list">
                    {project.takeaways.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ===================================================================
            8. VISUAL SHOWCASE: FEATURES & CAPABILITIES
            =================================================================== */}
        {featuresImage && (
          <section className="case-study-visual-showcase" aria-label="Core Capabilities">
            <div className="case-study-large-media-box">
              <img 
                src={featuresImage} 
                alt={`${project.title} Core Capabilities`} 
                className="case-study-large-img"
              />
            </div>
          </section>
        )}

        {/* ===================================================================
            9. TECHNOLOGIES & LIBRARIES
            =================================================================== */}
        <section className="case-study-section" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2.5rem' }}>
          <h3 className="case-study-h3" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>
            Technologies &amp; Libraries
          </h3>
          <div className="case-study-tech-pills">
            {project.techStack.map((tech, i) => (
              <span key={i} className="case-study-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ===================================================================
            10. BOTTOM ACTIONS & PAGER (Next / Prev)
            =================================================================== */}
        <div className="case-study-bottom-bar">
          <div className="case-study-action-buttons">
            {project.hasLiveDemo() && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-case-study-live"
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.65rem 1.4rem', 
                  fontSize: '0.9rem', 
                  fontWeight: 600,
                  backgroundColor: 'var(--color-ink)', 
                  color: 'var(--color-ink-inverse)', 
                  borderRadius: 'var(--radius-full)',
                  textDecoration: 'none'
                }}
              >
                <span>Launch Live Application</span>
                <ArrowUpRightIcon size={16} color="var(--color-ink-inverse)" />
              </a>
            )}
            {project.hasRepository() && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-case-study-github"
              >
                <GithubIcon size={18} />
                <span>View Source Code</span>
              </a>
            )}
          </div>

          <button 
            type="button" 
            className="btn-case-study-back" 
            onClick={onBack}
          >
            &larr; Back to All Projects
          </button>
        </div>
      </div>
    </div>
  );
}
