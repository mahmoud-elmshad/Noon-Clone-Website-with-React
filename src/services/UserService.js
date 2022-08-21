import db from "../firebase";
import { getDoc, updateDoc, doc, setDoc } from "firebase/firestore";

class UserService {
  addCollection = (id, email, password) => {
    setDoc(doc(db, "Users", id), {
      email: email,
      password: password,
    });
  };
  updateUser = (id, firstname, lastname, city, street, mobile) => {
    return updateDoc(doc(db, "Users", id), {
      firstname: firstname,
      lastname: lastname,
      city: city,
      street: street,
      mobile: mobile,
    });
  };
  updateUserAway = (id, firstname, lastname, city, street, mobile) => {
    return updateDoc(doc(db, "Users", id), {
      firstnameaway: firstname,
      lastnameaway: lastname,
      cityaway: city,
      streetaway: street,
      mobileaway: mobile,
    });
  };
  getUser = (id) => {
    return getDoc(doc(db, "Users", id));
  };
}

export default new UserService();
