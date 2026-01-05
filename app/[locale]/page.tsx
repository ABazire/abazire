"use client";

import Tools from "@/app/components/tools";
import Services from "@/app/components/services";
import Menu from "@/app/components/menu";
import Footer from "@/app/components/footer";
import { useI18n } from "@/locales/client";
import { useColorTheme } from "@/app/context/ColorThemeContext";

export default function Home() {
  const t = useI18n();
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <>
      <header>
        <Menu />
        <div>
          <h2>ABAZIRE</h2>
          <h1 dangerouslySetInnerHTML={{ __html: t("hero") }} />
          <div className="theme">
            <span
              className={`green ${colorTheme === "green" ? "active" : ""}`}
              onClick={() => setColorTheme("green")}
            ></span>
            <span
              className={`blue ${colorTheme === "blue" ? "active" : ""}`}
              onClick={() => setColorTheme("blue")}
            ></span>
            <span
              className={`orange ${colorTheme === "orange" ? "active" : ""}`}
              onClick={() => setColorTheme("orange")}
            ></span>
            <span
              className={`purple ${colorTheme === "purple" ? "active" : ""}`}
              onClick={() => setColorTheme("purple")}
            ></span>
          </div>
        </div>
      </header>
      <Tools />
      <Services />
      <Footer variant="detailed" />
    </>
  );
}
