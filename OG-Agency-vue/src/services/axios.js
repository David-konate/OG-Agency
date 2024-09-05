// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Local server URL
  // baseURL: "https://www.og-agency-api.david-konate.fr/api",
  // timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    Accept: "application/json",
  },
});

export default instance;
