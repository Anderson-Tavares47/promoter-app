import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#605BFF",
    secundary: "#ff9f00",
    background: "#f7f7f8",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    large: "24px",
    medium: "16px",
    small: "12px",
  },
};

interface DefaultThemeProps {
  children: React.ReactNode;
}

const DefaultTheme: React.FC<DefaultThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default DefaultTheme;
