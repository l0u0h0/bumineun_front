import React, { useEffect, useState } from "react";
import Banner from "./common/BannerComponent";
import Header from "./common/HeaderComponent";
import { InputGroup, Button, FormControl } from "react-bootstrap";

import staticimg from "../image/img_6.png";

export default function SearchComponent() {
  const [searchstate, setSearchstate] = useState(0);

  return (
    <div className="App-search">
      <Header />
      {searchstate === 0 && <SearchBefore setstate={setSearchstate} />}
      {searchstate === 1 && <SearchAfter setstate={setSearchstate} />}
      <Banner />
    </div>
  );
}

function SearchBefore({ setstate }) {
  const [text, setText] = useState([]);
  const [ref, setRef] = useState(null);
  return (
    <div className="search-body">
      <InputGroup className="mb-3">
        <Button
          as="input"
          type="submit"
          className="search-btn"
          variant="outline-secondary"
          id="button-addon1"
          onClick={search}
          value="검색"
        />
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="search-addon"
          placeholder="검색어를 입력해주세요."
          className="search-text"
          ref={setRef}
          type="input"
        />
      </InputGroup>
    </div>
  );
  function search() {
    setText(text.push(ref.value));
    console.log(text);
    setstate(1);
  }
}

function SearchAfter({ setstate }) {
  const [data, setData] = useState({});
  useEffect(() => {
    setData({
      crime: "한마디로 좋은 손님",
      word: ["1. 개구리의 함북 방언", "2. 한마디로 좋은 손님"],
      static: staticimg,
    });
  }, []);
  return (
    <div className="search-body">
      <InputGroup className="mb-3">
        <Button
          as="input"
          type="submit"
          className="search-btn"
          variant="outline-secondary"
          id="button-addon1"
          onClick={searchEnd}
          value="검색"
        />
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="머구리"
          className="search-text"
        />
      </InputGroup>
      <div className="result-crime">
        <h2>범죄 사전</h2>
        <p>{data.crime}</p>
      </div>
      <div className="result-word">
        <h2>은어 사전</h2>
        {data.word && data.word.map((text) => <p>{text}</p>)}
      </div>
      <div className="result-static">
        <h2>통계 추세</h2>
        <img src={data.static} alt="static-result" />
      </div>
    </div>
  );
  function searchEnd() {
    setstate(0);
  }
}
