import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
export default function CartCard() {
  return (
    <>
      <div className="d-flex my-5">
        <div style={{ width: "25%" }} className="d-flex">
          <Image src="https://fakeimg.pl/100x250/" className="mx-auto"></Image>
        </div>
        <div>
          <div className="d-flex flex-column">
            <div style={{ fontSize: 19 }}>Title</div>
            <div style={{ fontSize: 19 }}>Sub Title</div>
            <div>
              Details and more details details details details details details
              details details details details
            </div>
            <div>
              <Button variant="primary">Shop Now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
