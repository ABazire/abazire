"use client";

import Logo from "../../public/img/Logo.png";
import { LocaleSelect } from "./LocaleSelect";
import { ThemeToggle } from "./theme-toggle";

function Menu() {
  return (
    <nav className="menu">
      <a href="/">
        <img src={Logo.src} alt="Logo Abazire" width={75} height={75} />
      </a>
      <div>
        <LocaleSelect />
        <ThemeToggle />
      </div>
    </nav>
  );
}

Menu.propTypes = {};

export default Menu;
