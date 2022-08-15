import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import NumberFormat from "react-number-format";
import { AiFillStar } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getProduct from "./../../../Redux/action/action";

export default function DealStyleVerticalComp(props) {
  // const prds = useSelector((state) => state.product)
  // const [product, setPrd] = useState(prds)
  const navigate = useNavigate();

  // const goDetails = () => {
  //   setPrd(props)
  //   if(Object.keys(prds).length ===0){

  //     console.log("not yet");
  //   }else{
  //     navigate('/details')

  //   }
  // }
  // const dispatch = useDispatch()
  // dispatch(getProduct(product))

  const goDetails = () => {
    navigate(`/details?prdID=${props.id}`);
  };
  return (
    <>
      {/* <div className=" mx-1" style={{ width: "14%" }}> */}

      <div onClick={goDetails}>
        <Card style={{ border: "none" }}>
          <Card.Img
            variant="top"
            src={props.imgurl}
            // style={{ height: 400 }}
          />
          <Card.Body>
            <Card.Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                // width: "90%",
                // height: 50,
              }}
            >
              {props.description}
            </Card.Text>
            <Card.Text>
              <div className="fw-bold fs-5">
                <NumberFormat
                  value={props.price}
                  // className="foo"
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"EGP "}
                />
              </div>
              {/* <div className="d-flex"> */}
              <div className="fw-semibold fs-6 text-decoration-line-through me-3">
                <NumberFormat
                  value={props.price}
                  // className="foo"
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"EGP "}
                />
              </div>
              <div className="d-flex">
                <div className="fw-semibold fs-6 text-decoration-line-through me-3">
                  <NumberFormat
                    value={props.oldPrice}
                    // className="foo"
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"EGP "}
                  />
                </div>

                <div className="fw-bold fs-6" style={{ color: "green" }}>
                  <NumberFormat
                    value={(
                      ((Number(props.oldPrice) - Number(props.price)) /
                        Number(props.oldPrice)) *
                      100
                    ).toFixed()}
                    // className="foo"
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"% OFF"}
                  />
                </div>
              </div>
            </Card.Text>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div>
                  <img
                    src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg"
                    alt=""
                  />
                </div>
                <div className="fw-semibold" style={{ color: "#F5A523" }}>
                  <AiFillStar />
                  4.8 (20)
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      {/* </div> */}
    </>
  );
}
