import React from "react";
import logo from "../logo.svg";

export default function MainComponent() {
  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <div claaName="user-state">
          <div className="user-desc">
            <h2>(유저 이름)</h2>
            <p>오늘도 만나서 반가워요</p>
          </div>
        </div>
      </div>
      <div className="body" style={{ height: "760px" }}></div>
      <div className="body" style={{ height: "1200px" }}></div>
      <footer></footer>
    </div>
  );
}
