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
      fr: "Création de sites web responsives en utilisant des technologies front-end telles que React, Next.js, GSAP et Tailwind CSS.",
      en: "Creation of responsive websites using technologies such as React, Next.js, GSAP and Tailwind CSS.",
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
      fr: "Création de maquettes pour des sites et applications web et mobiles, responsives, suivant les normes d'UX/UI design. Utilisation de l'outil figma pour la conception des maquettes.",
      en: "Creation of mockups for responsive web and mobile sites and applications, following UX/UI design standards. Use of the Figma tool for mockup design.",
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
      fr: "Conception de visuels affiches, flyers, roll-up, logo ou encore de visuels pour les réseaux sociaux. Utilisation des outils Adobe Photoshop, Illustrator et Figma.",
      en: "Design of visuals such as posters, flyers, roll-ups, logos, and social media visuals. Use of Adobe Photoshop, Illustrator, and Figma tools.",
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
      fr: "Modélisation pour des projets variés, de la création d'objets à la création d'environnements.",
      en: "Modeling for various projects, from object creation to environment creation.",
    },
    category: "3D",
  },
];
