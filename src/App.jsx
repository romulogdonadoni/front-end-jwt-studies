import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
import { AppStyle } from "./AppStyle";

export function App() {
  return (
    <AppStyle>
      <GlobalStyle/>
      <Outlet />
    </AppStyle>
  );
}
