/**
 * Domain Model: Bio
 * Encapsulates the engineer's personal bio, story, and contact points in a warm, humanized format.
 */
export const PERSONAL_BIO = {
  name: "Jyothsna Vellanki",
  greeting: "Hi, I am Jyothsna Vellanki",
  role: "Software Engineer",
  tagline: "Software Engineer | Architecting Generative AI, RAG Systems & Scalable Solutions",
  bioStatement: "I am a Software Engineer with a deep focus on Generative AI, Retrieval-Augmented Generation (RAG), and production full-stack systems. I specialize in building intelligent, performant applications that bridge machine learning models with robust software architecture—from local LLM inference engines and machine learning security classifiers to real-time AI reflection platforms.",
  projectsInvitation: "View some of my popular projects!",
  contactEmail: "jyothsna.v.s24@gmail.com",
  location: "Atlanta, GA",
  company: "Chapter Reading LLC",
  links: {
    github: "https://github.com/JyothsnaVellanki22",
    linkedin: "https://www.linkedin.com/in/jyothsna-sri-vellanki/",
    portfolioLive: "https://portfolio-v2-portfolio.vercel.app/"
  },
  stats: [
    { label: "Selected Projects", value: "15" },
    { label: "Live in Production", value: "6" },
    { label: "ML Classification", value: "97% Accuracy" },
    { label: "Current Focus", value: "AI & Security" }
  ],
  philosophy: [
    {
      number: "01",
      title: "Clarity Before Complexity",
      summary: "I start by mapping out real data flows and security boundaries before choosing technologies. Simple, well-reasoned architectures always outperform over-engineered ones."
    },
    {
      number: "02",
      title: "Practical AI Engineering",
      summary: "Moving past superficial prompts to build verifiable RAG retrieval, local privacy-first models, and grounded responses that solve genuine user problems."
    },
    {
      number: "03",
      title: "Production Discipline",
      summary: "Writing code that's easy to read, test, and maintain. Strong typing, clear APIs, observability, and containerized deployments ensure reliability."
    },
    {
      number: "04",
      title: "Continuous Curiosity",
      summary: "Constantly testing new techniques—from cryptographic vulnerability audits to real-time machine learning—while keeping the end-user experience human and effortless."
    }
  ],
  skills: {
    languages: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "HTML5 & CSS3"],
    aiSystems: ["RAG Pipelines", "LangChain", "OpenRouter AI", "Ollama (Llama 3.2)", "ChromaDB", "Qdrant", "Scikit-Learn", "Naive Bayes", "TF-IDF"],
    frameworks: ["React", "FastAPI", "Vite", "Angular", "Node.js", "SQLAlchemy"],
    platforms: ["Docker", "PostgreSQL", "SQLite", "AWS", "Vercel", "Git"]
  }
};
