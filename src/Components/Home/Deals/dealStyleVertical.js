import React, { useState, useEffect } from "react";
import DealStyleVerticalComp from "./dealStyleVerticalComp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import DetailsService from "../../../services/details.services";

import { Link } from "react-router-dom";

// export default function DealStyleVertical() {
//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     getProduct();
//   }, []);

//   async function getProduct() {
//     const productSnap = await DetailsService.getPrd("gPALbo3FfUqOV6TQhXyN");
//     setProduct(productSnap.data());
//   }
//   console.log(product);

export default function DealStyleVertical() {
  const [products, setPrds] = useState([]);
  const [productSnap, setPrdSnap] = useState("");
  const [option, setOptions] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const dataSnap = await DetailsService.getAllPrd();
    setPrds(dataSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // setPrdSnap(dataSnap.id)
  };
  // console.log(productSnap);
  console.log(products);
  products.map((value, key) => {
    console.log(value.name);
    option.push(value.name);
  });
  console.log(option);

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
        {products.map((value, key) => {
          return (
            <>
              <SwiperSlide key={value.id}>
                <DealStyleVerticalComp
                  imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1655474955/N25937075A_1.jpg"
                  price="9000"
                  oldPrice="10000"
                />
              </SwiperSlide>
              <SwiperSlide>
                <DealStyleVerticalComp
                  // name={product.name}
                  // imgurl={product.img}
                  // price={product.price}
                  imgurl={value.img}
                  price={value.price}
                  description={value.description}
                  id={value.id}
                  oldPrice="12000"
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
