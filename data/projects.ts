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
  abstract: {
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
      fr: "Projet academique de montage photo réalisé sur photoshop, utilisation de plusieurs éléments afin de réaliser le montage à l'aide de masque, de filte, détourage, ombrage, etc. L'objectif était de créer une scene visuelle à partir d'une statue grecque.",
      en: "Academic photo montage project carried out on Photoshop, using several elements to create the montage with masks, filters, cropping, shading, etc. The objective was to create a visual scene from a Greek statue.",
    },
    abstract: {
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
      fr: "Application web de cartographie et de vente en circuit court de produits agricoles. Le but de ce projet académique était de concevoir une webapp permettant aux agriculteurs/producteurs locaux de vendre leurs produits directement aux consommateurs via une plateforme en ligne ou en click & collect via une carte interactive réferencent l'emplacement des producteurs. Ce projet a été pensé et conçu dans son intégralité en passant par plusieurs étapes : réalisation d'un cahier des charges; étude de marché, étude de viabilité du projet, étude de la concurrence, définition d'un mvp, le modéle economique, etc. Une fois l'analyse du projet j'ai réalisé la phase de conception en élaborant une charte graphique, création d'un logo, création des maquettes sur figma responsives. Pour finir j'ai développé la webapp en utilisant les technologies front-end Html, Css et Javascript ainsi que le framework symfony pour le back-end.",
      en: "Web application for mapping and short-circuit sales of agricultural products. The goal of this academic project was to design a web app allowing local farmers/producers to sell their products directly to consumers via an online platform or click & collect via an interactive map referencing the location of producers. This project was fully conceived and designed through several stages: drafting a specifications document; market study, project viability study, competition study, definition of an MVP, economic model, etc. Once the project analysis was completed, I carried out the design phase by developing a graphic charter, creating a logo, and designing responsive mockups on Figma. Finally, I developed the web app using front-end technologies Html, Css, and Javascript as well as the Symfony framework for the back-end.",
    },
    abstract: {
      fr: "Application web de cartographie et de vente en circuit court de produits agricoles.",
      en: "Web application for mapping and short-circuit sales of agricultural products.",
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
      fr: "Projet de modélisation 3D réalisé lors d'un projet académique. Modélisation d'appartements et d'objets divers. Modélisation de plusieurs environnements 3d lors de la création d'un jeu vidéo de plateforme, environnements qui servaient de décors au jeu : forêt, pont, île flottante, cascade, etc. Pour réaliser ces modèles 3d j'ai utilisé le logiciel Blender, les scenes été ensuite importées sur Visual Studio pour y ajouter les fonctionnalités du jeu.",
      en: "3D modeling project carried out during an academic project. Modeling of apartments and various objects. Modeling of several 3D environments during the creation of a platform video game, environments that served as the game's scenery: forest, bridge, floating island, waterfall, etc. To create these 3D models, I used the Blender software, and the scenes were then imported into Visual Studio to add the game's functionalities.",
    },
    abstract: {
      fr: "Projet de modélisation 3D d'appartements et création d'environnements pour un jeu de plateforme.",
      en: "3D modeling project of apartments and creation of environments for a platform game.",
    },
    technologies: ["Blender"],
    img: "/img/Projets/3D.png",
  },
  {
    id: 4,
    title: "Portfolio",
    slug: "portfolio",
    category: ["Développement web", "Design UI/UX", "Graphisme"],
    year: 2025,
    description: {
      fr: "Le but premier de ce projet est de créer un site web qui me permet de présenter mes compétences, mes réalisation et mes services de manière professionnelle. Lors de la conception de ce portfolio le second objectif était de créer ma propre identité visuelle qui me representerait en tant que développeur, designer et qui serait réutilisable et identifiable. Avant la réalisation de ce portfolio plusieurs étapes ont été suivies : création de ma charte graphique, création du logo, création des maquettes sur figma, développement du site web en utilisant des technologies Next.js, typescript, gestion du projet avec github et déploiement sur vercel.",
      en: "The primary goal of this project is to create a website that allows me to professionally showcase my skills, achievements, and services. During the design of this portfolio, the secondary objective was to create my own visual identity that would represent me as a developer and designer, and that would be reusable and identifiable. Before the realization of this portfolio, several steps were followed: creation of my graphic charter, creation of the logo, creation of mockups on Figma, development of the website using Next.js technologies, Typescript, project management with GitHub, and deployment on Vercel.",
    },
    abstract: {
      fr: "Portfolio personnel afin de présenter mes différents projets et compétences.",
      en: "Personal portfolio to showcase my various projects and skills.",
    },
    technologies: ["React", "Next.js", "Typescript", "Vercel", "Figma"],
    img: "/img/Projets/portfolio.png",
  },
];
