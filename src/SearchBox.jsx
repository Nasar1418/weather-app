import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SearchBox.css";

const SearchBox = ({ updateInfo }) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "20edebb0eb686950adab9804e7341978";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temperature: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      // console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleCity = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let result = await getWeatherInfo();
      updateInfo(result);
      setError(false);
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className="SearchBox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          id="city"
          name="city"
          label="City Name"
          onClick={handleCity}
          value={city}
          onChange={handleCity}
          required
        />
        <br />
        <Button style={{ marginTop: "15px" }} variant="contained" type="submit">
          Search
        </Button>

        {error && <p style={{ color: "red" }}>No Such Places Exists!</p>}
      </form>
    </div>
  );
};

export default SearchBox;
