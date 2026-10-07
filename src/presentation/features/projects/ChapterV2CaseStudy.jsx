import React from 'react';
import { CaseStudyNav, CaseStudyHeader, CaseStudyCallout, CaseStudyBottomBar } from './components/CaseStudyCommon';
import './project-detail.css';

export default function ChapterV2CaseStudy({ 
  project, 
  onBack, 
  _allProjects = [], 
  onSelectProject 
}) {
  if (!project) return null;

  return (
    <div className="case-study-page-wrap">
      <div className="container case-study-container">
        {/* Top Navigation */}
        <CaseStudyNav project={project} onBack={onBack} />

        {/* Case Study Header */}
        <CaseStudyHeader 
          title="ChapterV2 Product Website" 
          subtitle="Interactive presentation of a reading engagement product for educators" 
        />

        {/* Executive Summary Callout */}
        <CaseStudyCallout badge="EXECUTIVE SUMMARY">
          <p className="problem-statement-text" style={{ fontSize: '1.02rem', lineHeight: '1.75' }}>
            ChapterV2 explains how Chapter connects active student reading with educator insight. The implementation turns that product story into a public website with a reader demonstration, an interactive analytics preview, and a path to request a demo.
          </p>
          <p className="problem-statement-text" style={{ fontSize: '0.96rem', marginTop: '0.85rem', color: 'var(--color-ink-muted)' }}>
            The strongest engineering contribution is a detailed product tour built with browser-native technologies. The presentation website implements the interactive product demonstration; the authenticated learning platform, analytics pipeline, and AI services are part of the core application platform.
          </p>
        </CaseStudyCallout>

        {/* ===================================================================
            PROJECT OVERVIEW TABLE
            =================================================================== */}
        <section className="case-study-section" aria-label="Project Overview">
          <h3 className="case-study-h3" style={{ marginBottom: '1rem' }}>Project Overview</h3>
          <div className="case-study-table-wrapper">
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '28%' }}>Field</th>
                  <th style={{ width: '72%' }}>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Project</strong></td>
                  <td>ChapterV2 for Chapter Reading LLC</td>
                </tr>
                <tr>
                  <td><strong>Audience</strong></td>
                  <td>Educators, academic decision makers, and people evaluating Chapter</td>
                </tr>
                <tr>
                  <td><strong>Repository Scope</strong></td>
                  <td>One index.html file containing markup, styles, scripts, and embedded images</td>
                </tr>
                <tr>
                  <td><strong>Technology</strong></td>
                  <td>HTML5, CSS3, vanilla JavaScript, browser APIs, and Lenis 1.0.42</td>
                </tr>
                <tr>
                  <td><strong>Role</strong></td>
                  <td><strong>Full Stack Developer</strong> (Chapter Reading LLC)</td>
                </tr>
                <tr>
                  <td><strong>Team Composition</strong></td>
                  <td>Collaborative engineering team of <strong>2 Software Engineers</strong> and <strong>2 Data Engineers</strong></td>
                </tr>
                <tr>
                  <td><strong>Implemented Work</strong></td>
                  <td>Interactive client presentation website: UI design system, reader simulations, annotation sweep engine, educator analytics scrubber, accordion workflows, common questions FAQ, and conversion touchpoints built in collaboration with the team</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="problem-statement-callout" style={{ margin: '1.25rem 0 0.5rem', background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
            <span className="problem-statement-badge" style={{ background: '#10b981', color: '#fff' }}>TEAM & ROLE</span>
            <p className="problem-statement-text" style={{ fontSize: '0.96rem', color: 'var(--color-ink)' }}>
              <strong>Full-Stack Developer:</strong> Engineered as part of an agile team alongside 2 software engineers and 2 data engineers at Chapter Reading LLC. I led the development of the ChapterV2 interactive client web application—delivering the semantic architecture, interactive browser simulations, responsive layout design, educator analytics preview, and external integration pathways.
            </p>
            <div style={{ marginTop: '0.75rem' }}>
              <button 
                type="button" 
                onClick={() => onSelectProject && onSelectProject('chapter-reading-llc')} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#10b981', 
                  textDecoration: 'underline', 
                  cursor: 'pointer', 
                  padding: 0, 
                  font: 'inherit', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                &rarr; View the Chapter Reading LLC Application (Telemetry & Reading Reports)
              </button>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 1: THE PRODUCT PROBLEM AND WEBSITE GOALS
            =================================================================== */}
        <section className="case-study-section" aria-label="The product problem and website goals">
          <h3 className="case-study-h3">1. The Product Problem and Website Goals</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Explain the gap between reading and understanding
            </h4>
            <p className="case-study-paragraph">
              Chapter’s product premise is that assigned reading does not give educators immediate visibility into what students understand. Students may struggle with a passage privately, while educators discover the difficulty only during discussion or assessment. The website presents annotations and aggregated engagement signals as ways to make that experience more visible.
            </p>
            <p className="case-study-paragraph">
              For the website, the immediate challenge is communication. A visitor needs to understand what Chapter does, how the student experience works, and why the educator view is useful. Long feature lists alone would leave that connection abstract. An interactive reader and dashboard demonstration make the relationship easier to inspect.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Create a clear journey toward a product demonstration
            </h4>
            <p className="case-study-paragraph">
              The page begins with the product proposition, introduces the reading problem, and explains a three-step process: educators provide material and learning objectives, students engage with it, and educators inspect insights. The tour then demonstrates the reader, annotations, and analytics before the visitor reaches the team, FAQ, contact information, and demo request.
            </p>
            <p className="case-study-paragraph">
              The primary conversion action opens an external Calendly page. This keeps scheduling outside the website and avoids building a booking backend. The code establishes the link, but does not measure completed bookings or prove conversion improvements.
            </p>
          </div>

          <div className="case-study-media-frame" style={{ margin: '2rem 0' }}>
            <img 
              src="/assets/projects/chapter_how_it_works.png" 
              alt="ChapterV2 How It Works 3-Step Process" 
              className="case-study-media-img"
            />
            <div className="case-study-media-caption">
              <span>How It Works Workflow • Three-step educator-student learning loop with interactive accordion navigation</span>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Keep product claims tied to implementation evidence
            </h4>
            <p className="case-study-paragraph">
              The website describes a broader educational platform. Within this repository, those capabilities are represented through sample content, visual states, and scripted interactions. Completion percentages, reading-time values, and learning-objective scores are examples. They are not measurements collected from a live class.
            </p>
            <p className="case-study-paragraph">
              The case study therefore evaluates whether the website makes the product understandable and how its interactions are implemented. It does not infer improved comprehension, pilot adoption, real-time data processing, or verified privacy compliance from marketing copy.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: EXPERIENCE DESIGN AND VISUAL STRUCTURE
            =================================================================== */}
        <section className="case-study-section" aria-label="Experience design and visual structure">
          <h3 className="case-study-h3">2. Experience Design and Visual Structure</h3>

          <div className="case-study-media-frame" style={{ margin: '1.75rem 0 2.25rem' }}>
            <img 
              src="/assets/projects/chapter_hero.png" 
              alt="ChapterV2 Digital Reading Web Experience - Hero Presentation" 
              className="case-study-media-img"
            />
            <div className="case-study-media-caption">
              <span>ChapterV2 Hero Landing • Live editorial typography, 3D flip card reader preview, and demo booking action</span>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Organize information around visitor questions
            </h4>
            <p className="case-study-paragraph">
              The navigation links to How It Works, Platform and Analytics, and Team. These anchors support a single continuous page rather than separate routes. Visitors can follow the product explanation in order or jump directly to the section they need.
            </p>
            <p className="case-study-paragraph">
              The process section uses an accordion with one step open at a time. The platform section similarly pairs three feature choices with a shared viewport. Reusing that viewport creates a consistent comparison between the student reader, active annotation behavior, and educator dashboard.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Use typography and spacing to support the reading product
            </h4>
            <p className="case-study-paragraph">
              The stylesheet combines Cormorant Garamond for editorial headings with DM Sans for body text and interface labels. Green, off-white, and dark ink tones establish a consistent visual vocabulary. CSS custom properties define colors, borders, shadows, and transitions, making repeated treatments easier to maintain.
            </p>
            <p className="case-study-paragraph">
              Grid and Flexbox organize the hero, sticky process explanation, product tour, and team cards. The overall layout gives product demonstrations substantial space rather than treating them as small decorative screenshots. The team section uses cards to connect the product with named contributors and their roles.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Make the product preview explorable
            </h4>
            <p className="case-study-paragraph">
              The hero contains a two-sided card. Selecting it rotates the card with CSS perspective, rotateY, and backface visibility to reveal a reader preview. This introduces the interface before a visitor reaches the full product tour.
            </p>
            <p className="case-study-paragraph">
              Inside the tour, visitors can select features, toggle notes, select highlighted passages, inspect chart pages, and expand the viewport. These interactions communicate the product’s intended behavior. Some controls, such as sidebar tabs, only update their active appearance; the source does not implement a complete notes workspace or AI conversation.
            </p>
            <p className="case-study-paragraph">
              The FAQ uses expandable answers to keep supporting detail available without making every answer visible at once.
            </p>
          </div>

          <div className="case-study-media-frame" style={{ margin: '2rem 0' }}>
            <img 
              src="/assets/projects/chapter_faq.png" 
              alt="ChapterV2 Common Questions Interactive FAQ" 
              className="case-study-media-img"
            />
            <div className="case-study-media-caption">
              <span>Common Questions • Expandable accordions answering educator queries on analytics, comprehension, and student impact</span>
            </div>
          </div>

          <div className="case-study-media-frame" style={{ margin: '2rem 0' }}>
            <img 
              src="/assets/projects/chapter_footer.png" 
              alt="ChapterV2 Demo Request CTA and Enterprise Footer" 
              className="case-study-media-img"
            />
            <div className="case-study-media-caption">
              <span>Conversion & Engagement • High-contrast "Ready to begin your chapter?" CTA banner, newsletter subscription, and contact pathways</span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: ARCHITECTURE AND TECHNOLOGY CHOICES
            =================================================================== */}
        <section className="case-study-section" aria-label="Architecture and technology choices">
          <h3 className="case-study-h3">3. Architecture and Technology Choices</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              HTML and CSS fit the delivery scope
            </h4>
            <p className="case-study-paragraph">
              The project uses no React, Angular, package manifest, or frontend build pipeline. Its core responsibility is to render public product information and handle local interactions. Plain HTML provides headings, sections, navigation, links, and form elements directly in the document. CSS supplies responsive layout and visual states.
            </p>
            <p className="case-study-paragraph">
              This is a reasonable architecture for one public page without authenticated routes or a changing server-backed content model. It reduces setup and deployment requirements and keeps the initial product content available in the HTML. Static markup does not, by itself, establish good search ranking or loading performance.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Vanilla JavaScript handles a bounded set of interactions
            </h4>
            <p className="case-study-paragraph">
              JavaScript attaches event listeners after DOMContentLoaded and changes DOM classes, styles, and text. The page’s state is small enough to be represented by the active tour item, active chart page, expanded viewport, open accordion, and scheduled simulation timers.
            </p>
            <p className="case-study-paragraph">
              A component framework could make a much larger experience easier to structure, but the current scope does not require routing, a shared account store, or complex server state. The trade-off is tighter coupling between scripts and HTML selectors. As the tour expands, explicit modules and reusable interaction functions would reduce that coupling.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Lenis supplies the scrolling behavior
            </h4>
            <p className="case-study-paragraph">
              The page loads Lenis 1.0.42 from a CDN and advances it through requestAnimationFrame. This is the one external JavaScript library visible in the implementation. Google Fonts is another external resource. Images are embedded, so the document is packaged as one file while still depending on external resources for its intended typography and scrolling.
            </p>
            <p className="case-study-paragraph">
              The code calls new Lenis at the start of its main initialization callback without checking whether the library loaded. If that dependency is unavailable, the resulting error can prevent later interaction setup in the same callback. A guarded initialization would allow native scrolling and the rest of the tour to continue.
            </p>
          </div>

          <div className="problem-statement-callout" style={{ margin: '2rem 0' }}>
            <span className="problem-statement-badge">SYSTEM BOUNDARY</span>
            <h4 className="problem-statement-title">Architecture Boundary</h4>
            <p className="problem-statement-text">
              There is no backend source, database schema, API client, or authentication flow in this static presentation codebase. A static host serves the document, and the browser performs the tour interactions. Calendly, mail links, telephone links, and social links hand visitors to external destinations.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: ENGINEERING THE INTERACTIVE READER TOUR
            =================================================================== */}
        <section className="case-study-section" aria-label="Engineering the interactive reader tour">
          <h3 className="case-study-h3">4. Engineering the Interactive Reader Tour</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Switch demonstrations through explicit visual states
            </h4>
            <p className="case-study-paragraph">
              Each feature menu item carries a <code>data-tour</code> value. Selecting it updates the active menu class and calls <code>runTourAnimation</code>. The first state displays the reader. The second displays the reader with simulated annotations. The third displays analytics and animates its example metric values.
            </p>
            <p className="case-study-paragraph">
              Before switching, the function resets active classes and stops the reader simulation. A short delay allows CSS transitions to restart. This keeps the interaction logic separate from much of the animation styling, although rapid repeated switching would benefit from cancellation of pending transitions.
            </p>
          </div>

          <div className="case-study-media-frame" style={{ margin: '2rem 0' }}>
            <img 
              src="/assets/projects/chapter_clutter_free_reader.png" 
              alt="ChapterV2 Clutter-Free Reader Mode" 
              className="case-study-media-img"
            />
            <div className="case-study-media-caption">
              <span>Feature 01: Clutter-Free Reader • Distraction-free digital reading viewport with customized editorial typography and navigation controls</span>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Simulate annotations with coordinates and timed steps
            </h4>
            <p className="case-study-paragraph">
              The annotation sequence measures passage positions with <code>getBoundingClientRect</code> and moves a simulated cursor across selected spans. Changing <code>backgroundSize</code> creates a visual highlight sweep. The sequence also scrolls the reader and then repeats after nine seconds.
            </p>
            <p className="case-study-paragraph">
              The simulation stores timer handles in an array associated with the mockup in a Map. <code>stopReaderSimulation</code> clears those handles, hides the cursor, resets highlights, and returns the reader to the top. This is useful cleanup when a visitor changes features; it avoids leaving the previous annotation sequence active behind another view.
            </p>
            <p className="case-study-paragraph">
              The code does not pause the simulation when its section leaves the viewport. Fired timer handles also remain in the recorded array until the simulation stops. A future revision could pause offscreen or hidden-page work and retain only pending timers.
            </p>
          </div>

          <div className="case-study-media-frame" style={{ margin: '2rem 0' }}>
            <img 
              src="/assets/projects/chapter_active_annotations.png" 
              alt="ChapterV2 Active Annotations and Margin Notes" 
              className="case-study-media-img"
            />
            <div className="case-study-media-caption">
              <span>Feature 02: Active Annotations • Real-time simulated highlight sweeps and responsive margin notes demonstrating active student engagement</span>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Manage nested click behavior deliberately
            </h4>
            <p className="case-study-paragraph">
              Reader text clicks toggle highlight appearance. Symbol clicks apply a short visual response. Notes controls toggle a <code>notes-hidden</code> class and change their label. <code>stopPropagation</code> prevents these interactions from also flipping the surrounding hero card or triggering other parent interactions.
            </p>
            <p className="case-study-paragraph">
              The expanded tour viewport uses an <code>is-fullscreen</code> class and disables background scrolling. A close control and Escape key restore the normal state. The opening handler excludes known interactive targets, such as chart bars and the scrubber, so exploring the dashboard does not unintentionally expand the viewport.
            </p>
            <p className="case-study-paragraph">
              This expansion is implemented through CSS; it does not use the browser Fullscreen API. Keyboard focus movement, focus trapping, and accessible dialog semantics are not implemented in the source and would be needed to make the interaction more complete.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: ENGINEERING THE EDUCATOR ANALYTICS PREVIEW
            =================================================================== */}
        <section className="case-study-section" aria-label="Engineering the educator analytics preview">
          <h3 className="case-study-h3">5. Engineering the Educator Analytics Preview</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Connect chart selection to passage context
            </h4>
            <p className="case-study-paragraph">
              The analytics demonstration uses a <code>pagePreviewData</code> array with 13 records. Each record contains a page number, book label, highlight count, note count, reader count, and a prepared passage with sample emphasis. The data remains in browser memory.
            </p>
            <p className="case-study-paragraph">
              Selecting a chart bar or page label calls <code>updateActivePage</code>. That function updates the active chart state, moves the scrubber, changes the preview heading and counts, and inserts the associated passage into the preview panel. The visitor can inspect why a specific page might attract attention instead of seeing an isolated chart.
            </p>
          </div>

          <div className="case-study-media-frame" style={{ margin: '2rem 0' }}>
            <img 
              src="/assets/projects/chapter_educator_analytics.png" 
              alt="ChapterV2 Educator Analytics Dashboard Preview" 
              className="case-study-media-img"
            />
            <div className="case-study-media-caption">
              <span>Feature 03: Educator Analytics Dashboard • 13-page scrubber connecting passage difficulty metrics and reading time to classroom insights</span>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Translate pointer movement into a selected page
            </h4>
            <p className="case-study-paragraph">
              The scrubber measures the chart bounds and converts the pointer’s horizontal position into a fraction of its width. The fraction is clamped between zero and one, then multiplied by 12 and rounded to select an index from zero through twelve. Both mouse and touch handlers call the same selection logic.
            </p>
            <p className="case-study-paragraph">
              This is a compact implementation for a fixed 13-page example. The number 12 is repeated in the selection and positioning calculations. Deriving that value from <code>pagePreviewData.length - 1</code> would make the preview easier to extend without misaligning its controls.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Build visualizations without a charting library
            </h4>
            <p className="case-study-paragraph">
              The chart uses styled HTML elements, CSS custom properties, and active classes. Metric counters use <code>requestAnimationFrame</code> and easing to reach predetermined values. The approach keeps a small presentation independent of a plotting dependency while allowing detailed visual styling.
            </p>
            <p className="case-study-paragraph">
              The trade-off is that keyboard access, chart semantics, scaling rules, and synchronization of bar heights with data must be designed explicitly. The current bar heights are set in markup, while passage statistics come from JavaScript records. A shared data definition would reduce inconsistencies.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Interpret the demonstration honestly
            </h4>
            <p className="case-study-paragraph">
              The dashboard presents reading time, completion, page hotspots, and learning objectives as a product concept. These values are sample UI data. No data ingestion, student-level aggregation, scoring methodology, or persistent reporting pipeline is implemented here. Engagement signals should also not be treated as a validated measure of understanding without an assessment method.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: PACKAGING PERFORMANCE AND ACCESSIBILITY TRADE-OFFS
            =================================================================== */}
        <section className="case-study-section" aria-label="Packaging performance and accessibility trade offs">
          <h3 className="case-study-h3">6. Packaging Performance and Accessibility Trade-Offs</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Embed assets for a portable document
            </h4>
            <p className="case-study-paragraph">
              The standalone deployment embeds assets as base64 data URIs for portability. The HTML document contains seven structured image elements with accessible alt attributes and interactive feature previews.
            </p>
            <p className="case-study-paragraph">
              Embedding assets simplifies sharing and reduces image-path failures. However, base64 expands binary representation, repeated references duplicate payload, and images cannot be cached independently of the HTML. Any change to the document can require the browser to receive the full combined resource again.
            </p>
            <p className="case-study-paragraph">
              Separate optimized images, responsive image sizes, caching, and lazy loading would be worth evaluating for production delivery. The measured source size is not a compressed transfer size or a performance score. No loading benchmark was run.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Use browser APIs for reveal effects
            </h4>
            <p className="case-study-paragraph">
              <code>IntersectionObserver</code> detects when reveal elements enter view. The callback applies an active class, then stops observing that element. If the API is unavailable, the code activates the elements directly. This is a suitable use of the browser API for visibility-triggered effects instead of repeated manual position checks.
            </p>
            <p className="case-study-paragraph">
              Other animations use CSS transforms, transitions, and frame callbacks. The page also forces layout in the annotation simulation to restart cursor transitions. Animation work should be reviewed on slower devices, and a reduced-motion preference should disable unnecessary movement.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Responsive layouts need functional verification
            </h4>
            <p className="case-study-paragraph">
              The source contains five media-query blocks and changes larger multi-column layouts for smaller screens. Clamp-based typography also scales headings within limits. These are responsive implementation choices, but they do not establish that every reader panel, chart control, and expanded state is comfortable on mobile.
            </p>
            <p className="case-study-paragraph">
              Several controls are clickable div or span elements. Semantic buttons, focus indicators, <code>aria-expanded</code> states for accordions, keyboard chart navigation, and dialog focus management would improve access. Hidden scrollbars and interaction-driven reveals should also be reviewed for discoverability.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Complete the subscription flow before collecting leads
            </h4>
            <p className="case-study-paragraph">
              The footer form requires an email and a consent checkbox, but its handler prevents submission and displays an alert. It does not store or transmit a subscription. The legal links point to placeholders. A real subscription service, accurate confirmation states, and published policy pages would be necessary to complete that visitor journey.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: VALIDATION OUTCOMES AND NEXT ITERATION
            =================================================================== */}
        <section className="case-study-section" aria-label="Validation outcomes and next iteration">
          <h3 className="case-study-h3">7. Validation Outcomes and Next Iteration</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              What the source review establishes
            </h4>
            <div className="case-study-table-wrapper" style={{ margin: '1rem 0 1.5rem' }}>
              <table className="case-study-table">
                <thead>
                  <tr>
                    <th style={{ width: '35%' }}>Check</th>
                    <th style={{ width: '65%' }}>Observed Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Tracked Implementation</strong></td>
                    <td>Single-file production delivery (index.html)</td>
                  </tr>
                  <tr>
                    <td><strong>JavaScript Syntax</strong></td>
                    <td>Extracted inline script passed the Node syntax check</td>
                  </tr>
                  <tr>
                    <td><strong>HTML Inspection</strong></td>
                    <td>Seven image elements have alt attributes and no duplicate IDs were found</td>
                  </tr>
                  <tr>
                    <td><strong>Dynamic Data</strong></td>
                    <td>Thirteen prepared page records support analytics selection</td>
                  </tr>
                  <tr>
                    <td><strong>Backend Integration</strong></td>
                    <td>No fetch calls or browser storage API references were found</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="case-study-paragraph">
              The deliverable is an implemented product website with detailed browser-side demonstrations. It gives a prospective educator a way to inspect the intended reading and analytics experience before requesting a demo. The source supports those interactions, but not conversion, adoption, educational impact, or runtime reliability claims.
            </p>
            <p className="case-study-paragraph">
              A browser check could not run because the execution environment lacked a Playwright browser executable. Validation is therefore limited to source inspection, HTML structure checks, and JavaScript syntax. Responsive behavior, interaction timing, external dependency delivery, and a live deployment were not verified.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Recommended development priorities
            </h4>
            <div className="research-takeaways-grid" style={{ margin: '1.25rem 0' }}>
              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">Initialization Resilience</span>
                <p className="takeaway-pill-text">
                  Make initialization resilient to a failed scrolling dependency (guarded Lenis call) and preserve visible content without animation.
                </p>
              </div>

              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">Accessible Semantics</span>
                <p className="takeaway-pill-text">
                  Add accessible control semantics (semantic buttons, focus indicators, aria-expanded) and respect reduced-motion user preferences.
                </p>
              </div>

              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">Lead Collection Backend</span>
                <p className="takeaway-pill-text">
                  Connect the subscription form to a real service, replace legal placeholders, and evaluate optimized external assets.
                </p>
              </div>

              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">Modular Source Code</span>
                <p className="takeaway-pill-text">
                  Refactor the long single-file document into maintainable source modules if editing frequency grows, retaining a simple deployed output.
                </p>
              </div>
            </div>

            <p className="case-study-paragraph" style={{ marginTop: '1rem' }}>
              If live analytics or AI assistance become part of this repository, they should arrive with explicit API contracts, authentication, data persistence, consent rules, and separate evaluation. Their architecture should be presented as new scope rather than inferred from current mockups.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.75rem' }}>
              Evidence and References
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <strong>Source repository: </strong>
                <a 
                  href="https://github.com/JyothsnaVellanki22/ChapterV2" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'var(--color-ink)', textDecoration: 'underline' }}
                >
                  github.com/JyothsnaVellanki22/ChapterV2 ↗
                </a>
              </li>
              <li>
                <strong>Repository source: </strong>
                <a 
                  href="https://github.com/JyothsnaVellanki22/ChapterV2/blob/main/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'var(--color-ink)', textDecoration: 'underline' }}
                >
                  index.html ↗
                </a>
              </li>
              <li>
                <strong>Browser API reference: </strong>
                <a 
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'var(--color-ink)', textDecoration: 'underline' }}
                >
                  MDN Intersection Observer API ↗
                </a>
              </li>
            </ul>

            <p style={{ fontSize: '0.86rem', color: 'var(--color-ink-faint)', fontStyle: 'italic', marginTop: '1.25rem' }}>
              Framework rationale in this document is an engineering interpretation of the visible implementation. No original selection study or stakeholder research is asserted.
            </p>
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
