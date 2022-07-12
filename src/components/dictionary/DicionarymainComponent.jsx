import React from "react";
import { Card } from "react-bootstrap";
import Banner from "../common/BannerComponent";
import Header from "../common/HeaderComponent";

export default function DictionaryMain() {
  return (
    <div className="App-dictionarymain">
      <Header />
      <Card body className="dictionarymain-body">
        <h2>Dictionary</h2>
      </Card>
      <Banner />
    </div>
  );
}
