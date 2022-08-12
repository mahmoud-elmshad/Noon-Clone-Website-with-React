import React, { useState, useEffect } from "react";
import DealStyleVerticalComp from "./dealStyleVerticalComp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import DetailsService from "../../../services/details.services";

export default function DealStyleVertical() {

  const [products, setPrds] = useState([]);
  const [productSnap, setPrdSnap] = useState('');
  const [option,setOptions] = useState([])

  useEffect(() => {
      getProduct();
  }, [])
  const getProduct = async () => {
      const dataSnap = await DetailsService.getAllPrd()
      setPrds(dataSnap.docs.map((doc)=>({...doc.data(),id: doc.id})))
      // setPrdSnap(dataSnap.id)
  }
  // console.log(productSnap);
  console.log(products);
  products.map((value, key) => {
      console.log(value.name)
      option.push(value.name)
  })
  console.log(option)

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
        {products.map((value,key)=>{
          

          return<>
          
          <SwiperSlide key={value.id}>
          <DealStyleVerticalComp
            imgurl={value.img}
            price={value.price}
            description={value.description}
            id={value.id}
            oldPrice="12000"
          />
        </SwiperSlide>
          </>
        })}
      </Swiper>

      {/* </div> */}
    </>
  );
}
