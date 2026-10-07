import React from 'react';
import { ArrowUpRightIcon, GithubIcon } from '../../common/Icons';
import './project-detail.css';

export default function MyMindCaseStudy({ 
  project, 
  onBack, 
  allProjects = [], 
  onSelectProject 
}) {
  if (!project) return null;

  // Compute Next / Prev project for pager
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

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
            <span style={{ textTransform: 'capitalize' }}>AI &amp; Health</span>
            <span className="case-study-breadcrumb-sep">/</span>
            <span className="case-study-breadcrumb-active">My Mind</span>
          </div>

          <div className="case-study-nav-links">
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
                <span>Code</span>
              </a>
            )}
          </div>
        </nav>

        {/* ===================================================================
            CASE STUDY TITLE & HEADER
            =================================================================== */}
        <header className="case-study-header">
          <h1 className="case-study-title">
            My Mind
          </h1>
          <p className="case-study-subtitle">
            Transforming Passive Journaling into Actionable Emotional Intelligence
          </p>
        </header>

        {/* ===================================================================
            PROJECT METADATA STRIP (Clean Editorial Layout)
            =================================================================== */}
        <section className="case-study-meta-strip" aria-label="Project Metadata">
          <div className="meta-strip-col">
            <span className="meta-strip-label">Duration</span>
            <p className="meta-strip-text">
              <strong>4 Months</strong>
              <br />
              Full Lifecycle: Discovery to Deployment
            </p>
          </div>

          <div className="meta-strip-col">
            <span className="meta-strip-label">Target Audience</span>
            <p className="meta-strip-text">
              Working professionals, high-performing students, and creatives struggling with cognitive overload, burnout, and lack of intentional reflection.
            </p>
          </div>

          <div className="meta-strip-col">
            <span className="meta-strip-label">Contributions</span>
            <ul className="meta-strip-list">
              <li>Primary &amp; Secondary Research</li>
              <li>Information Architecture &amp; User Journey Mapping</li>
              <li>Wireframing, Motion Design &amp; Interactive Prototyping</li>
              <li>Full-Stack Implementation (React 19, FastAPI, AI Microservice)</li>
              <li>Usability Testing &amp; Iterative Design</li>
            </ul>
          </div>
        </section>

        {/* ===================================================================
            SECTION 1: ABOUT MY MIND
            =================================================================== */}
        <section className="case-study-section" aria-label="About My Mind">
          <div className="case-study-about-grid">
            <div className="case-study-media-frame">
              <img 
                src="/assets/projects/mymind_landing_hero.png" 
                alt="My Mind — Your thoughts, beautifully organized" 
                className="case-study-media-img"
              />
            </div>

            <div className="case-study-content-block">
              <h3 className="case-study-h3">1. About My Mind</h3>
              <p className="case-study-paragraph">
                <strong>My Mind</strong> is an intelligent, privacy-first personal reflection workstation and mental wellness companion. While traditional journaling apps act as static text repositories, My Mind bridges the gap between emotional introspection and tangible personal growth.
              </p>
              <p className="case-study-paragraph">
                By pairing expressive journaling with real-time sentiment analysis, longitudinal mood analytics, an empathetic contextual AI reflection coach, and an actionable intentions tracker, My Mind transforms fleeting thoughts into actionable clarity.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: PROJECT BRIEF & GOALS
            =================================================================== */}
        <section className="case-study-section" aria-label="Project Brief and Goals">
          <div className="case-study-brief-grid">
            <div className="case-study-brief-heading-col">
              <div className="case-study-divider-line"></div>
              <h3 className="case-study-h3">2. Project Brief &amp; Goals</h3>
            </div>

            <div className="case-study-brief-content-col">
              <p className="case-study-paragraph">
                Most people start journaling with good intentions, but abandon the habit within two to three weeks. Users report feeling like they are writing into an empty void—venting their frustrations without gaining clarity, perspective, or a way forward.
              </p>

              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-ink)', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                Core Goals:
              </h4>
              <ol className="case-study-goals-list">
                <li>
                  <strong>Diagnose the Break Point:</strong> Understand why people abandon traditional digital and analog journaling practices.
                </li>
                <li>
                  <strong>Bridge Reflection and Action:</strong> Eliminate the "venting loop" by automatically converting raw thoughts into concrete next steps and daily intentions.
                </li>
                <li>
                  <strong>Design a Safe, Intelligent Feedback Loop:</strong> Integrate conversational AI that remembers context without feeling invasive or clinical.
                </li>
                <li>
                  <strong>Validate Through Iterative Testing:</strong> Build and test prototypes from low-fidelity wireframes to a production-grade full-stack workstation.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: THE DESIGN PROCESS
            =================================================================== */}
        <section className="case-study-section" aria-label="The Design Process">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">3. The Design Process</h2>
            <p className="case-study-paragraph" style={{ marginTop: '0.5rem', maxWidth: '750px' }}>
              A systematic 4-phase human-centered design framework spanning initial research to production architecture.
            </p>
          </div>

          <div className="design-process-flow-grid">
            <div className="process-flow-phase-card">
              <div className="phase-badge">Phase 1</div>
              <h4 className="phase-title">Research</h4>
              <ul className="phase-items-list">
                <li>Competitor Audit</li>
                <li>1-on-1 Interviews</li>
                <li>Behavioral Insights</li>
              </ul>
            </div>

            <div className="process-flow-arrow">&rarr;</div>

            <div className="process-flow-phase-card">
              <div className="phase-badge">Phase 2</div>
              <h4 className="phase-title">Journey Mapping</h4>
              <ul className="phase-items-list">
                <li>"Venting Void" vs Clarity</li>
                <li>Inflection Points</li>
                <li>Problem Statement Definition</li>
              </ul>
            </div>

            <div className="process-flow-arrow">&rarr;</div>

            <div className="process-flow-phase-card">
              <div className="phase-badge">Phase 3</div>
              <h4 className="phase-title">Ideation &amp; Testing</h4>
              <ul className="phase-items-list">
                <li>Low-Fi Wireframes</li>
                <li>Mid-Fi Usability Tests</li>
                <li>UI System &amp; Micro-animations</li>
              </ul>
            </div>

            <div className="process-flow-arrow">&rarr;</div>

            <div className="process-flow-phase-card highlight-phase">
              <div className="phase-badge">Phase 4</div>
              <h4 className="phase-title">Production Solution</h4>
              <ul className="phase-items-list">
                <li>AI Reflection Coach</li>
                <li>Mood Analytics &amp; Vision Board</li>
                <li>Intentions / Action Tracker</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: PHASE 1: RESEARCH & DISCOVERY
            =================================================================== */}
        <section className="case-study-section" aria-label="Phase 1: Research and Discovery">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">4. Phase 1: Research &amp; Discovery</h2>
          </div>

          {/* A. Secondary Research */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h3 className="case-study-h3" style={{ fontSize: '1.45rem', marginBottom: '0.85rem' }}>
              A. Secondary Research – Comparative Analysis
            </h3>
            <p className="case-study-paragraph">
              To understand current market behaviors, we evaluated four direct and analogous applications to analyze their strengths, weaknesses, and user retention patterns:
            </p>

            <div className="case-study-table-wrapper">
              <table className="case-study-table">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Type</th>
                    <th>Strengths</th>
                    <th>Weaknesses</th>
                    <th>Key Takeaways for My Mind</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Day One</strong></td>
                    <td><span className="type-badge">Direct</span></td>
                    <td>Rich multimedia support, elegant typography, cross-device sync.</td>
                    <td>Completely passive; offers zero feedback or synthesis of long-term patterns.</td>
                    <td>Storing entries is not enough; users need analytical insight into what they write.</td>
                  </tr>
                  <tr>
                    <td><strong>Notion</strong></td>
                    <td><span className="type-badge subtle">Analogous</span></td>
                    <td>Unmatched customization, database linking, task management.</td>
                    <td>Overwhelming cognitive load; feels like "work" rather than a mindful space.</td>
                    <td>Avoid database complexity; preserve a calm, distraction-free writing environment.</td>
                  </tr>
                  <tr>
                    <td><strong>Wysa / Woebot</strong></td>
                    <td><span className="type-badge subtle">Analogous</span></td>
                    <td>Conversational CBT prompts, approachable mental health framing.</td>
                    <td>Rigid chatbot decision trees; lacks long-form journaling and personal synthesis.</td>
                    <td>AI must be dynamic and empathetic, understanding whole journal entries rather than rigid scripted trees.</td>
                  </tr>
                  <tr>
                    <td><strong>Apple Journal</strong></td>
                    <td><span className="type-badge">Direct</span></td>
                    <td>Seamless ecosystem integration, automated prompt triggers.</td>
                    <td>Minimalist to a fault; no longitudinal mood tracking or actionable goal setting.</td>
                    <td>Prompting helps start writing, but contextual coaching keeps users coming back.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="research-takeaways-grid" style={{ marginTop: '2rem' }}>
              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">Passive storage leads to abandonment</span>
                <p className="takeaway-pill-text">
                  If an app only stores words, the user stops writing once the immediate emotional crisis subsides.
                </p>
              </div>

              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">Cognitive ease is non-negotiable</span>
                <p className="takeaway-pill-text">
                  Mental health and reflection tools cannot feel like productivity administration (like Jira or Notion).
                </p>
              </div>

              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">The missing link is synthesis</span>
                <p className="takeaway-pill-text">
                  Users crave an objective mirror that helps them identify recurring stressors, blind spots, and progress.
                </p>
              </div>
            </div>
          </div>

          {/* B. Primary Research */}
          <div>
            <h3 className="case-study-h3" style={{ fontSize: '1.45rem', marginBottom: '0.85rem' }}>
              B. Primary Research – User Interviews
            </h3>
            <p className="case-study-paragraph">
              We conducted in-depth qualitative interviews with 8 diverse participants (software engineers, managers, founders, and graduate students) who either actively journal or had attempted and abandoned journaling within the past 12 months.
            </p>

            <div className="interview-protocol-box">
              <h5 className="interview-protocol-title">Protocol Questions:</h5>
              <ol className="interview-protocol-list">
                <li>When do you usually feel the urge to write down your thoughts, and what format do you use?</li>
                <li>How do you feel 15 minutes after writing an entry? Do you ever revisit what you wrote weeks later?</li>
                <li>Have you ever noticed patterns in your mood or stress? How do you track them?</li>
                <li>What prevents you from keeping a consistent journaling habit?</li>
                <li>If a trusted mentor could read your journal and give you one piece of feedback, what would you want it to be?</li>
              </ol>
            </div>

            <div className="interview-findings-grid" style={{ marginTop: '2rem' }}>
              <div className="interview-finding-card">
                <span className="finding-tag">75% of Participants</span>
                <h5 className="finding-title">The "Venting Trap"</h5>
                <p className="finding-desc">
                  Participants wrote only when anxious, angry, or overwhelmed. Writing provided temporary catharsis, but often spiraled into repetitive rumination because there was no guiding resolution.
                </p>
              </div>

              <div className="interview-finding-card">
                <span className="finding-tag">&gt; 80% Abandonment</span>
                <h5 className="finding-title">The Archive Graveyard</h5>
                <p className="finding-desc">
                  Over 80% never re-read their past entries. Notes apps and physical journals became historical graveyards of unprocessed thoughts.
                </p>
              </div>

              <div className="interview-finding-card">
                <span className="finding-tag">Behavioral Inertia</span>
                <h5 className="finding-title">Guilt of Inaction</h5>
                <p className="finding-desc">
                  Users frequently documented recurring problems (e.g., "I'm burning out at work") without translating that insight into boundary-setting actions.
                </p>
              </div>

              <div className="interview-finding-card">
                <span className="finding-tag">100% Demand</span>
                <h5 className="finding-title">Desire for Longitudinal Perspective</h5>
                <p className="finding-desc">
                  Every participant expressed a desire to see how their mindset evolves over time without having to manually log tedious spreadsheets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: PHASE 2: SCOPING DOWN & EXPERIENCE MAPPING
            =================================================================== */}
        <section className="case-study-section" aria-label="Phase 2: Scoping Down and Experience Mapping">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">5. Phase 2: Scoping Down &amp; Experience Mapping</h2>
            <p className="case-study-paragraph" style={{ marginTop: '0.5rem' }}>
              Based on our interview findings, we mapped the emotional arcs of two contrasting user journeys to uncover where the traditional journaling process breaks down.
            </p>
          </div>

          <div className="journey-scenarios-grid">
            {/* Scenario A */}
            <div className="journey-scenario-card void-card">
              <div className="scenario-badge">Scenario A</div>
              <h4 className="scenario-title">The "Venting Void" (Traditional Journaling)</h4>
              <div className="scenario-item">
                <span className="scenario-label">Trigger:</span>
                <p className="scenario-val">User has an exhausting day and opens a standard notes app or physical journal.</p>
              </div>
              <div className="scenario-item">
                <span className="scenario-label">Action:</span>
                <p className="scenario-val">Dumps 500 words of frustration, stress, and self-doubt.</p>
              </div>
              <div className="scenario-item dropoff-item">
                <span className="scenario-label">The "Drop-off Point":</span>
                <p className="scenario-val">The user finishes writing. The screen remains blank and silent.</p>
              </div>
              <div className="scenario-item">
                <span className="scenario-label">Emotional State:</span>
                <p className="scenario-val">Short-term relief quickly replaced by emptiness and unresolved tension. The user closes the app, no closer to a solution.</p>
              </div>
            </div>

            {/* Scenario B */}
            <div className="journey-scenario-card clarity-card">
              <div className="scenario-badge highlight">Scenario B</div>
              <h4 className="scenario-title">The "Empowered Clarity" (My Mind Experience)</h4>
              <div className="scenario-item">
                <span className="scenario-label">Trigger:</span>
                <p className="scenario-val">User opens My Mind during an overwhelming week.</p>
              </div>
              <div className="scenario-item">
                <span className="scenario-label">Action:</span>
                <p className="scenario-val">Writes openly in a distraction-free, calming interface.</p>
              </div>
              <div className="scenario-item aha-item">
                <span className="scenario-label">The "A-Ha!" Inflection Point:</span>
                <ul className="scenario-sublist">
                  <li>The real-time AI engine validates their feelings, auto-tags themes, and extracts an objective 1-sentence synthesis.</li>
                  <li>The system suggests a tangible micro-action (e.g., "Schedule a 10-minute boundary conversation" or "Take a 15-minute screen break").</li>
                  <li>The user can instantly transition into a confidential conversation with the AI Reflection Coach, which draws context from their entry to ask grounding, constructive questions.</li>
                </ul>
              </div>
              <div className="scenario-item">
                <span className="scenario-label">Emotional State:</span>
                <p className="scenario-val">Deep relief, emotional clarity, and a clear sense of agency over their next steps.</p>
              </div>
            </div>
          </div>

          {/* Visual Step-by-Step Flow Diagrams */}
          <div className="experience-flow-comparison-box" style={{ marginTop: '2.5rem' }}>
            <div className="flow-comp-row">
              <span className="flow-comp-title">Traditional Journal:</span>
              <div className="flow-steps-track">
                <span className="flow-step">Stress Trigger</span>
                <span className="flow-step-arrow">&rarr;</span>
                <span className="flow-step">Emotional Brain Dump</span>
                <span className="flow-step-arrow">&rarr;</span>
                <span className="flow-step warning">Silence / Inaction</span>
                <span className="flow-step-arrow">&rarr;</span>
                <span className="flow-step danger">Lingering Anxiety</span>
              </div>
            </div>

            <div className="flow-comp-row highlight-flow" style={{ marginTop: '1.25rem' }}>
              <span className="flow-comp-title">My Mind Workstation:</span>
              <div className="flow-steps-track">
                <span className="flow-step">Stress Trigger</span>
                <span className="flow-step-arrow">&rarr;</span>
                <span className="flow-step">Expressive Journaling</span>
                <span className="flow-step-arrow">&rarr;</span>
                <span className="flow-step success">AI Insight &amp; Action</span>
                <span className="flow-step-arrow">&rarr;</span>
                <span className="flow-step success">Coach Dialogue</span>
                <span className="flow-step-arrow">&rarr;</span>
                <span className="flow-step success-hero">Clarity &amp; Intention</span>
              </div>
            </div>
          </div>

          {/* Core Problem Statement Box */}
          <div className="problem-statement-callout" style={{ marginTop: '2.5rem' }}>
            <span className="problem-statement-badge">Core Problem Statement</span>
            <blockquote className="problem-statement-quote">
              "Reflective thinkers and busy professionals struggle to maintain mental clarity because traditional journaling is a passive, one-way exercise that traps users in rumination rather than guiding them toward actionable self-awareness and positive habits."
            </blockquote>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: PHASE 3: IDEATION & USABILITY TESTING
            =================================================================== */}
        <section className="case-study-section" aria-label="Phase 3: Ideation and Usability Testing">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">6. Phase 3: Ideation &amp; Usability Testing</h2>
          </div>

          {/* Initial Concepts Explored */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 className="case-study-h3" style={{ fontSize: '1.45rem', marginBottom: '0.85rem' }}>
              Initial Concepts Explored
            </h3>
            <div className="concepts-grid">
              <div className="concept-card discarded">
                <span className="concept-status">Discarded</span>
                <h5 className="concept-title">Voice-Only Audio Journaling</h5>
                <p className="concept-text">
                  Discarded due to lack of privacy in open work environments and difficulty reviewing past trends visually.
                </p>
              </div>

              <div className="concept-card discarded">
                <span className="concept-status">Discarded</span>
                <h5 className="concept-title">Strict Habit Tracker with Checkboxes</h5>
                <p className="concept-text">
                  Discarded because rigid streak-based mechanics induce shame when users miss a day.
                </p>
              </div>

              <div className="concept-card selected">
                <span className="concept-status selected">Selected</span>
                <h5 className="concept-title">The Intelligent Reflection Workstation</h5>
                <p className="concept-text">
                  A balanced ecosystem combining expressive journaling, longitudinal analytics, proactive AI coaching, and intention tracking.
                </p>
              </div>
            </div>
          </div>

          {/* Low-Fidelity Wireframes & Formative Testing */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 className="case-study-h3" style={{ fontSize: '1.45rem', marginBottom: '0.85rem' }}>
              Low-Fidelity Wireframes &amp; Formative Testing
            </h3>
            <p className="case-study-paragraph">
              We built initial wireframes and tested them with 6 users, evaluating three core flows:
            </p>
            <ol className="case-study-goals-list" style={{ marginBottom: '2rem' }}>
              <li>Writing an entry and receiving post-entry insights.</li>
              <li>Conversing with the AI Reflection Coach.</li>
              <li>Converting an insight into an active goal/task.</li>
            </ol>
          </div>

          {/* Critical Usability Findings & Iterations */}
          <div>
            <h3 className="case-study-h3" style={{ fontSize: '1.45rem', marginBottom: '1.25rem' }}>
              Critical Usability Findings &amp; Iterations
            </h3>

            <div className="pivots-stack">
              {/* Finding 1 */}
              <div className="pivot-card">
                <div className="pivot-header">
                  <span className="pivot-number">01</span>
                  <h4 className="pivot-title">Entry Analysis Presentation</h4>
                </div>
                <div className="pivot-body-grid">
                  <div className="pivot-feedback-col">
                    <span className="pivot-subhead">User Feedback:</span>
                    <blockquote className="pivot-quote">
                      "In our first wireframe, the AI analysis appeared immediately in a large pop-up modal the moment the user stopped typing. Users felt judged: 'It feels like an algorithm is grading my essay while I'm still vulnerable.'"
                    </blockquote>
                  </div>
                  <div className="pivot-decision-col">
                    <span className="pivot-subhead">Design Pivot:</span>
                    <p className="pivot-text">
                      We separated writing from analysis. The analysis is generated upon explicit completion, presenting subtle, respectful tags, detected mood chips, and an opt-in "Suggested Next Action" card.
                    </p>
                  </div>
                </div>
              </div>

              {/* Finding 2 */}
              <div className="pivot-card">
                <div className="pivot-header">
                  <span className="pivot-number">02</span>
                  <h4 className="pivot-title">The Coach's Contextual Boundary</h4>
                </div>
                <div className="pivot-body-grid">
                  <div className="pivot-feedback-col">
                    <span className="pivot-subhead">User Feedback:</span>
                    <blockquote className="pivot-quote">
                      "Users feared that an AI coach would sound like a generic, repetitive customer support bot."
                    </blockquote>
                  </div>
                  <div className="pivot-decision-col">
                    <span className="pivot-subhead">Design Pivot:</span>
                    <p className="pivot-text">
                      We architected the AI backend so the coach injects the user's recent journal history into its prompt context. During testing, users were visibly moved when the coach referenced how they felt two days ago: <em>"It feels like a therapist who actually remembered my last session."</em>
                    </p>
                  </div>
                </div>
              </div>

              {/* Finding 3 */}
              <div className="pivot-card">
                <div className="pivot-header">
                  <span className="pivot-number">03</span>
                  <h4 className="pivot-title">Connecting Thoughts to Tasks</h4>
                </div>
                <div className="pivot-body-grid">
                  <div className="pivot-feedback-col">
                    <span className="pivot-subhead">User Feedback:</span>
                    <blockquote className="pivot-quote">
                      "Users wanted an effortless bridge from journal thoughts to their to-do list without retyping."
                    </blockquote>
                  </div>
                  <div className="pivot-decision-col">
                    <span className="pivot-subhead">Design Pivot:</span>
                    <p className="pivot-text">
                      Built a 1-click "Add to Intentions" interaction that automatically converts AI-suggested next actions into the integrated Task Tracker.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: THE FINAL SOLUTION: THE MY MIND WORKSTATION
            =================================================================== */}
        <section className="case-study-section" aria-label="The Final Solution">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">7. The Final Solution: The My Mind Workstation</h2>
            <p className="case-study-paragraph" style={{ marginTop: '0.5rem', maxWidth: '850px' }}>
              The finalized product is a cohesive, motion-rich web application engineered with a calming dark-mode aesthetic, glassmorphic surfaces, and seamless micro-interactions:
            </p>

            <div className="case-study-large-media-box" style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
              <img 
                src="/assets/projects/mymind_reflection_features.png" 
                alt="My Mind Core Architectural Capabilities: AI Analysis, Vision Board, AI Coach, Task Manager, Security, and Streaks" 
                className="case-study-large-img"
              />
            </div>
          </div>

          {/* Feature 1 */}
          <div className="solution-feature-block">
            <h3 className="solution-feature-title">
              1. Distraction-Free Journaling with Real-Time Synthesis <span className="route-pill">/journals/new</span>
            </h3>
            <ul className="solution-feature-bullets">
              <li>
                <strong>Focused Writing Canvas:</strong> Minimalist, atmospheric environment designed to eliminate cognitive clutter.
              </li>
              <li>
                <strong>Automated Mood &amp; Theme Extraction:</strong> Leverages Gemini 2.0 Flash to detect nuanced moods (e.g., Reflective, Inspired, Anxious, Joyful) and auto-categorize entries with metadata tags.
              </li>
              <li>
                <strong>One-Sentence Synthesis &amp; Next Action:</strong> Condenses lengthy reflections into an objective takeaway with a concrete, bite-sized next step.
              </li>
            </ul>

            <div className="case-study-large-media-box" style={{ marginTop: '1.75rem' }}>
              <img 
                src="/assets/projects/mymind_journal_canvas.png" 
                alt="My Mind Distraction-Free Writing Canvas with Auto-Analyze & Writing Prompts" 
                className="case-study-large-img"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="solution-feature-block" style={{ marginTop: '3.5rem' }}>
            <h3 className="solution-feature-title">
              2. Context-Aware AI Reflection Coach &amp; Archives <span className="route-pill">/coach &amp; /journals</span>
            </h3>
            <ul className="solution-feature-bullets">
              <li>
                <strong>Therapist-Grade System Prompting:</strong> Built with an empathetic, non-judgmental counseling persona that uses Socratic questioning to help users unpack subconscious roadblocks.
              </li>
              <li>
                <strong>Dynamic Context Injection:</strong> Automatically injects past journal excerpts into the LLM conversation memory, enabling continuity across entries.
              </li>
              <li>
                <strong>Full Mental History Archive:</strong> Browse reflections with live search, topic tags, and calendar grid retrospecting.
              </li>
            </ul>

            <div className="case-study-dual-media-grid">
              <div className="case-study-media-frame">
                <img 
                  src="/assets/projects/mymind_ai_coach.png" 
                  alt="My Mind Context-Aware AI Reflection Coach Interactive Session" 
                  className="case-study-media-img"
                />
              </div>

              <div className="case-study-media-frame">
                <img 
                  src="/assets/projects/mymind_reflections.png" 
                  alt="My Mind Reflections Archive & Mental History Browser" 
                  className="case-study-media-img"
                />
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="solution-feature-block" style={{ marginTop: '3.5rem' }}>
            <h3 className="solution-feature-title">
              3. Longitudinal Mental Health Analytics <span className="route-pill">/dashboard</span>
            </h3>
            <ul className="solution-feature-bullets">
              <li>
                <strong>Mood Distribution &amp; Trend Visualizations:</strong> Interactive Recharts graphs visualize emotional patterns over days and months, helping users spot burnout before it happens.
              </li>
              <li>
                <strong>Executive Mental Headquarters:</strong> Real-time mood indicators, active streak tracking, recent thought summaries, and quick entry actions.
              </li>
            </ul>

            <div className="case-study-large-media-box" style={{ marginTop: '1.75rem' }}>
              <img 
                src="/assets/projects/mymind_dashboard_fresh.png" 
                alt="My Mind Live Mental Headquarters Dashboard with Mood & Streak Tracking" 
                className="case-study-large-img"
              />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="solution-feature-block" style={{ marginTop: '3.5rem' }}>
            <h3 className="solution-feature-title">
              4. Intentions &amp; Vision Board System <span className="route-pill">/tasks &amp; /visions</span>
            </h3>
            <ul className="solution-feature-bullets">
              <li>
                <strong>Bridging Thought to Reality:</strong> Converts emotional epiphanies into active daily intentions.
              </li>
              <li>
                <strong>Vision Milestones &amp; Analytics:</strong> A dedicated long-term vision board to anchor daily reflections to core life values, task completion rates, and mood patterns.
              </li>
            </ul>

            <div className="case-study-dual-media-grid">
              <div className="case-study-media-frame">
                <img 
                  src="/assets/projects/mymind_intentions.png" 
                  alt="My Mind Daily Intentions Task Management" 
                  className="case-study-media-img"
                />
              </div>

              <div className="case-study-media-frame">
                <img 
                  src="/assets/projects/mymind_vision_analytics.png" 
                  alt="My Mind Vision Board Analytics and Milestone Tracking" 
                  className="case-study-media-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 8: TECHNICAL ARCHITECTURE & ENGINEERING DECISIONS
            =================================================================== */}
        <section className="case-study-section" aria-label="Technical Architecture">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">8. Technical Architecture &amp; Engineering Decisions</h2>
          </div>

          {/* Architecture Visual Diagram Box */}
          <div className="arch-diagram-wrapper">
            <div className="arch-frontend-box">
              <span className="arch-box-role">Frontend Client</span>
              <h4 className="arch-box-title">React 19 + Vite</h4>
              <p className="arch-box-desc">Tailwind CSS &bull; Framer Motion &bull; Recharts &bull; Lucide</p>
            </div>

            <div className="arch-connections-split">
              <div className="arch-pipe-line">
                <span className="arch-pipe-label">REST API</span>
                <span className="arch-arrow-down">&darr;</span>
              </div>
              <div className="arch-pipe-line">
                <span className="arch-pipe-label">AI Microservice</span>
                <span className="arch-arrow-down">&darr;</span>
              </div>
            </div>

            <div className="arch-backends-row">
              <div className="arch-backend-card">
                <span className="arch-box-role">Core Data Service</span>
                <h4 className="arch-box-title">Main API Server (FastAPI)</h4>
                <ul className="arch-card-list">
                  <li>JWT Authentication &amp; Session Tokens</li>
                  <li>SQLAlchemy ORM / SQLite / PostgreSQL</li>
                  <li>Journal &amp; Task CRUD Operations</li>
                </ul>
              </div>

              <div className="arch-backend-card highlight-card">
                <span className="arch-box-role">Intelligence Engine</span>
                <h4 className="arch-box-title">AI Microservice (FastAPI)</h4>
                <ul className="arch-card-list">
                  <li>OpenRouter Client Integration</li>
                  <li>Gemini 2.0 Flash Optimization</li>
                  <li>Dynamic Context Injection Memory</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Engineering Decisions Breakdown */}
          <div className="engineering-decisions-grid" style={{ marginTop: '2.5rem' }}>
            <div className="decision-card">
              <h5 className="decision-title">Microservice Separation</h5>
              <p className="decision-desc">
                Separated core database CRUD operations from the AI orchestration layer to ensure sub-100ms response times on journal fetching and protect sensitive API credentials.
              </p>
            </div>

            <div className="decision-card">
              <h5 className="decision-title">Structured Output Validation</h5>
              <p className="decision-desc">
                Enforced strict Pydantic schemas on OpenRouter LLM completions to guarantee clean JSON parsing for mood, tags, and action items with zero frontend breakages.
              </p>
            </div>

            <div className="decision-card">
              <h5 className="decision-title">Security &amp; Confidentiality</h5>
              <p className="decision-desc">
                Designed with JWT token validation, CORS protections, and private user boundaries to ensure personal reflections remain strictly confidential.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 9: KEY RESULTS & IMPACT
            =================================================================== */}
        <section className="case-study-section" aria-label="Key Results and Impact">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">9. Key Results &amp; Impact</h2>
          </div>

          <div className="results-impact-grid">
            <div className="impact-metric-card">
              <div className="impact-stat">100%</div>
              <h5 className="impact-metric-title">Eliminated the Venting Trap</h5>
              <p className="impact-metric-desc">
                100% of usability test participants confirmed that receiving a suggested next action and 1-sentence summary gave them immediate relief and tangible direction.
              </p>
            </div>

            <div className="impact-metric-card">
              <div className="impact-stat">0%</div>
              <h5 className="impact-metric-title">Zero Cognitive Fatigue</h5>
              <p className="impact-metric-desc">
                Users praised the dark-mode aesthetic and smooth Framer Motion transitions for creating an atmosphere of safety and mindfulness rather than clinical tracking.
              </p>
            </div>

            <div className="impact-metric-card">
              <div className="impact-stat">3&times;</div>
              <h5 className="impact-metric-title">High Retention Signal</h5>
              <p className="impact-metric-desc">
                Participants who tested the AI Reflection Coach expressed a 3x higher willingness to return to the app daily compared to static journaling tools.
              </p>
            </div>

            <div className="impact-metric-card">
              <div className="impact-stat">4 Mo</div>
              <h5 className="impact-metric-title">Full Product Lifecycle Delivery</h5>
              <p className="impact-metric-desc">
                Designed, architected, and deployed a production-grade full-stack application within a 4-month timeline.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 10: KEY TAKEAWAYS & PRODUCT LEARNINGS
            =================================================================== */}
        <section className="case-study-section" aria-label="Key Takeaways and Product Learnings">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">10. Key Takeaways &amp; Product Learnings</h2>
          </div>

          <div className="takeaways-master-grid">
            <div className="takeaway-card">
              <div className="takeaway-badge">01</div>
              <h4 className="takeaway-headline">AI as an Empathy Mirror, Not a Ghostwriter</h4>
              <p className="takeaway-body">
                AI should never write a journal entry for the user. Its role is to listen, reflect, synthesize, and ask the right questions—empowering the user to reach their own conclusions.
              </p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-badge">02</div>
              <h4 className="takeaway-headline">Action Cures Rumination</h4>
              <p className="takeaway-body">
                The most powerful mental wellness feature isn't a long text box; it is the bridge between writing a worry and committing to a small, tangible next step.
              </p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-badge">03</div>
              <h4 className="takeaway-headline">Aesthetic as an Accessibility Feature</h4>
              <p className="takeaway-body">
                In mental health software, visual design is functional design. Calming palettes, glassmorphism, and smooth micro-animations lower user cortisol levels and establish trust before a single word is typed.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            TECHNOLOGIES & LIBRARIES
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
            BOTTOM ACTIONS & PAGER (Next / Prev)
            =================================================================== */}
        <div className="case-study-bottom-bar">
          <div className="case-study-action-buttons">
            {project.githubUrl && (
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
