import axios from "axios";

const axioxSpring = axios.create({
  baseURL: `${process.env.REACT_APP_SPRING}`,
  withCredentials: true,
  mode: "no-cors",
  credentials: "same-origin",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

axioxSpring.interceptors.request.use(
  (config) => {
    const loginStore = JSON.parse(sessionStorage.getItem("LoginStore"));
    const token = loginStore?.state?.login?.jwt_token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default axioxSpring;
