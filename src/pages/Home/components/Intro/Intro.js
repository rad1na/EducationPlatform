import React from "react";
import "./Intro.css";
import AuthService from "../../../../auth/AuthService";
import { Link } from "react-router-dom";

const Intro = ({ toggleModal }) => {
  return (
    <div className="intro-main">
      <div className="intro-image-layer"></div>
      <div className="intro-content-layer">
        <div className="container">
          <p>
            ‘Every student can learn,
            <br /> just not on the same day, <br /> or the same way.’
          </p>
          {AuthService.getCurrentUser() ? (
            <Link to="userprofile">
              <button className="btn intro-btn">My Profile</button>
            </Link>
          ) : (
            <button
              onClick={() => toggleModal(true, "signup")}
              className="btn intro-btn"
            >
              Join Us
            </button>
          )}
        </div>
      </div>
      <div className="intro-min-info">
        <div className="container intro-info-flex">
          <span>24/7 Customer Support</span>
          <span>0 Teachers From The Entire World</span>
          <span>0 Available Courses</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
