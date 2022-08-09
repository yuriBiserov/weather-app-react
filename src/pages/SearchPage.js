import React, { useEffect, useRef, useState } from "react";
import CitiesList from "../components/CitiesList";
import CityItem from "../components/CityItem";
import styles from "./SearchPage.module.css";
import PopWindow from "../layouts/PopWindow";
const API_KEY = "7dbffd68d15aa8c4df387ce1006e60b1";

function SearchPage() {
  const [cityInput, setCityInput] = useState("");
  const [cities, setCities] = useState({});
  const [selectedCity, setSelectedCity] = useState({
    selected: false,
  });
  const [popWindow, setPopWindow] = useState(false);
  const [popMessage, setPopMessage] = useState("Something went wrong...");

  async function addWeather(city) {
    const res = await fetch(`http://localhost:9000/geolocations/root`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(city),
    });

    if (!res.ok) {
      setPopWindow(true);
    } else {
      setPopMessage("Location added Succesfully!");
      setPopWindow(true);
      return res;
    }
  }

  async function selectCityHandler(city) {
    setSelectedCity({});
    let response = await fetch(
      `http://localhost:9000/weather?lat=${city.lat}&lon=${city.lon}&locationNameByUser=${city.locationNameByUser}&appid=${API_KEY}&units=metric`
    );
    let responseJson = await response.json();
    setSelectedCity({
      selected: true,
      description: responseJson.weather[0].main,
      icon: `https://openweathermap.org/img/wn/${responseJson.weather[0].icon}.png`,
      temp: parseInt(responseJson.main.temp, 10),
      temp_min: parseInt(responseJson.main.temp_min, 10),
      temp_max: parseInt(responseJson.main.temp_max, 10),
      wind: responseJson.wind.speed,
      name: responseJson.locationNameByUser,
      lat: responseJson.coord.lat,
      lon: responseJson.coord.lon,
      locationNameByUser: responseJson.locationNameByUser,
    });
  }
  async function submitHandler(e) {
    e.preventDefault();
    if (cityInput) {
      setSelectedCity({});
      setCities({});
      const dataFromInput = await fetch(
        `http://localhost:9000/geolocations?location=${cityInput}&appid=${API_KEY}`
      );
      let dataJson = await dataFromInput.json();

      setCities(dataJson);
    } else {
      console.log("Please enter city name");
    }
  }

  return (
    <div>
      <h1>Search Locations</h1>
      <h4>Enter City Name Worldwide</h4>
      <form>
        <ul className={styles.ul}>
          <li>
            <input
              type="text"
              placeholder="City"
              className={styles.input}
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
            />
          </li>
          <li>
            <button
              type="submit"
              onClick={submitHandler}
              className={styles.button}
            >
              Search
            </button>
          </li>
        </ul>
      </form>

      <div>
        {cities.length > 0 && !selectedCity.selected ? (
          <div>
            <CitiesList
              cities={cities}
              onClickSelect={selectCityHandler}
              resultsFound={cities.length}
            />
          </div>
        ) : (
          <div></div>
        )}

        {selectedCity.selected ? (
          <div>
            <CityItem selectedCity={selectedCity} onClickAdd={addWeather} />
            <PopWindow
              trigger={popWindow}
              popMessage={popMessage}
              setTrigger={setPopWindow}
            ></PopWindow>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
