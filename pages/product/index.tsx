import Logo from "../../public/img/Logo.png";
import { Moon } from "@deemlol/next-icons";
import "../../app/globals.css";

export default function ProductPage() {
  return (
    <>
      <header>
        <nav>
          <img src={Logo.src} alt="Logo Abazire" width={75} height={75} />
          <div>
            <p>EN</p>
            <Moon size={24} color="var(--primary)" />
          </div>
        </nav>
      </header>
      <section className="container">
        <div className="project">
          <img src="../../public/img/ulysse.jpg" alt="" />
        </div>
        <p>zaeazeaeaz</p>
      </section>
    </>
  );
}
