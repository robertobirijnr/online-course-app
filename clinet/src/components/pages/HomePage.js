import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Pluralsight Adminitrator</h1>
          <p>React and Redux for ultra-responsive web apps</p>
          <Link to="about" className="btn btn-primary btn-lg">
            Learn more
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
