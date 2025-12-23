export type Project = {
  id: number;
  title: string;
  slug: string;
  category: string[];
  year: number;
  description: string;
  technologies: string[];
  img: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Ulysse",
    slug: "ulysse",
    category: ["Graphisme"],
    year: 2023,
    description:
      "Projet de design graphique mettant en avant des éléments visuels inspirés de la mythologie grecque.",
    technologies: ["Photoshop"],
    img: "/img/Projets/ulysse.jpg",
  },
  {
    id: 2,
    title: "Agrimap",
    slug: "agrimap",
    category: ["Développement web", "Design UI/UX"],
    year: 2023,
    description:
      "Application web de cartographie agricole offrant des fonctionnalités avancées pour les agriculteurs.",
    technologies: ["Figma", "Html", "Css", "Javascript", "Symfony"],
    img: "/img/Projets/developpement.png",
  },
  {
    id: 3,
    title: "Modélisation 3D",
    slug: "3d",
    category: ["3D"],
    year: 2022,
    description:
      "Projet de modélisation 3D pour la visualisation de produits et d'environnements virtuels.",
    technologies: ["Blender"],
    img: "/img/Projets/3D.png",
  },
  {
    id: 4,
    title: "Portfolio",
    slug: "portfolio",
    category: ["Développement web", "Design UI/UX"],
    year: 2025,
    description:
      "Portfolio personnel pour présenter mes projets et compétences.",
    technologies: ["React", "Typescript", "Vercel"],
    img: "/img/Projets/portfolio.png",
  },
];
