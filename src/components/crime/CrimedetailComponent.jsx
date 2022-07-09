import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Header from "../common/HeaderComponent";
import ex_img from "../../image/camera.png";
import { useLocation } from "react-router-dom";

export default function Crimedetail() {
  const location = new URLSearchParams(useLocation().search);
  const type = location.get("category");
  const [category, setCategory] = useState();
  const [data, setData] = useState();
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
    // example data
    setData([
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 첫 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 두 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 세 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 네 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 다섯 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 여섯 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 일곱 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 여덟 번째 단어입니다.`,
      },
    ]);
  }, [type, category]);
  return (
    <div className="App-crimedetail">
      <Header />
      <Card body className="crimedetail-body">
        <h2 className="detail-title">{data.word}</h2>
        <hr className="title-body-between" />
        <div className="detail-body">
          <h3>카테고리 - {category}</h3>
          <img src={ex_img} alt="example_image" />
          <p>{data.mean}</p>
        </div>
      </Card>
    </div>
  );
}
