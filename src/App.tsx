import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./Styles/global";
import { defaultTheme } from "./Styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
