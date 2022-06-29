import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="search-area">
        <Link to="/search">
          <img className="search" src={search} alt="searchicon" />
        </Link>
      </div>
    </div>
  );
}
