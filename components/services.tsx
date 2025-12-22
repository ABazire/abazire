import { s } from "framer-motion/client";
import Link from "next/link";

function services() {
  const services = [
    {
      id: 1,
      title: "Développement web",
      description:
        "Création de sites web responsives et performants en utilisant les dernières technologies front-end telles que React, Next.js et Tailwind CSS.",
      project: {
        title: "Agrimap",
        slug: "agrimap",
        img: "/img/Projets/developpement.png",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci expedita perspiciatis pariatur.",
      },
    },
    {
      id: 2,
      title: "Design UI/UX",
      description:
        "Création de maquettes et prototypes pour des applications web et mobiles, en mettant l'accent sur l'expérience utilisateur et l'interface utilisateur.",
      project: {
        title: "Agrimap",
        slug: "agrimap",

        img: "/img/Projets/developpement.png",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci expedita perspiciatis pariatur.",
      },
    },
    {
      id: 3,
      title: "Graphisme",
      description:
        "Conception de visuels attrayants pour le web et les réseaux sociaux, y compris des bannières, des logos et des illustrations personnalisées.",
      project: {
        title: "Ulysse",
        slug: "ulysse",
        img: "/img/Projets/ulysse.jpg",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci expedita perspiciatis pariatur.",
      },
    },
    {
      id: 4,
      title: "3d",
      description:
        "Modélisation et rendu 3D pour des projets variés, allant de la visualisation de produits à la création d'environnements virtuels.",
      project: {
        title: "Projet",
        slug: "3d",
        img: "/img/Projets/3D.png",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci expedita perspiciatis pariatur.",
      },
    },
  ];

  return (
    <>
      <section className="container">
        <h2>Services</h2>
        <div>
          {services.map((service) => (
            <div className="service" key={service.id}>
              <h3>{service.id}</h3>
              <div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <Link href="/product">Voir le produit</Link>
              </div>
              <div className="service-project">
                {service.project.img && (
                  <div>
                    <img
                      src={service.project.img}
                      alt={service.project.title}
                    />
                  </div>
                )}
                <span>
                  {service.id} | {service.title}
                </span>
                <h3>{service.project.title}</h3>
                <p>{service.project.description}</p>
                <a href={`/product/${service.project.slug}`}>Voir le projet</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default services;
