import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
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
import Profile from "./Profile";
import Address from "./Address";
export default function Profilebar() {
  const { logOut, user, logIn, signUp } = useAuth();

  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [mobile, setMobile] = useState("");
  useEffect(() => {
    userData();
    console.log(user);
  }, []);
  const userData = async () => {
    const docSnap = await UserService.getUser(`${user.uid}`);
    console.log(user.uid);
    console.log(docSnap.exists());
    if (docSnap.exists()) {
      console.log(docSnap.data());
      setFirstName(docSnap.data().firstname);
      setLastName(docSnap.data().lastname);
      setPassword(docSnap.data().password);
      console.log(password);
      console.log(lastname);
      setEmail(docSnap.data().email);
      setCity(docSnap.data().city);
      setStreet(docSnap.data().street);
      setMobile(docSnap.data().mobile);
    }
  };
  const navigate = useNavigate();
  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      await logOut();
      navigate("/");

      console.log(user.uid);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="row d-flex flex-sm-row flex-column w-100">
        <div
          className="col-sm-3 col-12 vh-100 d-flex flex-column"
          style={{ backgroundColor: "white" }}
        >
          <div className="ms-4 mt-5 fs-6">Hala {firstname}!</div>
          {/* <div className="ms-4">{email}</div> */}
          <hr className="ms-4" />

          <Link
            className="text-decoration-none text-wrap  fs-6 ms-4 mb-3"
            to={"profile"}
            style={{ color: "black" }}
          >
            <img
              src="https://f.nooncdn.com/s/app/com/noon/design-system/creative-icons/account-profile.svg"
              alt=""
              className="me-3"
            />
            Profile
          </Link>
          <Link
            className="text-decoration-none text-wrap  fs-6 ms-4 mb-3"
            to={"address"}
            style={{ color: "black" }}
          >
            <img
              src="https://f.nooncdn.com/s/app/com/noon/design-system/creative-icons/account-addresses.svg"
              alt=""
              className="me-3"
            />
            Address
          </Link>
          <Link
            className="text-decoration-none text-wrap fs-6 ms-4 mb-3"
            to={"orders"}
            style={{ color: "black" }}
          >
            <img
              src="https://f.nooncdn.com/s/app/com/noon/design-system/creative-icons/account-orders.svg"
              alt=""
              className="me-3"
            />
            Orders
          </Link>
          {/* <hr className="ms-4" />
          <Link
            onClick={handleLogout}
            class="dropdown-item fs-6 ms-4 mb-3 fw-lighter"
            to=""
          >
            Sign Out
          </Link> */}
        </div>
        <div className="col-sm-9 col-12">
          <Outlet />
        </div>
      </div>
    </>
  );
}
