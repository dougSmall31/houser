import React, { Component } from "react";
import { Link } from "react-router-dom";

class StepTwo extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: ""
    };
  }
  imgInput = value => {
    this.setState({ imgUrl: value });
  };
  render() {
    return (
      <div>
        <div>
          <h1>StepTwo/Add New Listing</h1>
          <h2>Image URL</h2>
          <input onChange={e => this.imgInput(e.target.value)} />
        </div>
        <div>
          <Link to="/wizard/step1">
            <button>Previous Step</button>
          </Link>
          <Link to="/wizard/step3">
            <button>Next Step</button>
          </Link>
        </div>
      </div>
      //previous and next buttons
    );
  }
}
export default StepTwo;
