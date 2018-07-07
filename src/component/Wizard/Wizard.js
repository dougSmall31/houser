import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

class Wizard extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>Wizard/Add New Listing</h1>
        <Switch>
          <Route component={StepOne} path="/wizard/step1" />
          <Route component={StepTwo} path="/wizard/step2" />
          <Route component={StepThree} path="/wizard/step3" />
        </Switch>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;

// class Wizard extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       address: "",
//       city: "",
//       state: "",
//       zipcode: ""
//     };
//   }
//   // nameInput = value => {
//   //   this.setState({ name: value });
//   // };
//   // addressInput = value => {
//   //   this.setState({ address: value });
//   // };
//   // cityInput = value => {
//   //   this.setState({ city: value });
//   // };
//   // stateInput = value => {
//   //   this.setState({ state: value });
//   // };
//   // zipInput = value => {
//   //   this.setState({ zipcode: value });
//   // };
//   // addHouseHandler = () => {
//   //   console.log(this.state);

//   //   axios({
//   //     method: "POST",
//   //     url: BASE_URL + "/api/houses",
//   //     data: this.state
//   //   }).then(() => {
//   //     this.props.history.push("/");
//   //   });
//   // };

//   // addHouseHandler = event => {
//   //   this.props.addHouse({
//   //     name: this.state.name,
//   //     address: this.state.address,
//   //     city: this.state.city,
//   //     state: this.state.state,
//   //     zipcode: this.state.zipcode
//   //   });
//   // };

//   render() {
//     console.log(this.props, "this is props");
//     return (
//       <div>
//         <div>Wizard</div>
//         <div>
//           Name:
//           <input
//             name={this.state.name}
//             onChange={e => this.nameInput(e.target.value)}
//           />
//         </div>
//         <div>
//           Address:
//           <input
//             address={this.state.address}
//             onChange={e => this.addressInput(e.target.value)}
//           />
//         </div>
//         <div>
//           City:
//           <input
//             city={this.state.city}
//             onChange={e => this.cityInput(e.target.value)}
//           />
//         </div>
//         <div>
//           State:
//           <input
//             state={this.state.state}
//             onChange={e => this.stateInput(e.target.value)}
//           />
//         </div>
//         <div>
//           Zipcode:
//           <input
//             zipcode={this.state.zipcode}
//             onChange={e => this.zip(e.target.value)}
//           />
//         </div>
//         <button onClick={this.addHouseHandler}>Complete</button>
//         <Link to="/">
//           <button>Cancel</button>
//         </Link>
//       </div>
//     );
//   }
// }

// export default Wizard;
