import { Section, SectionHeader } from '../../../components/Section/Section';
import Timeline, {
  type TimelineItem
} from '../../../components/Timeline/Timeline';

const WORK_EXPERIENCE: TimelineItem[] = [
  {
    company: 'Microsoft',
    role: 'User Experience Engineer II',
    location: 'Vancouver, Canada',
    date: 'Aug 2021 - Present',
    description: 'TBD'
  },
  {
    company: 'Backpacking',
    role: 'Various Jobs ✈️🧳',
    location: 'Canada, New Zealand',
    date: 'Jan 2019 - Jul 2021',
    description:
      'Worked across varied roles while traveling, building adaptability and strong communication across different cultures, communities, and people.'
  },
  {
    company: 'CSG International',
    role: 'Front End Software Engineer II',
    location: 'Brisbane, Australia',
    date: 'May 2014 - Dec 2018',
    description: 'TBD'
  }
];

/**
 * A section displaying my work experience.
 * @returns A React.ReactElement  element.
 */
const WorkExperienceSection = (): React.ReactElement => (
  <Section appearance='transparent'>
    <SectionHeader>Work Experience 🖥️</SectionHeader>
    <Timeline items={WORK_EXPERIENCE} />
  </Section>
);

export default WorkExperienceSection;
