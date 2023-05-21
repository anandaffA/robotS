import React from "react";

const searchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2 tc">
      <input
        className="tc white pa3 ba br-pill b--white bg-black"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default searchBox;
