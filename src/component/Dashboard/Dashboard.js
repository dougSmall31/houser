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
    console.log("this is this.state in parent", this.state);
    return (
      <div>
        <div>Dashboard</div>
        <House houses={this.state.houseList} />
        <div>
          <Link to="/wizard">
            <button>Add New Property</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
