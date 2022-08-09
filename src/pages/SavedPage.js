import React, { useState, useEffect } from "react";
import CitiesList from "../components/CitiesList";
import CityItem from "../components/CityItem";
const API_KEY = "7dbffd68d15aa8c4df387ce1006e60b1";

function SavedPage() {
  const [savedCities, setSavedCities] = useState({});
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    async function fetchCities() {
      let response = await fetch(
        `http://localhost:9000/weather/all/root?appid=${API_KEY}`
      );
      let responseJson = await response.json();
      setSavedCities(responseJson);
      if (responseJson.message) {
        setConnected(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <div>
      {connected ? (
        <div>
          <CitiesList savedCities={savedCities} />
        </div>
      ) : (
        <div>
          <h2>Some error occurred while retrieving Stored locations...</h2>
        </div>
      )}
    </div>
  );
}

export default SavedPage;
