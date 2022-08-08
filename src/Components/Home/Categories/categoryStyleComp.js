import React from "react";
import Card from "react-bootstrap/Card";

export default function CategoryStyleComp(props) {
  return (
    <>
      {/* <div className=" mx-1" style={{ width: "13%" }}> */}
      <div className=" mx-1">
        <div>
          <img src={props.imgurl} alt="" className="img-fluid" />
        </div>
        {/* <Card>
          <Card.Img
            variant="top"
            src={props.imgurl}
            // style={{ height: 400 }}
          />
          <Card.Body>
            <Card.Title>Sub Category</Card.Title>
          </Card.Body>
        </Card> */}
      </div>
      {/* </div> */}
    </>
  );
}
