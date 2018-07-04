import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return;
    <div>
      <div>Dashboard</div>;
      <div>
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
      </div>
      <House />;
    </div>;
  }
}

export default Dashboard;
