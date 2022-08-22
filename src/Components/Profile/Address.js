import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import { useAuth } from "./../../Auth";

export default function Address() {
  const { logOut, user, logIn, signUp } = useAuth();

  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [mobile, setMobile] = useState("");
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
      setPassword(docSnap.data().password);
      console.log(password);
      console.log(lastname);
      setEmail(docSnap.data().email);
      setCity(docSnap.data().city);
      setStreet(docSnap.data().street);
      setMobile(docSnap.data().mobile);
    }
  };
  return (
    <>
      <div>
        <div className="fs-3 fw-bold mx-5 mt-5">Addresses</div>
        <div className="mx-5">
          Manage your saved addresses for fast and easy checkout across our
          marketplaces
        </div>
        <div className="fs-3 mx-5 my-5">Default address</div>
        <div className="row mx-5 rounded" style={{ backgroundColor: "white" }}>
          <div className="col-sm-1 col-3 fs-6 pt-3">
            <div>Name</div>
            <br />
            <div>Address</div>
            <br />
            <div>Phone</div>
            <br />
          </div>
          <div className="col-sm-10 col-9 fs-6 pt-3">
            <div>
              {firstname} {lastname}
            </div>
            <br />
            <div>
              {city},{street}
            </div>
            <br />
            <div>{mobile}</div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
