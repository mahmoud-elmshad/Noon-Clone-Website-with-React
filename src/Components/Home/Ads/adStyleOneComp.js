import React from "react";
import Card from "react-bootstrap/Card";
export default function AdStyleOneComp() {
  return (
    <>
      <div className=" mx-1" style={{ width: "24%" }}>
        <Card>
          <Card.Img variant="top" src="https://fakeimg.pl/250x100/" />
          <Card.Body>
            <Card.Title>Sales Up to 50%</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
