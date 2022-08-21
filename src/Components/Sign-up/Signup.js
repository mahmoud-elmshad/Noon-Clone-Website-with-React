import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect, useNavigate, Link } from "react-router-dom";

import app from "./../../firebase";
import { AuthContext } from "./../../Auth";
import { useAuth } from "./../../Auth";
import UserService from "../../services/UserService";

export default function Signup() {
  const { signUp, user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = () => {};

  const newCollection = async () => {
    // await UserService.addCollection(`${user.uid}`, firstname, lastname, email);
    console.log(user.uid);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    // newCollection();

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
          <h4>Create an account</h4>

          <p>
            Already have an account? <Link to="/login">Sign In</Link>
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

        {/* <div class="form-outline mb-4">
          <label class="form-label" for="firstname">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            // value={password}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            class="form-control"
          />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label" for="lastname">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            // value={password}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            class="form-control"
          />
        </div> */}
        <div>
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}
