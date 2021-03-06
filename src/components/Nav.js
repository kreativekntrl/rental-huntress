import React, { useState } from "react";

const Nav = ({handleFormSubmit, handleInputChange}) => {

  return (
    <div className="nav-container">
      <div className="text-content">
        <h1>Hunt Your New Home</h1>
        <p>Find your dream rental in a city near you. </p>
      </div>
      <form className="form-inline my-2 my-lg-0">
        <button
          onClick={handleFormSubmit}
          className="btn btn-outline-success my-2 my-sm-0 search-btn"
        >
          Search
        </button>
        <input
          onChange={handleInputChange}
          className="form-control mr-sm-2 search"
          type="search"
          placeholder="San Diego"
          aria-label="Search"
        />
      </form>
    </div>
  );
};
export default Nav;
