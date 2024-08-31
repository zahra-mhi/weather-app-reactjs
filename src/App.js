import "./App.css";
import { CITIES } from "./data/cities";
import { fetchData } from "./api/api";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState();

  function handleChange(e) {
    const currentCity = JSON.parse(e.target.value);
    fetchData({ lat: currentCity.lat, lon: currentCity.lon }).then((res) => {
      setWeatherData(res);
      console.log(weatherData);
    });
  }

  return (
    <div className="container mt-4 p-5 bg-light border rounded-5">
      <h2 className="text-center mb-3">Welcome to My weather App</h2>
      <label className="mb-2">please select city :</label>
      <select className="form-select" onChange={handleChange}>
        {CITIES.map((city) => (
          <option key={city.id} value={JSON.stringify(city)}>
            {city.name}
          </option>
        ))}
        ;
      </select>
      <div className="mt-4">
        <h4>temp: {weatherData?.main.temp}</h4>
        <h4>pressure: {weatherData?.main.pressure}</h4>
        <h4>wind speed: {weatherData?.wind.speed}</h4>
      </div>
    </div>
  );
}

export default App;
