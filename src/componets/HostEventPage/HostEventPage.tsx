import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faHandsHelping, faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styles from './HostEventPage.module.scss';

const HostEventPage = () => {

  return (
    <div>
      <h1 className={styles.title}>Host an Event</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>
          <FontAwesomeIcon icon={faMoneyBillWave} style={{ color: '#00e0ff' }} /> Pricing
        </h2>
        <p className={styles.sectionText}>
          Our standard event hosting fee is <b>$600</b> per event. This covers all field control equipment, video equipment, audio equipment, and referees.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>
          <FontAwesomeIcon icon={faHandsHelping} style={{ color: '#00e0ff' }} /> What We Provide
        </h2>
        <ul className={styles.sectionText}>
          <li>All robotics competition equipment <span style={{ color: '#00e0ff' }}>(electronics, scoring systems, cameras, mircophones, projectors)</span></li>
          <li>Event staff and certified referees</li>
          <li>Event setup and teardown of competition equipment</li>
          <li>Live Stream</li>
          <li>Day-of technical support</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>
          <FontAwesomeIcon icon={faBuilding} style={{ color: '#00e0ff' }} /> What You Provide
        </h2>
        <ul className={styles.sectionText}>
          <li>Event venue <span style={{ color: '#00e0ff' }}>(gym, cafeteria, or similar space)</span></li>
          <li>Tables and chairs for teams and staff</li>
          <li>Access to power outlets and Ethernet</li>
          <li>Event volunteers <Link className={styles.link} to="/volunteer">(we can help recruit if needed)</Link></li>
          <li>Restrooms and basic facilities</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: '#00e0ff' }} /> Contact Us to Host
        </h2>
        <p className={styles.sectionText}>
          Ready to host a robotics event or have questions? Reach out to us at <a href="mailto:contact@18x18az.org?subject=Host%20an%20Event%20Inquiry" className={styles.link}>contact@18x18az.org</a>
        </p>
      </div>
    </div>
  );
};

export default HostEventPage;