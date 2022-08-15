// import logo from './logo.svg';
import "./App.css";
import Cart from "./Components/Cart/cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
// import { Route, Switch } from "react-router";

import Home from "./Components/Home/home";
import Details from "./Components/Details/details";
import Header from "./Components/Header/header";
import Header2 from "./Components/noon-nav/Header/header";
import Footer from "./Components/Footer/footer";
import Sidebar from "./Components/Side-bar/side-bar";
import NoonNavbar from "./Components/noon-nav/Header/navbar";
import { AuthProvider } from "./Auth";
import Login from "./Components/Sign-in/Login";
import Signup from "./Components/Sign-up/Signup";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <AuthProvider> */}
      <div>
        <Header />
        <NoonNavbar />

        {/* <Router> */}
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="sidebar" element={<Sidebar />} />
            <Route
              exact
              path="cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route path="details" element={<Details />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </AuthProvider>
        {/* </Router> */}
        {/* <Footer /> */}
      </div>
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
