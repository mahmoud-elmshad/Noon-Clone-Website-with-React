import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect, useNavigate, Link } from "react-router-dom";

import app from "./../../firebase";
import { AuthContext } from "./../../Auth";
import { useAuth } from "./../../Auth";

export default function Signup() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = () => {};

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <>
      <form className="w-25 mx-auto my-3" onSubmit={handleSignup}>
        <div style={{ textAlign: "center" }}>
          <h4>welcome Back !</h4>
          <h3> Sign in to your account</h3>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>

        <div class="form-outline mb-4">
          <label class="form-label" for="email">
            Email address
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
            Sign up
          </button>
        </div>

        <div class="col">
          <a href="#!">Forgot password?</a>
        </div>
      </form>
    </>
  );
}
