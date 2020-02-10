import React from "react";
import "./nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: ["metric"]
    };
  }

  render() {
    return (
      <div class="top-nav">
        <div class="nav-flex">
          <div class="nav-grid">
            <h2>
              <a
                class="nav-column-left "
                href="https://weather.gc.ca/city/pages/on-143_metric_e.html"
              >
                Cirrus Weather
              </a>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
