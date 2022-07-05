import React, { useState } from "react";
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
  return (
    <div className="search-body">
      <InputGroup className="mb-3">
        <Button
          className="search-btn"
          variant="outline-secondary"
          id="button-addon1"
          onClick={search}
        >
          검색
        </Button>
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="검색어를 입력해주세요."
          className="search-text"
        />
      </InputGroup>
    </div>
  );
  function search() {
    setstate(1);
  }
}

function SearchAfter({ setstate }) {
  return (
    <div className="search-body">
      <InputGroup className="mb-3">
        <Button
          className="search-btn"
          variant="outline-secondary"
          id="button-addon1"
          onClick={searchEnd}
        >
          검색
        </Button>
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="머구리"
          className="search-text"
        />
      </InputGroup>
      <div className="result-crime">
        <h2>범죄 사전</h2>
        <p>한마디로 좋은 손님</p>
      </div>
      <div className="result-word">
        <h2>은어 사전</h2>
        <p>1. 개구리의 함북 방언</p>
        <p>2. 한마디로 좋은 손님</p>
      </div>
      <div className="result-static">
        <h2>통계 추세</h2>
        <img src={staticimg} alt="static-result" />
      </div>
    </div>
  );
  function searchEnd() {
    setstate(0);
  }
}
