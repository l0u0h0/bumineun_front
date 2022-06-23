import React from "react";
import Banner from "./common/BannerComponent";
import Header from "./common/HeaderComponent";

export default function MainComponent() {
  return (
    <div className="App-main">
      <Header />
      <div className="body" style={{ height: "760px" }}>
        <Body1 />
      </div>
      <div className="body" style={{ height: "1200px" }}></div>
      <Banner />
    </div>
  );
}

function Body1() {
  return (
    <div className="tab-navigation">
      <hr />
      <h3>Today's</h3>
      <hr />
    </div>
  );
}
