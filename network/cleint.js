import axios from "axios";
import { loadString } from "../utils/storage";
const baseURL = "https://tqlxsdwr-44311.asse.devtunnels.ms";
const client = axios.create({
  baseURL,
});
// const token =  loadString("accessToken");
// cleint.defaults.headers["Authorization"]=`Bearer ${token}`
export default client;