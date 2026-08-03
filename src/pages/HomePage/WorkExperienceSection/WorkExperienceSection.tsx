import { Section, SectionHeader } from '../../../components/Section/Section';
import Timeline, {
  type TimelineItem
} from '../../../components/Timeline/Timeline';

const WORK_EXPERIENCE: TimelineItem[] = [
  {
    title: 'User Experience Engineer II',
    subtitle: 'Microsoft, Canada, BC',
    date: '2021 - Present',
    description: 'TBD'
  },
  {
    title: 'Backpacking ✈️🧳(Various Jobs)',
    subtitle: 'Canada, New Zealand',
    date: '2019 - 2020',
    description:
      'Worked across varied roles while traveling, building adaptability and strong communication across different cultures, communities, and people.'
  },
  {
    title: 'Front End Software Engineer II',
    subtitle: 'CSG International, Australia, QLD',
    date: '2014 - 2018',
    description: 'TBD'
  }
];

/**
 * A section displaying my work experience.
 * @returns A JSX element.
 */
const WorkExperienceSection = (): JSX.Element => (
  <Section appearance='darker'>
    <SectionHeader>Work Experience 🖥️</SectionHeader>
    <Timeline items={WORK_EXPERIENCE} />
  </Section>
);

export default WorkExperienceSection;
