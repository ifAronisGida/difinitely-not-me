import { useContext, useState, createContext, ReactNode } from "react";

//create context type
type themeContextType = {
  theme: string;
  setDark: () => void;
  setLight: () => void;
  toggle: () => void;
}

//create conext default values
const themeContextDefaultValues: themeContextType = {
  theme: "",
  setDark: () => {},
  setLight: () => {},
  toggle: () => {},
};

//create context
const ThemeContext = createContext<themeContextType>(themeContextDefaultValues);

export function useTheme() {
 return useContext(ThemeContext);
}
  
type Props = {
  children: ReactNode;
}

export function ThemeProvider({ children } : Props) {
  const [theme, setTheme] = useState<string>("");

  const setDark = () => {
    setTheme("dark");
  }

  const setLight = () => {
    setTheme("light");
  }

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const value = {
    theme,
    setDark,
    setLight,
    toggle
  }

  return(
  <>
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  </>
  )
}