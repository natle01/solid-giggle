import TechStackSection from './TechStackSection/TechStackSection';
import ProfileSection from './ProfileSection/ProfileSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import QualificationsSection from './QualificationsSection/QualificationsSection';
import WorkExperienceSection from './WorkExperienceSection/WorkExperienceSection';

/**
 * The main homepage component that aggregates all sections.
 * @returns A React.ReactElement  element.
 */
const HomePage = (): React.ReactElement => (
  <>
    <ProfileSection />
    <TechStackSection />
    <ProjectsSection />
    <WorkExperienceSection />
    <QualificationsSection />
  </>
);

export default HomePage;
