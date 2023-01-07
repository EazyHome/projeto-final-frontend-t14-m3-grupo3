import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-eazyhome-t14.onrender.com",
  timeout: 30000,
});

export default api;
