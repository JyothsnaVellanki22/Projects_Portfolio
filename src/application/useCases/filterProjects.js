/**
 * Application Use Case: filterProjects
 * Pure business logic for filtering project collections based on search, category, and live status.
 *
 * @param {Array<Project>} projects - List of Project domain models
 * @param {Object} criteria - Filter criteria
 * @param {string} criteria.category - Category id ('all', 'ai', 'security', etc.)
 * @param {string} criteria.query - Free text search query
 * @param {boolean} criteria.liveOnly - Flag to include only live deployed projects
 * @returns {Array<Project>} Filtered projects list
 */
export function filterProjects(projects, { category = 'all', query = '', liveOnly = false } = {}) {
  if (!Array.isArray(projects)) return [];

  return projects.filter((project) => {
    // 1. Category check
    if (!project.matchesCategory(category)) {
      return false;
    }

    // 2. Live status check
    if (liveOnly && !project.hasLiveDemo()) {
      return false;
    }

    // 3. Search query check
    if (!project.matchesSearch(query)) {
      return false;
    }

    return true;
  });
}
