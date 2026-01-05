"use client";

import { useColorTheme } from "../context/ColorThemeContext";
import { LocaleSelect } from "./LocaleSelect";
import { ThemeToggle } from "./theme-toggle";

function Menu() {
  const { currentLogo } = useColorTheme();

  return (
    <nav className="menu">
      <a href="/">
        <img src={currentLogo} alt="Logo Abazire" width={75} height={75} />
      </a>
      <div>
        <LocaleSelect />
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Menu;
