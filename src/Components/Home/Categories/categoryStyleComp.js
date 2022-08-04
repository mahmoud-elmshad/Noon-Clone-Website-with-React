import React from "react";
import Card from "react-bootstrap/Card";

export default function CategoryStyleComp() {
  return (
    <>
      <div className=" mx-1" style={{ width: "13%" }}>
        <Card>
          <Card.Img
            variant="top"
            src="https://fakeimg.pl/250x100/"
            style={{ height: 400 }}
          />
          <Card.Body>
            <Card.Title>Sub Category</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
