import React, { useState, useEffect } from "react";
import { Modal, show, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import NoonNavbar from "./navbar";
import SelectSearch from "react-select-search";
import DetailsService from "./../../../services/details.services";

// import './header.css';
// import myForm from './../Login/form';
import { Link } from "react-router-dom";

const Header2 = () => {
  //handling login model show
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //handling MAP
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => setShowMap(true);
  const handleCloseMap = () => setShowMap(false);

  //handling NAVBAR DROPdOWN

  const [shownav, setShowNav] = useState(false);
  const handleCloseNav = () => setShowNav(false);

  const showDropdown = (e) => {
    setShowNav(!shownav);
  };
  const hideDropdown = (e) => {
    setShowNav(false);
  };
  const [option, setOptions] = useState([]);
  const [products, setPrds] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const dataSnap = await DetailsService.getAllPrd();
    setPrds(dataSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  products.map((value, key) => {
    console.log(value.name);
  });
  console.log(products);

  //  GoogleMap

  products.map((value, key) => {
    console.log(value.name);
    option.push(value.name);
  });
  console.log(option);

  const fun = () => {
    alert("aaaa");
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#FEEE00",
          height: "60px",
          margin: "0",
          maxWidth: "100vh",
        }}
      >
        <div>
          <div
            className="col-2 justify-content-start mx-0 "
            style={{ display: "flex" }}
          >
            <div className="row">
              <img
                src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
                style={{ width: "55%", height: "55%" }}
                className="mx-0 my-auto"
              />
              <img
                src="https://z.nooncdn.com/s/app/com/common/images/flags/eg.svg"
                style={{ width: "20%", height: "20%" }}
                className="mx-0 px-0 my-auto"
              />
              <div
                style={{ width: "50px", marginTop: "5%" }}
                className="mx-0 px-0"
              >
                <p style={{ fontSize: "10px", float: "left", width: "15px" }}>
                  DeliverTo
                  <br />
                  <span>Cairo</span>
                </p>
                <button
                  className="btn mx-0 px-0"
                  style={{ float: "right", width: "5px" }}
                  onClick={handleShowMap}
                >
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </button>
                <Modal show={showMap} onHide={handleCloseMap}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <iframe
                      src="https://maps.google.com/maps?q=cairo&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                      width="450"
                      height="400"
                      allowfullscreen
                    ></iframe>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
          <div className="col-8 d-flex justify-content-center mx-0 ">
            {products.map((value, key) => {
              return (
                <>
                  <SelectSearch
                    options={[
                      {
                        name: "Afghanistan",
                        value: "AF",
                      },
                      {
                        name: "Åland Islands",
                        value: "AX",
                      },
                      {
                        name: "Albania",
                        value: "AL",
                      },
                    ]}
                    search
                    placeholder="What You Looking For?"
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      border: "none",
                      height: "40px",
                    }}
                  />
                </>
              );
            })}
          </div>

          <div
            className="d-flex justify-content-end"
            style={{ display: "inline", alignContent: "end", width: "100%" }}
          >
            <button className="btn mx-0 px-0">
              {" "}
              العربية <span>|</span>
            </button>

            <button className="btn mx-0 px-0" onClick={handleShow}>
              {" "}
              sign in<i className="fa fa-user-o" aria-hidden="true"></i>{" "}
              <span>|</span>
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div style={{ textAlign: "center" }}>
                    <h4>welcome Back !</h4>
                    <h3> Sign in to your account</h3>
                    <p>
                      Don't have an account? <a href="#">Sign up</a>
                    </p>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example1">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form2Example1"
                      className="form-control"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form2Example2"
                      className="form-control"
                    />
                  </div>

                  <div className="col">
                    <a href="#!">Forgot password?</a>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <button
                  type="button"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign in
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
      <div onClick={fun}>
        {/* {" "} */}
        Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
    </>
  );
};

export default Header2;
