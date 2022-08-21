
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
export default function Orders() {
  const { logOut, user, logIn, signUp } = useAuth();
  const [order, setOrder] = useState();
  const [allPrdList, setAllPrdList] = useState([]);

  useEffect(() => {
    userData();
  }, []);
  const userData = async () => {
    const docSnap = await UserService.getUser(`${user.uid}`);
    console.log(user.uid);
    console.log(docSnap.exists());
    if (docSnap.exists()) {
      console.log(docSnap.data().orders);
      setOrder(docSnap.data().orders);
    }
  };

  const getProducts = async () => {
    var firstLoop = [];
    var productList = [];
    if (order != undefined) {
      order.map((items) => items.keys.map((value) => firstLoop.push(value)));
    }
    for (var i = 0; i < firstLoop.length; i++) {
      const product = await DetailsService.getPrd(firstLoop[i]);
      console.log(product.data());
      productList.push(product.data());
    }
    console.log(productList);
  };
  getProducts();

  return (
    <>
      {/* <div className="d-flex">

        <div className="mx-auto my-auto">
          <img
            src="https://f.nooncdn.com/s/app/com/noon/design-system/empty-states/orders.svg"
            alt=""
            className="mb-3"
          />
          <div className="fw-bold fs-6 mb-3 mx-3">
            You have no previous orders
          </div>
          <div>
            <Link to="/" className="btn btn-primary mx-5">
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>

      </div> */}
      <div>
        {/* {productList.map((value) => {
          console.log(value);
          return (
            <>
              <div>{value.name}</div>
            </>
          )
        }

        )} */}

      </div>
    </>
  );
}
