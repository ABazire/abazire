"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type ColorTheme = "green" | "blue" | "orange" | "purple";

interface ColorThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
  currentLogo: string;
}

const colorThemes = {
  green: {
    light: {
      primary: "#0e4839",
      background: "#fdfce7",
      foreground: "#171717",
      text: "#07221c",
      logo: "/img/logo/logo.png",
    },
    dark: {
      primary: "#dcd6c0",
      background: "#0e0e0e",
      foreground: "#4a4a4a",
      text: "#4a4a4a",
      logo: "/img/logo/logo-green-dark.png",
    },
  },
  blue: {
    light: {
      primary: "#1e3a8a",
      background: "#e7f0fd",
      foreground: "#171717",
      text: "#0c1929",
      logo: "/img/logo/logo-blue-light.png",
    },
    dark: {
      primary: "#93c5fd",
      background: "#0e0e0e",
      foreground: "#4a4a4a",
      text: "#4a4a4a",
      logo: "/img/logo/logo-blue-dark.png",
    },
  },
  orange: {
    light: {
      primary: "#c2410c",
      background: "#fef3e7",
      foreground: "#171717",
      text: "#431407",
      logo: "/img/logo/logo-orange-light.png",
    },
    dark: {
      primary: "#fdba74",
      background: "#0e0e0e",
      foreground: "#4a4a4a",
      text: "#4a4a4a",
      logo: "/img/logo/logo-orange-dark.png",
    },
  },
  purple: {
    light: {
      primary: "#6b21a8",
      background: "#f3e8fd",
      foreground: "#171717",
      text: "#2e0a45",
      logo: "/img/logo/logo-purple-light.png",
    },
    dark: {
      primary: "#c4b5fd",
      background: "#0e0e0e",
      foreground: "#4a4a4a",
      text: "#4a4a4a",
      logo: "/img/logo/logo-purple-dark.png",
    },
  },
};

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(
  undefined
);

export function ColorThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("green");
  const [mounted, setMounted] = useState(false);
  const [currentLogo, setCurrentLogo] = useState<string>(
    "/img/logo-green-light.png"
  );

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
    document.documentElement.style.setProperty(
      "--background",
      colors.background
    );
    document.documentElement.style.setProperty(
      "--foreground",
      colors.foreground
    );
    document.documentElement.style.setProperty("--text", colors.text);

    // Mettre à jour le logo
    setCurrentLogo(colors.logo);
  }, [colorTheme, mounted]);

  // Observer pour détecter les changements de dark mode
  useEffect(() => {
    if (!mounted) return;

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      const mode = isDark ? "dark" : "light";
      const colors = colorThemes[colorTheme][mode];

      document.documentElement.style.setProperty("--primary", colors.primary);
      document.documentElement.style.setProperty(
        "--background",
        colors.background
      );
      document.documentElement.style.setProperty(
        "--foreground",
        colors.foreground
      );
      document.documentElement.style.setProperty("--text", colors.text);

      // Mettre à jour le logo lors du changement de mode
      setCurrentLogo(colors.logo);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [colorTheme, mounted]);

  return (
    <ColorThemeContext.Provider
      value={{ colorTheme, setColorTheme, currentLogo }}
    >
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
