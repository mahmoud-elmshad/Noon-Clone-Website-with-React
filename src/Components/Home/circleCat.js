import React from "react";
import Image from "react-bootstrap/Image";

export default function CircleCat() {
  return (
    <>
      <div className="mx-1 d-flex flex-column" style={{ width: "9%" }}>
        <Image
          src="https://fakeimg.pl/300/"
          roundedCircle
          // width={"25%"}
          className=""
        ></Image>
        <div className="mx-auto" style={{ textAlign: "center" }}>
          Sub Category or More
        </div>
      </div>
    </>
  );
}
