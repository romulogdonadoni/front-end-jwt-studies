import axios from "axios";

axios.defaults.baseURL = 'https://app-estudo-back-end.onrender.com/';


export const authLogin = (loginData) => {
  return axios.post("/auth/login", loginData);
};