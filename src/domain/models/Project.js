/**
 * Domain Model: Project
 * Represents a software engineering project entity, pure of UI or framework dependencies.
 */
export class Project {
  constructor({
    id,
    title,
    subtitle,
    category,
    projectType = "personal",
    clientName = null,
    status,
    isLive = false,
    liveUrl = null,
    githubUrl = null,
    docsUrl = null,
    image,
    screenshots = [],
    summary,
    description,
    story,
    techStack = [],
    keyMetrics = [],
    architecture = null,
    timeline = "Production",
    role = null,
    contributions = [],
    goals = [],
    takeaways = [],
    caseStudySections = [],
    pdfUrl = null
  }) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.category = category;
    this.projectType = projectType;
    this.clientName = clientName;
    this.status = status;
    this.isLive = Boolean(isLive);
    this.liveUrl = liveUrl;
    this.githubUrl = githubUrl;
    this.docsUrl = docsUrl;
    this.image = image;
    this.screenshots = Array.isArray(screenshots) ? screenshots : [];
    this.summary = summary;
    this.description = description;
    this.story = story;
    this.techStack = Array.isArray(techStack) ? techStack : [];
    this.keyMetrics = Array.isArray(keyMetrics) ? keyMetrics : [];
    this.architecture = architecture;
    this.timeline = timeline;
    this.role = role;
    this.contributions = Array.isArray(contributions) ? contributions : [];
    this.goals = Array.isArray(goals) ? goals : [];
    this.takeaways = Array.isArray(takeaways) ? takeaways : [];
    this.caseStudySections = Array.isArray(caseStudySections) ? caseStudySections : [];
    this.pdfUrl = pdfUrl;
  }

  isClientProject() {
    return this.projectType === 'client';
  }

  isPersonalProject() {
    return this.projectType === 'personal';
  }

  isInternshipProject() {
    return this.projectType === 'internship';
  }

  isResearchProject() {
    return this.projectType === 'research';
  }

  hasPdf() {
    return Boolean(this.pdfUrl);
  }

  getProjectTypeLabel() {
    if (this.isClientProject()) return 'Client Work';
    if (this.isInternshipProject()) return 'Internship';
    if (this.isResearchProject()) return 'Research Study';
    return 'Personal Project';
  }

  getProjectTypeClass() {
    if (this.isClientProject()) return 'client-work';
    if (this.isInternshipProject()) return 'internship';
    if (this.isResearchProject()) return 'research-study';
    return 'personal-project';
  }

  hasLiveDemo() {
    return Boolean(this.isLive && this.liveUrl);
  }

  hasRepository() {
    return Boolean(this.githubUrl);
  }

  matchesSearch(query) {
    if (!query || query.trim() === '') return true;
    const q = query.toLowerCase().trim();
    const matchesTitle = this.title.toLowerCase().includes(q);
    const matchesSubtitle = this.subtitle ? this.subtitle.toLowerCase().includes(q) : false;
    const matchesSummary = this.summary ? this.summary.toLowerCase().includes(q) : false;
    const matchesTech = this.techStack.some((tech) => tech.toLowerCase().includes(q));
    const matchesClient = this.clientName ? this.clientName.toLowerCase().includes(q) : false;
    return matchesTitle || matchesSubtitle || matchesSummary || matchesTech || matchesClient;
  }

  matchesCategory(categoryId) {
    if (!categoryId || categoryId === 'all') return true;
    if (categoryId === 'client') return this.projectType === 'client';
    if (categoryId === 'personal') return this.projectType === 'personal';
    return this.category === categoryId;
  }
}
