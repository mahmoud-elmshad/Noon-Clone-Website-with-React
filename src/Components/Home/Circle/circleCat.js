import React from "react";
import Image from "react-bootstrap/Image";

export default function CircleCat() {
  return (
    <>
      <div className="d-flex flex-column" style={{ width: "100%" }}>
        <Image
          src="https://fakeimg.pl/300/"
          roundedCircle
          // width={"25%"}
          className="mx-1"
        ></Image>
        {/* <div className="" style={{ textAlign: "center" }}>
          Category
        </div> */}
      </div>
    </>
  );
}
