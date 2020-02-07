import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Nav from "./nav";
import Search from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Nav />, document.getElementById("react-navbar"));
// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<Search />, document.getElementById("searchbar"));
ReactDOM.render(<WeatherDisplay />, document.getElementById("weather-display"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
