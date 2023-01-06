import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { RoutesMain as Routes } from "./routes/routes";

export function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes />
    </div>
  );
}
