import React from "react";
import Header from "./common/HeaderComponent";
import Banner from "./common/BannerComponent";

export default function Crimemain() {
  return (
    <div className="App-crimemain">
      <Header />
      <div className="crimemain-body">
        <div className="category-area">
          <button className="btn btn--link category">도박</button>
          <button className="btn btn--link category">보이스 피싱</button>
          <button className="btn btn--link category">마약</button>
          <button className="btn btn--link category">성범죄</button>
        </div>
      </div>
      <Banner />
    </div>
  );
}
