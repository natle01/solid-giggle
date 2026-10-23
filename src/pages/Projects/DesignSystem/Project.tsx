import type { ProjectDetails } from '../Projects';

import LightMode from './LaughingKookaburra-lightMode.jpg';
import DarkMode from './LaughingKookaburra-darkMode.jpg';
import HighContrast from './LaughingKookaburra-highContrast.jpg';
import Tokens from './LaughingKookaburra-tokens.jpg';
import Themeing from './Themeing.png';

const blurb = 'A WCAG-aligned design system featuring deeply themeable components and performant animations.';
const description = `
- **Built for Inclusion:** Engineered from the ground up to be **WCAG-aligned**, natively supporting user system preferences like **reduced motion** and **dark mode** media queries.
- **Granular Themeability:** Powered by robust **design tokens** that allow for deeply personalized look-and-feel adjustments down to the individual component level.
- **Modern Web Animations:** Built-in **Web Animations API (WAAPI)** integration, featuring highly customizable properties to add meaningful visual impact without sacrificing performance.
- **Adaptive Documentation:** Features a seamless **Storybook implementation** supporting both light and dark mode development.
`;

export const projectDetails: ProjectDetails = {
  title: 'Laughing Kookabura Design System',
  url: 'https://laughingkookaburra.netlify.app',
  urlLabel: 'Laughing Kookabura Storybook',
  items: [
    { src: LightMode, caption: 'Landing page in light mode' },
    { src: DarkMode, caption: 'Landing page in dark mode' },
    { src: HighContrast, caption: 'Toggle button component in high contrast' },
    { src: Themeing, caption: 'Custom themeing applied' },
    { src: Tokens, caption: 'Comparison table of light and dark mode tokens' }
  ],
  blurb,
  description,
  tech: ['typescript', 'react', 'sass', 'webAPIAnimations']
};
