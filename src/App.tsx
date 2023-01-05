import React from "react";
import { RegisterPage } from "./pages/register/register";
import { GlobalStyle } from "./styles/globalStyles";

export function App() {
  return (
    <div>
      <RegisterPage></RegisterPage>
      <GlobalStyle />
    </div>
  );
}
