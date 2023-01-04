import React from "react";
import { HomePage } from "./pages/homepage/homepage";
import { GlobalStyle } from "./styles/globalStyles";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <HomePage />
    </div>
  );
}
