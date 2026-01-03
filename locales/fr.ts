import { title } from "process";

// locales/fr.ts
export default {
  hello: "Bonjour",
  hero: "Développeur web <span>front-end</span> <br />& ux/ui designer",
  services: "Services",
  service: {
    title: "Services",
    viewProduct: "Voir le produit",
    viewProject: "Voir le projet",
  },
  footer: {
    aboutTitle: "A propos",
    about:
      "Passionné par la création d'expériences digitales à la fois esthétiques et performantes, je combine mes compétences en développement front-end et en design UX/UI pour donner vie à des projets web innovants.",
    experience: {
      title: "Expérience",
      description: "3 ans en développement web et design UX/UI",
    },
    formation: {
      title: "Éducation",
      description: "Master en design UX/UI",
    },
    button: "Télécharger mon CV",
    copyright: "© 2025 Abazire. Tous droits réservés.",
  },
} as const;
