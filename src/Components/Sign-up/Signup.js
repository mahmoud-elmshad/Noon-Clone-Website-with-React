import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect, useNavigate, Link } from "react-router-dom";

import app from "./../../firebase";
import { AuthContext } from "./../../Auth";
import { useAuth } from "./../../Auth";
import UserService from "../../services/UserService";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function Signup() {
  const { signUp, user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formerror, setFormError] = useState({
    useremailerror: "",
    userpassworderror: "",
  });
  const [emailtouched, setEmailTouched] = useState(false);
  const [passwordtouched, setPasswordTouched] = useState(false);
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
      alert(error);
    }
  };
  const [inputpassword, setInputPassword] = useState("password");
  function togglepassword() {
    if (inputpassword === "password") {
      setInputPassword("text");
      console.log(password);
    } else if (inputpassword === "text") {
      setInputPassword("password");
    }
  }
  return (
    <>
      <form
        className="w-25 mx-auto my-5 vh-100"
        onSubmit={handleSignup}
        style={{ maxWidth: "300px", minWidth: "300px" }}
      >
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
            value={email}
            onBlur={() => setEmailTouched(true)}
            onChange={(e) => {
              setEmail(e.target.value);
              let regex = new RegExp(
                "^[a-zA-Z0-9]+@([a-zA-Z]{3,}).([A-Za-z]{2,3})$"
              );

              setFormError({
                ...formerror,
                useremailerror:
                  e.target.value.length == 0
                    ? "Required"
                    : !regex.test(e.target.value)
                    ? "Example 'test@test.com'"
                    : null,
              });
              console.log(formerror.useremailerror);
            }}
            className={`form-control ${
              formerror.useremailerror && emailtouched
                ? "is-invalid shadow-none"
                : ""
            }`}
          />
          {emailtouched ? (
            <small className="text-danger">{formerror.useremailerror}</small>
          ) : (
            <></>
          )}
        </div>

        <div class="form-outline mb-4">
          <label class="form-label" for="password">
            Password
          </label>
          <div className=" input-group">
            <input
              type={inputpassword}
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setFormError({
                  ...formerror,
                  userpassworderror:
                    e.target.value.length == 0
                      ? "Required"
                      : e.target.value.length < 8
                      ? "Password canot be less than 8 characters"
                      : null,
                });
                console.log(formerror.userpassworderror);
              }}
              onBlur={() => setPasswordTouched(true)}
              className={`form-control ${
                formerror.userpassworderror && passwordtouched
                  ? "is-invalid shadow-none"
                  : ""
              }`}
            />
            <div className="input-group-text">
              {inputpassword === "password" ? (
                <AiFillEyeInvisible onClick={togglepassword} />
              ) : (
                <AiFillEye onClick={togglepassword} />
              )}
            </div>
          </div>
          {passwordtouched ? (
            <small className="text-danger">{formerror.userpassworderror}</small>
          ) : (
            <></>
          )}
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
          <button
            type="submit"
            class="btn btn-primary btn-block mb-4"
            disabled={
              formerror.useremailerror != null ||
              formerror.userpassworderror != null
            }
          >
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}
