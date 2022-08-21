import React from "react";
import DealStyleVerticalComp from "../Deals/dealStyleVerticalComp";
import CategoryStyleComp from "./categoryStyleComp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
export default function CategoryStyle(props) {


  function subTitle() {
    const dealsubtitle = props.dealsubtitle;
    if (dealsubtitle === "") {
      return;
    } else {
      return (
        <>
          <div className="d-flex justify-content-between" i>
            <div className="align-self-center fw-bold fs-3">
              {props.dealsubtitle}
            </div>
            <div>
              <button
                type="button"
                className="btn btn-light btn-outline-secondary"
              >
                SHOP NOW
              </button>
            </div>
          </div>
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
                imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1634642970/N51445769A_1.jpg"
                price="9000"
                oldPrice="10000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DealStyleVerticalComp
                imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1633754977/N22732308A_1.jpg"
                price="7000"
                oldPrice="12000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DealStyleVerticalComp
                imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1639552082/N52052864A_2.jpg"
                price="7000"
                oldPrice="12000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DealStyleVerticalComp
                imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1633926155/N43682715A_1.jpg"
                price="7000"
                oldPrice="11000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DealStyleVerticalComp
                imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1638168497/N52052865A_1.jpg"
                price="7000"
                oldPrice="10000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DealStyleVerticalComp
                imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1641288363/N52340954A_1.jpg"
                price="8900"
                oldPrice="12000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DealStyleVerticalComp
                imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1658924679/N52600818A_1.jpg"
                price="2000"
                oldPrice="5000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DealStyleVerticalComp
                imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1655044139/N41176802A_1.jpg"
                price="14000"
                oldPrice="17000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DealStyleVerticalComp
                imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1648791439/N53049713A_1.jpg"
                price="13900"
                oldPrice="17000"
              />
            </SwiperSlide>
          </Swiper>
        </>
      );
    }
  }
  return (
    <>
      <div className="row" style={{ backgroundColor: `${props.color}` }}>
        {/* <div className="d-flex justify-content-between">
          <div className="align-self-center" style={{ fontSize: 19 }}>
            Categories-Up to 70% Sale
          </div>
          <div className="align-self-center">
            <Button variant="primary">Shop Now</Button>
          </div>
        </div> */}
        <div>
          <img className="img-fluid w-100" src={props.imgtitle} alt="" />
        </div>
        <div className=" my-3 d-flex justify-content-between">
          <CategoryStyleComp imgurl="https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-19.png" />
          <CategoryStyleComp imgurl="https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-23.png" />
          <CategoryStyleComp imgurl="https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-49.png" />
          <CategoryStyleComp imgurl="https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-21.png" />
          <CategoryStyleComp imgurl="https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-24.png" />
          <CategoryStyleComp imgurl="https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-22.png" />
          <CategoryStyleComp imgurl="https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-20.png" />
        </div>
      </div>
      <div className="row my-3" style={{ backgroundColor: "" }}>
        <div className="d-flex justify-content-between">
          <div className="align-self-center fw-bold fs-3">
            {props.dealtitle}
          </div>
          <div>
            <button
              type="button"
              className="btn btn-light btn-outline-secondary"
            >
              SHOP NOW
            </button>
          </div>
        </div>
        {/* <div className=" my-3 d-flex flex-row flex-wrap justify-content-between"> */}
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
              imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1645115672/N42284110A_1.jpg"
              price="9000"
              oldPrice="10000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DealStyleVerticalComp
              imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1654698316/N41964615A_1.jpg"
              price="7000"
              oldPrice="12000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DealStyleVerticalComp
              imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1645115671/N42284111A_1.jpg"
              price="7000"
              oldPrice="12000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DealStyleVerticalComp
              imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1648219211/N42286045A_1.jpg"
              price="7000"
              oldPrice="11000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DealStyleVerticalComp
              imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1645115670/N41964614A_1.jpg"
              price="7000"
              oldPrice="10000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DealStyleVerticalComp
              imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1645115669/N42284106A_1.jpg"
              price="8900"
              oldPrice="12000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DealStyleVerticalComp
              imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1645115670/N41964614A_1.jpg"
              price="2000"
              oldPrice="5000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DealStyleVerticalComp
              imgurl="https://z.nooncdn.com/products/tr:n-t_240/v1645115669/N42284106A_1.jpg"
              price="14000"
              oldPrice="17000"
            />
          </SwiperSlide>
        </Swiper>
        {subTitle()}
      </div>
    </>
  );
}
