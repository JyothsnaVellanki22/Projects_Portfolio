import { useState, useMemo, useEffect, useCallback } from 'react';
import { projectsRepository } from '../../infrastructure/repositories/projectsRepository';
import { filterProjects } from '../useCases/filterProjects';
import { CATEGORY_DEFINITIONS } from '../../domain/valueObjects/Category';

/**
 * Application Hook: useProjectsFilter
 * Coordinates project data fetching, filter state, and page routing (Home vs All Projects vs Project Detail).
 */
export function useProjectsFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [liveOnly, setLiveOnly] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [isAllProjectsView, setIsAllProjectsView] = useState(false);

  // Retrieve full domain model list from infrastructure
  const allProjects = useMemo(() => {
    return projectsRepository.getAllProjects();
  }, []);

  // Top 2 featured projects for the Home page
  const featuredProjects = useMemo(() => {
    const first = allProjects.find((p) => p.id === 'chapter-reading-llc') || allProjects[0];
    const second = allProjects.find((p) => p.id === 'cona-mapping') || allProjects[1];
    return [first, second].filter(Boolean);
  }, [allProjects]);

  // Helper to parse route state directly from current window.location.search
  const getRouteFromUrl = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    const view = params.get('view');
    const from = params.get('from');
    const isProjectsOrigin = from === 'projects' || view === 'projects';
    return { projectId, view, from, isProjectsOrigin };
  }, []);

  // Sync state with URL query params (?project=id or ?view=projects) on mount & popstate
  useEffect(() => {
    const handleUrlChange = () => {
      const { projectId, view, isProjectsOrigin } = getRouteFromUrl();

      if (projectId) {
        const found = allProjects.find((p) => p.id === projectId);
        if (found) {
          setActiveProject(found);
          // Set full navigation state on every URL change
          setIsAllProjectsView(isProjectsOrigin);
          window.scrollTo({ top: 0, behavior: 'instant' });
          return;
        }
      }

      setActiveProject(null);
      setIsAllProjectsView(view === 'projects');
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, [allProjects, getRouteFromUrl]);

  // Navigate to All Projects page
  const navigateToAllProjects = useCallback(() => {
    setActiveProject(null);
    setIsAllProjectsView(true);
    const newUrl = `${window.location.pathname}?view=projects`;
    window.history.pushState({ view: 'projects' }, '', newUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Navigate back to Home page
  const navigateToHome = useCallback(() => {
    setActiveProject(null);
    setIsAllProjectsView(false);
    const newUrl = window.location.pathname;
    window.history.pushState(null, '', newUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Open individual project full-page view (supports Project object or projectId string)
  const openProject = useCallback((projectOrId) => {
    if (!projectOrId) return;
    const project = typeof projectOrId === 'string'
      ? allProjects.find((p) => p.id === projectOrId)
      : projectOrId;
    if (!project) return;

    const { isProjectsOrigin } = getRouteFromUrl();
    const shouldRetainProjectsOrigin = isAllProjectsView || isProjectsOrigin;

    setActiveProject(project);
    setIsAllProjectsView(shouldRetainProjectsOrigin);

    const fromParam = shouldRetainProjectsOrigin ? '&from=projects' : '';
    const newUrl = `${window.location.pathname}?project=${encodeURIComponent(project.id)}${fromParam}`;
    window.history.pushState(
      { projectId: project.id, from: shouldRetainProjectsOrigin ? 'projects' : 'home' }, 
      '', 
      newUrl
    );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [allProjects, isAllProjectsView, getRouteFromUrl]);

  // Close project detail page (returns to All Projects if opened there or URL contains from=projects, else Home)
  const closeProject = useCallback(() => {
    const { isProjectsOrigin } = getRouteFromUrl();
    const returnToAll = isAllProjectsView || isProjectsOrigin;

    setActiveProject(null);
    if (returnToAll) {
      setIsAllProjectsView(true);
      const newUrl = `${window.location.pathname}?view=projects`;
      window.history.pushState({ view: 'projects' }, '', newUrl);
    } else {
      setIsAllProjectsView(false);
      const newUrl = window.location.pathname;
      window.history.pushState(null, '', newUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isAllProjectsView, getRouteFromUrl]);

  // Compute filtered project view using pure application use case
  const filteredProjects = useMemo(() => {
    return filterProjects(allProjects, {
      category: selectedCategory,
      query: searchQuery,
      liveOnly
    });
  }, [allProjects, selectedCategory, searchQuery, liveOnly]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setLiveOnly(false);
  };

  return {
    allProjects,
    featuredProjects,
    projects: filteredProjects,
    totalCount: allProjects.length,
    filteredCount: filteredProjects.length,
    categories: CATEGORY_DEFINITIONS,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    liveOnly,
    setLiveOnly,
    resetFilters,
    activeProject,
    isAllProjectsView,
    openProject,
    closeProject,
    navigateToAllProjects,
    navigateToHome
  };
}
