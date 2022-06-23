import React from "react";
import Banner from "./common/BannerComponent";
import Header from "./common/HeaderComponent";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <div className="tab-title">
        <button>실시간</button>
        <button>단어별</button>
        <button>통계</button>
      </div>
      <Swiper slidesPerView={1}>
        <SwiperSlide>
          <Tab1 />
        </SwiperSlide>
        <SwiperSlide>
          <Tab2 />
        </SwiperSlide>
        <SwiperSlide>
          <Tab3 />
        </SwiperSlide>
      </Swiper>
      <hr />
    </div>
  );
}

function Tab1() {
  return <div className="Tab">실시간 탭</div>;
}

function Tab2() {
  return <div className="Tab">단어별 탭</div>;
}

function Tab3() {
  return <div className="Tab">통계 탭</div>;
}
