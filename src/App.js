// import logo from './logo.svg';
import "./App.css";

import Cart from "./Components/Cart/cart";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/home";
import Details from "./Components/Details/details";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="details" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
