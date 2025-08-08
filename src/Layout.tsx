import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from './assets/LogoWithText.svg';
import styles from './Layout.module.scss';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close the menu when the route changes
    setMenuOpen(false);
    // scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={styles.App}>
      <div className={styles.NavBar}>
        <Link to="/">
          <img src={logo} className={styles.AppLogo} alt="logo" />
        </Link>
        <button
          className={styles.Hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <div
          className={`${styles.NavLinks} ${menuOpen ? styles.ShowMenu : ""}`}
        >
          <Link to="/">Home</Link>
          <a href="https://azroboticschampionship.com" target="_blank" rel="noopener noreferrer">States</a>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/hostevent">Host Event</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;
