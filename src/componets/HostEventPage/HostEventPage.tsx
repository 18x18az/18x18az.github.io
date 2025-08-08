import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faHandsHelping, faBuilding, faEnvelope, faShare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styles from './HostEventPage.module.scss';

const HostEventPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending] = useState(false); // No longer needed, but keep for disabling
  const [error] = useState<string | null>(null); // No longer needed

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // mailto: handler (no backend required)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:host@18x18az.org?subject=Host%20an%20Event%20Inquiry%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nContact Email: ' + form.email)}`;
    window.open(mailto);
    setSubmitted(true);
  };

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
          <li>Event volunteers <Link className={styles.link} to="/volunteer">(we can help recruit if needed <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>)</Link></li>
          <li>Restrooms and basic facilities</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: '#00e0ff' }} /> Contact Us to Host
        </h2>
        <p className={styles.sectionText}>
          Ready to host a robotics event or have questions? Fill out the form below and our team will get back to you soon!
        </p>
        <div className={styles.formContainer}>
          {submitted ? (
            <div style={{ color: '#fff', fontSize: '1.2rem', textAlign: 'center' }}>
              Thank you for your interest! We will contact you soon.
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={sending}
              />
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                disabled={sending}
              />
              <textarea
                className={styles.textarea}
                name="message"
                placeholder="Tell us about your venue, preferred dates, and any questions you have."
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                disabled={sending}
              />
              <button className={styles.button} type="submit">Email Us</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostEventPage;