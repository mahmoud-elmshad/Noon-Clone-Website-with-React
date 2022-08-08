import React from "react";
import CartCard from "./cartCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NumberFormat from "react-number-format";

export default function Cart() {
  return (
    <>
      <div style={{ backgroundColor: "#F7F7FA" }}>
        <div className="container py-5">
          {/* <div className="col-1"></div> */}
          <div className="row">
            <div className="col-md-8">
              <div className="fw-bold fs-3">Cart</div>
              <div>
                <img
                  src="https://k.nooncdn.com/cms/pages/20220415/e93ff79763e043639cb3c7740f4d5ab4/en_cart-01.png"
                  alt=""
                  className="img-fluid my-3 w-100"
                />
              </div>
              <CartCard
                imgurl="https://z.nooncdn.com/products/tr:n-t_120/v1655474955/N25937075A_1.jpg"
                brand="SKYLINE"
                title="32-Inch HD LED TV 3222A Black"
                trader="noon"
              />
              <button
                className="btn btn-outline-primary text-primary"
                style={{ backgroundColor: "white" }}
              >
                Continue Shopping
              </button>
            </div>

            <div className="col-md-4">
              <div className="fw-bold fs-3">Order Summary</div>
              <div className="d-flex my-3 input-group flex-nowrap">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Coupon Code"
                  aria-describedby="addon-wrapping"
                />
                {/* <span className="input-group-text" id="addon-wrapping">
              @
            </span> */}

                <button className="btn btn-primary">Apply</button>
              </div>
              <div className="d-flex justify-content-between">
                <div>Subtotal</div>
                <div>
                  <NumberFormat
                    value="9000"
                    // className="foo"
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"EGP "}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Shipping</div>
                <div className="fw-bold text-primary">Free</div>
              </div>
              <hr className="my-3 "></hr>
              <div className="d-flex my-4 justify-content-between">
                <div className="fw-bold fs-4">Total</div>
                <div className="fw-bold fs-4">
                  <NumberFormat
                    value="9000"
                    // className="foo"
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"EGP "}
                  />
                </div>
              </div>
              <div
                className="d-flex py-3 align-items-center "
                style={{ backgroundColor: "#FFF8EC" }}
              >
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/emi.svg"
                  alt=""
                />
                <div>Monthly payment plans from EGP 500</div>
              </div>
              <div className="d-flex">
                <button className="w-100 btn btn-primary py-3">CHECKOUT</button>
              </div>
            </div>
            {/* <div className="col-1"></div> */}
          </div>
          {/* <div className="row my-5"></div> */}
        </div>
      </div>
    </>
  );
}
