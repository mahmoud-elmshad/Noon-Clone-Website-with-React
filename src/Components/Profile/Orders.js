import React, { useEffect, useState } from "react";
import { useAuth } from "./../../Auth";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

import UserService from "../../services/UserService";
import DetailsService from "../../services/details.services";
import "./orders.css";

export default function Orders() {
  const { logOut, user, logIn, signUp } = useAuth();
  const [allPrdList, setAllPrdList] = useState([]);
  useEffect(() => {
    getUserAndPrdInfo();
  }, []);
  const userData = async () => {
    const docSnap = await UserService.getUser(`${user.uid}`);

    return docSnap.data().orders;
  };

  const getUserAndPrdInfo = async () => {
    const orders = await userData();
    getProducts(orders);
  };

  const getProducts = async (order) => {
    var firstLoop = [];
    var productList = [];
    if (order != undefined) {
      firstLoop = order.map((items) => items.keys).flat();
      for (var i = 0; i < firstLoop.length; i++) {
        const product = await DetailsService.getPrd(firstLoop[i]);
        console.log(product.data());
        productList.push(product.data());
      }
      setAllPrdList(productList);
    }
    console.log(productList);
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <h2>Orders</h2>
        <div style={{ opacity: "70%" }}>
          View your order history and check the delivery status for items
        </div>
      </div>
      {allPrdList.length > 0 ? (
        <div>
          {allPrdList.map((value) => {
            return (
              <>
                <div className="container-fluid">
                  <div
                    className="row my-2 py-3"
                    style={{
                      height: "10em",
                      backgroundColor: "white",
                      border: "1px solid lightgrey",
                    }}
                  >
                    <div
                      className="col-3 d-flex justify-content-around flex-column"
                      style={{
                        borderRight: "1px solid rgb(240, 242, 248)",
                        height: "100%",
                      }}
                    >
                      <div style={{ textTransform: "uppercase" }}>
                        {user.uid}
                      </div>
                      <div style={{ opacity: "70%" }}>
                        Placed on 29 Nov 2020
                      </div>
                      <div className="orders" style={{ width: "fit-content" }}>
                        Delivered
                      </div>
                    </div>
                    <div className="col-9">
                      <div>
                        <div className="d-flex align-items-center">
                          <div className="d-flex flex-column">
                            <div>{value.name}</div>
                            <div className="align-middle">
                              <img style={{ width: "18%" }} src={value.img} />
                            </div>
                          </div>
                          <div
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: "2",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {value.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="float-end">
            <Link to="/" className="btn btn-primary mx-5">
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      ) : (
        <div className="d-flex">
          <div className="mx-auto my-auto">
            <img
              src="https://f.nooncdn.com/s/app/com/noon/design-system/empty-states/orders.svg"
              alt=""
              className="mb-3"
            />
            <div className="fw-bold fs-6 mb-3 mx-4">
              You have no previous orders
            </div>
            <div>
              <Link to="/" className="btn btn-primary mx-4">
                CONTINUE SHOPPING
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
