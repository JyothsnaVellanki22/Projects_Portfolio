import React from 'react';
import { CaseStudyNav, CaseStudyHeader, CaseStudyCallout, CaseStudyBottomBar } from './components/CaseStudyCommon';
import './project-detail.css';

export default function ChapterReadingAppCaseStudy({ 
  project, 
  onBack 
}) {
  if (!project) return null;

  return (
    <div className="case-study-page-wrap">
      <div className="container case-study-container">
        {/* Top Navigation */}
        <CaseStudyNav project={project} onBack={onBack} />

        {/* Case Study Header */}
        <CaseStudyHeader 
          title="Chapter Reading Engagement Platform"
          subtitle="Connecting student reading activity with educator insights"
        />

        {/* Executive Summary Callout */}
        <CaseStudyCallout badge="PROJECT OVERVIEW">
          <p className="problem-statement-text" style={{ fontSize: '1.02rem', lineHeight: '1.75' }}>
            At Chapter Reading LLC, I worked within an agile engineering team consisting of 2 software engineers and 2 data engineers, leading full-stack development work on a reading engagement platform that connected student reading activity with professor-facing analytics. My work covered React and TypeScript interfaces, Python FastAPI backend workflows, PostgreSQL data architecture, and Supabase integration. The platform brought together course content, annotations, reading progress, authentication, and role-based application experiences.
          </p>
          <p className="problem-statement-text" style={{ fontSize: '0.96rem', marginTop: '0.85rem', color: 'var(--color-ink-muted)' }}>
            The central goal was to give students a structured place to engage with assigned texts and give educators better visibility into that engagement. In close collaboration with our fellow software engineers and data engineering teammates, I helped build the application and data foundation for those workflows, while preparing structured information for future LLM-powered insights, concept extraction, and engagement reporting.
          </p>
        </CaseStudyCallout>

        {/* ===================================================================
            PROJECT OVERVIEW TABLE
            =================================================================== */}
        <section className="case-study-section" aria-label="Project Overview">
          <h3 className="case-study-h3" style={{ marginBottom: '1rem' }}>Project at a Glance</h3>
          <div className="case-study-table-wrapper">
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '28%' }}>Area</th>
                  <th style={{ width: '72%' }}>Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Company / Client</strong></td>
                  <td><strong>Chapter Reading LLC</strong></td>
                </tr>
                <tr>
                  <td><strong>Role & Timeline</strong></td>
                  <td><strong>Software Engineer</strong> • Remote Florida • May 2026 to August 2026 (Jyothsna Vellanki)</td>
                </tr>
                <tr>
                  <td><strong>Team Composition</strong></td>
                  <td>Collaborative team of <strong>2 Software Engineers</strong> and <strong>2 Data Engineers</strong></td>
                </tr>
                <tr>
                  <td><strong>Primary Users</strong></td>
                  <td>Students, professors, and administrators</td>
                </tr>
                <tr>
                  <td><strong>Core Workflows</strong></td>
                  <td>Course content, annotations, reading progress, and engagement analytics</td>
                </tr>
                <tr>
                  <td><strong>Technology Stack</strong></td>
                  <td>React, TypeScript, Python, FastAPI, PostgreSQL, and Supabase</td>
                </tr>
                <tr>
                  <td><strong>My Focus</strong></td>
                  <td>Full-stack development, data architecture, access controls, and delivery coordination</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            SECTION 1: THE PROBLEM & COMPREHENSION GAP
            =================================================================== */}
        <section className="case-study-section" aria-label="Comprehension Gap in Independent Reading">
          <h3 className="case-study-h3">1. Comprehension Gap in Independent Reading</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              The Problem with Unobserved Reading
            </h4>
            <p className="case-study-paragraph">
              Assigned reading alone gives an educator limited visibility into how students interact with a text. A completed assignment does not explain which passages raised questions, where students concentrated their notes, or where additional classroom discussion may be useful. Students also need their highlights, notes, and progress to remain connected to the material they are reading.
            </p>
            <p className="case-study-paragraph">
              Chapter addressed this by joining the reading experience with an analytics workflow. The engineering challenge was to preserve the context of student activity, organize it by course and content, and make it accessible through the appropriate student, professor, or administrator experience.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              My Engineering Contribution
            </h4>
            <p className="case-study-paragraph">
              Working alongside 2 software engineers and 2 data engineers, I led frontend implementation and contributed across backend APIs, relational data models, SQL queries, and engagement analytics. I translated product requirements into application workflows, established reusable components and role-based navigation, and collaborated closely with the data engineering team on schema designs and data structures to power analytics and future AI features.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              A Representative User Journey
            </h4>
            <p className="case-study-paragraph">
              A student opens an assigned reading, highlights a passage, adds a note, and continues reading. The application saves the interaction with its reading context and maintains the student’s progress. Later, a professor reviews engagement for the relevant course or reading and uses that information to guide classroom discussion. This journey defines how the core modules fit together.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: STUDENT DIGITAL READER & ANNOTATION ENGINE
            =================================================================== */}
        <section className="case-study-section" aria-label="Student Digital Reader and Active Annotation Engine">
          <h3 className="case-study-h3">2. Student Digital Reader & Active Annotation Engine</h3>

          <div className="case-study-media-frame" style={{ margin: '1.75rem 0 2.25rem' }}>
            <img 
              src="/assets/projects/chapter_app_reader_notes.png" 
              alt="Chapter Reading Platform - Student Digital Reader with Margin Notes" 
              className="case-study-media-img"
            />
            <div className="case-study-media-caption">
              <span>Application Proof • Student Reader displaying Plato's The Republic, reading progress (42%), color-coded text annotations, and interactive sidebar</span>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              The Student Experience & Contextual Persistence
            </h4>
            <p className="case-study-paragraph">
              Students needed to access course content, read material, save highlights or notes, and track progress. I worked on reusable React components and application flows that connected these actions to backend data. Keeping an annotation associated with the relevant content was critical because an isolated note loses much of its meaning without the passage or reading it refers to.
            </p>
            <p className="case-study-paragraph">
              Progress tracking provided continuity across reading sessions. The interface and stored data needed to agree so that returning to a reading did not create a different view of completion from the information later used in analytics. This made persistence and consistent API behavior central to the experience.
            </p>
          </div>

          <div className="case-study-media-frame" style={{ margin: '2rem 0' }}>
            <img 
              src="/assets/projects/chapter_app_interactive_annotations.png" 
              alt="Chapter Reading Platform - Interactive Text Selection and Cursor Target" 
              className="case-study-media-img"
            />
            <div className="case-study-media-caption">
              <span>Interaction Proof • Interactive text selection and radial target indicator confirming active student passage annotation</span>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Dynamic Annotation Mechanics & React Component Architecture
            </h4>
            <p className="case-study-paragraph">
              React supported reusable components across the reader, course views, and role-specific screens. TypeScript helped define the shape of application data and make frontend integration clearer. Reuse mattered because loading behavior, form handling, navigation, and data presentation recur across several workflows.
            </p>
            <p className="case-study-paragraph">
              When students hover or click on highlighted segments, an active target indicator provides visual confirmation, and the corresponding margin note card scrolls into view in the right-hand panel. This bi-directional binding between text span and marginalia prevents context loss.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: READING REPORT & OBJECTIVE MASTERY SCORING
            =================================================================== */}
        <section className="case-study-section" aria-label="Reading Report and Objective Mastery Scoring">
          <h3 className="case-study-h3">3. Reading Report & Objective Mastery Scoring</h3>

          <div className="case-study-media-frame" style={{ margin: '1.75rem 0 2.25rem' }}>
            <img 
              src="/assets/projects/chapter_app_reading_report.png" 
              alt="Chapter Reading Platform - Reading Report and Objective Mastery" 
              className="case-study-media-img"
            />
            <div className="case-study-media-caption">
              <span>Application Proof • Reading Report tracking objective mastery across 24 students with automated diagnostic categorization</span>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Turning Records into Useful Summaries
            </h4>
            <p className="case-study-paragraph">
              I designed SQL queries and REST APIs that supported analytics across courses, cohorts, reading activity, and classroom interactions. The workflow moved from persisted activity to a scoped query or aggregation and then to a professor-facing view. This required agreement between the meaning of the stored records and the labels used in the interface.
            </p>
            <p className="case-study-paragraph">
              Useful analytics depend on clear definitions. Progress, participation, and annotation activity answer different questions, so combining them into one summary without context can make the result misleading. The application needed to preserve those distinctions while presenting information in a form educators could use.
            </p>
          </div>

          <div className="case-study-table-wrapper" style={{ margin: '1.25rem 0 1.75rem' }}>
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Learning Objective</th>
                  <th style={{ width: '25%' }}>Mastery Score</th>
                  <th style={{ width: '35%' }}>Diagnostic Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Identify Thrasymachus' definition of justice</strong></td>
                  <td><strong>88%</strong></td>
                  <td><span style={{ color: '#10b981', fontWeight: 700, background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Grasped</span></td>
                </tr>
                <tr>
                  <td><strong>Explain Glaucon's challenge to Socrates</strong></td>
                  <td><strong>71%</strong></td>
                  <td><span style={{ color: '#b45309', fontWeight: 700, background: 'rgba(245, 158, 11, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Developing</span></td>
                </tr>
                <tr>
                  <td><strong>Connect the city–soul analogy to individual virtue</strong></td>
                  <td><strong>46%</strong></td>
                  <td><span style={{ color: '#ef4444', fontWeight: 700, background: 'rgba(239, 68, 68, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Needs review</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="case-study-paragraph">
            The system notes that <strong>16 of 24 students demonstrated all three objectives</strong>, and provides a direct <em>"View student breakdown &rarr;"</em> pathway for targeted classroom follow-up. This allows the educator to open seminar discussion specifically addressing the city–soul analogy where 54% of the cohort struggled.
          </p>
        </section>

        {/* ===================================================================
            SECTION 4: EDUCATOR READING ANALYTICS & HOTSPOT TELEMETRY
            =================================================================== */}
        <section className="case-study-section" aria-label="Educator Reading Analytics and Page Hotspot Telemetry">
          <h3 className="case-study-h3">4. Educator Reading Analytics & Page Hotspot Telemetry</h3>

          <div className="case-study-media-frame" style={{ margin: '1.75rem 0 2.25rem' }}>
            <img 
              src="/assets/projects/chapter_app_reading_analytics.png" 
              alt="Chapter Reading Platform - Reading Analytics Dashboard" 
              className="case-study-media-img"
            />
            <div className="case-study-media-caption">
              <span>Application Proof • Educator Reading Analytics for Plato's The Republic (24 students, 52 min avg time, 92% completion, and 13-page hotspot scrubber)</span>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              The Professor Experience: Cohorts & Activity
            </h4>
            <p className="case-study-paragraph">
              Professors needed a view across courses, student cohorts, and reading activity. I worked on analytics-oriented data models, queries, and APIs that supported these views. Organizing the information by course and content helped move from an individual student action to a useful summary for teaching.
            </p>
            <p className="case-study-paragraph">
              Engagement data can identify where students spend attention, but it does not automatically prove comprehension. A cluster of highlights may indicate interest or difficulty; reading time may reflect active study or an idle session. These signals are most useful when presented with enough context for educators to interpret them.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Granular Page Hotspot Detection
            </h4>
            <p className="case-study-paragraph">
              The primary instructor dashboard monitors class progress across assigned reading modules:
            </p>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--color-ink-muted)', margin: '1rem 0' }}>
              <li><strong>Average Reading Time:</strong> 52 minutes per student (+7 min over expected 45-minute baseline pace), indicating students spent additional deliberation on nuanced sections.</li>
              <li><strong>Completion Rate:</strong> 92% (22 of 24 students completed all assigned chapters).</li>
              <li><strong>Objectives Grasped:</strong> 2 of 3 curriculum objectives mastered, with 1 objective flagged for immediate review.</li>
              <li><strong>Interactive 13-Page Hotspot Scrubber:</strong> A visual distribution histogram indicating page-by-page engagement. Page 7 emerges as the dominant peak with dense student highlights and notes.</li>
            </ul>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Passage Inspection with Clustered Engagement
            </h4>
            <p className="case-study-paragraph">
              Clicking or scrubbing to Page 7 immediately expands a context preview pane revealing the underlying text: the famous myth of the Ring of Gyges. The application surfaces quantitative telemetry directly above the text:
            </p>
            <div className="code-architecture-card" style={{ margin: '1rem 0 1.5rem', padding: '1rem 1.25rem' }}>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontWeight: 600, color: 'var(--color-ink)' }}>
                <span>📖 Page 7 • Book II</span>
                <span style={{ color: '#10b981' }}>✏️ 18 Highlights</span>
                <span style={{ color: '#3b82f6' }}>📝 12 Notes</span>
                <span style={{ color: '#f59e0b' }}>👥 21 Readers</span>
              </div>
            </div>
            <p className="case-study-paragraph">
              Color-coded background bands indicate engagement tiers (High engagement in salmon, Medium in peach, Light in yellow). Instructors can see at a glance that students clustered around Glaucon's assertion regarding justice and human nature without needing to read each student's notes individually.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: ARCHITECTURE, DATA MODEL & SECURITY
            =================================================================== */}
        <section className="case-study-section" aria-label="Architecture, Data Model, and Security">
          <h3 className="case-study-h3">5. Architecture, Relational Data & Access Controls</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Architecture and Framework Choices
            </h4>
            <p className="case-study-paragraph">
              The application combined a component-based frontend, backend workflows, and relational persistence. React and TypeScript supported the user experience. Python and FastAPI supported APIs and backend logic. PostgreSQL held the relational data used by the application and analytics, while Supabase formed part of the application’s data and authentication integration.
            </p>
          </div>

          <div className="case-study-table-wrapper" style={{ margin: '1.5rem 0' }}>
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '32%' }}>Component</th>
                  <th style={{ width: '68%' }}>Purpose in the Project</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>React and TypeScript</strong></td>
                  <td>Reusable UI components, reading workflows, and role-based navigation</td>
                </tr>
                <tr>
                  <td><strong>Python and FastAPI</strong></td>
                  <td>REST APIs and custom backend workflows for progress, annotations, and analytics</td>
                </tr>
                <tr>
                  <td><strong>PostgreSQL</strong></td>
                  <td>Persistent application records and course-level analytics queries</td>
                </tr>
                <tr>
                  <td><strong>Supabase</strong></td>
                  <td>Database-centered services and authentication integration</td>
                </tr>
                <tr>
                  <td><strong>AI-Ready Workflows</strong></td>
                  <td>Structured information pipelines for future insight and reporting capabilities</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Conceptual Data Relationships
            </h4>
            <p className="case-study-paragraph">
              The data architecture needed to preserve more than the text of a note or the value of a progress indicator. Each record needed meaningful relationships to the user, reading material, and course context:
            </p>
          </div>

          <div className="case-study-table-wrapper" style={{ margin: '1.25rem 0' }}>
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>Information</th>
                  <th style={{ width: '65%' }}>Why the Relationship Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Course and Content</strong></td>
                  <td>Defines the reading context used by application views and analytics</td>
                </tr>
                <tr>
                  <td><strong>Student and Course Membership</strong></td>
                  <td>Connects activity with the relevant cohort</td>
                </tr>
                <tr>
                  <td><strong>Annotation and Reading Context</strong></td>
                  <td>Keeps highlights and notes attached to the material they describe</td>
                </tr>
                <tr>
                  <td><strong>Progress and Student Reading</strong></td>
                  <td>Supports continuity and course-level progress summaries</td>
                </tr>
                <tr>
                  <td><strong>Engagement and Content Context</strong></td>
                  <td>Enables comparisons across readings and student activity</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Role-Based Access Controls (RBAC) & Delivery
            </h4>
            <p className="case-study-paragraph">
              I established authentication, role-based navigation, and RBAC patterns across student, professor, and administrator workflows. A student’s personal reading activity and an educator’s course analytics have different access needs, so the application needed to connect role permissions with the relevant data scope. Frontend navigation helped guide users to the right screens, while the access model enforced corresponding permissions around data operations.
            </p>
            <p className="case-study-paragraph">
              My work included production verification, environment configuration, and defect triage. I investigated application behavior and frontend-to-backend integration, coordinated fixes, and verified affected workflows across connected modules.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Preparing for Future AI Capabilities
            </h4>
            <p className="case-study-paragraph">
              I drove development of AI-ready data pipelines with product and engineering stakeholders. The goal was to organize reading activity and engagement data so that future LLM-powered insights, concept extraction, personalized learning, and automated engagement reports could use meaningful context.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: OUTCOMES AND LESSONS
            =================================================================== */}
        <section className="case-study-section" aria-label="Outcomes and Lessons">
          <h3 className="case-study-h3">6. Outcomes and Lessons</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              What the Project Delivered
            </h4>
            <p className="case-study-paragraph">
              My contribution advanced the application foundation for student reading engagement and professor-facing analytics. It connected reusable React and TypeScript interfaces with backend workflows, PostgreSQL data models, authentication, and role-based experiences.
            </p>
          </div>

          <div className="case-study-table-wrapper" style={{ margin: '1.25rem 0' }}>
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Area</th>
                  <th style={{ width: '70%' }}>Contribution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Student Workflows</strong></td>
                  <td>Reading interactions, annotations, and progress tracking</td>
                </tr>
                <tr>
                  <td><strong>Educator Insights</strong></td>
                  <td>Data models, SQL queries, and APIs for engagement analytics</td>
                </tr>
                <tr>
                  <td><strong>Application Structure</strong></td>
                  <td>Reusable components and role-based navigation</td>
                </tr>
                <tr>
                  <td><strong>Security Foundation</strong></td>
                  <td>Authentication and RBAC patterns across student, professor, and admin roles</td>
                </tr>
                <tr>
                  <td><strong>AI Readiness</strong></td>
                  <td>Structured data workflows for future LLM-powered capabilities</td>
                </tr>
                <tr>
                  <td><strong>Delivery</strong></td>
                  <td>Requirements translation, integration work, and defect verification</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="research-takeaways-grid" style={{ margin: '1.75rem 0' }}>
            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Full-Stack Synthesis</span>
              <p className="takeaway-pill-text">
                Designing a feature across the frontend, backend, and data layer ensures reading interactions and educator summaries remain connected.
              </p>
            </div>
            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Contextual Persistence</span>
              <p className="takeaway-pill-text">
                An annotation is only meaningful when attached to its passage, student, and course context.
              </p>
            </div>
            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Actionable Analytics</span>
              <p className="takeaway-pill-text">
                Analytics work best when progress, participation, and annotation activity are clearly differentiated to guide teaching.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            BOTTOM ACTIONS
            =================================================================== */}
        <CaseStudyBottomBar 
          project={project} 
          onBack={onBack} 
          metaLabel="Client Work • Chapter Reading LLC"
        />
      </div>
    </div>
  );
}
