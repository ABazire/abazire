import Tools from "@/components/tools";
import Services from "@/components/services";
import Menu from "@/components/menu";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <header>
        <Menu />
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
      <Footer variant="detailed" />
    </>
  );
}
