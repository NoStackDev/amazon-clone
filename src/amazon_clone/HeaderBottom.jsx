import React from "react";

const HeaderBottom = () => {
  return (
    <div className="HeaderBottom">
      <ul>
        <li>
          {" "}
          <i className="fas fa-bars"></i> <b className="all-text">All</b>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Gift Cards</li>
        <li>Sell</li>
        <li>Registry</li>
      </ul>
      <b className="covid">Amazon's response to COVID-19</b>
    </div>
  );
};

export default HeaderBottom;
