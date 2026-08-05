import TechStackSection from './TechStackSection/TechStackSection';
import ProfileSection from './ProfileSection/ProfileSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import QualificationsSection from './QualificationsSection/QualificationsSection';
import WorkExperienceSection from './WorkExperienceSection/WorkExperienceSection';

/**
 * The main homepage component that aggregates all sections.
 * @returns A JSX element.
 */
const HomePage = (): JSX.Element => (
  <>
    <ProfileSection />
    <TechStackSection />
    <ProjectsSection />
    <WorkExperienceSection />
    <QualificationsSection />
  </>
);

export default HomePage;
