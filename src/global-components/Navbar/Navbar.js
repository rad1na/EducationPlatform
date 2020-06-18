import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import DropdownList from "./DropdownList";
import SearchBar from "./SearchBar";

const Navbar = ({ toggleModal, currentUser, handleLogout }) => {
  const [searchState, setSearchState] = useState("");
  const [dropDownValue, setDropDownValue] = useState("");

  return (
    <div className="main-nav">
      <div className="container-nav">
        <div className="main-nav-left">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/resources/text_logo.png"}
              alt=""
            />
          </Link>
        </div>
        <div className="main-nav-mid">
          <DropdownList setDropDownValue={setDropDownValue} />
          <SearchBar setSearchState={setSearchState} />
        </div>
        <nav className="main-nav-right">
          <nav className="main-nav-right-content">
            {currentUser ? (
              <React.Fragment>
                <div className="nav-user-info">
                  <Link to="/userprofile">
                    <img
                      className="nav-avatar"
                      src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                      alt="useravatar"
                    />
                  </Link>

                  <Dropdown overlay={antdMenu} placement="bottomRight">
                    <span className="ant-dropdown-link drop">
                      {currentUser.username} <DownOutlined />
                    </span>
                  </Dropdown>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li onClick={() => toggleModal(true, "login")}>Log in</li>
                <li onClick={() => toggleModal(true, "signup")}>Sign up</li>
              </React.Fragment>
            )}
          </nav>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;