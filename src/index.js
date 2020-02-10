import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./nav";
import WeatherDisplay from "./WeatherDisplay";
import * as serviceWorker from "./serviceWorker";

require("dotenv").config();

ReactDOM.render(<Nav />, document.getElementById("react-navbar"));
ReactDOM.render(<WeatherDisplay />, document.getElementById("weather-display"));
serviceWorker.unregister();
