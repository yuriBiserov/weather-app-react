import React, { useState } from "react";
import styles from "./CityItem.module.css";

function CityItem(props) {
  if (props.savedCity) {
    let savedCity = props.savedCity;
    return (
      <div>
        <div className={styles.cardTitle}>
          <img className={styles.icon} />
          <div className={styles.temp}>Current</div>
          <div className={styles.name}>Location</div>
          <div className={styles.desc}>Description</div>
          <div className={styles.min_max}>Temperatures</div>
          <div className={styles.wind}>Wind</div>
        </div>
        <div className={styles.card}>
          <img
            src={`https://openweathermap.org/img/wn/${savedCity.weather[0].icon}.png`}
            className={styles.icon}
          />
          <div className={styles.temp}>
            {parseInt(savedCity.main.temp, 10)}℃
          </div>
          <div className={styles.name}>{savedCity.locationNameByUser}</div>
          <div className={styles.desc}>{savedCity.weather[0].main}</div>
          <div className={styles.min_max}>
            Min {parseInt(savedCity.main.temp_min, 10)}℃<br />
            Max {parseInt(savedCity.main.temp_max, 10)}℃
          </div>
          <div className={styles.wind}>{savedCity.wind.speed} Meter/Sec</div>
        </div>
      </div>
    );
  }

  if (props.city) {
    let city = props.city;

    return (
      <div>
        <div className={styles.cardTitle}>
          <div className={styles.name}>Location</div>
          <div className={styles.country}>Country</div>
          <div className={styles.state}>State</div>
          <div className={styles.buttonTitle}></div>
        </div>
        <div className={styles.card}>
          <div className={styles.name}>{city.locationNameByUser}</div>
          <div className={styles.country}>{city.country}</div>
          <div className={styles.state}>{city.state}</div>
          <button
            onClick={() => props.onClickSelect(city)}
            className={styles.button}
          >
            Select
          </button>
        </div>
      </div>
    );
  }
  if (props.selectedCity) {
    let weatherDetails = props.selectedCity;
    return (
      <div>
        <div className={styles.cardTitle}>
          <div className={styles.icon}></div>
          <div className={styles.temp}>Current</div>
          <div className={styles.name}>Location</div>
          <div className={styles.desc}>Description</div>
          <div className={styles.min_max}>Temperature</div>
          <div className={styles.wind}>Wind</div>
          <div className={styles.buttonTitle}></div>
        </div>

        <div className={styles.card}>
          <img src={weatherDetails.icon} className={styles.icon}></img>
          <div className={styles.temp}>{weatherDetails.temp}℃</div>
          <div className={styles.name}>{weatherDetails.locationNameByUser}</div>
          <div className={styles.desc}>{weatherDetails.description}</div>
          <div className={styles.min_max}>
            Min {weatherDetails.temp_min}℃<br />
            Max {weatherDetails.temp_max}℃
          </div>
          <div className={styles.wind}>{weatherDetails.wind} Meter/Sec</div>
          <button
            onClick={() => props.onClickAdd(weatherDetails)}
            className={styles.button}
          >
            Add to Dashboard
          </button>
        </div>
      </div>
    );
  }
}

export default CityItem;
