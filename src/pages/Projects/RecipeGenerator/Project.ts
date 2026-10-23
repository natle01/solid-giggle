import type { ProjectDetails } from '../Projects';

const blurb = 'Showcase Website built to demonstrate the real-world application of the Laughing Kookaburra Design System.';
const description = `${blurb}
- **Production Implementation:** Features a fully realized web application built entirely using **Laughing Kookaburra** design tokens and WCAG-aligned UI components.
- **Live Motion Demonstrations:** Showcases real-world contexts for **viewport observers**, orchestrated group animations, and highly responsive interaction states.
- **Interactive Playgrounds:** Allows developers and designers to toggle between **system-matching light/dark modes** and test component themeability on the fly.
- **Best Practices Blueprint:** Serves as a reference implementation guide, offering clean code examples and structural patterns for integrating both packages.
`;

export const projectDetails: ProjectDetails = {
  title: 'Recipe Generator',
  url: '',
  urlLabel: '',
  items: [{ src: undefined, caption: '' }],
  blurb,
  description,
  tech: ['typescript', 'react', 'css']
};


