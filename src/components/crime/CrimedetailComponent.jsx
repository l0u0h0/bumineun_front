import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Header from "../common/HeaderComponent";
import ex_img from "../../image/camera.png";
import { useLocation } from "react-router-dom";

export default function Crimedetail() {
  console.log(useLocation());
  console.log(useLocation().search);
  const location = new URLSearchParams(useLocation().search);
  console.log(location);
  const type = location.get("category");
  const word = location.get("word");
  const mean = location.get("mean");
  console.log(type);
  const [category, setCategory] = useState();
  useEffect(() => {
    if (type === "gambling") {
      setCategory("도박");
    } else if (type === "voicefishing") {
      setCategory("보이스 피싱");
    } else if (type === "drug") {
      setCategory("마약");
    } else if (type === "gendercrime") {
      setCategory("성범죄");
    }
  }, [type]);
  return (
    <div className="App-crimedetail">
      <Header />
      <Card body className="crimedetail-body">
        <h2 className="detail-title">{word}</h2>
        <hr className="title-body-between" />
        <div className="detail-body">
          <h3>카테고리 - {category}</h3>
          {/* <img src={ex_img} alt="example_image" /> */}
          <p>{mean}</p>
        </div>
      </Card>
    </div>
  );
}
