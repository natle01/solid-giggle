import type { ProjectDetails } from '../Projects';

import logo from './vivaAmplify-logo.webp';
import overviewVideo from './vivaAmplify-overview.mp4';
import authoring1 from './vivaAmplify-authoring.jpg';
import authoring2 from './vivaAmplify-authoring2.jpg';
import campaigns from './vivaAmplify-campaigns.jpg';
import reporting1 from './vivaAmplify-reporting.jpg';
import reporting2 from './vivaAmplify-reporting2.jpg';
import approvals from './vivaAmplify-approvals.jpg';

const blurb = 'Amplify Unifies global enterprise platforms (SharePoint, Outlook, Teams, and Engage) and synthesizes their flagship features into a single, cohesive application..';
const description = `
- **Cross-Platform Data Translation:** Led the backend data translation into supported UI structures for multi-format outputs (email, chat, and post formats).
- **Accessibility Compliance Lead:** Ensured project conformity with international digital accessibility mandates to support a global user base, specifically aligning with global EN 301 549 standards.
- **Reflow & Layout:** Built responsive interfaces designed to meet strict reflow and 400% zoom guidelines.
- **i18n & i10n:** Coded UI components to ensure strict conformity with internationalization and localization standards for dynamic multi-language and regional layouts..
- **Design & Engineering Liaison:** Facilitated communication across design and engineering disciplines to align visual concepts with technical development.
- **Backend Engineering Onboarder:** Trained incoming backend engineers on front-end UI architecture and system integration workflows.
- **Design System Governance:** Enforced strict adherence to established company UI/UX design patterns and standardized package usage.
`;

export const projectDetails: ProjectDetails = {
  title: 'Microsoft Viva Amplify',
  isNDA: true,
  url: 'https://www.microsoft.com/en-ca/microsoft-viva/amplify',
  urlLabel: 'Microsoft - Viva Amplify',
  items: [
    {
      src: [
        { src: 'https://s7mbrstream.scene7.com/hls-vod/microsoftcorp/_media_/7e3/7e357ef4-19bf-45d3-92d9-9f81ba43b556.mp4.m3u8', type: 'video/mp4' },
        { src: overviewVideo, type: 'video/mp4' }
      ],
      isVideo: true,
      caption: 'Walkthrough of product features'
    },
    { src: authoring1, caption: 'Publishing page' },
    { src: authoring2, caption: 'Ability to publish to multiple endpoints' },
    { src: approvals, caption: 'Send page for review' },
    { src: campaigns, caption: 'List of campaigns' },
    { src: reporting1, caption: 'Data representing page viewership' },
    { src: reporting2, caption: 'Resporting analysis of campaign' },
  ],
  logo,
  blurb,
  description,
  tech: ['typescript', 'c#', 'sql', 'react', 'fluent', 'figma', 'azureDevOps']
};


