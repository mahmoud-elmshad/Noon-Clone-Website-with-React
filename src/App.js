// import logo from './logo.svg';
import "./App.css";
import Cart from "./Components/Cart/cart";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/home";
import Details from "./Components/Details/details";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Sidebar from "./Components/Side-bar/side-bar";

function App() {
  return (
    <>
      {/* <Header /> */}

      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="cart" element={<Cart />} />
          <Route path="details" element={<Details />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
