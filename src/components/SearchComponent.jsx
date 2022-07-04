import React, { useState } from "react";
import Banner from "./common/BannerComponent";
import Header from "./common/HeaderComponent";
import { InputGroup, Button, FormControl } from "react-bootstrap";

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
    </div>
  );
  function searchEnd() {
    setstate(0);
  }
}
