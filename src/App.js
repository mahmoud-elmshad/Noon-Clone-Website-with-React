import "./App.css";
import Cart from "./Components/Cart/cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
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
import ScrollToTop from "./Components/ScrollToTop";
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

function App() {
  return (
    <><ScrollToTop />
      <PayPalScriptProvider
        options={{ 'client-id': 'AZho7PexyY75W0i5PkZSCnyCnRjN6L59yDxw9_XMsEruvO0Rs4xGYhrXjZpPEGX-BI4M6CESwh11H05J' }}>
        <div>
          <Header />
          <NoonNavbar />
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
          <Footer />
        </div>
      </PayPalScriptProvider>
    </>
  );
}

export default App;
