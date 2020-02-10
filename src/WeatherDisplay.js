import React from "react";
import "./WeatherDisplay.css";
import "./search.css";

class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // desc will take in a description of the weather in it's first spot and then use that to define which icon
      // to use in spot 2
      units: ["metric"],

      // submit is initially set to false and then used in the render function to determine whether or not to
      // display weather information. It is set true in the onSubmit function
      submit: false,

      // location is simply the name of the location entered by the user
      location: "",
      country: "",
      temp: "",
      name: "",

      // days 1 through 5 contain high temp in 1, weather description in 2, weather icon path in 3, and min temp in 4
      day1: ["", "", "", "", ""],
      day2: ["", "", "", "", ""],
      day3: ["", "", "", "", ""],
      day4: ["", "", "", "", ""],
      day5: ["", "", "", "", ""]
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitF = this.handleSubmitF.bind(this);
    this.backbutton = this.backbutton.bind(this);
  }

  handleChange1 = event => {
    this.setState({ location: event.target.value });
  };

  handleChange2 = event => {
    this.setState({ country: event.target.value });
  };

  backbutton = event => {
    this.setState({ submit: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    // loc is the end result of the user input, which should contain a valid location
    const loc = this.state.location;
    const con = this.state.country;

    const bitkey = process.env.REACT_APP_API_KEY;

    // fetch current weather conditions using openweather API

    fetch(
      "https://api.weatherbit.io/v2.0/current/daily?city=" +
        loc +
        "&key=" +
        bitkey +
        "&units=" +
        this.state.units +
        "&country=" +
        con
    )
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          desc: ["/" + data.data[0].weather.code + ".svg", ""],
          name: data.data[0].city_name + ", " + data.data[0].country_code,
          temp: data.data[0].temp
        })
      )
      .catch(error => alert("Invalid Location Entered"));

    fetch(
      "https://api.weatherbit.io/v2.0/forecast/daily?city=" +
        loc +
        "&key=" +
        bitkey +
        "&units=" +
        this.state.units +
        "&country=" +
        con
    )
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          day1: [
            data.data[0].max_temp,
            data.data[0].weather.description,
            "/" + data.data[0].weather.code + ".svg",
            data.data[0].min_temp,
            data.data[0].datetime
          ],
          day2: [
            data.data[1].max_temp,
            data.data[1].weather.description,
            "/" + data.data[1].weather.code + ".svg",
            data.data[1].min_temp,
            data.data[1].datetime
          ],
          day3: [
            data.data[2].max_temp,
            data.data[2].weather.description,
            "/" + data.data[2].weather.code + ".svg",
            data.data[2].min_temp,
            data.data[2].datetime
          ],
          day4: [
            data.data[3].max_temp,
            data.data[3].weather.description,
            "/" + data.data[3].weather.code + ".svg",
            data.data[3].min_temp,
            data.data[3].datetime
          ],
          day5: [
            data.data[4].max_temp,
            data.data[4].weather.description,
            "/" + data.data[4].weather.code + ".svg",
            data.data[4].min_temp,
            data.data[4].datetime
          ],
          submit: true
        })
      )
      .catch(error => console.log("Invalid Location Entered"));

    // Catch any errors we hit and update the app
  };

  // This is the same as handle submit with units as imperial instead of metric
  handleSubmitF = event => {
    event.preventDefault();
    // loc is the end result of the user input, which should contain a valid location
    const loc = this.state.location;
    const con = this.state.country;

    const bitkey = process.env.REACT_APP_API_KEY;

    // fetch current weather conditions using openweather API

    fetch(
      "https://api.weatherbit.io/v2.0/current/daily?city=" +
        loc +
        "&key=" +
        bitkey +
        "&units=imperial" +
        "&country=" +
        con
    )
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          desc: ["/" + data.data[0].weather.code + ".svg", ""],
          name: data.data[0].city_name + ", " + data.data[0].country_code,
          temp: data.data[0].temp
        })
      )
      .catch(error => console.log("Invalid Location Entered"));

    fetch(
      "https://api.weatherbit.io/v2.0/forecast/daily?city=" +
        loc +
        "&key=" +
        bitkey +
        "&units=imperial" +
        "&country=" +
        con
    )
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          day1: [
            data.data[0].max_temp,
            data.data[0].weather.description,
            "/" + data.data[0].weather.code + ".svg",
            data.data[0].min_temp,
            data.data[0].datetime
          ],
          day2: [
            data.data[1].max_temp,
            data.data[1].weather.description,
            "/" + data.data[1].weather.code + ".svg",
            data.data[1].min_temp,
            data.data[1].datetime
          ],
          day3: [
            data.data[2].max_temp,
            data.data[2].weather.description,
            "/" + data.data[2].weather.code + ".svg",
            data.data[2].min_temp,
            data.data[2].datetime
          ],
          day4: [
            data.data[3].max_temp,
            data.data[3].weather.description,
            "/" + data.data[3].weather.code + ".svg",
            data.data[3].min_temp,
            data.data[3].datetime
          ],
          day5: [
            data.data[4].max_temp,
            data.data[4].weather.description,
            "/" + data.data[4].weather.code + ".svg",
            data.data[4].min_temp,
            data.data[4].datetime
          ],
          submit: true
        })
      )
      .catch(error => console.log("Invalid Location Entered"));

    // Catch any errors we hit and update the app
  };

  render() {
    if (this.state.submit) {
      // If the form has already been submitted render the weather display
      return (
        <div>
          <div>
            <div class="menu-flex">
              <button class="menu-but" onClick={this.backbutton}>
                <img class="back-img menu-col" src="/back.svg" alt="" />
              </button>
              <button class="menu-but" onClick={this.handleSubmit}>
                <h2 class="menu-col">C°</h2>
              </button>
              <button class="menu-but" onClick={this.handleSubmitF}>
                <h2 class="menu-col">F°</h2>
              </button>
            </div>
            <div class="test-flex">
              <h2 class="test-col">{this.state.name}</h2>
            </div>
            <div class="test-flex">
              <h3 class="test-col">Current Conditions</h3>
            </div>
            <div class="test-flex">
              <img class="top-image" src={this.state.desc[0]} alt="" />
            </div>
            <div class="test-flex">
              <h3 class="test-col">{this.state.temp}°</h3>
            </div>
            <div class="test-flex">
              <h3 class="test-col">5-day Forecast</h3>
            </div>

            <div class="forecast-flex">
              <div class="forecast-col-1">
                <img class="forecast-img" src={this.state.day1[2]} alt="" />
              </div>
              <div class="forecast-col-2">
                <h4>{this.state.day1[4]}</h4>
                <h4>High : {this.state.day1[0]}°</h4>
                <h4>Low : {this.state.day1[3]}°</h4>
              </div>
              <div class="forecast-col-1">
                <img src={this.state.day2[2]} alt="" />
              </div>
              <div class="forecast-col-2">
                <h4>{this.state.day2[4]}</h4>
                <h4>High : {this.state.day2[0]}°</h4>
                <h4>Low : {this.state.day2[3]}°</h4>
              </div>
              <div class="forecast-col-1">
                <img src={this.state.day3[2]} alt="" />
              </div>
              <div class="forecast-col-2">
                <h4>{this.state.day3[4]}</h4>
                <h4>High : {this.state.day3[0]}°</h4>
                <h4>Low : {this.state.day3[3]}°</h4>
              </div>
              <div class="forecast-col-1">
                <img src={this.state.day4[2]} alt="" />
              </div>
              <div class="forecast-col-2">
                <h4>{this.state.day4[4]}</h4>
                <h4>High : {this.state.day4[0]}°</h4>
                <h4>Low : {this.state.day4[3]}°</h4>
              </div>
              <div class="forecast-col-1">
                <img src={this.state.day5[2]} alt="" />
              </div>
              <div class="forecast-col-2">
                <h4>{this.state.day5[4]}</h4>
                <h4>High : {this.state.day5[0]}°</h4>
                <h4>Low : {this.state.day5[3]}°</h4>
              </div>
            </div>
          </div>
        </div>
      );
    } // if the form has not been completed, only render the form
    else {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div class="search-flex">
              <input
                class="search-col"
                type="text"
                name=""
                value={this.state.location}
                onChange={this.handleChange1}
                placeholder="City"
              ></input>
              <input
                class="search-col-2"
                type="text"
                name=""
                value={this.state.country}
                onChange={this.handleChange2}
                placeholder="Country"
              ></input>
            </div>
            <div class="button-flex">
              <button class="sub-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default WeatherDisplay;
