export type ProjectCategory = 'residential' | 'commercial' | 'hospitality';

export interface ProjectImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  location: string;
  year: number;
  description: string;
  thumbnailUrl: string;
  heroImageUrl: string;
  images: ProjectImage[];
  featured?: boolean;
}
