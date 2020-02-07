import React from "react";
import "./search.css";

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => response.json())
//   .then(json => console.log(json));

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: " " };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ location: event.target.value });
  };

  handleSubmit = event => {
    alert("The following information was entered: " + this.state.location);
  };

  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=6adf9bd6c8ee8ecfbbb237676588b0fa"
    )
      .then(response => response.json())
      .then(json =>
        alert(
          "You have selected " +
            json.name +
            " as your current city." +
            " The wind speed is currently: " +
            json.wind.speed
        )
      );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="search-flex">
          <input
            class="search-col"
            type="text"
            name=""
            value={this.state.location}
            onChange={this.handleChange}
            placeholder="Please enter your location"
          ></input>
        </div>
      </form>
    );
  }
}

export default Search;
