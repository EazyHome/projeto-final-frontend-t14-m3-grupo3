import React from "react";
import { HomePage } from "./pages/homepage/homepage";
import { GlobalStyle } from "./styles/globalStyles";
import { RoutesMain as Routes } from "./routes/routes";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}
