import React from 'react';
import { CaseStudyNav, CaseStudyBottomBar } from './components/CaseStudyCommon';
import './project-detail.css';

export default function WHTCaseStudy({ 
  project, 
  onBack 
}) {
  if (!project) return null;

  return (
    <div className="case-study-page-wrap">
      <div className="container case-study-container">
        {/* TOP SUB-NAV & BREADCRUMBS */}
        <CaseStudyNav project={project} onBack={onBack} />

        {/* ===================================================================
            CASE STUDY TITLE & TAGLINE
            =================================================================== */}
        <header className="case-study-header">
          <h1 className="case-study-title">
            WHT — What’s Happening in Tech
          </h1>
          <p className="case-study-subtitle">
            Turning Scattered Technology Content into a Practical Learning Hub
          </p>
        </header>

        {/* ===================================================================
            PROJECT METADATA STRIP (Clean Editorial Layout)
            =================================================================== */}
        <section className="case-study-meta-strip" aria-label="Project Metadata">
          <div className="meta-strip-col">
            <span className="meta-strip-label">Project Type &amp; Ecosystem</span>
            <p className="meta-strip-text">
              <strong>Full-Stack Content Platform</strong>
              <br />
              Community discovery &amp; technical publishing hub
              <br />
              <span style={{ fontSize: '0.88rem', color: 'var(--color-ink-faint)' }}>
                LinkedIn discovery paired with persistent web architecture
              </span>
            </p>
          </div>

          <div className="meta-strip-col">
            <span className="meta-strip-label">Target Audience</span>
            <p className="meta-strip-text">
              Early-career developers navigating technical changes, engineering readers seeking permanent guides, and platform authors managing newsletters and tutorials.
            </p>
          </div>

          <div className="meta-strip-col">
            <span className="meta-strip-label">Technology Stack</span>
            <ul className="meta-strip-list">
              <li>React 18 &bull; Vite &bull; React Router &bull; Custom CSS</li>
              <li>Python &bull; FastAPI &bull; Pydantic &bull; SQLAlchemy</li>
              <li>PostgreSQL (Supabase compatible)</li>
              <li>JWT &bull; bcrypt &bull; DOMPurify HTML sanitization</li>
            </ul>
          </div>
        </section>

        {/* ===================================================================
            SECTION 1: ABOUT WHT
            =================================================================== */}
        <section className="case-study-section" aria-label="About WHT">
          <div className="case-study-about-grid">
            <div className="case-study-media-frame">
              <img 
                src="/assets/projects/wht_hero.png" 
                alt="WHT What's Happening in Tech Platform Landing Interface" 
                className="case-study-media-img"
              />
            </div>

            <div className="case-study-content-block">
              <h3 className="case-study-h3">1. About WHT</h3>
              <p className="case-study-paragraph">
                <strong>WHT (What’s Happening in Tech)</strong> is a full-stack publishing and learning platform that brings technology articles, practical tutorials, and curated newsletters into one centralized destination.
              </p>
              <p className="case-study-paragraph">
                The platform bridges community discovery with deep technical learning. While social feeds such as LinkedIn introduce readers to emerging industry topics and high-level updates, WHT provides a permanent, structured home for complete explanations, supporting architecture visuals, and step-by-step implementation guides.
              </p>
              <p className="case-study-paragraph">
                Beyond reader consumption, WHT provides the full operational back office required to sustain publishing workflows. Authorized administrators can publish technical tutorials, compose and edit newsletter editions, upload media assets, manage article metadata, and inspect community engagement metrics.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: THE PROBLEM & PROJECT GOALS
            =================================================================== */}
        <section className="case-study-section" aria-label="The problem and project goals">
          <div className="case-study-brief-grid">
            <div className="case-study-brief-heading-col">
              <span className="case-study-kicker">PROBLEM DISCOVERY</span>
              <h3 className="case-study-h3">2. The Problem and Project Goals</h3>
              <p className="case-study-brief-summary">
                Engineering knowledge shouldn't disappear into social feed algorithms.
              </p>
            </div>

            <div className="case-study-brief-content-col">
              <p className="case-study-paragraph">
                Technology information is widely available, but useful explanations are often scattered across ephemeral social feeds, email inboxes, and disparate blogs. A developer may discover an insightful post today, only to struggle to locate it weeks later when facing an actual implementation problem.
              </p>
              <p className="case-study-paragraph">
                For early-career software professionals, the challenge is amplified: they must connect rapid technological developments with concrete learning paths and strategic career choices.
              </p>

              <div className="problem-statement-callout" style={{ margin: '2rem 0' }}>
                <span className="problem-statement-badge">CORE OBJECTIVE</span>
                <h4 className="problem-statement-title">Structured Dual-Experience Architecture</h4>
                <p className="problem-statement-text">
                  WHT resolves content fragmentation by providing two tightly integrated experiences powered by persistent data and explicit permission boundaries:
                </p>
              </div>

              <div className="research-takeaways-grid">
                <div className="takeaway-pill-card">
                  <span className="takeaway-pill-title">Reader Experience</span>
                  <p className="takeaway-pill-text">
                    Discover relevant content, search technical tutorials by topic, read detailed guides with embedded diagrams, and manage email subscriptions.
                  </p>
                </div>

                <div className="takeaway-pill-card">
                  <span className="takeaway-pill-title">Publisher Experience</span>
                  <p className="takeaway-pill-text">
                    Create, preview, publish, and maintain structured editorial content through a custom interactive administrative interface.
                  </p>
                </div>

                <div className="takeaway-pill-card">
                  <span className="takeaway-pill-title">Engineering Goal</span>
                  <p className="takeaway-pill-text">
                    Support both workflows with persistent relational data, clean RESTful APIs, and strict server-side authorization boundaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: THE FINAL SOLUTION
            =================================================================== */}
        <section className="case-study-section" aria-label="The final solution">
          <h3 className="case-study-h3">3. The Final Solution</h3>
          <p className="case-study-paragraph">
            The implemented system delivers four core capability pillars tailored to modern technical communication:
          </p>

          <div className="engineering-decisions-grid" style={{ margin: '2.5rem 0' }}>
            <div className="decision-card">
              <h4 className="decision-title">Searchable Technical Content</h4>
              <p className="decision-desc">
                The blog hub supports real-time keyword search and technology filters across article titles, summaries, and tech tags. Articles surface contextual metadata including difficulty, estimated reading time, author, and technology stack. Each article features a clean slug-based URL for effortless sharing.
              </p>
            </div>

            <div className="decision-card">
              <h4 className="decision-title">Newsletter Archive &amp; Editor</h4>
              <p className="decision-desc">
                Editions are archived permanently rather than vanishing after dispatch. Administrators can compose editions with custom edition labels, tech spotlights, and LinkedIn ties using a multi-mode editor supporting write, split preview, and live preview with interleaved media.
              </p>
            </div>

            <div className="decision-card">
              <h4 className="decision-title">Role-Based Administrative Controls</h4>
              <p className="decision-desc">
                Public visitors explore content friction-free. Registered accounts establish user identity, while administrative permissions gate publishing operations. Protected operations enforce server-side validation against current database roles independently of client UI state.
              </p>
            </div>
          </div>

          {/* Visual Showcase: Practical AI Blogs & Engineering Guides */}
          <div className="case-study-media-frame" style={{ margin: '2.5rem 0' }}>
            <img 
              src="/assets/projects/wht_blogs.png" 
              alt="WHT Practical AI Blogs and Engineering Guides Hub Interface" 
              className="case-study-media-img"
            />
          </div>

          <div className="problem-statement-callout" style={{ margin: '2.5rem 0' }}>
            <span className="problem-statement-badge">IMPLEMENTATION BOUNDARY</span>
            <h4 className="problem-statement-title">Subscription &amp; Campaign Foundation</h4>
            <p className="problem-statement-text">
              The application stores subscriber emails and active states, aggregating user totals, subscriber records, campaign logs, and recorded open activity. The newsletter broadcast module generates database recipient logs as a campaign-management foundation; email dispatch through external SMTP providers remains a future enhancement milestone.
            </p>
          </div>

          {/* Visual Showcase: Weekly Newsletters & Subscription Workflow */}
          <div className="case-study-media-frame" style={{ margin: '2.5rem 0' }}>
            <img 
              src="/assets/projects/wht_newsletters.png" 
              alt="WHT Weekly Newsletters & Subscription Workflow Interface" 
              className="case-study-media-img"
            />
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: TECHNICAL ARCHITECTURE
            =================================================================== */}
        <section className="case-study-section" aria-label="Technical architecture">
          <h3 className="case-study-h3">4. Technical Architecture</h3>
          <p className="case-study-paragraph">
            WHT operates as a decoupled full-stack application. The React client and FastAPI service communicate over REST endpoints with clean contract validation and token authentication:
          </p>

          <div className="case-study-table-wrap" style={{ margin: '2.5rem 0' }}>
            <table className="case-study-table">
              <thead>
                <tr>
                  <th scope="col">Layer</th>
                  <th scope="col">Technology</th>
                  <th scope="col">Responsibility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Frontend</strong></td>
                  <td>React 18, React Router, Custom CSS</td>
                  <td>Reading interfaces, real-time search, form handling, custom block editing, split preview, and navigation.</td>
                </tr>
                <tr>
                  <td><strong>API Service</strong></td>
                  <td>Python, FastAPI, Pydantic</td>
                  <td>Typed request validation, authentication, role authorization, and publishing business logic.</td>
                </tr>
                <tr>
                  <td><strong>Persistence</strong></td>
                  <td>SQLAlchemy, PostgreSQL</td>
                  <td>Relational schemas for users, blog posts, subscribers, newsletters, and recipient campaign logs.</td>
                </tr>
                <tr>
                  <td><strong>Authentication</strong></td>
                  <td>bcrypt, Signed JWT</td>
                  <td>Secure password hashing, claim generation, and stateless Bearer token authorization.</td>
                </tr>
                <tr>
                  <td><strong>Content Rendering</strong></td>
                  <td>DOMPurify</td>
                  <td>Client-side sanitization of rich HTML authored blocks before DOM injection to eliminate XSS risks.</td>
                </tr>
                <tr>
                  <td><strong>Hosting &amp; Proxy</strong></td>
                  <td>Vite, Vercel Routing</td>
                  <td>Development proxy forwarding <code>/api</code> and <code>/uploads</code>; relative production routing.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="case-study-paragraph">
            The backend is structured as a unified FastAPI application housing modular endpoint routers. This balances operational simplicity with clear separation between presentation logic, persistence queries, and permission rules.
          </p>
        </section>

        {/* ===================================================================
            SECTION 5: WHY THESE FRAMEWORKS FIT THE PROJECT
            =================================================================== */}
        <section className="case-study-section" aria-label="Why these frameworks fit the project">
          <h3 className="case-study-h3">5. Why These Frameworks Fit the Project</h3>
          <p className="case-study-paragraph">
            Each technology choice was made to solve specific engineering constraints in technical publishing:
          </p>

          <div className="research-takeaways-grid" style={{ margin: '2.5rem 0' }}>
            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">React: Interactive Editing &amp; Reusability</span>
              <p className="takeaway-pill-text">
                WHT relies on repeated UI components: article cards, tag filters, auth dialogs, and publishing controls. React's state-driven model enables instant split-screen preview updates as authors edit markdown blocks without full-page reloads.
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">FastAPI: Strict Contracts &amp; Role Dependencies</span>
              <p className="takeaway-pill-text">
                Publishing platforms handle structured payloads. Pydantic validates incoming articles and subscriber emails upfront. FastAPI's <code>require_admin</code> dependency provides a single, testable authorization choke point across all management routes.
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">SQLAlchemy &amp; PostgreSQL: Relational Integrity</span>
              <p className="takeaway-pill-text">
                Publishing demands unique slug constraints, unique subscriber emails, and ordered timeline queries. PostgreSQL provides robust transactional reliability, supported by Supabase hosting connections.
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Custom CSS &amp; DOMPurify: Tailored &amp; Safe</span>
              <p className="takeaway-pill-text">
                Custom CSS delivers WHT's bespoke editorial aesthetic and typography without the weight of generic UI component frameworks. DOMPurify guarantees that author-generated HTML is cleansed of script injection vectors before rendering.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: DATABASE DESIGN
            =================================================================== */}
        <section className="case-study-section" aria-label="Database design">
          <h3 className="case-study-h3">6. Database Design</h3>
          <p className="case-study-paragraph">
            The platform architecture organizes persistent storage around five core entity models:
          </p>

          <div className="case-study-table-wrap" style={{ margin: '2rem 0' }}>
            <table className="case-study-table">
              <thead>
                <tr>
                  <th scope="col">Model</th>
                  <th scope="col">Core Fields</th>
                  <th scope="col">Purpose &amp; Constraints</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>User</strong></td>
                  <td><code>id, email, password_hash, role, created_at</code></td>
                  <td>Account identity with unique email constraint; role differentiation (USER vs ADMIN).</td>
                </tr>
                <tr>
                  <td><strong>BlogPost</strong></td>
                  <td><code>id, title, slug, summary, content, category, author, read_time, tags</code></td>
                  <td>Technical articles with unique SEO-friendly slug index for routing.</td>
                </tr>
                <tr>
                  <td><strong>Subscriber</strong></td>
                  <td><code>id, email, is_active, subscribed_at</code></td>
                  <td>Newsletter distribution list with uniqueness validation on subscriber email.</td>
                </tr>
                <tr>
                  <td><strong>Newsletter</strong></td>
                  <td><code>id, title, subject, edition, spotlight, content, linkedin_url, sent_at</code></td>
                  <td>Permanent archive of published newsletter editions and community spotlights.</td>
                </tr>
                <tr>
                  <td><strong>EmailLog</strong></td>
                  <td><code>id, newsletter_id, recipient_email, tracking_token, opened_at</code></td>
                  <td>Campaign delivery tracking records and recipient engagement telemetry.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="case-study-paragraph">
            <em>Architectural Note:</em> Certain relationships, such as <code>EmailLog.newsletter_id</code>, currently function as indexed application conventions. Moving forward, formal foreign key constraints and Alembic migration tracking will reinforce schema integrity during high-volume operations.
          </p>
        </section>

        {/* ===================================================================
            SECTION 7: AUTHENTICATION & AUTHORIZATION FLOW
            =================================================================== */}
        <section className="case-study-section" aria-label="Authentication and authorization flow">
          <h3 className="case-study-h3">7. Authentication and Authorization Flow</h3>
          <p className="case-study-paragraph">
            Security in WHT is enforced through an end-to-end token validation workflow designed to prevent privilege escalation:
          </p>

          <div className="arch-layers-grid" style={{ margin: '2rem 0' }}>
            <div className="arch-layer-card">
              <div className="arch-layer-header">
                <span className="arch-layer-num">STEP 01</span>
                <h4 className="arch-layer-title">Registration &amp; Normalization</h4>
              </div>
              <p className="arch-layer-desc">
                Normalizes user email, ensures account uniqueness, hashes raw passwords using bcrypt with salt rounds, and defaults newly created accounts to the standard <code>USER</code> role.
              </p>
            </div>

            <div className="arch-layer-card">
              <div className="arch-layer-header">
                <span className="arch-layer-num">STEP 02</span>
                <h4 className="arch-layer-title">Credential Verification &amp; JWT</h4>
              </div>
              <p className="arch-layer-desc">
                Verifies password hashes against stored credentials. On match, issues a cryptographically signed JSON Web Token (JWT) with expiration. The frontend retains the token to hydrate auth state via <code>/api/auth/me</code>.
              </p>
            </div>

            <div className="arch-layer-card">
              <div className="arch-layer-header">
                <span className="arch-layer-num">STEP 03</span>
                <h4 className="arch-layer-title">Live Database Role Verification</h4>
              </div>
              <p className="arch-layer-desc">
                When protected publishing actions are requested, the backend validates the token, queries the active database record for the user, and confirms the current <code>ADMIN</code> role directly against the database—preventing stale token claims from granting unauthorized access.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 8: THE CUSTOM CONTENT EDITOR
            =================================================================== */}
        <section className="case-study-section" aria-label="The custom content editor">
          <h3 className="case-study-h3">8. The Custom Content Editor</h3>
          <p className="case-study-paragraph">
            A standout feature of WHT is its proprietary visual content editor, built specifically to cater to technical documentation workflows:
          </p>

          <div className="engineering-decisions-grid" style={{ margin: '2rem 0' }}>
            <div className="decision-card">
              <h4 className="decision-title">Ordered Block Parser</h4>
              <p className="decision-desc">
                Parses document input into discrete text and media blocks. Authors can insert, reorder, or replace image assets inline without disrupting surrounding paragraph text, serializing back to persistent storage reliably.
              </p>
            </div>

            <div className="decision-card">
              <h4 className="decision-title">Technical Syntax Support</h4>
              <p className="decision-desc">
                The parser recognizes Markdown headings, code fences, quotes, images, takeaway banners, and technical diagram notations, transforming them into stylized semantic HTML containers.
              </p>
            </div>

            <div className="decision-card">
              <h4 className="decision-title">Sanitized HTML Pipeline</h4>
              <p className="decision-desc">
                Before compiled markup is passed to the DOM in preview or production reading modes, it is processed through DOMPurify to strip potential cross-site scripting vectors while preserving styling tags.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 9: VALIDATION & CURRENT LIMITATIONS
            =================================================================== */}
        <section className="case-study-section" aria-label="Validation and current limitations">
          <h3 className="case-study-h3">9. Validation and Current Limitations</h3>
          <p className="case-study-paragraph">
            The platform frontend builds cleanly and backend API endpoint routes validate successfully under static analysis. As an evolving engineering artifact, key areas for operational maturity have been cataloged:
          </p>

          <div className="research-takeaways-grid" style={{ margin: '2rem 0' }}>
            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Durable Cloud Storage</span>
              <p className="takeaway-pill-text">
                Uploaded media assets currently utilize local server paths. Production scale requires offloading image binaries to cloud object storage (e.g. AWS S3 or Cloudflare R2).
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">SMTP Delivery Integration</span>
              <p className="takeaway-pill-text">
                The campaign broadcast module generates recipient database logs. Production deployment requires wiring external email dispatch providers (e.g. Resend or SendGrid) with automated unsubscribe compliance.
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Schema Migrations</span>
              <p className="takeaway-pill-text">
                Database initialization relies on declarative metadata creation. Introducing Alembic will provide version-controlled schema migrations for ongoing feature iterations.
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Automated Test Coverage</span>
              <p className="takeaway-pill-text">
                Adding Pytest integration suites across authentication guards, role checks, and content parsing will guarantee stability during future refactors.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 10: KEY TAKEAWAYS
            =================================================================== */}
        <section className="case-study-section" aria-label="Key takeaways">
          <h3 className="case-study-h3">10. Key Takeaways</h3>
          <p className="case-study-paragraph">
            <strong>WHT</strong> exemplifies how a content community initiative matures into a fully engineered publishing platform.
          </p>
          <p className="case-study-paragraph">
            Its core technical contribution is the harmonious integration of full-text searchable technical content, an interactive visual block editor, structured FastAPI endpoints, and persistent relational authorization. By establishing rigorous boundaries between reader discovery and publisher operations, the system sets a solid foundation for extensible technical education.
          </p>
        </section>

        {/* BOTTOM ACTIONS */}
        <CaseStudyBottomBar project={project} onBack={onBack} />
      </div>
    </div>
  );
}
