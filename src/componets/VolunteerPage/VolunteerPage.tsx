import React, { use, useEffect, useState } from 'react';
import styles from './VolunteerPage.module.scss';
const EventList: Event[] = [
  { robotEventsLink: "https://www.robotevents.com", name: "Event 1", date: "2025-10-01", volunteerLink: "" },
  { robotEventsLink: "https://www.robotevents.com", name: "Event 2", date: "2025-10-09", volunteerLink: "" },
]

interface Event {
  robotEventsLink: string;
  name: string;
  date: string;
  volunteerLink: string;
}

const VolunteerPage = () => {
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Sort events by date
    if (!EventList || !Array.isArray(EventList) || EventList.length > 2) return;
    setCurrentEvents(EventList.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Volunteer for Events</h1>
      <div className={styles.eventList}>
        {currentEvents.map((event, index) => (
          <div key={index} className={styles.eventItem}>
            <h2 className={styles.eventName}>{event.name}</h2>
            <p className={styles.eventDate}>Date: {new Date(event.date).toLocaleDateString()}</p>
            <div className={styles.eventLinks}>
              <a className={styles.eventRobotEventLink} href={event.robotEventsLink} target="_blank" rel="noopener noreferrer">
                Robot Events
              </a>
              <br />
              <a className={styles.eventVolunteerLink} href={event.volunteerLink} target="_blank" rel="noopener noreferrer">
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