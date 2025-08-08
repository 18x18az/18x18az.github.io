import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoWithText } from '../../assets/LogoWithText.svg';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import StatesLogo from '../../assets/statesLogo.png';
import EventPicture from '../../assets/EventPicture.jpg';
import VolunteerPicture from '../../assets/volunteers.jpg';
import styles from './HomePage.module.scss';


const HomePage = () => {
  return (
    <div>
      <div className={styles.header}>
        <LogoWithText className={styles.logo} />
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h1 className={styles.sectionHeader}>Who we are</h1>
            <p className={styles.sectionText}>
              We are a passionate community dedicated to inspiring and empowering the next generation of robotics enthusiasts. Our mission is to provide students, mentors, and volunteers with opportunities to learn, compete, and grow through hands-on robotics experiences. By fostering teamwork, creativity, and technical skills, we help shape future leaders in STEM fields.
            </p>
            <div className={styles.linkContainer}>
              <Link to="/about" className={styles.link}>Click Here to learn more about us . . .</Link>
            </div>
          </div>
          <Logo className={styles.sectionImage} />
        </div>
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h1 className={styles.sectionHeader}>How to Volunteer</h1>
            <p className={styles.sectionText}>
              Volunteers are the heart of our organization! Whether you have technical expertise or simply a desire to help, there are many ways to get involved. From judging and refereeing at events to mentoring teams or assisting with logistics, your time and skills make a real difference. No prior robotics experience is required—just enthusiasm and a willingness to support students.
            </p>
            <div className={styles.linkContainer}>
              <Link to="/volunteer" className={styles.link}>Click Here to learn more about volunteering . . .</Link>
            </div>
          </div>
          <img src={VolunteerPicture} className={styles.sectionImage} />
        </div>
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h1 className={styles.sectionHeader}>States</h1>
            <p className={styles.sectionText}>
              The Arizona Robotics State Championship is the culmination of our season, bringing together the best teams from across the state to compete, collaborate, and celebrate their achievements. Learn more about the event, how to qualify, and what to expect at this exciting showcase of talent and innovation.
            </p>
            <div className={styles.linkContainer}> 
              <a href="https://azroboticschampionship.com" className={styles.link} target="_blank" rel="noopener noreferrer">Click Here to learn more about states . . .</a>
            </div>
          </div>
          <img src={StatesLogo} className={styles.sectionImage} />
        </div>
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h1 className={styles.sectionHeader}>Host an event</h1>
            <p className={styles.sectionText}>
              Interested in bringing a robotics event to your school or community? We provide resources, guidance, and support to help you host a successful competition or workshop. Hosting is a rewarding way to engage students, promote STEM, and build connections within your local area. Find out how you can get started and make an impact!
            </p>
            <div className={styles.linkContainer}>
              <Link to="/hostevent" className={styles.link}>Click Here to learn about hosting an event . . .</Link>
            </div>
          </div>
          <img src={EventPicture} className={styles.sectionImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;