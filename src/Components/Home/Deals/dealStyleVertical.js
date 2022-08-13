import React, { useState, useEffect } from "react";
import DealStyleVerticalComp from "./dealStyleVerticalComp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import DetailsService from "../../../services/details.services";
import { Link } from "react-router-dom";

export default function DealStyleVertical() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const productSnap = await DetailsService.getPrd("gPALbo3FfUqOV6TQhXyN");
    setProduct(productSnap.data());
  }
  console.log(product);
  return (
    <>
      {/* <div className=" my-3 d-flex flex-row flex-wrap justify-content-center"> */}
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        slidesPerGroup={7}
        freeMode={true}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 60,
          },
        }}
        // loop={true}
        // loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper my-5"
      >
        <SwiperSlide>
          <DealStyleVerticalComp
            imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1655474955/N25937075A_1.jpg"
            price="9000"
            oldPrice="10000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DealStyleVerticalComp
            name={product.name}
            imgurl={product.img}
            price={product.price}
            oldPrice="12000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DealStyleVerticalComp
            imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1654846186/N40633047A_1.jpg"
            price="7000"
            oldPrice="12000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DealStyleVerticalComp
            imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1654754865/N52891116A_1.jpg"
            price="7000"
            oldPrice="11000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DealStyleVerticalComp
            imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1653910008/N22795303A_1.jpg"
            price="7000"
            oldPrice="10000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DealStyleVerticalComp
            imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1648570074/N50908490A_1.jpg"
            price="8900"
            oldPrice="12000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DealStyleVerticalComp
            imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1582883814/N35187596A_1.jpg"
            price="2000"
            oldPrice="5000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DealStyleVerticalComp
            imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1637143507/N42547190A_1.jpg"
            price="14000"
            oldPrice="17000"
          />
        </SwiperSlide>
      </Swiper>

      {/* </div> */}
    </>
  );
}
