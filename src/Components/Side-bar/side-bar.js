import "./side-bar.css";
import Cards from "../Cards/Cards";
import React, { useState } from 'react';

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className='pb-5' style={{ backgroundColor: '#F7F7FA' }}>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-3 px-0">
              {/* fulfillment section */}
              <div className="accordion accordion-flush mb-3" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed shadow-none fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Fulfillment
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body d-flex align-items-center ">
                      <input className="form-check-input mx-2 rounded-1 shadow-none" style={{ width: "0.8rem", height: "0.8rem" }} type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" className="d-block" style={{ width: "5rem" }} alt="express" /></div>
                  </div>
                </div>
              </div>
              {/* Category section */}
              <div
                className="accordion accordion-flush mb-3"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed shadow-none fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Category
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    {/* Custom accordion */}
                    <div className="custom-accordion">
                      <div className="custom-accordion-item">
                        <div className="custom-accordion-title" onClick={() => setIsActive(!isActive)}>
                          <div className="mx-2"> <img src={isActive ? "https://z.nooncdn.com/s/app/com/noon/design-system/icons/minus-grey.svg" : "https://z.nooncdn.com/s/app/com/noon/design-system/icons/plus-grey.svg"} className="custom-accordion-icon" alt="..." /></div>
                          <div>Electronics &amp; Mobiles</div>
                        </div>
                        {isActive && <div className="custom-accordion-content px-4 my-0 d-flex"> <div className="d-flex my-0 mx-2" style={{ height: "30px" }}>
                          <div className="vr"></div>
                        </div> All Electronics &amp; Mobiles</div>}
                      </div>


                    </div>
                  </div>
                </div>
              </div>
              {/* Brand section */}
              <div className="accordion accordion-flush mb-3" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed shadow-none fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Brand
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <div class="input-group mb-3">
                        <input type="search" class="form-control shadow-none" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                      </div>
                      <div className="form-check">
                        <input className="form-check-input rounded-1 shadow-none" type="checkbox" value="" id="defaultCheck1" />
                        <div className="form-check d-flex justify-content-between px-0">
                          <label className="form-check-label" htmlFor="defaultCheck1">
                            <small>Samsung</small>
                          </label>
                          <span><small>(25)</small></span>
                        </div>
                        <input className="form-check-input rounded-1 shadow-none" type="checkbox" value="" id="defaultCheck2" />
                        <div className="form-check d-flex justify-content-between px-0">
                          <label className="form-check-label" htmlFor="defaultCheck2">
                            <small>Xiaomi</small>
                          </label>
                          <span><small>(36)</small></span>
                        </div>
                        <input className="form-check-input rounded-1 shadow-none" type="checkbox" value="" id="defaultCheck3" />
                        <div className="form-check d-flex justify-content-between px-0">
                          <label className="form-check-label" htmlFor="defaultCheck3">
                            <small>Apple</small>
                          </label>
                          <span><small>(41)</small></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Price section */}
              <div className="accordion accordion-flush mb-3" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed  shadow-none fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      Price (EGP)
                    </button>
                  </h2>
                  <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="col-4">
                          <input type="number" className="form-control shadow-none" id="inputnumber1" placeholder="125" />
                        </div>
                        <span className="mx-3 text-muted"><small>TO</small></span>
                        <div className="col-4">
                          <input type="number" className="form-control shadow-none" id="inputnumber2" placeholder="6845" />
                        </div>
                        <span className="mx-3 text-primary"><small>GO</small></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product rating section */}
              <div className="accordion accordion-flush mb-3" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFive">
                    <button className="accordion-button collapsed shadow-none fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      Product Rating
                    </button>
                  </h2>
                  <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <label class="form-label" for="customRange1">Star or more</label>
                      <div class="range">
                        <input type="range" class="form-range" min="1" max="5" step="0.1" id="customRange1" />
                      </div>
                      <div className="text-muted d-flex justify-content-between">
                        <span><small>1 Star</small></span>
                        <span><small>5 Star</small></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div className="col-9">
              <div className='mt-4 pb-5 d-flex justify-content-between'>
                <div style={{ fontSize: 15 }}>147 Results for "<b style={{ opacity: '90%' }}>noon picks</b>"</div>
                <div className='d-flex'>
                  <div class="dropdown">
                    <span style={{ fontSize: 12, color: '#B8BBD2', fontWeight: 'bold', }}>SORT BY</span>
                    <button style={{ fontSize: 13 }} class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                      RECOMMENDED
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li classNames='my-2' style={{ fontSize:11}}><button class="dropdown-item" type="button">RECOMMENDED</button></li>
                      <li classNames='my-2' style={{ fontSize:11}}><button class="dropdown-item" type="button">PRICE:HIGH TO LOW</button></li>
                      <li classNames='my-2' style={{ fontSize:11}}><button class="dropdown-item" type="button">PRICE:LOW TO HIGH</button></li>
                      <li classNames='my-2' style={{ fontSize:11}}><button class="dropdown-item" type="button">NEW ARRIVALS</button></li>
                      <li classNames='my-2' style={{ fontSize:11}}><button class="dropdown-item" type="button">RATING:HIGH TO LOW</button></li>
                    </ul>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div class="dropdown">
                    <span style={{ fontSize: 12, color: '#B8BBD2', fontWeight: 'bold', }}>DISPLAY</span>
                    <button style={{ fontSize: 13 }} class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                      50 PER PAGE
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li classNames='my-2' style={{ fontSize:11}}><button class="dropdown-item" type="button">50 PER PAGE</button></li>
                      <li classNames='my-2' style={{ fontSize:11}}><button class="dropdown-item" type="button">100 PER PAGE</button></li>
                      <li classNames='my-2' style={{ fontSize:11}}><button class="dropdown-item" type="button">150 PER PAGE</button></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-wrap'>
                <Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards />
              </div>
              {/* <Gallery className='my-3' />
              <Gallery className='my-3' />
              <Gallery className='my-3' />
              <Gallery className='my-3' />
              <Gallery className='my-3' /> */}

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Sidebar;
