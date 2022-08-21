import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./../../Auth";
import UserService from "../../services/UserService";

export default function Login() {
  const { logIn, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = () => {};
  const newCollection = async () => {
    await UserService.addCollection(`${user.uid}`, email, password);
    console.log(user.uid);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    newCollection();
    try {
      await logIn(email, password);
      navigate("/info");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-100">
        <form className="w-25 mx-auto my-3" onSubmit={handleLogin}>
          <div style={{ textAlign: "center" }}>
            <h4>Welcome back!</h4>
            <h3>Sign in to your account</h3>
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              // value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              class="form-control"
            />
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              // value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              class="form-control"
            />
          </div>
          <div>
            <button type="submit" class="btn btn-primary btn-block mb-4">
              Sign in
            </button>
          </div>

          <div class="col">
            <a href="#!">Forgot your password?</a>
          </div>
        </form>
      </div>
    </>
  );
}
