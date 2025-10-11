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

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>Donate Today</h2>
        <p className={styles.sectionText}>
          At 18x18 AZ Robotics, we believe that every student deserves the opportunity to explore, create, and innovate through hands-on STEM education. As a nonprofit organization, we’re dedicated to advancing robotics opportunities across Arizona — hosting VEX Robotics competitions, training students and mentors, and building a strong, inclusive community of young engineers and problem-solvers.<br/>
          Your donation directly supports:<br/>
          🤖 Student Robotics Teams — helping schools and community groups start and sustain robotics programs.<br/>
          🏆 Competitions & Events — creating inspiring spaces for students to learn, collaborate, and compete.<br/>
          🧠 Training & Mentorship — empowering coaches, educators, and volunteers who guide the next generation of innovators.<br/>

          Every contribution, big or small, helps us bring STEM to more students across Arizona. Together, we can build a future where creativity, teamwork, and technology thrive.<br/>

          <a href="https://www.zeffy.com/en-US/donation-form/creating-tomorrow-innovators" className={styles.link} target="_blank" rel="noopener noreferrer">Donate today and help us inspire Arizona’s next generation of innovators!</a><br/>
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;