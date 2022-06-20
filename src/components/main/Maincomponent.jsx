import React from "react";

import footer from "../../image/img_5.png";
import Banner from "../common/BannerComponent";
import Header from "../common/HeaderComponent";

export default function MainComponent() {
  return (
    <div className="App-main">
      <Header />
      <div className="body" style={{ height: "380px" }}>
        <div className="menu"></div>
      </div>
      <div className="body" style={{ height: "600px" }}></div>
      <Banner />
    </div>
  );
}
