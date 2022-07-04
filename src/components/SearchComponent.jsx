import React from "react";
import Banner from "./common/BannerComponent";
import Header from "./common/HeaderComponent";
import { InputGroup, Button, FormControl } from "react-bootstrap";

export default function SearchComponent() {
  return (
    <div className="App-search">
      <Header />
      <div className="search-body">
        <InputGroup className="mb-3">
          <Button
            className="search-btn"
            variant="outline-secondary"
            id="button-addon1"
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
      <Banner />
    </div>
  );
}
