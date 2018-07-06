import React, { Component } from "react";

const House = props => {
  console.log("this is props", props);
  return (
    <div>
      <div>Home Listings</div>
      {props.houses.map(house => (
        <div>
          Property Name: {house.name}
          Address: {house.address}
          City: {house.city}
          State: {house.state}
          Zip: {house.zipcode}
        </div>
      ))}
      <button>Delete</button>
    </div>
  );
};

export default House;
