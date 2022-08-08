import './Cards.css';

function Cards() {
  return <>
    <div className="card" style={{ width: "12rem", border: "0" }}>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" style={{ width: "6px", height: "6px", border: "1px solid grey", borderRadius: "100%", backgroundColor: "#3866df" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active carousel-indicators-round" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" style={{ width: "6px", height: "6px", border: "1px solid grey", borderRadius: "100%", backgroundColor: "#3866df" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className="carousel-indicators-round"></button>
          <button type="button" style={{ width: "6px", height: "6px", border: "1px solid grey", borderRadius: "100%", backgroundColor: "#3866df" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className="carousel-indicators-round"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://z.nooncdn.com/products/tr:n-original/v1646908534/N52875917A_1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://z.nooncdn.com/products/tr:n-t_400/v1646908534/N52875917A_2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://z.nooncdn.com/products/tr:n-t_400/v1646908534/N52875917A_3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">GT Master Edition 5 Dual Sim 256GB 8GB 5G Daybreak blue</p>
        <h5 className="card-title">EGP 9999.00</h5>
        <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" className="d-block mt-4"  style={{ width: "4rem"}} alt="express" />
      </div>
    </div>
  </>;
}

export default Cards;