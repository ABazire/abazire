import Logo from "../public/img/Logo.png";
import { Moon } from "@deemlol/next-icons";

function Menu() {
  return (
    <nav className="menu">
      <img src={Logo.src} alt="Logo Abazire" width={75} height={75} />
      <div>
        <p>EN</p>
        <Moon size={24} color="var(--primary)" />
      </div>
    </nav>
  );
}

Menu.propTypes = {};

export default Menu;
