import React, { useState, useEffect } from "react";
import DealStyleVerticalComp from "./dealStyleVerticalComp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import DetailsService from "../../../services/details.services";

export default function DealStyleVertical() {
  const [products, setPrds] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const dataSnap = await DetailsService.getAllPrd();
    setPrds(dataSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


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
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper my-5"
      >
        {products.map((value, index) => {
          return (
            <>
              <SwiperSlide key={value.id}>
                <DealStyleVerticalComp
                  key={value.id}
                  name={value.name}
                  imgurl={value.img}
                  price={Math.ceil(value.price - (value.price*(value.discount/100)))}
                  description={value.description}
                  id={value.id}
                  discount={value.discount}
                  oldPrice={value.price}
                  overallRating={(value.rating/value.numberOfRatings).toFixed(1)}
                  numberOfRatings={value.numberOfRatings}
                />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>

      {/* </div> */}
    </>
  );
}
