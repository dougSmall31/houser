import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:4000";

class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: "",
      rent: ""
    };
  }
  mortInput = value => {
    this.setState({ mortgage: value });
  };
  rentInput = value => {
    this.setState({ rent: value });
  };
  addHouseHandler = () => {
    console.log(this.state);

    axios({
      method: "POST",
      url: BASE_URL + "/api/houses",
      data: this.state
    }).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <div>
          <h3>Recommended Rent:</h3>
          <div>
            <h2>Monthly Mortgage Amount</h2>
            <input onChange={e => this.mortInput(e.target.value)} />
          </div>
          <div>
            <h2>Desired Monthly Rent</h2>
            <input onChange={e => this.rentInput(e.target.value)} />
          </div>
        </div>
        <div>
          <Link to="/wizard/step2">
            <button>Previous</button>
          </Link>
          <button onClick={this.addHouseHandler}>Complete</button>
        </div>
      </div>

      //previous and complete buttons
    );
  }
}
export default StepThree;
