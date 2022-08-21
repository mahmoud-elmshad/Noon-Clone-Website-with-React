import axios from "axios";
import db from "../../firebase";
import { collection } from "firebase/firestore";

const prdCollection = collection(db, "Mobile");
export const axiosInstance = axios.create({
  baseURL: `${prdCollection}`,
});
