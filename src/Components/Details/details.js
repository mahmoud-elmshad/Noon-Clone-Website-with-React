import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CDBSelect } from "cdbreact";
import DetailsService from "../../services/details.services";
import Gallery from "./ItemCarsoul";

import Swal from "sweetalert2";
import RatingReview from "../Rating/RatingReview";
import "./details.css";

const Details = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("prdID");
  const [option] = useState([
    {
      text: "1",
      value: "1",
    },
    {
      text: "2",
      value: "2",
    },
    {
      text: "3",
      value: "3",
    },
  ]);
  const [product, setPrd] = useState([]);

  const addToCart = () => {
    window.localStorage.setItem(id, JSON.stringify(product));
    Swal.fire("Good choice!", `${product.name} added to cart!`, "success");
  };
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const dataSnap = await DetailsService.getPrd(`${id}`);
    setPrd(dataSnap.data());
  };

  return (
    <Container className="mb-5">
      <Row className="my-3">
        <Col sm={4}>
          <img style={{ width: "40vh" }} src={product.img} />
        </Col>

        <Col sm={4}>
          <div className="my-1" style={{ fontSize: 19, fontWeight: 600 }}>
            {product.name}
          </div>
          <div
            className="my-1"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: "2",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.description}
          </div>
          <div className="my-1">
            <span style={{ fontSize: "0.8em" }}>
              {" "}
              <span style={{ opacity: "60%" }}>
                Model Number : {product.mNumber}
              </span>{" "}
              |{" "}
              <span className="rating">
                {" "}
                {(product.rating / product.numberOfRatings).toFixed(1)}{" "}
                <img
                  className="star"
                  alt="starFilled"
                  height="11"
                  src="https://f.nooncdn.com/s/app/com/noon/design-system/simpleicons/star-filled.svg"
                  width="11"
                />
              </span>
              {product.numberOfRatings} Ratings
            </span>
          </div>
          <div className="my-1">
            Was :&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span
              className="text-decoration-line-through"
              style={{ opacity: "60%", fontSize: 18, fontWeight: 600 }}
            >
              {product.price}
            </span>{" "}
          </div>
          <div className="my-1">
            Now : &nbsp;&nbsp;&nbsp;&nbsp;
            <b style={{ fontSize: 19, fontWeight: 700 }}>
              {Math.ceil(
                product.price - product.price * (product.discount / 100)
              )}{" "}
              EGP
            </b>{" "}
            <span style={{ opacity: "60%", fontSize: 12, fontWeight: 400 }}>
              Inclusive of VAT
            </span>
          </div>
          <div className="my-1">
            Saving : {Math.floor(product.price * (product.discount / 100))}
          </div>
          <div
            className="container my-3"
            style={{ backgroundColor: "rgb(252, 251, 245)", fontSize: 13 }}
          >
            <img src="https://z.nooncdn.com/s/app/com/noon/icons/emi.svg" />
            <span>
              Monthly payment plans from EGP{" "}
              {Math.ceil(
                (product.price - product.price * (product.discount / 100)) / 12
              )}{" "}
            </span>
            <span>
              <a href="#">View more details</a>
            </span>
          </div>
          <div className="my-3">
            <img
              style={{ width: "100%" }}
              src="https://k.nooncdn.com/cms/pages/20220419/7e4b7c8e9d1f4d6dc041e183e07ff1e1/en_pdp-01.png"
              alt="none"
            />
          </div>
          <div
            className="my-3 d-flex justify-content-between"
            style={{ backgroundColor: "#F5F7FE" }}
          >
            <div className="d-flex flex-column">
              <div>Order in 13 hrs 37 mins</div>
              <div>
                <b style={{ fontWeight: "bold" }}>Free delivery </b>
                <span className="text-decoration-underline">Wed, Aug 10</span>
              </div>
            </div>
            <div>
              <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
              <img src="https://z.nooncdn.com/s/app/com/noon/icons/help.svg" />
            </div>
          </div>
          <div>
            <Row className="my-3">
              <Col sm={2}>
                <div className="my-2 fw-bold">Quantity</div>
                <CDBSelect
                  style={{ width: "100%", height: "2rem" }}
                  options={option}
                  selected={option[0].text}
                />
              </Col>
              <Col sm={10}>
                <button
                  onClick={() => addToCart()}
                  style={{
                    width: "100%",
                    marginTop: "2rem",
                    backgroundColor: "rgb(43, 76, 215)",
                  }}
                  type="button"
                  className="btn btn-primary"
                >
                  Add To Cart
                </button>
              </Col>
            </Row>
          </div>
          <div className="my-2" style={{ opacity: "60%", fontSize: 17 }}>
            Storage :
          </div>
          <div>
            <select style={{ width: "100%", height: "2rem" }}>
              {product.storage != undefined &&
                product.storage.map((storage, index) => (
                  <option key={index}>{storage}</option>
                ))}
            </select>
          </div>
          <div className="my-2" style={{ opacity: "60%", fontSize: 17 }}>
            Color:
          </div>
          <div>
            <select style={{ width: "100%", height: "2rem" }}>
              {product.colors != undefined &&
                product.colors.map((color, index) => (
                  <option key={index}>{color}</option>
                ))}
            </select>
          </div>
          <hr className="my-5" />
        </Col>

        <Col sm={4} style={{ borderLeft: "1px solid rgb(240, 242, 248)" }}>
          <div className="my-3">
            <img src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns.svg" />
            <span>
              {" "}
              Enjoy hassel free returns with this offer.
              <a href="#">learn more</a>
            </span>
          </div>
          <div className="my-3">
            <img src="https://z.nooncdn.com/s/app/com/noon/icons/warranty.svg" />
            <span> 1 year warranty</span>
          </div>

          <div className="my-3">
            <img
              style={{ width: "7%" }}
              src="https://z.nooncdn.com/s/app/com/noon/icons/seller.svg"
            />
            <span> Sold by: </span>
            <a href="#">NOON FASHON</a>
          </div>
          <div className="Container my-4">
            <div className="my-3 row">
              <div className="col-4">
                <div className="d-flex justify-content-center">
                  <img
                    style={{ width: "20%" }}
                    src="https://z.nooncdn.com/nr/seller_badges/badge_low_returns_seller.png"
                  />
                </div>
                <div style={{ fontSize: 10 }} className="text-center">
                  <b>Low Return Seller</b>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex justify-content-center">
                  <img
                    style={{ width: "20%" }}
                    src="https://z.nooncdn.com/nr/seller_badges/badge_great_recent_rating.png"
                  />
                </div>
                <div style={{ fontSize: 10 }} className="text-center">
                  <b>Great Recent Rating</b>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ color: "#82AE04", fontSize: 20, fontWeight: 600 }}
                  >
                    84%
                  </div>
                </div>
                <div style={{ fontSize: 10 }} className="text-center">
                  <b>Product as Described</b>
                </div>
              </div>
            </div>
          </div>
          <div className="container my-4">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-start my-3">
                <span
                  className=""
                  style={{ width: "1.7rem", marginRight: "1em" }}
                >
                  <img
                    style={{ width: "150%" }}
                    src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                  />
                </span>
                <span>
                  <div style={{ fontSize: 15 }}>FREE RETURNS</div>
                  <div style={{ opacity: "60%" }}>
                    Get free returns on eligible items
                  </div>
                </span>
              </div>

              <div className="d-flex justify-content-start my-3">
                <span
                  className=""
                  style={{ width: "1.7rem", marginRight: "1em" }}
                >
                  <img
                    style={{ width: "170%" }}
                    src="https://z.nooncdn.com/s/app/com/noon/icons/trusted_shipping_usp_v2.svg"
                  />
                </span>
                <span>
                  <div style={{ fontSize: 15 }}>TRUSTED SHIPPING</div>
                  <div style={{ opacity: "60%" }}>
                    Free shipping when you spend EGP 200 and above on express
                    items
                  </div>
                </span>
              </div>
              <div className="d-flex justify-content-start my-3">
                <span
                  className=""
                  style={{ width: "1.7rem", marginRight: "1em" }}
                >
                  <img
                    style={{ width: "150%" }}
                    src="https://z.nooncdn.com/s/app/com/noon/icons/secure_usp.svg"
                  />
                </span>
                <span>
                  <div style={{ fontSize: 15 }}>SECURE SHOPPING</div>
                  <div style={{ opacity: "60%" }}>
                    Your data is always protected
                  </div>
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            style={{ fontSize: "1.3em" }}
            class="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Overview
          </button>
        </li>
        <li class="nav-item mx-5" role="presentation">
          <button
            style={{ fontSize: "1.3em" }}
            class="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Specifications
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            style={{ fontSize: "1.3em" }}
            class="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Reviews
          </button>
        </li>
      </ul>
      <div className="tab-content my-5" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="Container fw-bold my-2">Highlights</div>
          <ul>
            {product.highlights != undefined &&
              product.highlights.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
          </ul>
          <div className="Container fw-bold my-2">Overview</div>
          <div>{product.overview}</div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="Container">
            <div className="my-3 fw-bold">Specifications</div>
            <div className="d-flex">
              <div style={{ width: "49%", marginRight: "2%" }}>
                <table className="table">
                  <tr style={{ backgroundColor: "#F4F7FE" }}>
                    <td class="table-light">Care Instructions</td>
                    <td class="table-light">Machine Wash</td>
                  </tr>
                  <tr class="table-light">
                    <td class="table-light">Colour Name</td>
                    <td class="table-light">HAKI</td>
                  </tr>
                  <tr style={{ backgroundColor: "#F4F7FE" }}>
                    <td class="table-light">Care Instructions</td>
                    <td class="table-light">Machine Wash</td>
                  </tr>
                  <tr class="table-light">
                    <td class="table-light">Colour Name</td>
                    <td class="table-light">HAKI</td>
                  </tr>
                  <tr style={{ backgroundColor: "#F4F7FE" }}>
                    <td class="table-light">Care Instructions</td>
                    <td class="table-light">Machine Wash</td>
                  </tr>
                  <tr class="table-light">
                    <td class="table-light">Colour Name</td>
                    <td class="table-light">HAKI</td>
                  </tr>
                </table>
              </div>
              <div className="Container" style={{ width: "49%" }}>
                <table className="table">
                  <tr style={{ backgroundColor: "#F4F7FE" }}>
                    <td class="table-light">Care Instructions</td>
                    <td class="table-light">Machine Wash</td>
                  </tr>
                  <tr class="table-light">
                    <td class="table-light">Colour Name</td>
                    <td class="table-light">HAKI</td>
                  </tr>
                  <tr style={{ backgroundColor: "#F4F7FE" }}>
                    <td class="table-light">Care Instructions</td>
                    <td class="table-light">Machine Wash</td>
                  </tr>
                  <tr class="table-light">
                    <td class="table-light">Colour Name</td>
                    <td class="table-light">HAKI</td>
                  </tr>
                  <tr style={{ backgroundColor: "#F4F7FE" }}>
                    <td class="table-light">Care Instructions</td>
                    <td class="table-light">Machine Wash</td>
                  </tr>
                  <tr class="table-light">
                    <td class="table-light">Colour Name</td>
                    <td class="table-light">HAKI</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div className="Container">
            <div className="row">
              <div className="col-4" style={{ paddingRight: "2em" }}>
                <div className="d-flex justify-content-center">
                  <div className="content text-center">
                    <div className="ratings">
                      <div style={{ fontSize: 19, fontWeight: "bold" }}>
                        Overall Rating
                      </div>
                      <span
                        className="product-rating"
                        style={{
                          color: "#F2994A",
                          fontSize: 24,
                          fontWeight: "bold",
                        }}
                      >
                        {(product.rating / product.numberOfRatings).toFixed(1)}
                      </span>
                      <div className="">
                        <RatingReview
                          rating={product.rating}
                          numberOfRating={product.numberOfRatings}
                        />
                      </div>

                      <div className="rating-text">
                        <span style={{ opacity: "60%" }}>
                          Based on {product.numberOfRatings} ratings
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* 
                                    <div className='col-6'>
                                        <div>5 <i style={{ color: '#F2994A' }} className="fa fa-star"></i></div>
                                        <span><ProgressBar style={{ height: '4px' }} variant="warning" now={100} /></span><span> (1)</span>
                                        <div>4 <i style={{ color: '#F2994A' }} className="fa fa-star"></i></div>
                                        <span><ProgressBar style={{ height: '4px' }} variant="warning" now={0} /></span><span> (0)</span>
                                        <div>3 <i style={{ color: '#F2994A' }} className="fa fa-star"></i></div>
                                        <span><ProgressBar style={{ height: '4px' }} variant="warning" now={0} /></span><span> (0)</span>
                                        <div>2 <i style={{ color: '#F2994A' }} className="fa fa-star"></i></div>
                                        <span><ProgressBar style={{ height: '4px' }} variant="warning" now={0} /></span><span> (0)</span>
                                        <div>0 <i style={{ color: '#F2994A' }} className="fa fa-star"></i></div>
                                        <span><ProgressBar style={{ height: '4px' }} variant="warning" now={0} /></span><span> (0)</span>

                                    </div> */}
                </div>
                <div
                  className="my-3 py-2 px-2 text-align"
                  style={{ width: "100%", backgroundColor: "#F4F7FF" }}
                >
                  There are no customer reviews and {product.numberOfRatings}{" "}
                  customer rating.
                </div>
              </div>
              <div
                className="col-8 d-flex justify-content-center"
                style={{ borderLeft: "1px solid rgb(240, 242, 248)" }}
              >
                <div className="col-6">
                  <span>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="noonLogo"
                    >
                      <path
                        d="M7.99804 16.0276C12.132 16.0276 15.4961 12.6635 15.4961 8.52955C15.4961 4.37051 12.1296 0.990479 7.99804 0.990479C3.86646 0.990479 0.499989 4.37051 0.499989 8.52955C0.499989 12.6635 3.86406 16.0276 7.99804 16.0276Z"
                        fill="#FEEE00"
                        stroke="#404554"
                      ></path>
                      <path
                        d="M9.40092 4.09473C9.01233 3.93929 8.59265 3.86157 8.17297 3.86157C7.92428 3.86157 7.67558 3.89266 7.42688 3.93929L6.42432 5.66463C6.83622 5.43925 7.29476 5.33044 7.76884 5.33822C8.0564 5.33822 8.33618 5.37708 8.6082 5.45479L9.40092 4.09473Z"
                        fill="#404554"
                      ></path>
                      <path
                        d="M3.37769 8.73421C3.37769 11.2212 5.49162 13.1564 7.95528 13.1564C10.5355 13.1564 12.6184 11.0735 12.6184 8.53992C12.6184 7.0555 11.9034 5.74984 10.8386 4.87939L10.0614 6.22392C10.7454 6.8068 11.1417 7.6617 11.1417 8.56323C11.1417 10.2886 9.71171 11.703 7.95528 11.703C6.19885 11.703 4.77661 10.2808 4.77661 8.52437C4.77661 8.52437 4.77661 8.52437 4.77661 8.5166C4.77661 8.30676 4.79216 8.09693 4.83101 7.89486L3.37769 8.73421Z"
                        fill="#404554"
                      ></path>
                    </svg>
                  </span>
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    How do I review this product?
                  </span>
                  <div>
                    If you recently purchased this product from noon, you can go
                    to your Orders page and click on the Submit Review button
                  </div>
                </div>
                <div>
                  <span>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="noonLogo"
                    >
                      <path
                        d="M7.99804 16.0276C12.132 16.0276 15.4961 12.6635 15.4961 8.52955C15.4961 4.37051 12.1296 0.990479 7.99804 0.990479C3.86646 0.990479 0.499989 4.37051 0.499989 8.52955C0.499989 12.6635 3.86406 16.0276 7.99804 16.0276Z"
                        fill="#FEEE00"
                        stroke="#404554"
                      ></path>
                      <path
                        d="M9.40092 4.09473C9.01233 3.93929 8.59265 3.86157 8.17297 3.86157C7.92428 3.86157 7.67558 3.89266 7.42688 3.93929L6.42432 5.66463C6.83622 5.43925 7.29476 5.33044 7.76884 5.33822C8.0564 5.33822 8.33618 5.37708 8.6082 5.45479L9.40092 4.09473Z"
                        fill="#404554"
                      ></path>
                      <path
                        d="M3.37769 8.73421C3.37769 11.2212 5.49162 13.1564 7.95528 13.1564C10.5355 13.1564 12.6184 11.0735 12.6184 8.53992C12.6184 7.0555 11.9034 5.74984 10.8386 4.87939L10.0614 6.22392C10.7454 6.8068 11.1417 7.6617 11.1417 8.56323C11.1417 10.2886 9.71171 11.703 7.95528 11.703C6.19885 11.703 4.77661 10.2808 4.77661 8.52437C4.77661 8.52437 4.77661 8.52437 4.77661 8.5166C4.77661 8.30676 4.79216 8.09693 4.83101 7.89486L3.37769 8.73421Z"
                        fill="#404554"
                      ></path>
                    </svg>
                  </span>
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    Where do the reviews come from?
                  </span>
                  <div>
                    Our reviews are from noon customers who purchased the
                    product and submitted a review
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-5" style={{ fontWeight: "bold", fontSize: 25 }}>
          How about these?
        </div>
        <Gallery />
        <div className="my-5" style={{ fontWeight: "bold", fontSize: 25 }}>
          More from DeFacto
        </div>
        <Gallery />
      </div>
    </Container>
  );
};

export default Details;
