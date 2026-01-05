"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ColorTheme = "green" | "blue" | "orange" | "purple";

interface ColorThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const colorThemes = {
  green: {
    light: {
      primary: "#0e4839",
      background: "#fdfce7",
      foreground: "#171717",
      text: "#07221c",
    },
    dark: {
      primary: "#dcd6c0",
      background: "#0e0e0e",
      foreground: "#4a4a4a",
      text: "#4a4a4a",
    },
  },
  blue: {
    light: {
      primary: "#1e3a8a",
      background: "#e7f0fd",
      foreground: "#171717",
      text: "#0c1929",
    },
    dark: {
      primary: "#93c5fd",
      background: "#0e0e0e",
      foreground: "#4a4a4a",
      text: "#4a4a4a",
    },
  },
  orange: {
    light: {
      primary: "#c2410c",
      background: "#fef3e7",
      foreground: "#171717",
      text: "#431407",
    },
    dark: {
      primary: "#fdba74",
      background: "#0e0e0e",
      foreground: "#4a4a4a",
      text: "#4a4a4a",
    },
  },
  purple: {
    light: {
      primary: "#6b21a8",
      background: "#f3e8fd",
      foreground: "#171717",
      text: "#2e0a45",
    },
    dark: {
      primary: "#c4b5fd",
      background: "#0e0e0e",
      foreground: "#4a4a4a",
      text: "#4a4a4a",
    },
  },
};

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined);

export function ColorThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("green");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("color-theme") as ColorTheme | null;
    if (saved && colorThemes[saved]) {
      setColorTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("color-theme", colorTheme);

    const isDark = document.documentElement.classList.contains("dark");
    const mode = isDark ? "dark" : "light";
    const colors = colorThemes[colorTheme][mode];

    document.documentElement.style.setProperty("--primary", colors.primary);
    document.documentElement.style.setProperty("--background", colors.background);
    document.documentElement.style.setProperty("--foreground", colors.foreground);
    document.documentElement.style.setProperty("--text", colors.text);
  }, [colorTheme, mounted]);

  // Observer pour détecter les changements de dark mode
  useEffect(() => {
    if (!mounted) return;

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      const mode = isDark ? "dark" : "light";
      const colors = colorThemes[colorTheme][mode];

      document.documentElement.style.setProperty("--primary", colors.primary);
      document.documentElement.style.setProperty("--background", colors.background);
      document.documentElement.style.setProperty("--foreground", colors.foreground);
      document.documentElement.style.setProperty("--text", colors.text);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [colorTheme, mounted]);

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme() {
  const context = useContext(ColorThemeContext);
  if (!context) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  }
  return context;
}
