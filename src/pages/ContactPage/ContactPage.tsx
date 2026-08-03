import { Pill } from '../../components/Pill/Pill';
import { Section, SectionHeader } from '../../components/Section/Section';
import styles from './ContactPage.module.css';

function ContactPage() {
  return (
    <>
      <Section>
        <p className={styles.subtitle}>Let's connect</p>
        <SectionHeader ariaLevel={2} className={styles.contactHeading}>
          Contact
        </SectionHeader>
        <span>Feel free to reach out and connect.</span>
        <span>
          I practice a healthy work-life balance and I kindly ask that any
          communication be work-related. Any non-work related messages will be
          ignored.
        </span>
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
          <p>
            I have full working rights in Australia, Canada, and New Zealand.
          </p>
        </Section>
      </div>
    </>
  );
}

export default ContactPage;
