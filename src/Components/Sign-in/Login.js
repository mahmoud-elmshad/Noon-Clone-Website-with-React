import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./../../Auth";
import UserService from "../../services/UserService";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function Login() {
  const { logIn, user, forgetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = () => {};
  const newCollection = async () => {
    await UserService.addCollection(`${user.uid}`, email, password);
    console.log(user.uid);
  };

  const [profilename, setProfileName] = useState("");

  const userData = async () => {
    const docSnap = await UserService.getUser(`${user.uid}`);
    console.log(user.uid);
    console.log(docSnap.exists());
    if (docSnap.exists()) {
      console.log(docSnap.data());
      setProfileName(docSnap.data().email);
    }
  };

  useEffect(() => {
    userData();
    console.log(profilename);
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    newCollection();
    try {
      await logIn(email, password);
      console.log(profilename);
      if (profilename) {
        navigate("/");
      } else {
        navigate("/info");
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const [formerror, setFormError] = useState({
    useremailerror: "",
    userpassworderror: "",
  });
  const [emailtouched, setEmailTouched] = useState(false);
  const [passwordtouched, setPasswordTouched] = useState(false);

  const [inputpassword, setInputPassword] = useState("password");
  function togglepassword() {
    if (inputpassword === "password") {
      setInputPassword("text");
      console.log(password);
    } else if (inputpassword === "text") {
      setInputPassword("password");
    }
  }
  async function handlePasswordChange() {
    await forgetPassword(email)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <div className="w-100 vh-100">
        <form
          className="w-25 mx-auto my-5"
          onSubmit={handleLogin}
          style={{ maxWidth: "300px", minWidth: "300px" }}
        >
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
              <small className="text-danger">
                {formerror.userpassworderror}
              </small>
            ) : (
              <></>
            )}
          </div>

          <div>
            <button
              type="submit"
              class="btn btn-primary btn-block mb-4"
              disabled={
                formerror.useremailerror != null ||
                formerror.userpassworderror != null
              }
            >
              Sign in
            </button>
          </div>

          <div class="col">
            <a href="#!" onClick={handlePasswordChange}>
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
