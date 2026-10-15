import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    // Always default to light mode on fresh load
    const saved = sessionStorage.getItem("portfolio-theme") as Theme | null;
    const isDark = saved === "dark";
    const activeTheme: Theme = isDark ? "dark" : "light";
    setThemeState(activeTheme);
    if (activeTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Clean up any legacy localStorage dark setting so reloads/fresh loads start in light mode
    if (localStorage.getItem("portfolio-theme") === "dark") {
      localStorage.removeItem("portfolio-theme");
    }
  }, []);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    sessionStorage.setItem("portfolio-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    return {
      theme: "light" as Theme,
      toggleTheme: () => {
        const isDark = document.documentElement.classList.contains("dark");
        if (isDark) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("portfolio-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("portfolio-theme", "dark");
        }
      },
      setTheme: () => {},
    };
  }
  return ctx;
}
