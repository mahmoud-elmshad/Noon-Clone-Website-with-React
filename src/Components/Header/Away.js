import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Auth";
import UserService from "../../services/UserService";

export default function Away() {
  const { user } = useAuth();
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [mobile, setMobile] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const navigate = useNavigate();

  const addInfo = async () => {
    console.log(user.id);
    await UserService.updateUserAway(
      `${user.uid}`,
      firstname,
      lastname,
      city,
      street,
      mobile
    );
  };

  function handleInfo(event) {
    event.preventDefault();
    addInfo();
    navigate("/");
  }

  return (
    <>
      <div className="w-75 mx-auto">
        <form className="di mx-auto my-3" onSubmit={handleInfo}>
          <div>USER INFORMATION</div>
          <div class="form-outline mb-4">
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
          </div>
          <div>LOCATION INFORMATION</div>

          <div className="d-flex justify-content-sm-between">
            <div class="form-outline flex-fill mx-3 my-3">
              <label class="form-label" for="email">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                class="form-control"
              />
            </div>

            <div class="form-outline flex-fill mx-3 my-3">
              <label class="form-label" for="street">
                Street
              </label>
              <input
                type="text"
                id="street"
                name="street"
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
                class="form-control"
              />
            </div>
          </div>
          <div class="form-outline flex-fill mx-3 my-3">
            <label class="form-label" for="mobile">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              class="form-control"
            />
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary btn-block mx-3 my-3"
            >
              SAVE ADDRESS
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
