import { NavLink, Outlet } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
import { AppStyle } from "./AppStyle";

export function App() {
  return (
    <AppStyle>
      <GlobalStyle/>
      <NavLink to={'/login'}>Login</NavLink>
      <NavLink to={'/register'}>Register</NavLink>
      <Outlet />
    </AppStyle>
  );
}
