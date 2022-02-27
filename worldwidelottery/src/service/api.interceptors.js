import axios from "axios";
const BASE_URL = "https://randomuser.me/api?";
let api = axios.create({
  baseURL: BASE_URL,
  "content-type": "application/json",

  Accept: "application/json",
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default api;
