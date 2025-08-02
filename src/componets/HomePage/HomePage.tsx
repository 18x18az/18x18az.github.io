import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import PlaceHolder from '../../assets/PlaceHolder.svg';
import styles from './HomePage.module.scss';
const HomePage = () => {
  return (
    <div>
      <div className={styles.header}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h1 className={styles.sectionHeader}>Who we are</h1>
            <p className={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={styles.linkContainer}>
              <Link to="/about" className={styles.link}>Click Here to learn more about us . . .</Link>
            </div>
          </div>
          <img src={PlaceHolder} className={styles.sectionImage} />
        </div>
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h1 className={styles.sectionHeader}>How to Volunteer</h1>
            <p className={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={styles.linkContainer}>
              <Link to="/volunteer" className={styles.link}>Click Here to learn more about volunteering . . .</Link>
            </div>
          </div>
          <img src={PlaceHolder} className={styles.sectionImage} />
        </div>
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h1 className={styles.sectionHeader}>States</h1>
            <p className={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={styles.linkContainer}> 
              <a href="https://azroboticschampionship.com" className={styles.link} target="_blank" rel="noopener noreferrer">Click Here to learn more about states . . .</a>
            </div>
          </div>
          <img src={PlaceHolder} className={styles.sectionImage} />
        </div>
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h1 className={styles.sectionHeader}>How to Contact us / host event</h1>
            <p className={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={styles.linkContainer}>
              <Link to="/contact" className={styles.link}>Click Here to learn more about contacting us . . .</Link>
            </div>
          </div>
          <img src={PlaceHolder} className={styles.sectionImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;