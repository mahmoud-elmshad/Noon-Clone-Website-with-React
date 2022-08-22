import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Information from "./Information";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import Location from "./Location";
import { useAuth } from "./../../Auth";
import Login from "../Sign-in/Login";
import UserService from "../../services/UserService";
import Signup from "../Sign-up/Signup";
import Search from "../Home/Search";

const Header = () => {
  const { logOut, user, logIn, signUp, forgetPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [profilename, setProfileName] = useState("");
  const [address, setAddress] = useState(null);
  const [addressaway, setAddressAway] = useState(null);

  const [userinfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const userData = async () => {
    const docSnap = await UserService.getUser(`${user.uid}`);
    console.log(user.uid);
    console.log(docSnap.exists());
    if (docSnap.exists()) {
      console.log(docSnap.data());
      setProfileName(docSnap.data().firstname);
      setAddress(`${docSnap.data().city},${docSnap.data().street}`);
      setAddressAway(`${docSnap.data().cityaway},${docSnap.data().streetaway}`);
      console.log(address);
    }
  };
  const handleChange = () => {};
  if (user) {
    userData();
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await logIn(email, password);
      navigate("/");
      handleClose();
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      await logOut();
      navigate("/");
      setProfileName(false);
      setAddress(null);
      setAddressAway(null);
      console.log(user.uid);
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
    setShowSignUp(false);
    setShowMap(false);
  };
  const handleClose = () => setShow(false);

  const [showSignUp, setShowSignUp] = useState(false);

  const handleShowSignUp = () => {
    setShowSignUp(false);
    setShow(false);
    setShowMap(false);
  };
  const handleCloseSignUp = () => setShowSignUp(false);

  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    setShowMap(true);
    setShow(false);
    setShowSignUp(false);
  };
  const handleCloseMap = () => setShowMap(false);
  function handleAddInfo() {
    if (!profilename || !user) {
      navigate("/login");
    } else {
      navigate("/info");
    }
  }
  function handleAddAddress() {
    navigate("/newinfo");
    handleCloseMap();
  }
  const [home, setHome] = useState(true);
  function handleHome() {
    setHome(true);
    handleCloseMap();
  }
  function handleAway() {
    setHome(false);
    handleCloseMap();
  }

  //  GoogleMap
  const [formerror, setFormError] = useState({
    useremailerror: "",
    userpassworderror: "",
  });
  const [emailtouched, setEmailTouched] = useState(false);
  const [passwordtouched, setPasswordTouched] = useState(false);

  const [inputpassword, setInputPassword] = useState("password");
  function togglepassword() {
    if (inputpassword === "password") {
      setInputPassword("text");
      console.log(password);
    } else if (inputpassword === "text") {
      setInputPassword("password");
    }
  }

  async function handlePasswordChange() {
    await forgetPassword(email)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <>
      <>
        <nav
          class="navbar navbar-expand-lg h-auto"
          style={{
            maxWidth: "100%",
            backgroundColor: "#FEEE00",
            // height: "6em",
          }}
        >
          <div class="container-fluid">
            <div className="d-flex justify-content-center align-items-center w-100 flex-wrap">
              <div className="d-flex align-items-center order-md-1 order-1">
                <img
                  src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
                  className="me-sm-3 me-2 img-fluid"
                  style={{ height: "24px" }}
                  alt=""
                  onClick={() => {
                    navigate("/");
                  }}
                />

                <div className="d-flex align-items-center">
                  {/* <img
                    src="https://z.nooncdn.com/s/app/com/common/images/flags/eg.svg"
                    // style={{ width: "30%", height: "30%" }}
                    className="me-2 img-fluid"
                    alt=""
                  /> */}
                  <div className="d-flex ">
                    <button
                      className="btn fs-6 d-flex flex-column "
                      onClick={handleShowMap}
                      disabled={
                        address == null || address == "undefined,undefined"
                      }
                      style={{ border: "none" }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="me-2 ">Deliver to</div>

                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                      </div>
                      {address != null && address != "undefined,undefined" ? (
                        <>
                          {home ? (
                            <div
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {address}
                            </div>
                          ) : (
                            <div
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {addressaway}
                            </div>
                          )}
                        </>
                      ) : null}
                    </button>
                  </div>

                  <Modal show={showMap} onHide={handleCloseMap} size="lg">
                    <Modal.Header closeButton>
                      <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* <Location /> */}
                      {address == null && address == "undefined,undefined" ? (
                        <Information />
                      ) : addressaway == null ||
                        addressaway == "undefined,undefined" ? (
                        <>
                          <div>
                            Your Current Address is "{address}" Click on link
                            below to Add New Address:
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-block my-3"
                            onClick={handleAddAddress}
                          >
                            ADD ADDRESS
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="btn btn-primary btn-block my-3"
                            onClick={handleHome}
                          >
                            {address}
                          </button>
                          <br />
                          <button
                            type="button"
                            className="btn btn-primary btn-block my-3"
                            onClick={handleAway}
                          >
                            {addressaway}
                          </button>
                        </>
                      )}
                    </Modal.Body>
                  </Modal>
                </div>
              </div>

              <div className="flex-grow-1 order-sm-2 order-3">
                {/* <Search /> */}
                <input
                  className="w-100"
                  type="search"
                  id="gsearch"
                  name="gsearch"
                  placeholder=" What are you looking for?"
                  style={{
                    width: "100%",
                    borderRadius: "4px",
                    border: "none",

                    height: "2.7em",
                  }}
                />
              </div>
              <div className="d-flex align-items-center order-sm-3 order-2">
                {/* <button className="btn" style={{ border: "none" }}>
                  العربية
                </button>

                <span>|</span> */}
                {profilename ? (
                  <>
                    <div class="btn-group dropdown-center">
                      <button
                        type="button"
                        class="btn  dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ border: "none" }}
                      >
                        {profilename}
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <Link
                            class="dropdown-item active"
                            to="profilebar/orders"
                          >
                            Orders
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="profilebar/address">
                            Address
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="profilebar/profile">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <Link
                            onClick={handleLogout}
                            class="dropdown-item"
                            to=""
                          >
                            Sign Out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : null}

                {/* {!profilename && user ? (
                  <>
                    <button className="btn" onClick={handleAddInfo}>
                      Add Info
                      <i className="fa fa-user-o" aria-hidden="true"></i>
                    </button>
                  </>
                ) : null} */}

                {!profilename || !user ? (
                  <>
                    <button
                      className="btn"
                      onClick={handleShow}
                      style={{ border: "none" }}
                    >
                      sign in<i className="fa fa-user-o" aria-hidden="true"></i>
                    </button>
                  </>
                ) : null}

                <span>|</span>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* <Login /> */}
                    <div className="w-100">
                      <form
                        className="w-75 mx-auto my-3"
                        onSubmit={handleLogin}
                      >
                        <div style={{ textAlign: "center" }}>
                          <h4>Welcome back!</h4>
                          <h3>Sign in to your account</h3>
                          <p>
                            Don't have an account?{" "}
                            <Link to="signup" onClick={handleShowSignUp}>
                              Sign Up
                            </Link>
                          </p>
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="email">
                            Email
                          </label>
                          <input
                            type="email"
                            id="emaillogin"
                            name="email"
                            value={email}
                            onBlur={() => setEmailTouched(true)}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              let regex = new RegExp(
                                "^[a-zA-Z0-9]+@([a-zA-Z]{3,}).([A-Za-z]{2,3})$"
                              );

                              setFormError({
                                ...formerror,
                                useremailerror:
                                  e.target.value.length == 0
                                    ? "Required"
                                    : !regex.test(e.target.value)
                                    ? "Example 'test@test.com'"
                                    : null,
                              });
                              console.log(formerror.useremailerror);
                            }}
                            className={`form-control ${
                              formerror.useremailerror && emailtouched
                                ? "is-invalid shadow-none"
                                : ""
                            }`}
                          />
                          {emailtouched ? (
                            <small className="text-danger">
                              {formerror.useremailerror}
                            </small>
                          ) : (
                            <></>
                          )}
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="password">
                            Password
                          </label>
                          <div className=" input-group">
                            <input
                              type={inputpassword}
                              id="password"
                              name="password"
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                                setFormError({
                                  ...formerror,
                                  userpassworderror:
                                    e.target.value.length == 0
                                      ? "Required"
                                      : e.target.value.length < 8
                                      ? "Password canot be less than 8 characters"
                                      : null,
                                });
                                console.log(formerror.userpassworderror);
                              }}
                              onBlur={() => setPasswordTouched(true)}
                              className={`form-control ${
                                formerror.userpassworderror && passwordtouched
                                  ? "is-invalid shadow-none"
                                  : ""
                              }`}
                            />
                            <div className="input-group-text">
                              {inputpassword === "password" ? (
                                <AiFillEyeInvisible onClick={togglepassword} />
                              ) : (
                                <AiFillEye onClick={togglepassword} />
                              )}
                            </div>
                          </div>
                          {passwordtouched ? (
                            <small className="text-danger">
                              {formerror.userpassworderror}
                            </small>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div>
                          <button
                            type="submit"
                            class="btn btn-primary btn-block mb-4"
                            disabled={
                              formerror.useremailerror != null ||
                              formerror.userpassworderror != null
                            }
                          >
                            Sign in
                          </button>
                        </div>

                        <div class="col">
                          <a href="#!" onClick={handlePasswordChange}>
                            Forgot your password?
                          </a>
                        </div>
                      </form>
                    </div>
                  </Modal.Body>
                </Modal>
                <Modal show={showSignUp} onHide={handleCloseSignUp}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* <Signup /> */}
                    {/* <form className="w-75 mx-auto my-3" onSubmit={handleSignup}>
                      <div style={{ textAlign: "center" }}>
                        <h4>Create an account</h4>

                        <p>
                          Already have an account?{" "}
                          <Link to="" onClick={handleShow}>
                            Sign In
                          </Link>
                        </p>
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="emailsignup"
                          name="email"
                          
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          class="form-control"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="passwordsignup"
                          name="password"
                          
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          class="form-control"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="firstname">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstnamesignup"
                          name="firstname"
                          
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
                          class="form-control"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="lastname">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastnamesignup"
                          name="lastname"
                        
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                          class="form-control"
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          class="btn btn-primary btn-block mb-4"
                        >
                          Sign up
                        </button>
                      </div>
                    </form> */}
                  </Modal.Body>
                </Modal>
                <Link to={"/cart"}>
                  <button class="btn" style={{ border: "none" }}>
                    {" "}
                    Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    </>
  );
};

export default Header;
