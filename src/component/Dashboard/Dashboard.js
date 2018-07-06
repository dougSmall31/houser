import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houseList: []
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: BASE_URL + "/api/houses"
    }).then(response => {
      this.setState({ houseList: response.data });
    });
  }

  render() {
    return (
      <div>
        <div>Dashboard</div>
        <div>
          <div>Home Listings</div>
          {this.state.houseList.map(house => (
            <div>
              Property Name: {house.name}
              Address: {house.address}
              City: {house.city}
              State: {house.state}
              Zip: {house.zipcode}
            </div>
          ))}
        </div>
        <div>
          <Link to="/wizard">
            <button>Add New Property</button>
          </Link>
        </div>
        <House />
      </div>
    );
  }
}

export default Dashboard;
