// src/utils/theme.js
const theme = {
  breakpoints: ["40em", "52em", "64em", "80em"],
  shadows: {
    primary: "10px 5px 5px black",
  },
  colors: {
    text: "#484848",
    background: "#767676",
    primary: "#fc642d",
    secondary: "#484848",
    muted: "#767676",
    highlight: "#16abff33",
    gray: "#ffffff",
    accent: "#ff5a5f",
    modes: {
      light: {
        text: "#9376E0",
        background: "#F6FFA6",
        primary: "#E893CF",
        secondary: "#F3BCC8",
      },
      dark: {
        text: "#0C134F",
        background: "#D4ADFC",
        primary: "#1D267D",
        secondary: "#5C469C",
      },
    },
  },
  fonts: {
    body: "ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace",
  },
  styles: {
    root: {
      color: "text",
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    a: {
      color: "inherit",
      textDecoration: "none",
    },
  },
};

export default theme;
