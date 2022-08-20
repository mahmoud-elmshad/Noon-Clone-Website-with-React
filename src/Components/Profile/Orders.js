import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
export default function Orders() {
  return (
    <>
      <div className="d-flex">
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
      </div>
    </>
  );
}
