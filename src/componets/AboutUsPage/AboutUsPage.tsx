import React from 'react';
import styles from './AboutUsPage.module.scss';

const AboutUsPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>About 18x18 AZ Robotics</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>Who We Are</h2>
        <p className={styles.sectionText}>
          18x18 AZ Robotics is a nonprofit organization dedicated to advancing STEM education and robotics opportunities for students across Arizona. We support and organize VEX Robotics competitions, provide resources for teams, and foster a vibrant, inclusive robotics community.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>Our Mission</h2>
        <p className={styles.sectionText}>
          {/* TODO: Add your mission statement here */}
          Our mission is to inspire and empower the next generation of innovators, engineers, and leaders through hands-on robotics experiences and STEM outreach.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>What We Do</h2>
        <p className={styles.sectionText}>
          We host and support VEX Robotics competitions, offer training and mentorship for students and coaches, and collaborate with schools, community organizations, and sponsors to expand access to robotics education. Our events bring together students from diverse backgrounds to learn, compete, and grow.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>Our Impact</h2>
        <p className={styles.sectionText}>
          Since our founding, 18x18 AZ Robotics has helped hundreds of students discover their passion for STEM, develop teamwork and problem-solving skills, and pursue careers in science and technology. We are proud to support the Arizona robotics community and help shape the future of innovation in our state.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>Get Involved</h2>
        <p className={styles.sectionText}>
          Interested in volunteering, sponsoring, or starting a team? We welcome individuals, educators, and organizations to join us in making a difference. <br />
          {/* TODO: Add more details or links for volunteering, donations, and contact info */}
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;