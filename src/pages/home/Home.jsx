import { useState } from "react";
import { homeInfo } from "../../../config/server";
import { HomeStyle } from "./styles/HomeStyle";

export function Home() {
  const [message, setMessage] = useState("");
  const getMessage = async () => {
    await homeInfo().then((res) => {
      setMessage(res.data.message);
    });
  };
  getMessage()
  return (
    <HomeStyle>
      Você está na homepage
      {message}
    </HomeStyle>
  );
}
