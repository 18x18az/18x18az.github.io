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
    // Helper: parse a date-only string (YYYY-MM-DD or similar) as a local date
    const parseLocalDate = (dateStr: string) => {
      // If the string contains time or timezone, Date constructor will preserve it.
      // For date-only strings like '2025-10-11' treat them as local by splitting parts.
      // Try YYYY-MM-DD first
      const ymd = /^\s*(\d{4})-(\d{1,2})-(\d{1,2})\s*$/.exec(dateStr);
      if (ymd) {
        const year = Number(ymd[1]);
        const month = Number(ymd[2]) - 1; // zero-based
        const day = Number(ymd[3]);
        return new Date(year, month, day);
      }
      // Fallback to Date constructor for other formats
      return new Date(dateStr);
    };

    // Filter: keep events whose event date is today or in the future, or yesterday (if you want to still show today's events),
    // but hide them starting the day after the event date. Specifically: hide when nowLocal >= eventDate + 1 day
    const now = new Date();

    const filtered = [...EventList.events]
      .map(e => ({ ...e, _parsedDate: parseLocalDate(e.date) as unknown as Date }))
      .filter(e => {
        const eventDate: Date = (e as any)._parsedDate;
        // Compute eventDate + 1 day at local time
        const nextDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate() + 1);
        // Keep the event if now < nextDay (i.e., the event day is still today or in the future)
        return now < nextDay;
      })
      .sort((a, b) => (a as any)._parsedDate.getTime() - (b as any)._parsedDate.getTime())
      // remove the temporary _parsedDate before setting state
      .map(({ _parsedDate, ...rest }) => rest as Event);

    setCurrentEvents(filtered);
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
              <div className={styles.eventDate}>
                Date: {(() => {
                  // Display using local parsing to avoid timezone shift
                  const ymd = /\s*(\d{4})-(\d{1,2})-(\d{1,2})\s*/.exec(event.date);
                  const d = ymd ? new Date(Number(ymd[1]), Number(ymd[2]) - 1, Number(ymd[3])) : new Date(event.date);
                  return d.toLocaleDateString();
                })()}
              </div>
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