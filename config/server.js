import axios from "axios";
import { AsyncStorage } from "AsyncStorage";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://app-estudo-back-end.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authLogin = (loginData) => {
  return axiosInstance.post("/auth/login", loginData);
};
export const homeInfo = async () => {
  const token = await AsyncStorage.getItem("token");
  return axiosInstance.get("/homepage", {
    headers: {
      Authorization: token,
    },
  });
};
