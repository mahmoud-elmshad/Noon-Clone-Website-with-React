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

  const [formerror, setFormError] = useState({
    userfirstnameerror: "",
    userlastnameerror: "",
    usercityerror: "",
    userstreeterror: "",
    usermobileerror: "",
  });
  const [firstnametouched, setFirstNameTouched] = useState(false);
  const [lastnametouched, setLastNameTouched] = useState(false);
  const [citytouched, setCityTouched] = useState(false);
  const [streettouched, setStreetTouched] = useState(false);
  const [mobiletouched, setMobileTouched] = useState(false);
  return (
    <>
      <div className=" w-75 mx-auto vh-100">
        <form className=" mx-auto my-3" onSubmit={handleInfo}>
          <div className="fw-bold">USER INFORMATION</div>
          <div class="form-outline my-4 w-25">
            <label class="form-label" for="firstname">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              onBlur={() => setFirstNameTouched(true)}
              onChange={(e) => {
                setFirstName(e.target.value);
                setFormError({
                  ...formerror,
                  userfirstnameerror:
                    e.target.value.length == 0
                      ? "Required"
                      : e.target.value.length < 3
                      ? "Name canot be less than 3 characters"
                      : null,
                });
              }}
              className={`form-control ${
                formerror.userfirstnameerror && firstnametouched
                  ? "is-invalid shadow-none"
                  : ""
              }`}
            />
            {firstnametouched ? (
              <small className="text-danger">
                {formerror.userfirstnameerror}
              </small>
            ) : (
              <></>
            )}
          </div>

          <div class="form-outline  w-25 w-sm-25 mb-4">
            <label class="form-label" for="lastname">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              onBlur={() => setLastNameTouched(true)}
              onChange={(e) => {
                setLastName(e.target.value);
                setFormError({
                  ...formerror,
                  userlastnameerror:
                    e.target.value.length == 0
                      ? "Required"
                      : e.target.value.length < 3
                      ? "Name canot be less than 3 characters"
                      : null,
                });
              }}
              className={`form-control ${
                formerror.userlastnameerror && lastnametouched
                  ? "is-invalid shadow-none"
                  : ""
              }`}
            />
            {lastnametouched ? (
              <small className="text-danger">
                {formerror.userlastnameerror}
              </small>
            ) : (
              <></>
            )}
          </div>

          <div className="fw-bold">LOCATION INFORMATION</div>

          <div className="d-flex gap-5 justify-content-sm-between w-75">
            <div class="form-outline flex-fill  w-25 my-3">
              <label class="form-label" for="email">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onBlur={() => setCityTouched(true)}
                onChange={(e) => {
                  setCity(e.target.value);
                  setFormError({
                    ...formerror,
                    usercityerror:
                      e.target.value.length == 0
                        ? "Required"
                        : e.target.value.length < 3
                        ? "City canot be less than 3 characters"
                        : null,
                  });
                }}
                className={`form-control ${
                  formerror.usercityerror && citytouched
                    ? "is-invalid shadow-none"
                    : ""
                }`}
              />
              {citytouched ? (
                <small className="text-danger">{formerror.usercityerror}</small>
              ) : (
                <></>
              )}
            </div>

            <div class="form-outline flex-fill  w-25  my-3">
              <label class="form-label" for="street">
                Street
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={street}
                onBlur={() => setStreetTouched(true)}
                onChange={(e) => {
                  setStreet(e.target.value);
                  setFormError({
                    ...formerror,
                    userstreeterror:
                      e.target.value.length == 0
                        ? "Required"
                        : e.target.value.length < 3
                        ? "street canot be less than 3 characters"
                        : null,
                  });
                }}
                className={`form-control ${
                  formerror.userstreeterror && streettouched
                    ? "is-invalid shadow-none"
                    : ""
                }`}
              />
              {streettouched ? (
                <small className="text-danger">
                  {formerror.userstreeterror}
                </small>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div class="form-outline flex-fill  w-25   my-3">
            <label class="form-label" for="mobile">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={mobile}
              onBlur={() => setMobileTouched(true)}
              onChange={(e) => {
                setMobile(e.target.value);
                let regex = new RegExp("^01[0-2,5]{1}[0-9]{8}$");

                setFormError({
                  ...formerror,
                  usermobileerror:
                    e.target.value.length == 0
                      ? "Required"
                      : !regex.test(e.target.value)
                      ? "Example '01XX XXX XXXX'"
                      : null,
                });
              }}
              className={`form-control ${
                formerror.usermobileerror && mobiletouched
                  ? "is-invalid shadow-none"
                  : ""
              }`}
            />
            {mobiletouched ? (
              <small className="text-danger">{formerror.usermobileerror}</small>
            ) : (
              <></>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary btn-block my-3"
              disabled={
                formerror.userfirstnameerror != null ||
                formerror.userlastnameerror != null ||
                formerror.usercityerror != null ||
                formerror.userstreeterror != null ||
                formerror.usermobileerror != null
              }
            >
              SAVE ADDRESS
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
