import { useForm } from "react-hook-form";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginStyle } from "./styles/LoginStyle";
import { authLogin } from "../../../config/server";
import { AsyncStorage } from "AsyncStorage";

export function Login() {
  const { register, handleSubmit } = useForm();
  const navigateTo = useNavigate();
  const handleFormSubmit = (data) => {
    authLogin(data)
      .then(async (res) => {
        await AsyncStorage.setItem("token", res.data.token);
        console.log(res.data.token);
        navigateTo("/home");
      })
      .catch((res) => {
        setErrorMessage(res.response.data.msg);
        console.log(res.response.data.msg);
      });
  };
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <LoginStyle>
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label htmlFor="username">Email</label>
        <input id="username" type="email" {...register("username")} />
        <label htmlFor="password">Senha</label>
        <input id="password" type="password" {...register("password")} />
        <button type="submit">Enviar</button>
      </form>
      <p className="errorMessage">{errorMessage}</p>
      <NavLink to={"/register"}>Cadastrar-se</NavLink>
    </LoginStyle>
  );
}
