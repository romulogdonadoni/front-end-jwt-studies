import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { authRegister } from "../../../config/server";
import { RegisterStyle } from "./styles/Register";

export function Register() {
  const { register, handleSubmit } = useForm();
  const navigateTo = useNavigate();
  const handleFormSubmit = (data) => {
    authRegister(data)
      .then(async (res) => {
        await AsyncStorage.setItem("token", res.data.token);
        console.log(res.data.token);
        navigateTo("/login");
      })
      .catch((res) => {
        setErrorMessage(res.response.data.msg);
        console.log(res.response.data.msg);
      });
  };
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <RegisterStyle>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label htmlFor="username">Email</label>
        <input id="username" type="email" {...register("username")} />
        <label htmlFor="password">Senha</label>
        <input id="password" type="password" {...register("password")} />
        <button type="submit">Enviar</button>
      </form>
      <p className="errorMessage">{errorMessage}</p>
      <NavLink to={"/login"}>Logar-se</NavLink>
    </RegisterStyle>
  );
}
