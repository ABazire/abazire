import Logo from "../../public/img/Logo.png";
import { Moon } from "@deemlol/next-icons";
import { LocaleSelect } from "./LocaleSelect";

function Menu() {
  return (
    <nav className="menu">
      <a href="/">
        <img src={Logo.src} alt="Logo Abazire" width={75} height={75} />
      </a>
      <div>
        <LocaleSelect />
        <Moon size={24} color="var(--primary)" />
      </div>
    </nav>
  );
}

Menu.propTypes = {};

export default Menu;
