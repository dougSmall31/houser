import React, { Component } from "react";

const House = props => {
  console.log("this is props", props);
  return (
    <div>
      <div>Home Listings</div>

      {props.houses.map(house => (
        <div>
          {/* line breaks */}
          Property Name: {house.name}
          Address: {house.address}
          City: {house.city}
          State: {house.state}
          Zip: {house.zipcode}
          <button
          //onClick=deletehandler()
          //houses.filter(house => house.id !== req.params.id
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default House;
