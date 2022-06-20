import React from "react";
import back from "../../image/back.png";
import logo from "../../image/img.png";
import search from "../../image/search.png";

export default function Header() {
  return (
    <div className="header">
      <img className="back" src={back} alt="backicon" />
      <img className="logo" src={logo} alt="logo" />
      <img className="search" src={search} alt="searchicon" />
    </div>
  );
}
