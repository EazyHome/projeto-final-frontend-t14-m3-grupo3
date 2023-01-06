import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-eazyhome-t14.onrender.com",
  timeout: 10000,
});
