import React, { useEffect, useState } from 'react';
import styles from './VolunteerPage.module.scss';
import EventList from '../../event-config.json';

interface Event {
  robotEventsLink: string;
  name: string;
  date: string;
  volunteerLink: string;
}

const VolunteerPage = () => {
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Sort events by date so closest event is first
    setCurrentEvents([...EventList.events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
  }, []);

  return (
    <div className={styles.volunteerContainer}>
      <h1 className={styles.title}>Volunteer with 18x18 AZ Robotics</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>Why Volunteer?</h2>
        <p className={styles.sectionText}>
          Volunteers are the heart of our robotics community. By volunteering at our events, you help inspire and empower the next generation of STEM leaders in Arizona. No prior robotics experience is required—just a passion for helping students learn and grow!
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>Upcoming Volunteer Opportunities</h2>
        <p className={styles.sectionText}>
          Sign up for one of our upcoming events below. We offer a variety of volunteer roles, from judging and refereeing to setup, logistics, and more. Training and support are provided for all roles.
        </p>
      </div>

      <div className={styles.eventList}>
        {currentEvents.map((event, index) => (
          <div key={index} className={styles.eventItem}>
            <div className={styles.eventDetails}>
              <div className={styles.eventName}>{event.name}</div>
              <div className={styles.eventDate}>Date: {new Date(event.date).toLocaleDateString()}</div>
            </div>
            <div className={styles.eventLinks}>
              <a className={styles.eventRobotEventLink} href={event.robotEventsLink} target="_blank" rel="noopener noreferrer">
                Event Details
              </a>
              <a className={styles.eventVolunteerLink} href={event.volunteerLink || '#'} target="_blank" rel="noopener noreferrer" style={{ opacity: event.volunteerLink ? 1 : 0.5, pointerEvents: event.volunteerLink ? 'auto' : 'none' }}>
                Sign up to Volunteer
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerPage;