export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Language"
  | "Styling"
  | "DevOps"
  | "Tools";

export type TechDifficulty =
  | "Beginner-Friendly"
  | "Intermediate"
  | "Advanced";

export type TechBadge =
  | "Popular"
  | "Versatile"
  | "Fast"
  | "Fullstack"
  | "Standard"
  | "Top SQL"
  | "Cache"
  | "Ubiquitous"
  | "Essential"
  | "Robust"
  | "Modern"
  | "Containers"
  | string;

export interface Technology {
  readonly id: string;
  readonly name: string;
  readonly category: TechCategory;
  readonly description: string;
  readonly icon: string;
  readonly rating: number;
  readonly difficulty: TechDifficulty;
  readonly badge: TechBadge;
}