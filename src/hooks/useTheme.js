import { useCallback, useMemo, useState } from "react";
import { ThemeContextProvider } from "../contexts/ThemeContext";

/**
 *
 * @param {*} defaultTheme "light" | "dark"
 * @returns ThemeProvider with state { darkMode, lightMode, toggleTheme }
 */
const useTheme = (defaultTheme = "light") => {
  const [theme, setTheme] = useState(defaultTheme);
  const darkMode = theme === "dark";
  const lightMode = theme === "light";

  /**
   * Toggling between light and dark mode
   */
  const toggleTheme = useCallback(
    () => setTheme(theme === "light" ? "dark" : "light"),
    [theme]
  );

  const themeState = useMemo(
    () => ({
      darkMode,
      lightMode,
      toggleTheme,
    }),
    [darkMode, lightMode, toggleTheme]
  );

  const ThemeProvider = useMemo(
    () =>
      ({ children }) => {
        return (
          <ThemeContextProvider value={themeState}>
            {children}
          </ThemeContextProvider>
        );
      },
    [themeState]
  );

  return ThemeProvider;
};

export default useTheme;
