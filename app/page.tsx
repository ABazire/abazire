import Image from "next/image";
import Logo from "../public/img/Logo.png";
import { Moon } from "@deemlol/next-icons";
import Tools from "@/components/tools";
import Services from "@/components/services";
import Footer from "@/components/footer";

export default function Home() {
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
        <div>
          <h2>ABAZIRE</h2>
          <h1>
            Développeur web <span>front-end</span> <br />& ux/ui designer
          </h1>
          <div className="theme">
            <span className="green"></span>
            <span className="blue"></span>
            <span className="orange"></span>
            <span className="purple"></span>
          </div>
        </div>
      </header>
      <Tools />
      <Services />
      <Footer />
    </>
  );
}
