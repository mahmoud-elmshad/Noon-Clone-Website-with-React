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
import Information from "./Components/Header/Information";
import Away from "./Components/Header/Away";
import Profile from "./Components/Profile/Profile";
import Address from "./Components/Profile/Address";
import Profilebar from "./Components/Profile/Profilebar";
import Orders from "./Components/Profile/Orders";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <AuthProvider> */}
      <div>
        {/* <Header /> */}

        {/* <NoonNavbar /> */}

        {/* <Router> */}
        <AuthProvider>
          <Header />
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
        </AuthProvider>
        {/* </Router> */}
        {/* <Footer /> */}
      </div>
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
