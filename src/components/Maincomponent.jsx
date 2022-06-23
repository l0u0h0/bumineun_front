import React, { useState } from "react";
import Banner from "./common/BannerComponent";
import Header from "./common/HeaderComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";
import "swiper/css";

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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="tab-navigation">
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

function Tab1() {
  return <div className="contents">실시간 탭</div>;
}

function Tab2() {
  return <div className="contents">단어별 탭</div>;
}

function Tab3() {
  return <div className="contents">통계 탭</div>;
}
