import { Project } from '../../domain/models/Project';

/**
 * Infrastructure: ProjectsRepository
 * Responsible for loading, mapping, and serving Project entities.
 */
class ProjectsRepository {
  constructor() {
    this.rawProjects = [
      {
        id: "chapter-reading-llc",
        title: "Chapter Reading Engagement Platform",
        subtitle: "Connecting Student Reading Activity with Educator Insights",
        category: "web",
        projectType: "client",
        clientName: "Chapter Reading LLC",
        status: "Production Platform",
        isLive: false,
        image: "/assets/projects/chapter_display.png",
        screenshots: [
          "/assets/projects/chapter_display.png",
          "/assets/projects/chapter_app_reading_analytics.png",
          "/assets/projects/chapter_app_reading_report.png",
          "/assets/projects/chapter_app_reader_notes.png",
          "/assets/projects/chapter_app_interactive_annotations.png"
        ],
        summary: "Full-stack reading engagement platform combining React & TypeScript interfaces, Python FastAPI workflows, PostgreSQL data models, and Supabase auth to turn student reading interactions into professor-facing analytics.",
        description: "At Chapter Reading LLC, I worked within an agile engineering team of 2 software engineers and 2 data engineers, leading development work on a reading engagement platform that connected student reading activity with professor-facing analytics. My work covered React and TypeScript interfaces, Python FastAPI backend workflows, PostgreSQL data architecture, and Supabase integration. The platform brought together course content, annotations, reading progress, authentication, and role-based application experiences across students, professors, and administrators.",
        story: "Assigned reading alone gives an educator limited visibility into how students interact with a text. Chapter addressed this by joining the reading experience with an analytics workflow. The engineering challenge was to preserve the context of student activity, organize it by course and content, and make it accessible through role-based experiences while preparing data structures for future AI features.",
        techStack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Supabase", "SQL", "RBAC"],
        keyMetrics: [
          { label: "Role", value: "Software Engineer" },
          { label: "Team", value: "2 SWEs + 2 Data Engineers" },
          { label: "Backend & Data", value: "FastAPI + PostgreSQL" },
          { label: "Architecture", value: "Full-Stack + Supabase RBAC" }
        ],
        architecture: {
          frontend: "React and TypeScript reusable component architecture with role-based navigation for students, professors, and admins.",
          backend: "Python FastAPI REST APIs handling progress tracking, annotations, and scoped aggregation endpoints.",
          database: "PostgreSQL relational schemas mapping courses, cohorts, readings, annotations, and student progress.",
          auth: "Supabase database services and role-based access control (RBAC) enforcing data boundary isolation."
        },
        timeline: "May 2026 – August 2026 (Remote Florida)",
        role: "Software Engineer • Team of 2 SWEs & 2 DEs (Chapter Reading LLC)",
        contributions: [
          "Led frontend implementation in React & TypeScript, establishing reusable UI components and role-based navigation",
          "Engineered Python FastAPI REST APIs and backend workflows for annotations, progress, and course-level summaries",
          "Designed PostgreSQL relational schemas and optimized SQL queries connecting cohorts, readings, and activity",
          "Established authentication and RBAC patterns across student, professor, and administrator workflows",
          "Drove development of AI-ready data pipelines organizing reading context for future LLM-powered insights"
        ],
        goals: [
          "Close the comprehension gap between unobserved student reading and educator visibility.",
          "Preserve the semantic context of student highlights, notes, and reading progress linked to course content.",
          "Provide professors with scoped cohort analytics and page-by-page hotspot insights to guide teaching.",
          "Establish robust authentication and role-based access controls across student, professor, and admin roles."
        ],
        takeaways: [
          "Preserving relational linkages between annotations, students, and course context ensures analytics remain educationally meaningful.",
          "Separating FastAPI custom workflows from Supabase auth provided clear boundaries for data ownership and permissions.",
          "Structuring reading activity into normalized schemas creates a clean foundation for future LLM concept extraction."
        ]
      },
      {
        id: "chapter-v2",
        title: "ChapterV2 Website",
        subtitle: "Interactive Product Website Engineered for Chapter Reading LLC",
        category: "web",
        projectType: "client",
        clientName: "Chapter Reading LLC",
        status: "Production Ready",
        isLive: true,
        liveUrl: "https://chapter-v2.vercel.app",
        image: "/assets/projects/chapter_reading_cover.jpg",
        screenshots: [
          "/assets/projects/chapter_reading_cover.jpg",
          "/assets/projects/chapter_hero.png",
          "/assets/projects/chapter_how_it_works.png",
          "/assets/projects/chapter_clutter_free_reader.png",
          "/assets/projects/chapter_active_annotations.png",
          "/assets/projects/chapter_educator_analytics.png",
          "/assets/projects/chapter_faq.png",
          "/assets/projects/chapter_footer.png"
        ],
        summary: "Interactive product website connecting active student reading with educator insight through browser-native reader simulations, live annotation sequences, and an interactive analytics exploration dashboard.",
        description: "Engineered the ChapterV2 client presentation web application for Chapter Reading LLC in collaboration with an engineering team of 2 software engineers and 2 data engineers. The implementation turns the product story into an interactive public web application with a browser-native reader demonstration, live annotation sweeps, an interactive educator analytics preview, and conversion pathways.",
        story: "The strongest engineering contribution is a detailed product tour built with browser-native technologies. Chapter’s product premise is that assigned reading does not give educators immediate visibility into what students understand. The website turns engagement signals into visible reader simulations and interactive analytics without heavy runtime dependencies.",
        techStack: ["HTML5", "CSS3", "JavaScript", "Browser APIs", "Lenis 1.0.42", "IntersectionObserver", "Vercel"],
        keyMetrics: [
          { label: "Engineering", value: "Browser-Native" },
          { label: "Analytics", value: "13-Page Scrubber" },
          { label: "Team", value: "2 SWEs + 2 Data Engineers" }
        ],
        architecture: {
          client: "Semantic HTML5, CSS3 Grid/Flexbox, and vanilla JavaScript with Lenis 1.0.42 smooth scrolling.",
          tour: "Browser-native state machine with getBoundingClientRect simulated annotation sweeps.",
          analytics: "13-record in-memory dataset with pointer-tracked horizontal scrubber and responsive passage preview.",
          animations: "CSS 3D perspective card flips, keyframe highlights, and IntersectionObserver scroll triggers."
        },
        timeline: "July 2026 (Client Engagement)",
        role: "Full Stack Developer (Chapter Reading LLC)",
        contributions: [
          "Engineered the client presentation web application in collaboration with 2 software engineers and 2 data engineers",
          "Browser-native product tour and simulated annotation sweeps",
          "Interactive 13-page educator analytics dashboard with pointer scrubber",
          "Interactive accordion processes, common questions FAQ, and conversion footer",
          "Responsive typography pairing Cormorant Garamond and DM Sans"
        ],
        goals: [
          "Explain the gap between assigned reading and educator visibility into student comprehension.",
          "Create a clear visitor journey toward a product demonstration without backend scheduling overhead.",
          "Deliver interactive reader and analytics simulations using lightweight browser-native technologies.",
          "Maintain strict alignment between product storytelling and visible implementation evidence."
        ],
        takeaways: [
          "Browser-native JavaScript and CSS3 can deliver rich product demonstrations with zero framework runtime overhead.",
          "Separating state transitions from animation execution prevents race conditions during rapid feature toggling.",
          "Pointer-clamped math provides fluid chart scrubbing on both desktop mouse and touch devices."
        ]
      },
      {
        id: "tpo-platform",
        title: "Trade Promotion Optimization Platform",
        subtitle: "Enterprise Analytics & AI-Powered Agent Platform",
        category: "web",
        projectType: "client",
        clientName: "CONA Services",
        status: "Production Enterprise Platform",
        isLive: false,
        image: "/assets/projects/tpo_display.png",
        screenshots: [
          "/assets/projects/tpo_display.png",
          "/assets/projects/tpo_workflow_dashboard.png"
        ],
        summary: "Enterprise analytics and AI-powered Agent Platform at CONA Services combining Angular micro-frontends, FastAPI/Flask services, PostgreSQL data, and LangChain/LangGraph RAG workflows for conversational business data retrieval.",
        description: "At CONA Services, I contributed to the Trade Promotion Optimization platform and an AI-powered enterprise Agent Platform that helped business teams access promotion insights, sales analytics, and operational data. The system combined conventional dashboard workflows with natural-language access through retrieval-augmented generation (RAG), delivering sub-200ms API response times, 40% reduced deployment times via Docker and CI/CD, and 99.9% system availability.",
        story: "Trade promotion decisions depend on understanding promotion activity alongside sales and operational data. Manual data lookup created an opportunity for a conversational interface that could retrieve relevant enterprise information in real time without navigating dozens of nested reporting screens.",
        techStack: ["Angular 12+", "TypeScript", "RxJS", "FastAPI", "Flask", "PostgreSQL", "RAG", "LangChain", "LangGraph", "Docker", "Linux", "Playwright", "GitHub Actions", "Azure DevOps"],
        keyMetrics: [
          { label: "Deployment Time", value: "40% Reduction" },
          { label: "System Availability", value: "99.9%" },
          { label: "API Latency / Volume", value: "Sub-200ms / 500+ Daily" }
        ],
        architecture: {
          frontend: "Angular 12+ micro-frontends with TypeScript, RxJS, and embedded chatbot UI with session persistence.",
          backend: "FastAPI and Flask microservices with JWT/OAuth2 authentication, request validation, and WebSockets for real-time synchronization.",
          aiOrchestration: "LangChain and LangGraph RAG pipeline coordinating context retrieval, prompt composition, and multi-turn agent workflows.",
          database: "PostgreSQL with SQLAlchemy ORM and Alembic migrations storing structured business data and conversation history.",
          devops: "Dockerized container deployment with GitHub Actions CI/CD to production Linux servers and Playwright automation covering 50+ workflows."
        },
        timeline: "CONA Services Platform Engineering",
        role: "Full-Stack & AI Systems Contributor (CONA Services)",
        contributions: [
          "Developed Angular micro-frontend chatbot UI with session persistence and multi-turn context tracking",
          "Engineered Python FastAPI microservices with JWT/OAuth2 authentication, rate limiting, and WebSocket synchronization",
          "Built RAG retrieval workflows using LangChain, LangGraph, and PostgreSQL for natural-language business analytics",
          "Architected Playwright automation framework covering 50+ end-to-end user workflows",
          "Automated Docker container builds and GitHub Actions CI/CD pipelines reducing deployment time by 40%"
        ],
        goals: [
          "Democratize enterprise promotion insights and operational data through natural-language RAG queries.",
          "Deliver sub-200ms API response times across 500+ daily analytical queries.",
          "Unify dashboard-based trade promotion workflows with persistent conversational AI agents.",
          "Maintain 99.9% availability through automated testing, Docker containerization, and proactive production monitoring."
        ],
        takeaways: [
          "An enterprise AI feature is only as effective as the underlying data model and API contracts supporting it.",
          "Separating conversation persistence from business data indexing enabled sub-200ms API query latencies.",
          "End-to-end browser automation with Playwright caught integration regressions before customer-facing releases."
        ]
      },
      {
        id: "cona-mapping",
        title: "CONA Mapping Tool",
        subtitle: "A Geographic View of Trade Promotion Performance",
        category: "web",
        projectType: "client",
        clientName: "CONA Services",
        status: "Local Development Feature",
        isLive: false,
        image: "/assets/projects/cona_mapping_display.png",
        screenshots: [
          "/assets/projects/cona_mapping_display.png",
          "/assets/projects/cona_mapping_interface.png",
          "/assets/projects/cona_mapping_drilldown.png"
        ],
        summary: "Geographic trade promotion feature for the CONA TPO platform connecting Census Trade Areas, counties, retailers, and financial metrics (Volume, Net Revenue, COGS) through an interactive Angular and Flask interface.",
        description: "During my Summer 2025 internship with the CONA Innovation Team, I developed an interactive mapping feature for the Trade Promotion Optimization (TPO) application. Bottlers needed to understand geographic coverage alongside performance—a table shows metrics like volume and revenue, but cannot visualize county locations or regional coverage distributions. The tool addresses this gap by combining an interactive map with structured KPI tables, dynamic multi-attribute filters, and county-to-retailer drill-down dialogs.",
        story: "Trade Promotion Optimization focuses on making trade spend more effective and efficient. By connecting Census Trade Areas (CTAs) with relational business data, bottlers can explore where trade activity is happening geographically and drill directly into the retailers associated with any county.",
        techStack: ["Angular", "Flask", "Python", "PostgreSQL", "Databricks", "GeoJSON", "REST APIs", "Azure"],
        keyMetrics: [
          { label: "API Consolidation", value: "3 Endpoints → 1 (/api/cta)" },
          { label: "Data Pipeline", value: "Databricks → Postgres → Flask" },
          { label: "Timeline", value: "10-Week Internship" }
        ],
        architecture: {
          frontend: "Angular component architecture hosting map, KPI table, dynamic filter dialog, and county detail popup.",
          backend: "Flask HTTP REST API consolidating boundary, mapping, and CTA data into /api/cta.",
          database: "PostgreSQL relational tables (counties, county_retailer_mapping, cta_details) with imported GeoJSON boundaries.",
          upstream: "Databricks pipelines keeping the feature connected to enterprise data lakes."
        },
        timeline: "Summer 2025 (CONA Services Innovation Team)",
        role: "Software Engineering Intern (CONA Innovation Team)",
        contributions: [
          "Initialized relational PostgreSQL database and imported structured GeoJSON county boundary datasets",
          "Built Flask HTTP GET endpoints and validated data integrity with Postman",
          "Consolidated 3 separate endpoints into unified /api/cta to eliminate network bottlenecks",
          "Migrated standalone TPO_CTA_MAP module into the TPO_APP parent codebase",
          "Engineered dynamic filter dialogs and county detail drilldown popup components"
        ],
        goals: [
          "Bridge the gap between tabular trade spend metrics and geographic spatial distribution for bottlers.",
          "Model relational linkages between Census Trade Areas (CTAs), county boundaries, and retailer accounts.",
          "Consolidate multiple API requests into a high-performance single endpoint to streamline frontend loading.",
          "Integrate the mapping feature into the Volume Decomposition workflow of the parent TPO application."
        ],
        takeaways: [
          "Consolidating 3 separate network calls into /api/cta eliminated frontend orchestration overhead and reduced loading bottlenecks.",
          "Relational modeling in PostgreSQL provided clean separation between geographic geometry, retailer associations, and CTA financial metrics.",
          "Adapting to evolving bottler requirements required building flexible API endpoints and resilient database seed scripts."
        ]
      },
      {
        id: "mymind",
        title: "My Mind",
        subtitle: "Transforming Passive Journaling into Actionable Emotional Intelligence",
        category: "ai",
        status: "Live Production",
        isLive: true,
        liveUrl: "https://my-mind-woad.vercel.app",
        githubUrl: "https://github.com/JyothsnaVellanki22/MyMind",
        docsUrl: "https://my-mind-docs.vercel.app",
        image: "/assets/projects/mymind_cover.png",
        screenshots: [
          "/assets/projects/mymind_cover.png",
          "/assets/projects/mymind_landing_hero.png",
          "/assets/projects/mymind_dashboard_fresh.png",
          "/assets/projects/mymind_journal_canvas.png",
          "/assets/projects/mymind_reflections.png",
          "/assets/projects/mymind_intentions.png",
          "/assets/projects/mymind_vision_analytics.png"
        ],
        summary: "AI-Powered Journaling, Reflection & Life Alignment Workstation bridging emotional introspection with tangible personal growth.",
        description: "My Mind is an intelligent, privacy-first personal reflection workstation and mental wellness companion. While traditional journaling apps act as static text repositories, My Mind bridges the gap between emotional introspection and tangible personal growth by pairing expressive journaling with real-time sentiment analysis, longitudinal mood analytics, an empathetic contextual AI reflection coach, and an actionable intentions tracker.",
        story: "Most people start journaling with good intentions, but abandon the habit within 2-3 weeks because they feel like they are writing into an empty void. My Mind eliminates the venting loop by transforming fleeting thoughts into actionable clarity.",
        techStack: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "Recharts", "FastAPI", "SQLAlchemy", "PostgreSQL/SQLite", "OpenRouter (Gemini 2.0 Flash)"],
        keyMetrics: [
          { label: "Duration", value: "4 Months" },
          { label: "AI Engine", value: "Gemini 2.0 Flash" },
          { label: "Architecture", value: "FastAPI Microservices" }
        ],
        architecture: {
          client: "React 19 + Vite (Tailwind CSS, Framer Motion, Recharts, Lucide)",
          backend: "FastAPI REST API with asynchronous request pipelines and Alembic migrations.",
          aiMicroservice: "FastAPI microservice with OpenRouter client and dynamic context injection.",
          security: "JWT token validation, CORS protections, and strict privacy boundaries."
        },
        timeline: "4 Months (Full Lifecycle: Discovery to Deployment)",
        role: "Primary & Secondary Research, Product Design & Full-Stack Implementation",
        contributions: [
          "Primary & Secondary Research",
          "Information Architecture & User Journey Mapping",
          "Wireframing, Motion Design & Interactive Prototyping",
          "Full-Stack Implementation (React 19, FastAPI, OpenRouter AI Microservice)",
          "Usability Testing & Iterative Design"
        ],
        goals: [
          "Diagnose the Break Point: Understand why people abandon traditional digital and analog journaling practices.",
          "Bridge Reflection and Action: Eliminate the 'venting loop' by automatically converting raw thoughts into concrete next steps and daily intentions.",
          "Design a Safe, Intelligent Feedback Loop: Integrate conversational AI that remembers context without feeling invasive or clinical.",
          "Validate Through Iterative Testing: Build and test prototypes from low-fidelity wireframes to a production-grade full-stack workstation."
        ],
        takeaways: [
          "AI as an Empathy Mirror, Not a Ghostwriter: AI should reflect and synthesize, empowering the user to reach their own conclusions.",
          "Action Cures Rumination: The bridge between writing a worry and committing to a small, tangible next step creates lasting relief.",
          "Aesthetic as an Accessibility Feature: Calming palettes, glassmorphism, and smooth micro-animations establish safety before a word is typed."
        ]
      },
      {
        id: "wht",
        title: "WHT — What's Happening in Tech",
        subtitle: "Turning Scattered Technology Content into a Practical Learning Hub",
        category: "web",
        status: "Production Ready",
        isLive: true,
        liveUrl: "https://wht-neon.vercel.app",
        githubUrl: "https://github.com/JyothsnaVellanki22/WHT",
        image: "/assets/projects/wht_banner.png",
        screenshots: [
          "/assets/projects/wht_banner.png",
          "/assets/projects/wht_hero.png",
          "/assets/projects/wht_blogs.png",
          "/assets/projects/wht_newsletters.png"
        ],
        summary: "Full-stack publishing and learning platform bringing technology articles, practical tutorials, and newsletters into one destination.",
        description: "WHT brings technology articles, practical tutorials, and curated newsletters into one destination. The platform bridges community discovery on LinkedIn with in-depth technical guides and a custom visual block content editor.",
        story: "Technology information is widely available, but useful explanations are often scattered across ephemeral social feeds and newsletters. WHT resolves content fragmentation through a structured destination combining reader discovery with an administrative publishing workstation.",
        techStack: ["React 18", "Vite", "React Router", "Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Custom CSS", "JWT", "bcrypt", "DOMPurify"],
        keyMetrics: [
          { label: "Architecture", value: "FastAPI + React" },
          { label: "Database", value: "PostgreSQL" },
          { label: "Editor", value: "Custom Block Visual" }
        ],
        architecture: {
          client: "React 18 + Vite with React Router, custom editorial CSS, and live split preview.",
          backend: "FastAPI REST API with Pydantic typed schemas, JWT security, and dependency injection.",
          database: "SQLAlchemy ORM with PostgreSQL for articles, subscribers, newsletters, and campaign telemetry.",
          security: "bcrypt password hashing, live database role authorization, and DOMPurify rich content sanitization."
        }
      },
      {
        id: "portfolio-v2",
        title: "Portfolio v2",
        subtitle: "Local RAG Chatbot Powered by Ollama Llama 3.2",
        category: "ai",
        status: "Live Production",
        isLive: true,
        liveUrl: "https://portfolio-v2-portfolio.vercel.app",
        githubUrl: "https://github.com/JyothsnaVellanki22/portfolio-v2",
        image: "/assets/projects/portfolio_v2_cover.jpg",
        screenshots: [
          "/assets/projects/portfolio_v2_cover.jpg"
        ],
        summary: "Full-stack personal site with an offline ChromaDB RAG assistant streaming local Llama 3.2 tokens.",
        description: "Visitors can interact directly with an AI assistant that understands my actual background, projects, and architecture decisions. The system runs ChromaDB vector embeddings with Ollama local inference to guarantee zero data leakage.",
        story: "I wanted to prove that full RAG pipelines can run locally and privately. Instead of relying purely on paid cloud APIs, this setup demonstrates local model inference streamed token-by-token over Server-Sent Events.",
        techStack: ["React 19", "FastAPI", "Python", "LangChain", "ChromaDB", "Ollama (Llama 3.2)", "Docker"],
        keyMetrics: [
          { label: "Local Model", value: "Llama 3.2" },
          { label: "Vector DB", value: "ChromaDB" },
          { label: "Streaming", value: "Server-Sent Events" }
        ],
        architecture: {
          retrieval: "ChromaDB semantic search finding relevant context chunks.",
          inference: "Ollama running Llama 3.2 locally on host hardware.",
          streaming: "FastAPI SSE endpoint streaming tokens seamlessly to React."
        }
      },
      {
        id: "portfolio-v1",
        title: "Portfolio v1",
        subtitle: "Foundational Web Architecture",
        category: "web",
        status: "Live Production",
        isLive: true,
        liveUrl: "https://portfolio-five-xi-16.vercel.app",
        githubUrl: "https://github.com/JyothsnaVellanki22/Portfolio",
        image: "/assets/projects/portfolio_v1_cover.jpg",
        screenshots: [
          "/assets/projects/portfolio_v1_cover.jpg"
        ],
        summary: "Foundational portfolio demonstrating pure web standards, responsive design, and zero framework overhead.",
        description: "Built using vanilla HTML5, CSS3, and JavaScript to master responsive layouts, accessible navigation, and pure web performance without framework overhead.",
        story: "The foundation where my software engineering journey began, demonstrating how much can be achieved with pure web standards.",
        techStack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
        keyMetrics: [
          { label: "Version", value: "v1.0" },
          { label: "Stack", value: "Vanilla Web" },
          { label: "Status", value: "Live on Vercel" }
        ],
        architecture: {
          structure: "Responsive grid layouts and pure DOM interactions."
        }
      },
      {
        id: "scam-mail-detector",
        title: "Spam & Scam Mail Detector",
        subtitle: "Turning a Lightweight Text Classifier into a Practical Spam Detection Application",
        category: "security",
        status: "Live Production",
        isLive: true,
        liveUrl: "https://scam-mail-detector.vercel.app",
        githubUrl: "https://github.com/JyothsnaVellanki22/ScamMailDetector",
        image: "/assets/projects/scam_detector.png",
        screenshots: [
          "/assets/projects/scam_detector.png"
        ],
        summary: "Full-stack machine learning application built with Angular 17, FastAPI, and scikit-learn classifying SMS and message spam with 96.86% accuracy.",
        description: "Built to protect users from fraudulent messages. It combines TF-IDF text tokenization with an optimized Multinomial Naive Bayes model to deliver low-latency classifications and visual confidence scores without external API costs.",
        story: "The product problem is simple: a user receives a suspicious message and wants a quick initial assessment without configuring an inbox integration. The technical problem is turning an offline scikit-learn model into a reliable web application.",
        techStack: ["Python", "scikit-learn", "FastAPI", "Angular 17", "TypeScript", "Pydantic", "Joblib", "pandas"],
        keyMetrics: [
          { label: "Accuracy", value: "96.86%" },
          { label: "Spam Precision", value: "100.00%" },
          { label: "Inference Time", value: "<50ms" }
        ],
        architecture: {
          pipeline: "Text sanitization, stopword removal, and TF-IDF feature extraction.",
          serving: "FastAPI ASGI server running serialized Joblib model in memory.",
          interface: "Angular 17 frontend with real-time probability radar visualization."
        },
        timeline: "2024 – 2025 (Live on Vercel)",
        role: "Machine Learning & Backend Engineer",
        contributions: [
          "TF-IDF Preprocessing & N-Gram Tokenization Pipeline",
          "Multinomial Naive Bayes Hyperparameter Optimization",
          "In-Memory FastAPI Microservice Model Serving",
          "Angular 17 Threat Radar Interface & Probability Scorecards"
        ],
        goals: [
          "Build an instant, transparent text classifier to protect users against fraudulent SMS and phishing communications.",
          "Benchmark multiple ML algorithms and optimize a Multinomial Naive Bayes classifier reaching ~97% accuracy on test benchmarks.",
          "Deliver low-latency inference by serving serialized Scikit-Learn Joblib models directly in memory via FastAPI.",
          "Design an interpretable radar visualization so non-technical users immediately understand which linguistic patterns triggered suspicion."
        ],
        takeaways: [
          "Sublinear term frequency scaling in TF-IDF significantly reduced false positive rates on urgent business emails.",
          "Serving a serialized model in FastAPI memory eliminated database roundtrips, keeping inference latency strictly below 50ms."
        ]
      },
      {
        id: "camscanner",
        title: "Computer Vision Document Scanner",
        subtitle: "Perspective Warping, Edge Detection & OCR Pipeline",
        category: "tools",
        status: "Production Ready",
        isLive: false,
        githubUrl: "https://github.com/JyothsnaVellanki22/CamScanner",
        image: "/assets/projects/camscanner.svg",
        summary: "OpenCV pipeline applying edge detection, 4-point perspective warping, and adaptive binarization.",
        description: "Applies Gaussian filtering, Canny edge detection, and contour hierarchy to find document edges. Applies a 4-point perspective warp and adaptive thresholding to produce sharp, binarized text ready for OCR.",
        story: "An exploration into fundamental geometric algorithms and image matrix math in OpenCV, making messy real-world document photos readable.",
        techStack: ["Python", "OpenCV", "NumPy", "Jupyter Notebook"],
        keyMetrics: [
          { label: "Library", value: "OpenCV" },
          { label: "Core Step", value: "4-Point Warp" },
          { label: "Filter", value: "Adaptive Threshold" }
        ],
        architecture: {
          visionFlow: "Capture -> Canny Edge -> Contour Approximation -> Perspective Warp -> Adaptive Thresholding."
        }
      },
      {
        id: "movie-expert",
        title: "Star Wars Script RAG Engine",
        subtitle: "Semantic Dialogue Search & Movie Lore Assistant",
        category: "ai",
        status: "Production Ready",
        isLive: false,
        githubUrl: "https://github.com/JyothsnaVellanki22/Movie_Expert",
        image: "/assets/projects/movie_expert.svg",
        summary: "Fast semantic screenplay search assistant built with Qdrant vector database and modern uv packaging.",
        description: "Indexes scene dialogues into Qdrant vector collections. Using OpenAI embeddings, users can ask natural language questions about character motivations, scene details, and exact film quotes.",
        story: "A fun deep dive into screenplay structure, scene segmentation, and sub-millisecond vector indexing using Python's modern `uv` package manager.",
        techStack: ["Python 3.12", "FastAPI", "Qdrant", "OpenAI API", "React (Vite)", "uv"],
        keyMetrics: [
          { label: "Vector DB", value: "Qdrant" },
          { label: "Package Tool", value: "uv" },
          { label: "Knowledge", value: "Episodes IV, V, VI" }
        ],
        architecture: {
          chunking: "Scene-aware parser indexing character speech and stage directions.",
          vectorSearch: "Qdrant HNSW indexing for nearest-neighbor lookups.",
          webInterface: "React chat UI connected to FastAPI backend."
        }
      },
      {
        id: "pure-harvest",
        title: "Pure Harvest",
        subtitle: "Direct Farm Sponsorship & Rythu Empowerment Platform",
        category: "web",
        projectType: "client",
        clientName: "Pure Harvest",
        status: "Production Platform",
        isLive: false,
        image: "/assets/projects/pure_harvest_display.png",
        screenshots: [
          "/assets/projects/pure_harvest_display.png",
          "/assets/projects/pure_harvest_hero.png",
          "/assets/projects/pure_harvest_mission.png",
          "/assets/projects/pure_harvest_story.png",
          "/assets/projects/pure_harvest_rythu_dashboard.png"
        ],
        summary: "Direct-to-consumer agricultural platform and Rythu Portal connecting farmers across Andhra Pradesh and Telangana directly with harvest sponsors, cutting out middlemen for regional crops like Guntur chilies, Krishna Valley paddy, and Nizamabad turmeric.",
        description: "PureHarvest is an agricultural sponsorship and direct-to-consumer platform engineered to empower regional farmers ('Rythu') across Andhra Pradesh and Telangana. By eliminating layers of traditional agricultural middlemen, PureHarvest enables consumers to sponsor seasonal harvest batches—such as Guntur red chilies, Krishna Valley paddy, and Nizamabad organic turmeric—while providing farmers with a dedicated Rythu Dashboard to manage subscribers, track revenue, and publish live crop lifecycle updates.",
        story: "From fertile Guntur chili fields to golden Krishna Valley paddy terraces, the Deccan region has always been a national granary, but modern supply chains disconnected consumers from farmers. PureHarvest bridges this gap through a dual-sided web platform: a consumer discovery experience for harvest sponsorship and a specialized Rythu Portal where farmers manage active subscription batches and post timeline milestones directly to their patrons.",
        techStack: ["React", "JavaScript", "Python", "FastAPI", "PostgreSQL", "Full-Stack", "REST APIs", "Analytics"],
        keyMetrics: [
          { label: "Platform Role", value: "Full-Stack Engineer" },
          { label: "Core Modules", value: "Consumer Portal + Rythu Dashboard" },
          { label: "Region", value: "Deccan Agriculture (AP & Telangana)" }
        ],
        architecture: {
          frontend: "Responsive React web application featuring farm exploration, harvest plan sponsorship flows, and an intuitive Rythu producer portal.",
          rythuPortal: "Dedicated farmer management dashboard tracking subscriber capacity, seasonal plan revenue, and delivery fulfillment queues.",
          lifecycleFeed: "Real-time crop progress update workflow allowing farmers to post farm updates, drying timelines, and batch milestones to sponsors.",
          backend: "Python FastAPI services managing harvest plan subscriptions, multi-tier pricing models, and regional agricultural data models."
        },
        timeline: "Client Engineering Engagement",
        role: "Full-Stack Software Engineer (Pure Harvest)",
        contributions: [
          "Engineered consumer-facing harvest sponsorship interfaces and regional farm explorer",
          "Architected the Rythu Dashboard for farmers to manage active harvest plans, track seasonal revenues, and monitor fulfillment",
          "Implemented subscriber update feed enabling farmers to post crop drying and harvest timeline updates",
          "Structured relational schemas linking farmers, harvest batches (chilies, paddy, turmeric), and sponsor subscriptions"
        ],
        goals: [
          "Connect consumers directly with regional farmers across Andhra Pradesh and Telangana, skipping intermediaries.",
          "Enable transparent harvest batch sponsorship models with seasonal pricing and capacity tracking.",
          "Provide farmers with a clean, accessible Rythu Dashboard to monitor monthly revenues, active subscribers, and pending deliveries.",
          "Build an interactive crop update feed bridging farm progress with sponsor visibility."
        ],
        takeaways: [
          "Designing for agricultural producers requires high-contrast, clean dashboard UX that reduces operational complexity.",
          "Batch-based subscription models create reliable seasonal revenue forecasting for farmers compared to volatile open-market middlemen.",
          "Direct timeline updates foster trust between urban consumers and rural agricultural producers."
        ]
      },
      {
        id: "agentai",
        title: "AgentAI Enterprise Assistant",
        subtitle: "Multi-Source Document Ingestion & RAG System",
        category: "ai",
        status: "Production Ready",
        isLive: false,
        githubUrl: "https://github.com/JyothsnaVellanki22/AgentAI",
        image: "/assets/projects/agentai.svg",
        summary: "Containerized RAG pipeline indexing technical PDFs and markdown files with cited answers.",
        description: "Designed for engineering teams who need reliable answers grounded in internal documentation. Supports document chunking, semantic ChromaDB indexing, and flexible routing between cloud and local language models.",
        story: "Built to explore how enterprise document management can be transformed through LangChain and vector databases while maintaining predictable Docker deployments.",
        techStack: ["Python", "FastAPI", "LangChain", "ChromaDB", "PostgreSQL", "Docker Compose", "Angular 16"],
        keyMetrics: [
          { label: "Pipeline", value: "Full RAG Flow" },
          { label: "Deployment", value: "Docker Compose" },
          { label: "Database", value: "PostgreSQL & Chroma" }
        ],
        architecture: {
          ingestion: "Automated text extraction from PDF and Markdown files.",
          vectorIndex: "ChromaDB vector collection with cosine similarity ranking.",
          orchestration: "Multi-container setup orchestrated via Docker Compose."
        }
      },
      {
        id: "securium-fox-security",
        title: "Cryptographic Code Security Analysis",
        subtitle: "Vulnerability Auditing & Automated Python Testing",
        category: "security",
        projectType: "internship",
        status: "Internship Project",
        timeline: "Internship Project",
        role: "Security Engineering Intern",
        isLive: false,
        image: "/assets/projects/cipher_security.svg",
        summary: "Security audit examining cryptographic cipher vulnerabilities, key lifecycles, and hashing protocols.",
        description: "Conducted static and dynamic code assessments to identify security vulnerabilities. Developed automated Python verification scripts to test key entropy, salt randomness, and protocol resilience.",
        story: "Security is never an afterthought. Working through real cryptographic implementations reinforced why strong boundaries and automated verification must be baked into every layer of software design.",
        techStack: ["Python", "Cryptography", "Static Code Analysis", "Security Auditing", "Automated Testing"],
        contributions: [
          "Static and dynamic analysis of cryptographic implementations and cipher routines",
          "Vulnerability assessment covering key entropy, salt randomness, and lifecycle management",
          "Engineered automated Python verification test suites and fuzzing harnesses",
          "Authored vulnerability remediation blueprints and cryptographic hardening guidelines"
        ],
        goals: [
          "Audit cryptographic cipher routines for implementation vulnerabilities and timing leaks.",
          "Validate key generation entropy, salt randomness, and secure storage lifecycle.",
          "Develop automated Python regression test suites to detect regression in cryptographic routines.",
          "Formulate actionable remediation blueprints adhering to OWASP and industry cryptographic standards."
        ],
        takeaways: [
          "Cryptographic hygiene requires strict parameter validation and resistance to side-channel timing variances.",
          "Automated test harnesses dramatically reduce regression risks during cryptographic library updates."
        ],
        keyMetrics: [
          { label: "Organization", value: "Securium Fox" },
          { label: "Role", value: "Security Intern" },
          { label: "Scope", value: "Cipher Implementations" },
          { label: "Output", value: "Remediation Blueprints" }
        ],
        architecture: {
          analysis: "AST parsing and manual cryptographic protocol review.",
          testing: "Automated regression testing for key rotation and memory hygiene."
        }
      },
      {
        id: "detection-illicit-messages",
        title: "Detection of Illicit Online Communications",
        subtitle: "Adversarial NLP Classification & Computer Vision Research",
        category: "security",
        projectType: "research",
        status: "Published Research Paper",
        timeline: "Academic Research Study",
        pdfUrl: "/assets/projects/illicit_messages_research_paper.pdf",
        isLive: false,
        image: "/assets/projects/illicit_detection.svg",
        summary: "Academic research study utilizing NLP and Computer Vision (SVM, Haar Cascades, and CNN) to detect illicit online messages and child exploitation networks on social platforms.",
        description: "Co-authored research study investigating real-time social media crawling, adversarial text normalization, and hybrid classification. Applied NLP (SVM and Naive Bayes) to detect suspicious messages and Computer Vision (Haar Cascade feature extraction + CNN) to analyze upper-torso and facial geometry for age and gender classification.",
        story: "Published under the Department of Computer Science & Engineering at Sri Indu Institute of Engineering & Technology, this research addresses automated clue detection for law enforcement against online human trafficking and exploitation networks.",
        techStack: ["Python", "NLP", "Computer Vision", "TensorFlow", "Scikit-Learn", "SVM", "CNN", "Haar Cascade", "Naive Bayes", "Pandas"],
        goals: [
          "Mine and analyze real-time social media streams to flag covert exploitation hashtags and coded jargon.",
          "Normalize noisy mobile messages and extract syntax-driven linguistic features (verbs, adjectives).",
          "Classify suspicious text using Support Vector Machines and Naive Bayes with high precision and recall.",
          "Extract facial and upper-torso geometric features to predict age groups (under 14 vs. over 14) and gender."
        ],
        takeaways: [
          "Torso geometric ratios provide high-performance age-group discriminators even when facial features are degraded.",
          "Combining NLP-based message screening with automated visual classification substantially outperforms single-modality detectors."
        ],
        keyMetrics: [
          { label: "Publication", value: "Research Paper (18 pp.)" },
          { label: "Institution", value: "Sri Indu Inst. of Eng. & Tech." },
          { label: "Methodology", value: "NLP + Haar + CNN/SVM" },
          { label: "Classification", value: "Age & Gender (<14 / >14)" }
        ],
        architecture: {
          textPipeline: "Tweet Harvesting -> Text Cleaning & Normalization -> Syntax Feature Extraction -> SVM / Naive Bayes Classification.",
          visionPipeline: "Image Extraction -> Haar Upper-Torso & Face Detection -> CNN / SVM Geometric Feature Classification."
        }
      }
    ];
  }

  getAllProjects() {
    return this.rawProjects.map((data) => new Project(data));
  }

  getProjectById(id) {
    const found = this.rawProjects.find((p) => p.id === id);
    return found ? new Project(found) : null;
  }
}

export const projectsRepository = new ProjectsRepository();
