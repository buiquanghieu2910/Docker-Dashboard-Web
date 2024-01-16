import axios from "axios";

const HTTP = axios.create({
  // baseURL: process.env.VUE_APP_API_URL,
  baseURL: "http://localhost:3001/api",
  // timeout: 5000, // request timeout
});

export default HTTP;
