import { useEffect, createContext, useState, useContext } from "react";
import theme from "../utils/theme";

export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function App({ Component, pageProps }) {
  const [themeMode, setThemeMode] = useState("light");

  const value = {
    theme: {
      ...theme,
      colors: theme.colors.modes[themeMode],
    },
    toggleTheme: () => {
      setThemeMode((themeMode) => (themeMode === "light" ? "dark" : "light"));
    },
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setThemeMode(localTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const appStyle = {
    fontFamily: "'Lato', sans-serif",
  };

  return (
    <ThemeContext.Provider value={value}>
      <div style={appStyle}>
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
}
