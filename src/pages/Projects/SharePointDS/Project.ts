import type { ProjectDetails } from '../Projects';
import SharePointLogo from '../../../icons/sharePoint-logo.webp';

const blurb = 'A new design system launched for SharePoint\'s 25th anniversary to modernize the platform\'s look and feel. The update simplifies the user experience, improves clarity, and places a stronger focus on user content';
const description = `
- **System & Component Design:** Defined core design system foundations and built a scalable component library.
- **CI/CD & Infrastructure:** Connected DS to product repositories, establishing version control pipelines and automated deployments.
- **Enterprise-Scale Implementation:** Safeguarded core product stability during enterprise-scale visual and behavioral updates.
- **Accessibility (A11y) Leadership:** Led numerous design iterations to ensure global accessibility compliance and optimal usability.
- **Scalable Customization:** Engineered to scale alongside SharePoint's complex custom theming engine and bespoke customer requirements.
- **Legacy Preservation:** Maintained strict backward compatibility for existing site architectures, SharePoint Framework (SPFx) extensions, and underlying workflows.
- **Cross-Functional Coordination:** Partnered across disciplines—collaborating closely with stakeholders, product designers, and engineering.
`;

export const projectDetails: ProjectDetails = {
  title: 'SharePoint Visual Refresh',
  isNDA: true,
  url: 'https://techcommunity.microsoft.com/blog/spblog/a-new-sharepoint-look-and-feel-what%E2%80%99s-changing-and-why-it-matters/4529776',
  urlLabel: 'Microsoft - SharePoint Blog',
  items: [
    { src: 'https://techcommunity.microsoft.com/t5/s/gxcuf89792/images/bS00NTI5Nzc2LUpRY1ROZg?revision=2', caption: 'Promotional image of the new SharePoint look' },
    { src: 'https://techcommunity.microsoft.com/t5/s/gxcuf89792/images/bS00NTI5Nzc2LVJPaWN2Sw?revision=2', caption: 'Example of the new elevated look' },
    { src: 'https://techcommunity.microsoft.com/t5/s/gxcuf89792/images/bS00NTI5Nzc2LUNWOUFiTg?revision=2', caption: 'Camparing the new curved design' }
  ],
  blurb,
  description,
  logo: SharePointLogo,
  tech: ['typescript', 'react', 'fluent', 'figma', 'storybook', 'azureDevOps']
};
