import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { authLogin } from "../../../config/server";
import { RegisterStyle } from "./styles/Register";

export function Register() {
  const { register, handleSubmit } = useForm();
  const handleFormSubmit = (data) => {
    authLogin(data)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
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
