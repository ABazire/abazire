"use client";

import Tools from "@/app/components/tools";
import Services from "@/app/components/services";
import Menu from "@/app/components/menu";
import Footer from "@/app/components/footer";
import { useI18n } from "@/locales/client";

export default function Home() {
  const t = useI18n();

  return (
    <>
      <header>
        <Menu />
        <div>
          <h2>ABAZIRE</h2>
          <h1 dangerouslySetInnerHTML={{ __html: t("hero") }} />
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
      <Footer variant="detailed" />
    </>
  );
}
