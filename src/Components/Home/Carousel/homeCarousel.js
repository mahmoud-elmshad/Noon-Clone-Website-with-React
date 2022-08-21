import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
export default function HomeCarousel() {
  return (
    <>
      <div>
        <img
          src="https://k.nooncdn.com/cms/pages/20220711/fc7b876f10117c06e4f2f0d13612d564/en_dk_eg-toggle-01.png"
          alt=""
          className="img-fluid w-100"
        />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://k.nooncdn.com/cms/pages/20220726/34613bd0bae5e4fb8a59f208537ed69d/en_dk_eg-hero-banner-01.png"
            className="d-block w-100"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://k.nooncdn.com/cms/pages/20220715/9a7a1cb0a1dca1a561b051a22daaf097/en_banner-01.gif"
            className="d-block w-100"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://k.nooncdn.com/cms/pages/20220807/a6f401643b781ecf11385b2aa9029050/en_banner-01.gif"
            className="d-block w-100"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://k.nooncdn.com/cms/pages/20220731/f12cc437b0814763844921023f01d0d4/en_dk_eg-hero-01.png"
            className="d-block w-100"
            alt="..."
          />
        </SwiperSlide>
      </Swiper>
      {/* <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://k.nooncdn.com/cms/pages/20220726/34613bd0bae5e4fb8a59f208537ed69d/en_mb_eg-hero-banner-01.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://k.nooncdn.com/cms/pages/20220726/34613bd0bae5e4fb8a59f208537ed69d/en_mb_eg-hero-banner-01.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://k.nooncdn.com/cms/pages/20220726/34613bd0bae5e4fb8a59f208537ed69d/en_mb_eg-hero-banner-01.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      {/* <div>
        <Carousel variant="dark" className="">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://k.nooncdn.com/cms/pages/20220726/34613bd0bae5e4fb8a59f208537ed69d/en_mb_eg-hero-banner-01.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://fakeimg.pl/250x100/"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://fakeimg.pl/250x100/"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div> */}
    </>
  );
}
