import { useForm } from "react-hook-form";
import { authLogin } from "../config/server";
import { useQuery } from "react-query";
import { AppStyle } from "./App.styles";

export function App() {
  const { register, handleSubmit } = useForm();
  const handleFormSubmit = (data) => {
    authLogin(data).then((res) => {
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
    });
  };
  return (
    <AppStyle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label htmlFor="username">Email</label>
        <input id="username" type="email" {...register("username")} />
        <label htmlFor="password">Senha</label>
        <input id="password" type="password" {...register("password")} />
        <button type="submit">Enviar</button>
      </form>
    </AppStyle>
  );
}
