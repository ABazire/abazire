import "../../globals.css";
import Image from "next/image";
import Menu from "@/app/components/menu";
import Footer from "@/app/components/footer";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

// Génération des métadonnées
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projet non trouvé | Abazire",
    };
  }

  return {
    title: `${project.title} | Abazire`,
    description: project.description[locale as "fr" | "en"],
  };
}

// Génération des routes statiques
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug, locale } = await params;
  const project = projects.find((p) => p.slug === slug);

  // Si le projet n'existe pas, afficher la page 404
  if (!project) {
    notFound();
  }

  const currentLocale = locale as "fr" | "en";

  return (
    <>
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

          <p>{project.description[currentLocale]}</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
