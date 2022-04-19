import React from "react";
import "../stylesheets/Header.css";

const Header = () => {
  return (
    <div className="heading">
      <div className="logo"></div>
      <div className="lefticons">
        <h1>What's in it?</h1>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
