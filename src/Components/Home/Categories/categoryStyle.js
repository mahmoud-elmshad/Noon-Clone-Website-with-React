import React from "react";
import Button from "react-bootstrap/Button";
import CategoryStyleComp from "./categoryStyleComp";
import CategoryStyleCompnd from "./categoryStyleCompnd";
export default function CategoryStyle() {
  return (
    <>
      <div className="row" style={{ backgroundColor: "gray" }}>
        <div className="d-flex justify-content-between">
          <div className="align-self-center" style={{ fontSize: 19 }}>
            Categories-Up to 70% Sale
          </div>
          <div className="align-self-center">
            <Button variant="primary">Shop Now</Button>
          </div>
        </div>
        <div className=" my-3 d-flex flex-row flex-wrap justify-content-between">
          <CategoryStyleComp />
          <CategoryStyleComp />
          <CategoryStyleComp />
          <CategoryStyleComp />
          <CategoryStyleComp />
          <CategoryStyleComp />
          <CategoryStyleComp />
        </div>
      </div>
      <div className="row my-3" style={{ backgroundColor: "" }}>
        <div className="d-flex justify-content-between">
          <div className="align-self-center" style={{ fontSize: 19 }}>
            Categories-Up to 70% Sale
          </div>
        </div>
        <div className=" my-3 d-flex flex-row flex-wrap justify-content-between">
          <CategoryStyleCompnd />
          <CategoryStyleCompnd />
          <CategoryStyleCompnd />
          <CategoryStyleCompnd />
          <CategoryStyleCompnd />
          <CategoryStyleCompnd />
        </div>
      </div>
    </>
  );
}
