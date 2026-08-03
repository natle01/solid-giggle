import { NavLink, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import Projects from './pages/Projects/Projects';

import styles from './App.module.css';

type NavigationProps = {
  links: { ext: string; label: string }[];
};

const ROUTES = [
  { ext: '/', label: 'Home', element: <HomePage /> },
  { ext: '/Projects', label: 'Projects', element: <Projects /> },
  { ext: '/contact', label: 'Contact', element: <ContactPage /> }
];

const Navigation = ({ links }: NavigationProps): JSX.Element => (
  <nav>
    {links.map(({ ext, label }) => (
      <NavLink
        key={ext}
        to={ext}
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ''}`
        }
        end
      >
        {label}
      </NavLink>
    ))}
  </nav>
);

/**
 * The main application component that sets up routing and navigation.
 * @returns A JSX element.
 */
const App = (): JSX.Element => (
  <div className={styles.app}>
    <header className={styles.banner}>
      <h1 className={styles.logo}>Welcome</h1>
      <Navigation links={ROUTES.map(({ ext, label }) => ({ ext, label }))} />
    </header>

    <main>
      <Routes>
        {ROUTES.map(({ ext, element }) => (
          <Route key={ext} path={ext} element={<div>{element}</div>} />
        ))}
      </Routes>
    </main>
  </div>
);

export default App;
