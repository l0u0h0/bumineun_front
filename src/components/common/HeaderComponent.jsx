import React from "react";
import back from "../../image/back.png";
import logo from "../../image/img.png";
import search from "../../image/search.png";

export default function Header() {
  return (
    <div className="header">
      <div className="back-area">
        <img className="back" src={back} alt="backicon" />
      </div>
      <div className="logo-area">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="search-area">
        <img className="search" src={search} alt="searchicon" />
      </div>
    </div>
  );
}
