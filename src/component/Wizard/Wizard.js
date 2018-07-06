import React, { Component } from "react";
import { Link } from "react-router-dom";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
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
            onChange={e => this.nameInput(e.target.value)}
          />
        </div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
