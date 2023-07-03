// _app.js
import { useEffect, createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const value = {
    theme,
    toggleTheme: () => {
      setTheme((theme) => (theme === "light" ? "dark" : "light"));
    },
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
