import { Link } from "react-router-dom";
import "../styles/main.scss";
import counter from "../images/counter.png";
import colorchanger from "../images/colorchanger.png";
import passwordtoggle from "../images/passwordtoggle.png";
import clock from "../images/clock.png";
import weather from "../images/weather.png";
import swapi from "../images/swapi.png";

export default function WidgetDashboard() {
  return (
    <div className="dashboard-wrapper">
      <h1> Widget Dashboard</h1>

      <div className="widget-wrapper">
        <div className="widget counter-widget">
          <div>
            <img src={counter} alt="images/counter.png" />
          </div>
          <div>
            <Link to="/widget/counter">
              <button>Counter</button>
            </Link>
          </div>
        </div>

        <div className="widget color-changer-widget">
          <div>
            <img src={colorchanger} alt="images/colorchanger.png" />
          </div>
          <Link to="/widget/colorchanger">
            <button> Color Changer</button>
          </Link>
        </div>
        <div className="widget password-toggle-widget">
          <div>
            <img src={passwordtoggle} alt="images/passwordtoggle.png" />
          </div>
          <Link to="/widget/passwordtoggle">
            <button>Password Toggle</button>
          </Link>
        </div>
        <div className="widget clock-widget">
          <div>
            <img src={clock} alt="images/clock.png" />
          </div>
          <Link to="/widget/Clock">
            <button>Clock</button>
          </Link>
        </div>
        <div className="widget weather-widget">
          <div>
            <img src={weather} alt="images/weather.png" />
          </div>
          <Link to="/widget/weather">
            <button>Weather</button>
          </Link>
        </div>

        <div className="widget swapi-widget">
          <div>
            <img src={swapi} alt="images/swapi.png" />
          </div>
          <Link to="/widget/swapi">
            <button>Swapi</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
