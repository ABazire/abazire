export type Service = {
  id: number;
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  category: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: {
      fr: "Développement web",
      en: "Web Development",
    },
    description: {
      fr: "Création de sites web responsives et performants en utilisant les dernières technologies front-end telles que React, Next.js et Tailwind CSS.",
      en: "Creation of responsive and high-performance websites using the latest front-end technologies such as React, Next.js, and Tailwind CSS.",
    },
    category: "Développement web",
  },
  {
    id: 2,
    title: {
      fr: "Design UI/UX",
      en: "UI/UX Design",
    },
    description: {
      fr: "Création de maquettes et prototypes pour des applications web et mobiles, en mettant l'accent sur l'expérience utilisateur et l'interface utilisateur.",
      en: "Creation of mockups and prototypes for web and mobile applications, focusing on user experience and user interface.",
    },
    category: "Design UI/UX",
  },
  {
    id: 3,
    title: {
      fr: "Graphisme",
      en: "Graphic Design",
    },
    description: {
      fr: "Conception de visuels attrayants pour le web et les réseaux sociaux, y compris des bannières, des logos et des illustrations personnalisées.",
      en: "Design of attractive visuals for the web and social media, including banners, logos, and custom illustrations.",
    },
    category: "Graphisme",
  },
  {
    id: 4,
    title: {
      fr: "3D",
      en: "3D",
    },
    description: {
      fr: "Modélisation et rendu 3D pour des projets variés, allant de la visualisation de produits à la création d'environnements virtuels.",
      en: "3D modeling and rendering for various projects, ranging from product visualization to the creation of virtual environments.",
    },
    category: "3D",
  },
];
