import React from "react";
import Banner from "./common/BannerComponent";
import Header from "./common/HeaderComponent";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
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
  const swiper = useSwiper();
  const Tab1Click = () => swiper.slideTo(1, 300, false);
  const Tab2Click = () => swiper.activeIndex(2);
  const Tab3Click = () => swiper.activeIndex(3);
  return (
    <div className="tab-navigation">
      <hr />
      <h3>Today's</h3>
      <Swiper className="tab-title" slidesPerView={3}>
        <SwiperSlide>
          <button onClick={Tab1Click}>실시간</button>
        </SwiperSlide>
        <SwiperSlide>
          <button onClick={Tab2Click}>단어별</button>
        </SwiperSlide>
        <SwiperSlide>
          <button onClick={Tab3Click}>통계</button>
        </SwiperSlide>
      </Swiper>
      <Swiper className="tab-contents" slidesPerView={1}>
        <SwiperSlide tabIndex={1}>
          <Tab1 />
        </SwiperSlide>
        <SwiperSlide tabIndex={2}>
          <Tab2 />
        </SwiperSlide>
        <SwiperSlide tabIndex={3}>
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
