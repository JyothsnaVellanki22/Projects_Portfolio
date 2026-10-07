import React from 'react';
import './project-detail.css';

export default function TPOCaseStudy({ 
  project, 
  onBack, 
  allProjects = [], 
  onSelectProject 
}) {
  if (!project) return null;

  const navigateToMappingTool = () => {
    const mappingProject = allProjects.find((p) => p.id === 'cona-mapping');
    if (mappingProject && onSelectProject) {
      onSelectProject(mappingProject);
    }
  };

  return (
    <div className="case-study-page-wrap">
      <div className="container case-study-container">
        {/* ===================================================================
            TOP SUB-NAV & BREADCRUMBS
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
            <span style={{ textTransform: 'capitalize' }}>Client Work</span>
            <span className="case-study-breadcrumb-sep">/</span>
            <span className="case-study-breadcrumb-active">TPO Platform</span>
          </div>

          <div className="case-study-nav-links">
            <span className="type-badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#10b981', fontWeight: 600 }}>
              Client Work &bull; CONA Services
            </span>
          </div>
        </nav>

        {/* ===================================================================
            CASE STUDY HEADER
            =================================================================== */}
        <header className="case-study-header">
          <div style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
            <span className="case-study-kicker">CONA SERVICES &bull; ENTERPRISE PLATFORM &bull; JYOTHSNA VELLANKI</span>
          </div>
          <h1 className="case-study-title">
            Trade Promotion Optimization Platform
          </h1>
          <p className="case-study-subtitle">
            Enterprise analytics and an AI-powered agent platform
          </p>
        </header>

        {/* ===================================================================
            PROJECT OVERVIEW / PROBLEM STATEMENT CALLOUT
            =================================================================== */}
        <div className="problem-statement-callout" style={{ margin: '1.5rem 0 2.25rem' }}>
          <span className="problem-statement-badge">PROJECT OVERVIEW</span>
          <p className="problem-statement-text" style={{ fontSize: '1.02rem', lineHeight: '1.75' }}>
            At <strong>CONA Services</strong>, I worked on the <strong>Trade Promotion Optimization (TPO) platform</strong> and an AI-powered enterprise <strong>Agent Platform</strong> that helped business teams access promotion insights, sales analytics, and operational data. My work connected Angular micro-frontends, Python backend services, PostgreSQL data, and automated delivery to production Linux servers.
          </p>
          <p className="problem-statement-text" style={{ fontSize: '0.96rem', marginTop: '0.85rem', color: 'var(--color-ink-muted)' }}>
            The platform combined conventional application workflows with natural-language access through <strong>retrieval-augmented generation (RAG)</strong>. This gave users a dashboard-based experience for established workflows and a conversational interface for investigating business information. Docker and CI/CD automation reduced deployment time by a reported <strong>40%</strong>, while testing and monitoring supported a reported <strong>99.9%</strong> availability.
          </p>
        </div>

        {/* ===================================================================
            PROJECT AT A GLANCE TABLE
            =================================================================== */}
        <section className="case-study-section" aria-label="Project at a glance">
          <h3 className="case-study-h3" style={{ marginBottom: '1rem' }}>Project at a Glance</h3>
          <div className="case-study-table-wrapper">
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Area</th>
                  <th style={{ width: '70%' }}>Project Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Business Focus</strong></td>
                  <td>Trade promotion insights, sales analytics, and operational data</td>
                </tr>
                <tr>
                  <td><strong>Application Stack</strong></td>
                  <td>Angular 12+, TypeScript, RxJS, FastAPI, Flask, PostgreSQL</td>
                </tr>
                <tr>
                  <td><strong>AI Capabilities</strong></td>
                  <td>RAG, LangChain, LangGraph, conversation persistence</td>
                </tr>
                <tr>
                  <td><strong>Delivery &amp; Quality</strong></td>
                  <td>Docker, Linux, GitHub Actions, Azure DevOps, Postman, Playwright</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            PROBLEM & CONTRIBUTION
            =================================================================== */}
        <section className="case-study-section" aria-label="Problem and contribution">
          <div style={{ marginTop: '0.5rem' }}>
            <h3 className="case-study-h3">The Problem</h3>
            <p className="case-study-paragraph">
              Trade promotion decisions depend on understanding promotion activity and the related sales and operational data. Business teams needed easier access to that information, while engineering teams needed to keep frontend interactions, backend services, and database results aligned as requirements changed. Manual data lookup also created an opportunity for a conversational interface that could retrieve relevant enterprise information.
            </p>
            <p className="case-study-paragraph">
              The engineering challenge extended beyond displaying data. The solution needed secure APIs, persistent conversations, real-time synchronization, reliable releases, and clear coordination across product, development, QA, and DevOps teams.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3 className="case-study-h3">My Contribution</h3>
            <p className="case-study-paragraph">
              I contributed to the platform architecture, Angular implementation, Python microservices, RAG workflows, database optimization, automated testing, deployment coordination, and production troubleshooting.
            </p>
            <p className="case-study-paragraph">
              I also worked directly with customer-facing teams and business stakeholders to turn operational requirements into technical specifications and release-ready features.
            </p>
          </div>
        </section>

        {/* ===================================================================
            HERO MEDIA FRAME: REAL DASHBOARD
            =================================================================== */}
        <div className="case-study-media-frame" style={{ margin: '2.5rem 0 3rem', background: '#0f172a', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid var(--color-border)' }}>
          <img 
            src="/assets/projects/tpo_workflow_dashboard.png" 
            alt="Trade Promotion Optimization Platform Enterprise Navigation Dashboard" 
            className="case-study-media-img"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-sm)' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', flexWrap: 'wrap', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.86rem', color: '#94a3b8', fontWeight: 500 }}>
              CONA TPO Platform Dashboard: Opportunities Mapping &bull; Optimize Promo Plan &bull; Simulate Promo Plan
            </span>
            <span style={{ fontSize: '0.78rem', padding: '0.25rem 0.65rem', borderRadius: '9999px', background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.3)', fontWeight: 600 }}>
              Active User: Jyothsna Vellanki
            </span>
          </div>
        </div>

        {/* ===================================================================
            SECTION 1: ARCHITECTURE AND FRAMEWORK CHOICES
            =================================================================== */}
        <section className="case-study-section" aria-label="Architecture and framework choices">
          <h3 className="case-study-h3">1. Architecture and Framework Choices</h3>
          <p className="case-study-paragraph">
            The architecture separated the user interface, business services, data access, and AI orchestration. Angular micro-frontends presented the application and chatbot experience. FastAPI and Flask services handled API requests, business logic, data orchestration, and AI inference workflows. PostgreSQL stored structured business data and persisted conversations.
          </p>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Angular Micro-Frontends
            </h4>
            <p className="case-study-paragraph">
              Angular 12+, TypeScript, and RxJS supported a component-based interface with asynchronous data flows. The chatbot could sit alongside enterprise dashboards as a micro-frontend, with conversation management and session state handled within its user experience. This structure allowed the application to organize distinct workflows into modules while maintaining integration with the larger TPO platform.
            </p>
            <p className="case-study-paragraph">
              A micro-frontend approach also creates coordination needs. Shared authentication behavior, API contracts, and integration testing remain important because independently developed interface modules still participate in one business workflow.
            </p>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Python Microservices
            </h4>
            <p className="case-study-paragraph">
              FastAPI and Flask supported modular services for application APIs and AI workflows. FastAPI provided request validation and API development capabilities; Flask supported focused Python backend services. Separating service responsibilities helped keep business logic, retrieval, and inference orchestration maintainable as the platform evolved.
            </p>
            <p className="case-study-paragraph">
              WebSocket support enabled real-time promotion data synchronization. REST endpoints served request-and-response operations, while WebSocket connections supported updates without requiring users to repeatedly refresh a view. The implementation needed testing across both interaction types because a working API response alone does not establish that a live update reaches the interface.
            </p>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Data Persistence and Orchestration
            </h4>
            <p className="case-study-paragraph">
              PostgreSQL provided structured retrieval and persistent conversation storage. SQLAlchemy supported ORM-based data access, and Alembic managed database migrations. LangChain and LangGraph supported retrieval pipelines, prompt workflows, multi-step agent orchestration, and context-aware responses.
            </p>
          </div>

          <div className="case-study-table-wrapper" style={{ margin: '1.75rem 0' }}>
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '28%' }}>Layer</th>
                  <th style={{ width: '72%' }}>Responsibility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Angular and RxJS</strong></td>
                  <td>Dashboard and chatbot interactions, asynchronous updates, session continuity</td>
                </tr>
                <tr>
                  <td><strong>FastAPI and Flask</strong></td>
                  <td>Validated APIs, business logic, service integration, WebSocket support</td>
                </tr>
                <tr>
                  <td><strong>PostgreSQL</strong></td>
                  <td>Structured business data retrieval and conversation persistence</td>
                </tr>
                <tr>
                  <td><strong>LangChain &amp; LangGraph</strong></td>
                  <td>Retrieval, prompt composition, context handling, agent workflow orchestration</td>
                </tr>
                <tr>
                  <td><strong>Docker and CI/CD</strong></td>
                  <td>Consistent application packaging, builds, tests, and deployment automation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: AI RETRIEVAL AND BUSINESS DATA ACCESS
            =================================================================== */}
        <section className="case-study-section" aria-label="AI retrieval and business data access">
          <h3 className="case-study-h3">2. AI Retrieval and Business Data Access</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Why Retrieval-Augmented Generation (RAG)
            </h4>
            <p className="case-study-paragraph">
              The Agent Platform used RAG to connect natural-language questions with enterprise information. Rather than depending only on a model’s general knowledge, the workflow retrieved relevant business context and used that context to support response generation. This was useful for promotion insights and sales analytics because the answer depended on the organization’s proprietary data.
            </p>
            <p className="case-study-paragraph">
              The retrieval pipeline integrated PostgreSQL for structured data access. Conversation persistence allowed the application to retain exchanges across a session, while multi-turn context tracking helped subsequent questions remain connected to the ongoing discussion.
            </p>
          </div>

          <div style={{ marginTop: '1.75rem', padding: '1.25rem 1.5rem', background: 'var(--color-canvas-subtle)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid #0ea5e9' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>
              A Representative Question Workflow
            </h4>
            <ol style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.92rem', lineHeight: '1.7', color: 'var(--color-ink)' }}>
              <li>A business user opens the Angular chatbot within a TPO dashboard and asks about promotion performance for a selected period.</li>
              <li>The frontend sends the request and relevant session context to a backend API.</li>
              <li>Authentication and request validation establish whether the request can proceed before the application accesses the required business information.</li>
              <li>The backend coordinates retrieval of the relevant promotion or sales data from PostgreSQL.</li>
              <li>LangChain and LangGraph organize the retrieval and prompt workflow, combining the question, conversation context, and retrieved information for response generation.</li>
              <li>The application returns the answer to the interface and persists the conversation for continued multi-turn interaction.</li>
            </ol>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-ink-faint)', fontStyle: 'italic', marginTop: '0.75rem', marginBottom: 0 }}>
              Preserving context tracking maintains continuity (e.g., promotional timeframe or retail cluster) without requiring the user to repeat parameters.
            </p>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Keeping Database Access Efficient
            </h4>
            <p className="case-study-paragraph">
              I optimized PostgreSQL indexing and queries to improve retrieval latency and support the AI workflows. Efficient database access matters because retrieval is one part of a longer request path: a slow query can delay both an ordinary API response and a generated answer. SQLAlchemy supported consistent data access, while Alembic kept schema changes managed through migrations.
            </p>
            <p className="case-study-paragraph">
              The data model needed to serve two related responsibilities: returning business information and retaining conversational state. Those responsibilities have different access patterns, so query design and indexing needed to account for the way each was used.
            </p>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Evaluating the AI Experience
            </h4>
            <p className="case-study-paragraph">
              Logging and monitoring tracked AI performance, response quality, application health, and failures. Technical success and answer usefulness are separate concerns: a request may complete successfully while its answer is incomplete or based on insufficient context. Monitoring both supported investigation across retrieval, orchestration, and the user-facing response.
            </p>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-faint)', fontStyle: 'italic', lineHeight: '1.6' }}>
              The stated sub-200ms performance applies to the described API endpoints. It does not establish the total latency of a complete RAG answer, which also includes retrieval, orchestration, and model generation.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: USER EXPERIENCE SECURITY AND VALIDATION
            =================================================================== */}
        <section className="case-study-section" aria-label="User experience security and validation">
          <h3 className="case-study-h3">3. User Experience, Security, and Validation</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Embedding the Chatbot in the Application
            </h4>
            <p className="case-study-paragraph">
              I built an Angular micro-frontend chatbot UI with conversation management, session persistence, and multi-turn context tracking. Integrating it into the enterprise dashboard made conversational access available alongside established TPO workflows, so users could investigate information within the application they already used.
            </p>
            <p className="case-study-paragraph">
              TypeScript supported clearer data contracts in the frontend, while RxJS managed asynchronous interactions with backend services. The interface needed to handle API responses and live promotion updates consistently so the conversation and surrounding application remained usable during normal workflows.
            </p>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Secure API Access
            </h4>
            <p className="case-study-paragraph">
              The FastAPI endpoints implemented JWT/OAuth2 authentication, request validation, and rate-limiting strategies. Authentication supported controlled access to application services; validation checked incoming request structure; rate limiting helped manage repeated requests. Together, these controls supported secure frontend-to-backend communication.
            </p>
            <p className="case-study-paragraph">
              Postman test suites validated API communication and behavior. Authentication issues were also part of production troubleshooting, where I examined the request, API response, and authentication flow to identify whether a failure originated in the client, backend, or integration.
            </p>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Automated Workflow Coverage
            </h4>
            <p className="case-study-paragraph">
              I engineered a Playwright automation framework covering more than 50 user workflows. The framework supported functional, integration, regression, and user-workflow validation, while Postman complemented it with focused API testing. Browser automation checked the connected user experience rather than relying only on individual endpoint success.
            </p>
            <p className="case-study-paragraph">
              Testing helped validate that frontend actions, service responses, and application behavior continued to work together after changes. I worked with developers and QA engineers to investigate defects, validate fixes, and assess deployment readiness before customer-facing releases.
            </p>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Requirements, Acceptance, and Connected Quality
            </h4>
            <p className="case-study-paragraph">
              Customer meetings, technical discussions, and implementation planning sessions helped clarify operational needs and technical constraints. I translated business workflows into technical specifications and coordinated development tasks across frontend, backend, database, QA, and DevOps teams.
            </p>
            <p className="case-study-paragraph">
              Project status reviews made defects, risks, dependencies, and milestones visible to both technical and business stakeholders. The quality process joined requirements, implementation, API validation, browser testing, and release verification, reducing the chance that a feature would be considered complete solely because its code was finished.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: DEPLOYMENT AND PRODUCTION SUPPORT
            =================================================================== */}
        <section className="case-study-section" aria-label="Deployment and production support">
          <h3 className="case-study-h3">4. Deployment and Production Support</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Containerization and Automated Delivery
            </h4>
            <p className="case-study-paragraph">
              Docker standardized application environments and packaging. GitHub Actions CI/CD pipelines automated delivery to production Linux servers, and my work also included Azure DevOps, Git, and GitHub release activities. The reported result was a <strong>40% reduction in deployment time</strong>.
            </p>
            <p className="case-study-paragraph">
              Automated builds and tests connected development changes with release readiness. Environment configuration, application testing, deployment validation, and post-release verification formed part of the production turnover process. Containerization kept packaging consistent across environments.
            </p>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Coordinating Implementation &amp; Investigating Production Issues
            </h4>
            <p className="case-study-paragraph">
              I coordinated implementation activities across frontend, backend, database, QA, and DevOps teams. This included tracking dependencies, testing milestones, deployment readiness, and production issues through Agile workflows. Cross-team coordination mattered because an interface change could depend on an API update, a database migration, or a configuration change.
            </p>
            <p className="case-study-paragraph">
              My production support work covered application, API, database, authentication, and integration issues. I analyzed logs, API responses, SQL queries, and application behavior, then coordinated with engineering teams to resolve defects and validate fixes.
            </p>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Monitoring, Post-Release Verification &amp; Knowledge Transfer
            </h4>
            <p className="case-study-paragraph">
              Logging, monitoring, and observability tracked application health, AI behavior, response quality, reliability, and production failures. These signals helped identify where an issue occurred and supported proactive troubleshooting, contributing to reported <strong>99.9% system availability</strong>.
            </p>
            <p className="case-study-paragraph">
              I provided technical guidance to developers, QA engineers, and business users on application workflows, APIs, reporting, integrations, troubleshooting, and operational support, connecting engineering implementation with the knowledge needed to support the platform.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: OUTCOMES AND LESSONS
            =================================================================== */}
        <section className="case-study-section" aria-label="Outcomes and lessons">
          <h3 className="case-study-h3">5. Outcomes and Lessons</h3>
          <p className="case-study-paragraph">
            The work connected an Angular TPO experience with Python microservices, PostgreSQL retrieval, and an AI-powered Agent Platform. It included persistent conversations, multi-turn context, secure APIs, real-time synchronization, automated workflow testing, and coordinated production delivery.
          </p>
          <p className="case-study-paragraph">
            The business contribution was easier access to promotion and operational information, including natural-language investigation through the chatbot. The engineering contribution was a modular implementation supported by automated delivery, testing, monitoring, and cross-functional release coordination.
          </p>

          <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', margin: '1.5rem 0 0.85rem' }}>
            Reported Results
          </h4>
          <div className="case-study-table-wrapper">
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '28%' }}>Measure</th>
                  <th style={{ width: '28%' }}>Reported Outcome</th>
                  <th style={{ width: '44%' }}>Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Deployment Time</strong></td>
                  <td><span style={{ color: '#16a34a', fontWeight: 700 }}>40% reduction</span></td>
                  <td>Docker and automated CI/CD delivery</td>
                </tr>
                <tr>
                  <td><strong>System Availability</strong></td>
                  <td><span style={{ color: '#16a34a', fontWeight: 700 }}>99.9%</span></td>
                  <td>Application reliability and monitoring</td>
                </tr>
                <tr>
                  <td><strong>API Usage</strong></td>
                  <td><strong>500+ daily queries</strong></td>
                  <td>Described FastAPI endpoints</td>
                </tr>
                <tr>
                  <td><strong>API Response Time</strong></td>
                  <td><strong>Sub-200ms</strong></td>
                  <td>Endpoint performance, not complete AI answer generation</td>
                </tr>
                <tr>
                  <td><strong>Automation Coverage</strong></td>
                  <td><strong>50+ workflows</strong></td>
                  <td>Playwright user-workflow validation</td>
                </tr>
                <tr>
                  <td><strong>Customer Delivery</strong></td>
                  <td><strong>15+ features</strong></td>
                  <td>Cross-functional Agile development</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="research-takeaways-grid" style={{ margin: '2rem 0 1.5rem' }}>
            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">What I Learned</span>
              <p className="takeaway-pill-text">
                An AI feature depends heavily on the surrounding application architecture. Useful answers require clean data access and conversation state management, while a dependable enterprise experience requires secure APIs, a responsive interface, predictable releases, and continuous support.
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Practical Next Steps</span>
              <p className="takeaway-pill-text">
                Measure retrieval and generation latency separately, evaluate answer quality across representative promotion questions, and track release duration and availability metrics across extended deployment intervals.
              </p>
            </div>
          </div>

          <div style={{ padding: '1.25rem 1.5rem', background: 'var(--color-canvas-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-ink)', marginBottom: '0.45rem' }}>
              Portfolio Summary
            </h4>
            <p style={{ fontSize: '0.94rem', color: 'var(--color-ink-muted)', lineHeight: '1.7', margin: 0 }}>
              I contributed to CONA’s TPO platform and RAG-based Agent Platform across Angular, Python, PostgreSQL, AI orchestration, testing, and production support. Docker and CI/CD improved deployment efficiency, while automated validation and monitoring supported reliable delivery of customer-facing features.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: SISTER FEATURE INTEGRATION (CTA MAPPING TOOL)
            =================================================================== */}
        <section className="case-study-section" aria-label="Ecosystem mapping module integration">
          <h3 className="case-study-h3">6. Geographic Module Integration: CONA Mapping Tool</h3>
          <p className="case-study-paragraph">
            Within the TPO application's <strong>Opportunities Mapping</strong> section, I also engineered the <strong>TPO_CTA_MAP</strong> feature module for integration into the <strong>Volume Decomposition</strong> workflow.
          </p>
          <p className="case-study-paragraph">
            This module connects Census Trade Area performance with county boundaries, retailer drill-downs, and financial metrics (Volume, Net Revenue, COGS) in an interactive spatial interface.
          </p>

          <div style={{ marginTop: '1.25rem' }}>
            <button
              type="button"
              className="btn-case-study-back"
              onClick={navigateToMappingTool}
              style={{ padding: '0.65rem 1.4rem', backgroundColor: 'var(--color-ink)', color: '#ffffff', borderColor: 'var(--color-ink)', fontWeight: 600, cursor: 'pointer' }}
            >
              <span>Explore CONA Mapping Tool &rarr;</span>
            </button>
          </div>
        </section>

        {/* ===================================================================
            BOTTOM ACTIONS
            =================================================================== */}
        <div className="case-study-bottom-bar">
          <div className="case-study-action-buttons">
            <span style={{ fontSize: '0.88rem', color: 'var(--color-ink-faint)' }}>
              CONA Services &bull; Enterprise Platform Engineering
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
      </div>
    </div>
  );
}
