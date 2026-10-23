import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink, Route, RouteProps, Routes } from 'react-router-dom';
import {
  Button,
  ToggleButton,
  // MenuIcon,
  // MoonFillIcon,
  // MoonOutlineIcon,
  // SunFillIcon,
  // SunOutlineIcon
} from '@natle01/laughing-kookaburra';

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

// The alternative color scheme to swap to.
const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';

const ROUTES: RouteProps[] = [
  { path: '/', children: 'Home', element: <HomePage /> },
  { path: '/Projects', children: 'Projects', element: <Projects /> },
  { path: '/contact', children: 'Contact', element: <ContactPage /> }
];

const LINKS = ROUTES.map(({ path, ...route }) => ({
  to: path as string,
  ...route
}));

// const DarkIcon = ({ filled }: { filled?: boolean; }) => filled ? <MoonFillIcon /> : <MoonOutlineIcon />;
// const SunIcon = ({ filled }: { filled?: boolean; }) => filled ? <SunFillIcon /> : <SunOutlineIcon />;
const DarkIcon = ({ }: { filled?: boolean; }) => '🌒';
const SunIcon = ({ }: { filled?: boolean; }) => '☀️';

const Background = (props: React.ComponentProps<'div'>) => (
  <div aria-hidden {...props} className={mergeClasses(styles.background, props.className)} />
);

const Navigation = ({ setIsOpen }: {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}): React.ReactElement => {
  const handleClose = useCallback((): void => setIsOpen?.(false), []);
  return <nav>
    {LINKS.map((link, index) => (
      <NavLink
        key={index}
        {...setIsOpen && { onClick: handleClose }}
        className={({ isActive }) =>
          mergeClasses(styles.navItem, isActive && styles.active)
        }
        end
        {...link}
      />
    ))}
  </nav>;
};

const ModeButton = ({ swapMode, setSwapMode }: {
  swapMode: boolean;
  setSwapMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleModeSwap = useCallback((): void => setSwapMode((swapMode) => !swapMode), []);
  return (
    <ToggleButton
      aria-label={`Enable ${colorScheme} mode`}
      className={styles.modeButton}
      onClick={handleModeSwap}
    >
      {colorScheme === 'dark' ? <DarkIcon filled={swapMode} /> : <SunIcon filled={swapMode} />}
    </ToggleButton>
  )
}

const MenuButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && ref.current) {
      const firstMenuITem = ref.current.querySelector('a');
      firstMenuITem && firstMenuITem.focus();
    }
  }, [isOpen]);

  return (
    <div ref={ref} className={styles.menuContainer}>
      <Button
        className={styles.menuButton}
        aria-expanded={isOpen}
        aria-controls='nav-flyout'
        aria-label='Navigation menu'
        onClick={handleClick}
      >
        🟰{/* <MenuIcon /> */}
      </Button>
      <div id='nav-flyout' data-open={isOpen} className={styles.flyoutMenu} >
        <Navigation setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

/**
 * The main application component that sets up routing and navigation.
 * @returns A React.ReactElement  element.
*/
const App = (): React.ReactElement => {
  const [swapMode, setSwapMode] = useState(false);

  return (
    <div className={styles.app} style={{ colorScheme: swapMode ? colorScheme : 'normal' }}>
      <Background className={styles.appBackground}>
        <img src={Fern} className={styles.fern} />
        <img src={MapleLeaf} className={styles.mapleLeaf} />
      </Background>
      <header className={styles.banner}>
        <Background className={styles.headerBackground}>
          <img src={Kiwi} className={styles.kiwi} />
          <img src={Kangaroo} className={styles.kangaroo} />
          <img src={Moose} className={styles.moose} />
        </Background>
        <h1 className={styles.logo}>Welcome</h1>
        {!isTabletMode ?
          <>
            <Navigation />
            <ModeButton swapMode={swapMode} setSwapMode={setSwapMode} />
          </> :
          <div className={styles.mobileControls}>
            <ModeButton swapMode={swapMode} setSwapMode={setSwapMode} />
            <MenuButton />
          </div>
        }
      </header>

      <div className={styles.pageContent}>
        <main>
          <Routes>
            {ROUTES.map(({ element, ...route }) => (
              <Route key={route.path} {...route} element={element} />
            ))}
          </Routes>
        </main>
        <footer>© 2026 Natalie Wainwright. All rights reserved.</footer>
      </div>
    </div>
  );
};

export default App;
