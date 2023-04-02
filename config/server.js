import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3333/';


export const authLogin = (loginData) => {
  return axios.post("/auth/login", loginData);
};