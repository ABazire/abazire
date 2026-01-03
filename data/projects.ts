export type Project = {
  id: number;
  title: string;
  slug: string;
  category: string[];
  year: number;
  description: {
    en: string;
    fr: string;
  };
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
    description: {
      fr: "Projet de design graphique mettant en avant des éléments visuels inspirés de la mythologie grecque.",
      en: "Graphic design project highlighting visual elements inspired by Greek mythology.",
    },
    technologies: ["Photoshop"],
    img: "/img/Projets/ulysse.jpg",
  },
  {
    id: 2,
    title: "Agrimap",
    slug: "agrimap",
    category: ["Design UI/UX", "Développement web"],
    year: 2023,
    description: {
      fr: "Application web de cartographie agricole offrant des fonctionnalités avancées pour les agriculteurs.",
      en: "Agricultural mapping web application offering advanced features for farmers.",
    },
    technologies: ["Figma", "Html", "Css", "Javascript", "Symfony"],
    img: "/img/Projets/developpement.png",
  },
  {
    id: 3,
    title: "Modélisation 3D",
    slug: "3d",
    category: ["3D"],
    year: 2022,
    description: {
      fr: "Projet de modélisation 3D pour la visualisation de produits et d'environnements virtuels.",
      en: "3D modeling project for product visualization and virtual environments.",
    },
    technologies: ["Blender"],
    img: "/img/Projets/3D.png",
  },
  {
    id: 4,
    title: "Portfolio",
    slug: "portfolio",
    category: ["Développement web", "Design UI/UX"],
    year: 2025,
    description: {
      fr: "Portfolio personnel pour présenter mes projets et compétences.",
      en: "Personal portfolio to showcase my projects and skills.",
    },
    technologies: ["React", "Typescript", "Vercel"],
    img: "/img/Projets/portfolio.png",
  },
];
