import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
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

  // Track if active project was opened from All Projects view
  const openedFromAllProjectsRef = useRef(false);

  // Retrieve full domain model list from infrastructure
  const allProjects = useMemo(() => {
    return projectsRepository.getAllProjects();
  }, []);

  // Top 2 featured projects for the Home page: Chapter Reading Platform (1st) & CONA Mapping Tool (2nd)
  const featuredProjects = useMemo(() => {
    const first = allProjects.find((p) => p.id === 'chapter-reading-llc') || allProjects[0];
    const second = allProjects.find((p) => p.id === 'cona-mapping') || allProjects[1];
    return [first, second].filter(Boolean);
  }, [allProjects]);

  // Sync state with URL query params (?project=id or ?view=projects) on mount & popstate
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const projectId = params.get('project');
      const view = params.get('view');

      if (projectId) {
        const found = allProjects.find((p) => p.id === projectId);
        if (found) {
          setActiveProject(found);
          window.scrollTo({ top: 0, behavior: 'instant' });
          return;
        }
      }

      setActiveProject(null);

      if (view === 'projects') {
        setIsAllProjectsView(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setIsAllProjectsView(false);
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, [allProjects]);

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

  // Open individual project full-page view
  const openProject = useCallback((project) => {
    if (!project) return;
    openedFromAllProjectsRef.current = isAllProjectsView;
    setActiveProject(project);
    const newUrl = `${window.location.pathname}?project=${project.id}`;
    window.history.pushState({ projectId: project.id }, '', newUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isAllProjectsView]);

  // Close project detail page (returns to All Projects if opened there, else Home)
  const closeProject = useCallback(() => {
    setActiveProject(null);
    if (openedFromAllProjectsRef.current) {
      setIsAllProjectsView(true);
      const newUrl = `${window.location.pathname}?view=projects`;
      window.history.pushState({ view: 'projects' }, '', newUrl);
    } else {
      setIsAllProjectsView(false);
      const newUrl = window.location.pathname;
      window.history.pushState(null, '', newUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
