import "../../app/[locale]/globals.css";
import Image from "next/image";
import Menu from "@/app/components/menu";
import GrainEffect from "@/app/components/GrainEffect";
import { projects } from "@/data/projects";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "@/app/components/footer";

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <h1>404 – Projet introuvable</h1>;

  return (
    <>
      <Head>
        <title>Abazire | Travail - {project.title}</title>
        <meta name="description" content={project.description} />
      </Head>
      <div id="grain"></div>
      <GrainEffect />
      <section className="container">
        <Menu />

        <div className="project">
          <Image
            src={project.img}
            alt={project.title}
            width={1920}
            height={600}
          />

          <h1>
            <span>{project.title}</span>
          </h1>

          <div className="project-details">
            <div>
              <span>Catégorie</span>
              <p>{project.category.join(", ")}</p>
            </div>

            <div>
              <span>Année</span>
              <p>{project.year}</p>
            </div>

            <div>
              <span>Technologies</span>
              <p>{project.technologies.join(", ")}</p>
            </div>
          </div>

          <p>{project.description}</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
