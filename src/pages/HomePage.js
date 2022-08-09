import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <ul className={styles.ul}>
        <li>
          <h4>Search and Add Locations</h4>
          <Link to="/search" className={styles.button}>
            <button className={styles.button}>Search</button>
          </Link>
        </li>

        <li>
          <h4>Display Dashboard Locations</h4>
          <Link to="/saved" className={styles.button}>
            <button className={styles.button}>Display</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
