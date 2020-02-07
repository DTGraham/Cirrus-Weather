import React from "react";
import "./map.css";

function WeatherDisplay() {
  return (
    <div class="map-flex">
      <div class="map-display">
        <iframe
          title="map-display"
          width="1000px"
          height="500px"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2WrMN9MDDUsRpY9Doiq3aJk&key=AIzaSyBxW0zgUSs6INy8B9bA9dbnWRVG3Oq0jSs&maptype=satellite"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default WeatherDisplay;

// AIzaSyBxW0zgUSs6INy8B9bA9dbnWRVG3Oq0jSs
