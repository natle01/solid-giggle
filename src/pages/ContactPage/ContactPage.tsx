import { Pill } from '../../components/Pill/Pill';
import { Section, SectionHeader } from '../../components/Section/Section';
import styles from './ContactPage.module.css';

const location = 'Vancouver, BC, Canada';

function ContactPage() {
  return (
    <>
      <Section>
        <p
          className={styles.subtitle}
          aria-label={`Current location ${location}`}
        >
          📍 {location}
        </p>
        <SectionHeader ariaLevel={2} className={styles.contactHeading}>
          Contact
        </SectionHeader>
        <p className={styles.subtitle}>Let's connect</p>
        <span>Feel free to reach out and connect.</span>
      </Section>

      <div className={styles.infoGrid}>
        <Section>
          <SectionHeader ariaLevel={3}>Reach me at</SectionHeader>
          <p className={styles.contactLinkLine}>
            <a
              href='https://www.linkedin.com/in/natalie-wainwright/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </p>
        </Section>

        <Section>
          <SectionHeader ariaLevel={3}>Availability</SectionHeader>
          <div className={styles.pillRow}>
            {['Open to work', 'Full-time', 'Hybrid', 'Remote'].map((label) => (
              <Pill key={label} label={label} compact />
            ))}
          </div>
          <p>I have working rights in Australia, Canada, and New Zealand.</p>
        </Section>
      </div>
    </>
  );
}

export default ContactPage;
