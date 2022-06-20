import React from "react";
import logo from "../../image/img.png";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <img className="user-img" alt="" />
    </div>
  );
}
