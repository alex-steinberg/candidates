import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const App: React.FC = () => {
  const theme = {
    color: {
      primary: "#131f4a",
      secondary: "#2f96f4",
      secondaryLight: "#EEF3F6",
      muted: "#7C7C80",
      light: "#F9FAFB",
      white: "#FFFFFF",
      success: "#34B96F",
      mystic: "#E4EBEF",
      gray100: "#A6ACAF",
      link: "#5EA5EE",
    },
    spacing: {
      1: "0.25rem",
      2: "0.5rem",
      3: "1rem",
      4: "2rem",
      5: "4rem",
    },
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
