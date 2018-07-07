import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class StepOne extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state1: "",
      zipcode: ""
    };
  }
  nameInput = value => {
    this.setState({ name: value });
  };
  addressInput = value => {
    this.setState({ address: value });
  };
  cityInput = value => {
    this.setState({ city: value });
  };
  stateInput = value => {
    this.setState({ state: value });
  };
  zipInput = value => {
    this.setState({ zipcode: value });
  };

  render() {
    console.log(this.props, "this is step1 props");

    return (
      <div>
        <div>Wizard</div>
        <div>
          Name:
          <input
            name={this.state.name}
            onChange={e => this.nameInput(e.target.value)}
          />
        </div>
        <div>
          Address:
          <input
            address={this.state.address}
            onChange={e => this.addressInput(e.target.value)}
          />
        </div>
        <div>
          City:
          <input
            city={this.state.city}
            onChange={e => this.cityInput(e.target.value)}
          />
        </div>
        <div>
          State:
          <input
            state={this.state.state}
            onChange={e => this.stateInput(e.target.value)}
          />
        </div>
        <div>
          Zipcode:
          <input
            zipcode={this.state.zipcode}
            onChange={e => this.zipInput(e.target.value)}
          />
        </div>
        <Link to="/wizard/step2">
          <button>Next</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { name, address, city, state1, zipcode } = state;

  return { name, address, city, state1, zipcode };
}

export default connect(mapStateToProps)(StepOne);
