import React, { useState } from "react";
import { Modal, show, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
// import './header.css';
// import myForm from './../Login/form';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => setShowMap(true);
  const handleCloseMap = () => setShowMap(false);

  //  GoogleMap

  return (
    <>
      <>
        <Navbar
          style={{ maxWidth:'100%', backgroundColor: "#FEEE00", height: "6em", margin: "0" }}
        >
          <Container fluid>
            <div
              className="col-2 justify-content-start mx-0 "
              style={{ display: "flex" }}
            >
              <div className="row">
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
                  style={{ width: "50%", height: "50%" }}
                  className="mx-0 my-auto"
                />
                <img
                  src="https://z.nooncdn.com/s/app/com/common/images/flags/eg.svg"
                  style={{ width: "30%", height: "30%" }}
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
                    <i class="fa fa-caret-down" aria-hidden="true"></i>
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
              <input
                type="search"
                id="gsearch"
                name="gsearch"
                placeholder=" What are you Looking for?"
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  border: "none",
                  height: "3.5em",
                }}
              />
            </div>

            <div
              className="d-flex justify-content-end"
              style={{ width:'100%', display: "inline", alignContent: "end" }}
            >
              <button class="btn mx-0 px-0">
                {" "}
                العربية <span>|</span>
              </button>

              <button class="btn mx-0 px-0" onClick={handleShow}>
                {" "}
                sign in<i class="fa fa-user-o" aria-hidden="true"></i>{" "}
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

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example1">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="form2Example1"
                        class="form-control"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form2Example2"
                        class="form-control"
                      />
                    </div>

                    <div class="col">
                      <a href="#!">Forgot password?</a>
                    </div>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <button type="button" class="btn btn-primary btn-block mb-4">
                    Sign in
                  </button>
                </Modal.Footer>
              </Modal>
              <button class="btn">
                {" "}
                Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </button>
            </div>
          </Container>
        </Navbar>

        {/* <Navbar bg="light" style={{borderBottom:'1px solid lightgrey'}} variant="light">
          <div className='container-fluid'>
            <Navbar.Brand style={{borderRight:'1px solid lightgrey', width:'8em'}} href="/movies">All Categories</Navbar.Brand>
            <Nav className="me-auto">
              <Link
                to="/movies"
                className="myLink mx-2 "
                style={{ textDecoration: "none" ,color:'black', fontSize:13 ,fontWeight:'bold' , paddingRight:'.8em' }}
              >
                ELECTRIONCS
              </Link>
              <Link style={{ textDecoration: "none" ,color:'black', fontSize:13 ,fontWeight:'bold' , paddingRight:'.8em' }} to="/favorites" className="mx-2 myLink">
                MOBILE
              </Link>
              <Link style={{ textDecoration: "none" ,color:'black', fontSize:13 ,fontWeight:'bold' , paddingRight:'.8em' }} to="/todo" className="mx-2 myLink">
                MEN
              </Link>
              <Link style={{ textDecoration: "none" ,color:'black', fontSize:13 ,fontWeight:'bold' , paddingRight:'.8em' }} to="/todo" className="mx-2 myLink">
                WOMEN
              </Link>
              <Link style={{ textDecoration: "none" ,color:'black', fontSize:13 ,fontWeight:'bold' , paddingRight:'.8em' }} to="/todo" className="mx-2 myLink">
                HOME
              </Link>
              <Link style={{ textDecoration: "none" ,color:'black', fontSize:13 ,fontWeight:'bold' , paddingRight:'.8em' }} to="/todo" className="mx-2 myLink">
                BEAUTY & HEALTH
              </Link>
              <Link style={{ textDecoration: "none" ,color:'black', fontSize:13 ,fontWeight:'bold' , paddingRight:'.8em' }} to="/todo" className="mx-2 myLink">
                BABY & TOYS
              </Link>
              <Link style={{ textDecoration: "none" ,color:'black', fontSize:13 ,fontWeight:'bold' , paddingRight:'.8em' }} to="/todo" className="mx-2 myLink">
                SUPERMARKET
              </Link>
              <Link style={{ textDecoration: "none" ,color:'black', fontSize:13 ,fontWeight:'bold' , paddingRight:'.8em' }} to="/todo" className="mx-2 myLink">
                SELL ON NOON
              </Link>
              <Link style={{textDecoration: "none" ,color:'black', fontSize:13 ,fontWeight:'bold' , paddingRight:'.8em' }} to="/todo" className="mx-2 myLink">
               <div style={{color:'red'}}>DEALS</div>
              </Link>
            </Nav>
          </div>
        </Navbar> */}
      </>
    </>
  );
};

export default Header;
