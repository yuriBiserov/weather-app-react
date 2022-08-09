import React, { useState } from "react";
import styles from "./CitiesList.module.css";
import CityItem from "./CityItem";

function CitiesList(props) {
  if (props.savedCities) {
    let savedCities = props.savedCities;

    if (savedCities.length > 0) {
      return (
        <div>
          <h3 className={styles.results}>
            {savedCities.length} Saved Location(s)
          </h3>
          <ul className={styles.citiesList}>
            {savedCities.map((savedCity) => (
              <li key={savedCity.id}>
                <CityItem savedCity={savedCity} />
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h3 className={styles.results}>
            {savedCities.length} Saved Location(s)
          </h3>
        </div>
      );
    }
  } else {
    return (
      <div>
        <h3 className={styles.results}>
          {props.resultsFound} Search Result(s)
        </h3>
        <ul className={styles.citiesList}>
          <CityItem />
          {props.cities.map((city) => (
            <li key={city.id}>
              <CityItem city={city} onClickSelect={props.onClickSelect} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CitiesList;
