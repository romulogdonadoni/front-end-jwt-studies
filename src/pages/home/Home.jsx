import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { homeInfo } from "../../../config/server";
import { HomeStyle } from "./styles/HomeStyle";

export function Home() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const getMessage = async () => {
    await homeInfo().then((res) => {
      setMessage(res.data.message);
    }).catch(()=> navigate('/login'));
  };
  useEffect(()=>{
    getMessage()
  },[localStorage.getItem("@AsyncStorage:token"),])
  return (
    <HomeStyle>
      Você está na homepage
      {message}
    </HomeStyle>
  );
}
