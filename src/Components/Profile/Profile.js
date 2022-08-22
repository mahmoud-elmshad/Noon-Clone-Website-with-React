import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import { useAuth } from "./../../Auth";
import { async } from "@firebase/util";

export default function Profile() {
  const { logOut, user, logIn, signUp, forgetPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [mobile, setMobile] = useState("");
  const [newfirstname, setNewFirstName] = useState("");

  const [newlastname, setNewLastName] = useState("");
  useEffect(() => {
    userData();
    console.log(user);
  }, []);
  const userData = async () => {
    const docSnap = await UserService.getUser(`${user.uid}`);
    console.log(user.uid);
    console.log(docSnap.exists());
    if (docSnap.exists()) {
      console.log(docSnap.data());
      setFirstName(docSnap.data().firstname);
      setLastName(docSnap.data().lastname);
      setNewFirstName(docSnap.data().firstname);
      setNewLastName(docSnap.data().lastname);
      setPassword(docSnap.data().password);
      console.log(password);
      console.log(lastname);
      setEmail(docSnap.data().email);
      setCity(docSnap.data().city);
      setStreet(docSnap.data().street);
      setMobile(docSnap.data().mobile);
    }
  };
  const editInfo = async () => {
    console.log(user.id);
    await UserService.updateUser(
      `${user.uid}`,
      newfirstname,
      newlastname,
      city,
      street,
      mobile
    );
  };
  function handleEdit() {
    editInfo();
  }
  async function handlePasswordChange() {
    await forgetPassword(email)
      .then((data) => {
        console.log("success");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <>
      <div className="mt-5">
        <div className="fs-3 ms-5 fw-bold">Profile</div>
        <div className="ms-5">
          Manage your details, view your tier status and change your password
        </div>
        <div className="mt-5">
          <div className="fs-5 ms-5 my-3">General Info</div>
          <div className="d-flex">
            <div
              class="form-outline mb-2 mx-5"
              style={{ maxWidth: "300px", minWidth: "300px" }}
            >
              <label class="form-label" for="firstname">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={newfirstname}
                class="form-control"
                onChange={(e) => {
                  setNewFirstName(e.target.value);
                }}
              />
            </div>

            <div
              class="form-outline mb-4"
              style={{ maxWidth: "300px", minWidth: "300px" }}
            >
              <label class="form-label" for="lastname">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={newlastname}
                class="form-control"
                onChange={(e) => {
                  setNewLastName(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="mx-5">
          <button
            className="btn btn-primary "
            onClick={handleEdit}
            disabled={newfirstname == firstname && newlastname == lastname}
          >
            EDIT
          </button>
        </div>
        <div className="mt-5">
          <div className="fs-5 mx-5 my-3">General Info</div>
          <div className="d-flex ">
            <div
              class="form-outline mb-2 mx-5 w-25"
              style={{ maxWidth: "300px", minWidth: "300px" }}
            >
              <label class="form-label" for="firstname">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                className="form-control"
              />
            </div>

            <div
              class="form-outline mb-4"
              style={{ maxWidth: "300px", minWidth: "300px" }}
            >
              <label class="form-label" for="lastname">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                class="form-control"
              />
            </div>
          </div>
        </div>
        <div className="ms-5">
          <button className="btn btn-primary " onClick={handlePasswordChange}>
            CHANGE PASSWORD
          </button>
        </div>
      </div>
    </>
  );
}
