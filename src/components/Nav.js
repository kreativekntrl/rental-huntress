import React, { useState } from "react";

const Nav = () => {
 const [userInput, setUserInput] = useState("");
  
  const handleInputChange = async (evt) => {
    setUserInput(evt.target.value);
  }

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    alert("form submitted");
    
  };

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
          value={userInput}
          onChange={handleInputChange}
          className="form-control mr-sm-2 search"
          type="search"
          placeholder="City Name"
          aria-label="Search"
        />
      </form>
    </div>
  );
};
export default Nav;
