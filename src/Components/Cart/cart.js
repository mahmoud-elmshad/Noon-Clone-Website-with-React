import React, { useState, useEffect } from "react";
import CartCard from "./cartCard";

import NumberFormat from "react-number-format";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PayPalCheckOutButton from "../PayPal/PayPalCheckOutButton";

export default function Cart() {
  const navigate = useNavigate();
  let [dataPrd, setDataPrd] = useState([]);

  useEffect(() => {
    const cartItems = [];
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        if (key.includes("__paypal_storage__")) {
        } else {
          cartItems.push({ ...JSON.parse(localStorage.getItem(key)), key });
        }
      }
    }
    // cartItems.filter((item)=>item)
    console.log(cartItems);
    setDataPrd(cartItems);
  }, []);

  const deleteCard = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are going to remove this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Removed!", "Your product has been removed.", "success");
        localStorage.removeItem(id);
        setDataPrd(dataPrd.filter((value) => value.key != id));
      }
    });
  };
  function findSumUsingMap() {
    let total = 0;
    dataPrd.map(
      ({ price, discount }) =>
        (total = total + (price - price * (discount / 100)))
    );
    return Math.ceil(total);
  }
  const totalPrice = findSumUsingMap();

  const goHome = () => {
    navigate("/");
  };
  // const payPalProduct = {
  //   description: 'Noon Shopping',
  //   price: ((totalPrice / 19.14).toFixed(1))
  // }

  return (
    <>
      <div style={{ backgroundColor: "#F7F7FA" }}>
        <div className="container py-5">
          {/* <div className="col-1"></div> */}
          <div className="row">
            <div className="col-md-8">
              <div className="fw-bold fs-3">CART</div>
              <div>
                <img
                  src="https://k.nooncdn.com/cms/pages/20220415/e93ff79763e043639cb3c7740f4d5ab4/en_cart-01.png"
                  alt=""
                  className="img-fluid my-3 w-100"
                />
              </div>

              {dataPrd.length > 0 &&
                dataPrd.map((value) => {
                  return (
                    <CartCard
                      key={value.key}
                      delete={deleteCard}
                      imgurl={value.img}
                      prdBrand={value.brand}
                      title={value.name}
                      trader="noon"
                      id={value.key}
                    />
                  );
                })}

              <button
                className="btn btn-outline-primary text-primary"
                style={{ backgroundColor: "white" }}
                onClick={() => goHome()}
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
                    value={totalPrice}
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
                    value={totalPrice}
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
              <div className="paypal-button-container">
                <PayPalCheckOutButton
                  description={"Noon Shopping"}
                  value={(totalPrice / 19.14).toFixed(1)}
                />
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
