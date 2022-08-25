import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import Search from "./weather/search/Search";
import CurrentWeather from "./weather/currentweather/CurrentWeather";

export default function WeatherWidget() {
  const [currentWeather, setCurrentWeather] = useState("");

  const handleOnSearchChange = useCallback((searchData) => {
    if (searchData) {
      setCurrentWeather({ ...searchData.current, ...searchData.location });
    }
  }, []);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}

      <div className="move-button">
        <Link to="/widgets">
          <button className="back-widgets">Back</button>
        </Link>
      </div>
    </div>
  );
}
