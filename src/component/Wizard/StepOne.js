import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateName,
  updateAddress,
  updateCity,
  updateState1,
  updateZipcode
} from "../../ducks/reducer";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || "",
      address: this.props.address || "",
      city: this.props.city || "",
      state1: this.props.state1 || "",
      zipcode: this.props.zipcode || ""
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
    this.setState({ state1: value });
  };
  zipInput = value => {
    this.setState({ zipcode: value });
  };

  handleNextClick = () => {
    this.props.updateName(this.state.name);
    this.props.updateAddress(this.state.address);
    this.props.updateCity(this.state.city);
    this.props.updateState1(this.state.state1);
    this.props.updateZipcode(this.state.zipcode);
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
            value={this.state.name}
          />
        </div>
        <div>
          Address:
          <input
            address={this.state.address}
            onChange={e => this.addressInput(e.target.value)}
            value={this.state.address}
          />
        </div>
        <div>
          City:
          <input
            city={this.state.city}
            onChange={e => this.cityInput(e.target.value)}
            value={this.state.city}
          />
        </div>
        <div>
          State:
          <input
            state={this.state.state}
            onChange={e => this.stateInput(e.target.value)}
            value={this.state.state1}
          />
        </div>
        <div>
          Zipcode:
          <input
            zipcode={this.state.zipcode}
            onChange={e => this.zipInput(e.target.value)}
            value={this.state.zipcode}
          />
        </div>
        <Link to="/wizard/step2">
          <button onClick={this.handleNextClick}>Next</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { name, address, city, state1, zipcode } = state;

  return { name, address, city, state1, zipcode };
}

export default connect(
  mapStateToProps,
  {
    updateName,
    updateAddress,
    updateCity,
    updateState1,
    updateZipcode
  }
)(StepOne);
