import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from './assets/logo.svg';
import styles from './Layout.module.scss';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;
