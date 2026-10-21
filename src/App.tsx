import { useCallback, useState } from 'react';
import { NavLink, Route, RouteProps, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import Projects from './pages/Projects/Projects';
import { isTabletMode, mergeClasses } from './utils/utilities';

import styles from './App.module.css';

import Fern from './icons/new-zealand-fern.svg'
import Kangaroo from './icons/australia-kangaroo.svg'
import MapleLeaf from './icons/canada-maple-leaf.svg'
import Moose from './icons/canada-moose.svg'
import Kiwi from './icons/new-zealand-kiwi.svg'

const ROUTES: RouteProps[] = [
  { path: '/', children: 'Home', element: <HomePage /> },
  { path: '/Projects', children: 'Projects', element: <Projects /> },
  { path: '/contact', children: 'Contact', element: <ContactPage /> }
];

const LINKS = ROUTES.map(({ path, ...route }) => ({
  to: path as string,
  ...route
}));

const Navigation = (props: { onClick?: () => void }): React.ReactElement => (
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

const Background = () => (
  <div className={styles.background}>
    <img src={Fern} className={styles.fern} />
    <img src={Kiwi} className={styles.kiwi} />
    <img src={Kangaroo} className={styles.kangaroo} />
    <img src={Moose} className={styles.moose} />
    <img src={MapleLeaf} className={styles.mapleLeaf} />
  </div >
);

/**
 * The main application component that sets up routing and navigation.
 * @returns A React.ReactElement  element.
 */
const App = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = useCallback((): void => {
    setIsMenuOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div className={styles.app}>
      <Background />
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
