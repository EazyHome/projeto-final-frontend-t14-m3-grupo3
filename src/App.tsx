import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { RoutesMain as Routes } from "./routes/routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}
