import { Route, Switch } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

import LogoutPage from "../pages/LogoutPage";

import WidgetDashboard from "../pages/WidgetDashboard";
import Counter from "../widgets/Counter";
import ColorChanger from "../widgets/ColorChanger";
import PasswordToggle from "../widgets/PasswordToggle";
import Clock from "../widgets/Clock";
import WeatherWidget from "../widgets/Weather";
import Swapi from "../widgets/Swapi";

function DefaultContainer() {
  return (
    <Switch>
      <Route path="/logout" component={LogoutPage} />
      <Route path="/homepage" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/widgets" component={WidgetDashboard} />
      <Route path="/counter/widget" component={WidgetDashboard} />
      <Route path="/widget/colorchanger" component={ColorChanger} />
      <Route path="/widget/counter" component={Counter} />
      <Route path="/widget/passwordtoggle" component={PasswordToggle} />
      <Route path="/widget/clock" component={Clock} />
      <Route path="/widget/weather" component={WeatherWidget} />
      <Route path="/widget/swapi" component={Swapi} />
    </Switch>
  );
}

export default DefaultContainer;
