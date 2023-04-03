import axios from "axios";
import { AsyncStorage } from "AsyncStorage";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3333",
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
