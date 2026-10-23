import type { ProjectDetails } from '../Projects';

const blurb = 'A lightweight, high-performance animation framework built to create beautiful web motions that elevate component design and overall site appearance. It seamlessly combines native performance with powerful timing controls to deliver smooth, engaging, and purposeful user experiences.';
const description = `
- **Hybrid Engine:** Blends the performance of native **CSS transitions/animations** with the programmatic precision of the **Web Animations API (WAAPI)**.
- **Smart Visibility:** Built-in **Intersection Observers** trigger contextual animations dynamically as elements enter or leave the viewport.
- **State-Driven Motion:** Natively reacts to user **interaction states** (such as hover, focus, and active triggers) for highly responsive tactile feedback.
- **Orchestrated Timelines:** Features powerful coordination tools to manage complex **group animations**, staggered sequences, and multi-element layouts effortlessly.
`;

export const projectDetails: ProjectDetails = {
  title: 'Motion Graphics',
  url: '',
  urlLabel: '',
  items: [{ src: undefined, caption: '' }],
  blurb,
  description,
  tech: ['typescript', 'react', 'css']
};


