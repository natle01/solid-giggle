import { useCallback, useState } from 'react';
import { NavLink, Route, RouteProps, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import Projects from './pages/Projects/Projects';
import { isTabletMode, mergeClasses } from './utils/utilities';

import styles from './App.module.css';

const ROUTES: RouteProps[] = [
  { path: '/', children: 'Home', element: <HomePage /> },
  { path: '/Projects', children: 'Projects', element: <Projects /> },
  { path: '/contact', children: 'Contact', element: <ContactPage /> }
];

const LINKS = ROUTES.map(({ path, ...route }) => ({
  to: path as string,
  ...route
}));

const Navigation = (props: { onClick?: () => void }): JSX.Element => (
  <nav>
    {LINKS.map((link, index) => (
      <NavLink
        key={index}
        className={({ isActive }) =>
          mergeClasses(styles.navItem, isActive && styles.active)
        }
        end
        {...link}
        {...props}
      />
    ))}
  </nav>
);

/**
 * The main application component that sets up routing and navigation.
 * @returns A JSX element.
 */
const App = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = useCallback((): void => {
    setIsMenuOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div className={styles.app}>
      <header className={styles.banner}>
        <h1 className={styles.logo}>Welcome</h1>
        {isTabletMode ? (
          <>
            <button
              className={mergeClasses(styles.menuButton, styles.navItem)}
              aria-expanded={isMenuOpen}
              aria-controls='nav-flyout'
              onClick={handleMenuClick}
            >
              Menu
            </button>
            <div
              id='nav-flyout'
              className={styles.flyoutMenu}
              data-open={isMenuOpen}
            >
              <Navigation onClick={handleMenuClick} />
            </div>
          </>
        ) : (
          <Navigation />
        )}
      </header>

      <main>
        <Routes>
          {ROUTES.map(({ element, ...route }) => (
            <Route key={route.path} {...route} element={<div>{element}</div>} />
          ))}
        </Routes>
      </main>
    </div>
  );
};

export default App;
