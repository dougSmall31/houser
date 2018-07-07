import React, { Component } from "react";

const House = props => {
  console.log("this is props", props);
  return (
    <div>
      <div>Home Listings</div>

      {props.houses.map(house => (
        <div>
          {/* line breaks */}
          <a src={house.imgUrl} />
          <ul>
            <li>Property Name: {house.name}</li>
            <li>Address: {house.address}</li>
            <li>City: {house.city}</li>
            <li>State: {house.state}</li>
            <li>Zip: {house.zipcode}</li>
          </ul>

          <ul>
            <li>Monthly Mortgage: {house.mortgage}</li>
            <li>Desired Rent: {house.rent}</li>
          </ul>
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
