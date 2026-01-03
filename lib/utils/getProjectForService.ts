import { Project, projects } from "@/data/projects";

export function getLatestProjectForCategory(category: string): Project | null {
  // Filtre les projets qui ont la catégorie en première position
  const matchingProjects = projects.filter(
    (project) => project.category[0] === category
  );

  // Si aucun projet trouvé, retourne null
  if (matchingProjects.length === 0) return null;

  // Trie par année décroissante et retourne le plus récent
  return matchingProjects.sort((a, b) => b.year - a.year)[0];
}
