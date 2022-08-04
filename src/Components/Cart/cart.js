import React from "react";
import CartCard from "./cartCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Cart() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div style={{ fontSize: 19 }}>Cart</div>

          <CartCard />
          <CartCard />
          <CartCard />
        </div>

        <div className="col-4">
          <div style={{ fontSize: 19 }}>Summary</div>
          <div className="d-flex my-4">
            <Form.Control type="text" placeholder="Coupon Code" />
            <Button variant="primary">Apply</Button>
          </div>
          <hr className="my-4"></hr>
          <div className="d-flex my-4 justify-content-between">
            <div style={{ fontSize: 19 }}>Total</div>
            <div style={{ fontSize: 19 }}>Price</div>
          </div>
          <div className="d-flex">
            <Button style={{ width: "100%" }} variant="primary">
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
