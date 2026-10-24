import { Container, ContainerHeader } from '../../../components/Container/Container';
import Timeline, {
  type TimelineItem
} from '../../../components/Timeline/Timeline';

const WORK_EXPERIENCE: TimelineItem[] = [
  {
    company: 'Microsoft',
    role: 'User Experience Engineer II',
    location: 'Vancouver, Canada',
    date: 'Aug 2021 - Present',
    description: `
- **Accessibility lead** ensuring all features met WCAG guidelines (high contrast, keyboard navigation, screen readers, 400% zoom, reduced motion).
- **Created and maintained our design system** building reusable components, tokens, hooks, and animations using Web Animations API.
- **Owned system architecture and design patterns** guiding teams to ensure consistent structure and usage across the application.
- **Followed products through the entire lifecycle** from initial idea and prototyping to development and customer release.
- **Bridged communication** between design and engineering, ensuring both design visions and technical constraints were openly communicated and heard.
- **Onboarded and upskilled Back-End Engineers** to help them transition into Front-End development and adopt best coding practices.
- **Prototyped new features and packages** to evaluate their technical feasibility before bringing them into production.
`
  },
  {
    company: 'Backpacking',
    role: 'Various Jobs ✈️🧳',
    location: 'Canada, New Zealand',
    date: 'Jan 2019 - Jul 2021',
    description: `
- **Worked across varied, fast-paced roles** while traveling, building a high level of adaptability and resourcefulness in new environments.
- **Developed strong communication and collaboration skills** by working alongside people from diverse cultures, backgrounds, and communities.
- **Adapted quickly** to different team dynamics and workplace cultures, picking up new tasks and workflows on the fly.
`
  },
  {
    company: 'CSG International',
    role: 'Software Developer II & User Experience Designer',
    location: 'Brisbane, Australia',
    date: 'May 2014 - Dec 2018',
    description: `
- **Dual role as Full-Stack Developer and UX Designer** easily switching gears between writing code and creating fluid mockups.
- Worked in a **test-driven environment** focusing on automated testing and writing clean, scalable code.
- **Mentored interns and new hires** to get them up to speed quickly so they could contribute to active development.
- **Travelled internationally** to our global offices to host workshops and facilitate the adoption of new product designs.
- **Co-led company social committee** organizing team events that successfully boosted office culture and company morale.
`
  }
];

/**
 * A section displaying my work experience.
 * @returns A React.ReactElement  element.
 */
const WorkExperienceSection = (): React.ReactElement => (
  <Container appearance='transparent'>
    <ContainerHeader>Work Experience 🖥️</ContainerHeader>
    <Timeline items={WORK_EXPERIENCE} />
  </Container>
);

export default WorkExperienceSection;
