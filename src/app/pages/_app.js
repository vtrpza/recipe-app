// pages/_app.js
import { useEffect } from "react";
import { ThemeUIProvider, ColorModeProvider } from "theme-ui";
import theme from "./../utils/theme";
import { Inter } from "next/font/google";
import "./../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function App({ Component, pageProps }) {
  useEffect(() => {
    inter.load();
  }, []);

  return (
    <ThemeUIProvider theme={theme}>
      <ColorModeProvider>
        <Component {...pageProps} />
        {inter.getStyleElement()}
      </ColorModeProvider>
    </ThemeUIProvider>
  );
}