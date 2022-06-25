// import
import React, { useState } from "react";
import Banner from "./common/BannerComponent";
import Header from "./common/HeaderComponent";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";
import "swiper/css";

// MAIN AREA
export default function MainComponent() {
  return (
    <div className="App-main">
      <Header />
      <div className="body" style={{ height: "760px" }}>
        <Body1 />
      </div>
      <div className="body" style={{ height: "1200px" }}>
        <Body2 />
      </div>
      <Banner />
    </div>
  );
}

// TAB AREA
function Body1() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-body-first">
      <hr />
      <h2>Today's</h2>
      <div className="swiper-area">
        <Swiper
          className="tab-title"
          slidesPerView={3}
          onSwiper={setThumbsSwiper}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Thumbs]}
        >
          <SwiperSlide>
            <div className="title">실시간</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title">단어별</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title">통계</div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="tab-contents"
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
        >
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
      </div>

      <hr />
    </div>
  );
}

// TAB FRAGMENT
function Tab1() {
  return <div className="contents">실시간 탭</div>;
}

function Tab2() {
  return <div className="contents">단어별 탭</div>;
}

function Tab3() {
  return <div className="contents">통계 탭</div>;
}

// NEWS API
function Body2() {
  return (
    <div className="main-body-second">
      <h2>범죄 관련 뉴스</h2>
      <div className="news-area"></div>
    </div>
  );
}
