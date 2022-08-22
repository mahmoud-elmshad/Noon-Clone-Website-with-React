import "./App.css";
import Cart from "./Components/Cart/cart";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import Details from "./Components/Details/details";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Sidebar from "./Components/Side-bar/side-bar";
import { AuthProvider } from "./Auth";
import Login from "./Components/Sign-in/Login";
import Signup from "./Components/Sign-up/Signup";

import ProtectedRoute from "./ProtectedRoute";
import Information from "./Components/Header/Information";
import Away from "./Components/Header/Away";
import Profile from "./Components/Profile/Profile";
import Address from "./Components/Profile/Address";
import Profilebar from "./Components/Profile/Profilebar";
import Orders from "./Components/Profile/Orders";
import ScrollToTop from "./Components/ScrollToTop";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <>
      <ScrollToTop />
      <AuthProvider>
        <PayPalScriptProvider
          options={{
            "client-id":
              "AZho7PexyY75W0i5PkZSCnyCnRjN6L59yDxw9_XMsEruvO0Rs4xGYhrXjZpPEGX-BI4M6CESwh11H05J",
          }}
        >
          <div>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="sidebar" element={<Sidebar />} />

              <Route exact path="cart" element={<Cart />} />

              <Route path="details" element={<Details />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="info" element={<Information />} />
              <Route path="newinfo" element={<Away />} />

              <Route path="profilebar" element={<Profilebar />}>
                <Route
                  path="profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="address"
                  element={
                    <ProtectedRoute>
                      <Address />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="orders"
                  element={
                    <ProtectedRoute>
                      <Orders />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>

            {/* <Footer /> */}
          </div>
        </PayPalScriptProvider>
      </AuthProvider>
    </>
  );
}

export default App;
