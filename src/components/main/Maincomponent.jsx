import React from "react";
import logo from "../../image/img.png";

export default function MainComponent() {
  return (
    <div className="App-main">
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <div className="user-state">
          <div className="user-desc">
            <h2>(유저 이름)</h2>
            <p>만나서 반갑습니다</p>
          </div>
          <img className="user-img" alt="" />
        </div>
      </div>
      <div className="body" style={{ height: "380px" }}>
        <div className="menu"></div>
      </div>
      <div className="body" style={{ height: "600px" }}></div>
      <div className="footer">
        <img className="footer-img" alt="" />
      </div>
    </div>
  );
}
