import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateMort, updateRent } from "../../ducks/reducer";

const BASE_URL = "http://localhost:4000";

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: this.props.mortgage || "",
      rent: this.props.rent || ""
    };
  }
  mortInput = value => {
    this.setState({ mortgage: value });
  };
  rentInput = value => {
    this.setState({ rent: value });
  };
  addHouseHandler = () => {
    axios({
      method: "POST",
      url: BASE_URL + "/api/houses",
      data: this.props
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
            <input
              mortgage={this.state.mortgage}
              onChange={e => this.mortInput(e.target.value)}
              value={this.state.mortgage}
            />
          </div>
          <div>
            <h2>Desired Monthly Rent</h2>
            <input
              rent={this.state.rent}
              onChange={e => this.rentInput(e.target.value)}
              value={this.state.rent}
            />
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
function mapStateToProps(state) {
  const {
    name,
    address,
    city,
    state1,
    zipcode,
    imgUrl,
    mortgage,
    rent
  } = state;

  return { name, address, city, state1, zipcode, imgUrl, mortgage, rent };
}

export default connect(
  mapStateToProps,
  { updateMort, updateRent }
)(StepThree);
