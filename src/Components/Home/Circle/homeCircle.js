import React from "react";
import CircleCat from "./circleCat";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

export default function HomeCircle() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Swiper
        slidesPerView={10}
        spaceBetween={30}
        slidesPerGroup={9}
        freeMode={true}
        // loop={true}
        // loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper my-3"
      >
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20220629/95b15e24d16b1b2ca22d1c64ce39d88d/en_dk_eg-CB-15.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20220717/11085f3a92f0bd61e6b7ae834742bc12/en_dk_eg-cb-01.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-08.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20220630/5b0d90ace8e7eb3986c4dc1c14a48de5/en_CBs-01.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20220630/5b0d90ace8e7eb3986c4dc1c14a48de5/en_CBs-04.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-02.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-03.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-04.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-05.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20211207/6e25cd25b74d0c293d24014c15cc0bbc/en_CBs-10.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20220519/1ec88c2d9f5ac94388b0ed4e8bcd6c0f/en_CBs-09.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-01.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-06.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20220523/992508c29f9f59eb64aef5bec42f1428/en_CBs-14.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20211209/041000ae232391742c9d18f326246311/en_CBs-13.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20220630/5b0d90ace8e7eb3986c4dc1c14a48de5/en_CBs-02.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20220630/5b0d90ace8e7eb3986c4dc1c14a48de5/en_CBs-03.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20220630/5b0d90ace8e7eb3986c4dc1c14a48de5/en_CBs-05.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20220630/5b0d90ace8e7eb3986c4dc1c14a48de5/en_CBs-06.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20220630/5b0d90ace8e7eb3986c4dc1c14a48de5/en_CBs-07.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20220608/065ad7f82f5f7ac798cff386b9862f1d/en_CBs-18.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://k.nooncdn.com/cms/pages/20220608/065ad7f82f5f7ac798cff386b9862f1d/en_CBs-19.png"
            alt="..."
          />
        </SwiperSlide>
      </Swiper>
      {/* <div className=" my-3 d-flex flex-row flex-wrap justify-content-center"> */}
      {/* <Slider className=" my-3" {...settings}>
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
      </Slider> */}
      {/* </div> */}
    </>
  );
}
