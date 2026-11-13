import type { PathRouteProps } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import { PROJECTS } from './pages/examples/examples';

type PageRoute = Omit<PathRouteProps, 'path'> & {
  path: NonNullable<PathRouteProps['path']>;
  getTitle?: (slug?: string) => string | undefined;
};

export const PAGES: Record<string, PageRoute> = {
  home: { path: '/', children: 'Home', element: <HomePage /> },
  projects: { path: '/projects', children: 'Projects', element: <ProjectsPage /> },
  project: {
    path: '/projects/:slug',
    element: <ProjectPage />,
    getTitle: (slug) => PROJECTS.find((project) => project.ext === slug)?.title
  },
  contact: { path: '/contact', children: 'Contact', element: <ContactPage /> }
};

export const ROUTES: PageRoute[] = [PAGES.home, PAGES.projects, PAGES.contact];
export const ROUTES_EXT: PageRoute[] = [PAGES.project];
