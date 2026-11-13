import { useCallback, useEffect, useRef, useState } from 'react';
import { Link as RouterLink, NavLink, Route, Routes, useLocation, useMatch } from 'react-router-dom';
import {
  Button,
  ToggleButton,
  MenuIcon,
  MoonFillIcon,
  MoonOutlineIcon,
  SunFillIcon,
  SunOutlineIcon
} from '@natle01/laughing-kookaburra';

import { PAGES, ROUTES, ROUTES_EXT } from './routes';
import { isTabletMode, mergeClasses, prefersDarkMode } from './utils/utilities';
import { FernIcon, KangarooIcon, KiwiIcon, MapleLeafIcon, MooseIcon } from './icons/icons';

import styles from './App.module.css';

// The alternative color scheme to swap to.
const colorScheme = prefersDarkMode ? 'light' : 'dark';

const LINKS = ROUTES.map(({ path, children }) => ({
  to: path,
  children
}));

const DarkIcon = ({ filled }: { filled?: boolean; }) => filled ? <MoonFillIcon /> : <MoonOutlineIcon />;
const SunIcon = ({ filled }: { filled?: boolean; }) => filled ? <SunFillIcon /> : <SunOutlineIcon />;

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
        <MenuIcon />
      </Button>
      <div id='nav-flyout' data-open={isOpen} className={styles.flyoutMenu} >
        <Navigation setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

const Breadcrumb = () => {
  const isSlug = useMatch('/projects/:slug');
  if (!isSlug) return;

  const projectTitle = PAGES.project.getTitle?.(isSlug.params.slug);
  return (
    <nav className={styles.breadcrumbRow} aria-label='Breadcrumb'>
      <RouterLink to={PAGES.projects.path}>{PAGES.projects.children}</RouterLink>
      <span aria-hidden='true'> / </span>
      <span aria-current='page'>{projectTitle}</span>
    </nav>
  )
}

/**
 * The main application component that sets up routing and navigation.
 * @returns A React.ReactElement  element.
*/
const App = (): React.ReactElement => {
  const [swapMode, setSwapMode] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.colorScheme = swapMode ? colorScheme : '';
  }, [swapMode])

  return (
    <div className={styles.app}>
      <Background className={styles.appBackground}>
        <FernIcon className={styles.fern} />
        <MapleLeafIcon className={styles.mapleLeaf} />
      </Background>
      <header className={styles.banner}>
        <Background className={styles.headerBackground}>
          <KiwiIcon className={styles.kiwi} />
          <KangarooIcon className={styles.kangaroo} />
          <MooseIcon className={styles.moose} />
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
      <Breadcrumb />

      <div key={pathname} className={styles.pageContent}>
        <main>
          <Routes>
            {[...ROUTES, ...ROUTES_EXT].map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </main>
        <footer>© 2026 Natalie Wainwright. All rights reserved.</footer>
      </div>
    </div>
  );
};

export default App;
