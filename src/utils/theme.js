// src/utils/theme.js
const theme = {
  breakpoints: ["40em", "52em", "64em", "80em"],
  shadows: {
    primary: "10px 5px 5px black",
  },
  colors: {
    text: "#333333",
    background: "#F5F5F5",
    primary: "#FF4500",
    secondary: "#666666",
    muted: "#999999",
    highlight: "#80D8FF",
    gray: "#CCCCCC",
    accent: "#FF5A5F",
    modes: {
      light: {
        text: "#333333",
        background: "#FFFFFF",
        backgroundCard: "#F5F5F5",
        primary: "#333333",
        secondary: "#800080",
      },
      dark: {
        text: "#D4D4D4",
        background: "#1C1C1C",
        primary: "#3071FF",
        secondary: "#9ACDFF",
      },
    },
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
    extraLarge: "32px",
  },
  margins: {
    small: "8px",
    medium: "16px",
    large: "24px",
    extraLarge: "32px",
  },
  fonts: {
    body: "'Roboto', Arial, sans-serif",
  },
  styles: {
    root: {
      color: "text",
      fontFamily: "body",
      lineHeight: "1.6",
      fontWeight: "normal",
      margin: "0",
      padding: "0",
    },
    a: {
      color: "inherit",
      textDecoration: "none",
    },
  },
};

export default theme;
