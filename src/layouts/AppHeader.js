import React from "react";
import { Link } from "react-router-dom";
import styles from "./AppHeader.module.css";

function AppHeader() {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Circle-icons-weather.svg/512px-Circle-icons-weather.svg.png"
      ></img>
      <div className={styles.title}>Weather Dashboard</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Homepage </Link>
          </li>
          <li>
            <Link to="/search"> Search Locations </Link>
          </li>
          <li>
            <Link to="/saved"> Show Saved Locations </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
