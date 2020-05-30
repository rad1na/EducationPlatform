import React, { useState } from "react";
import logo from "../resources/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [searchState, setSearchState] = useState("");

  const handleInputChange = e => {
    setSearchState(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();
    console.log(searchState);
  };
  return (
    <div className="main-nav">
      <div className="container-nav">
        <div className="main-nav-left">
          <img src={logo} alt="" />
        </div>
        <div className="main-nav-mid">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="What do you want to learn?"
              onChange={handleInputChange}
            />
          </form>
        </div>
        <nav className="main-nav-right">
          <nav className="main-nav-right-content">
            <li>Log in</li>
            <li>Sign up</li>
          </nav>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
