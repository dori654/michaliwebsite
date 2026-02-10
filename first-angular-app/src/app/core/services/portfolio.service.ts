import { Injectable, signal, computed } from '@angular/core';
import { Project, ProjectCategory } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // All projects data
  private readonly projectsData: Project[] = [
    {
      id: 'calaniyot-60',
      title: 'Interior Design for Luxury Home',
      subtitle: 'Luxury Home',
      category: 'residential',
      location: 'BeerSheva, Israel',
      year: 2025,
      description: 'A stunning residential project that combines modern luxury with timeless design. The home features expansive living spaces, floor-to-ceiling windows, and a seamless indoor-outdoor flow that takes full advantage of its desert surroundings.',
      thumbnailUrl: 'assets/hero/hero1.png',
      heroImageUrl: 'assets/projects/project-1/5_3 - Photo.jpg',
      images: [
        { url: 'assets/projects/project-1/7_7 - Photo.jpg', alt: 'Living room ' },
        { url: 'assets/projects/project-1/7_9 - Photo.jpg', alt: 'Living room' },
        { url: 'assets/projects/project-1/3_8 - Photo.jpg', alt: 'Full house view' },
        { url: 'assets/projects/project-1/4_6 - Photo.jpg', alt: 'Outdoor space' }
      ],
      featured: true
    },
    {
      id: 'restorant-interior',
      title: 'Urban Restaurant',
      subtitle: 'Culinary Experience',
      category: 'hospitality',
      location: 'MTower ,BeerSheva',
      year: 2025,
      description: 'A modern restaurant interior that blends contemporary design with warm, inviting textures. The space features a central dining area with custom lighting fixtures.',
      thumbnailUrl: 'assets/hero/hero2.png',
      heroImageUrl: 'assets/projects/project2/2.jpg',
      images: [
        { url: 'assets/projects/project2/3.jpg', alt: 'Main living area' },
        { url: 'assets/projects/project2/12.jpg', alt: 'Dining space' },
        { url: 'assets/projects/project2/4.jpg', alt: 'Home office' },
        { url: 'assets/projects/project2/8.jpg', alt: 'Rooftop terrace' }
      ],
      featured: true
    },
    {
      id: 'calaniyot-87',
      title: 'Luxury House With Pool',
      subtitle: 'Elegant Living',
      category: 'residential',
      location: 'BeerSheva, Israel',
      year: 2025,
      description: 'A luxurious residential project that epitomizes elegance and comfort. The home features a sleek, modern design with an emphasis on indoor-outdoor living, highlighted by a stunning pool area and expansive glass walls that offer breathtaking views of the surrounding landscape.',
      thumbnailUrl: 'assets/hero/hero4.jpg',
      heroImageUrl: 'assets/projects/project3/1_6 - Photo.jpg',
      images: [
        { url: 'assets/projects/project3/in-2.jpg', alt: 'Living room' },
        { url: 'assets/projects/project3/in-4.jpg', alt: 'Upstairs view' },
        { url: 'assets/projects/project3/in-3.jpg', alt: 'Lounge seating' },
        { url: 'assets/projects/project3/1_7 - Photo.jpg', alt: 'Pool area' }
      ],
      featured: true
    },
    {
      id: 'calaniyot-115',
      title: 'Executive Suite',
      subtitle: 'Modern Luxury Residence',
      category: 'residential',
      location: 'BeerSheva, Israel',
      year: 2024,
      description: 'A sophisticated executive suite that blends modern luxury with functional design. The space features high-end finishes, ergonomic furniture, and a carefully curated aesthetic that reflects both professionalism and comfort.',
      thumbnailUrl: 'assets/hero/hero3.png',
      heroImageUrl: 'assets/projects/project4/1_1 - Photo.jpg',
      images: [
        { url: 'assets/projects/project4/7_3 - Photo.jpg', alt: 'Executive desk' },
        { url: 'assets/projects/project4/8_2 - Photo.jpg', alt: 'Meeting room' },
        { url: 'assets/projects/project4/99_1 - Photo.jpg', alt: 'Reception area' },
        { url: 'assets/projects/project4/66_3 - Photo.jpg', alt: 'Breakout space' }
      ]
    },
    {
      id: 'shahar',
      title: 'Interior and Exterior Design',
      subtitle: 'Modern Living Spaces',
      category: 'residential',
      location: 'BeerSheva, Israel',
      year: 2024,
      description: 'A modern residential design that seamlessly blends indoor and outdoor living. The project features clean lines, natural materials, and thoughtful spatial planning to create a harmonious environment.',
      thumbnailUrl: 'assets/projects/project5/9_2 - Photo.jpg',
      heroImageUrl: 'assets/projects/project5/99_1 - Photo.jpg',
      images: [
        { url: 'assets/projects/project5/33_2 - Photo.jpg', alt: 'Living room' },
        { url: 'assets/projects/project5/88.jpg', alt: 'Master suite' },
        { url: 'assets/projects/project5/bathroom.jpg', alt: 'Bathroom' },
        { url: 'assets/projects/project5/kitchen.jpg', alt: 'Kitchen' }
      ]
    },
    {
      id: 'segel',
      title: 'Black&White Design for Luxury Home',
      subtitle: 'Luxury Home',
      category: 'residential',
      location: 'BeerSheva, Israel',
      year: 2024,
      description: 'A luxurious interior design project that combines elegance with modern functionality. The space features high-end materials, custom fixtures, and a carefully curated aesthetic that reflects both sophistication and comfort.',
      thumbnailUrl: 'assets/projects/project6/5-2.jpg',
      heroImageUrl: 'assets/projects/project6/7-2.jpg',
      images: [
        { url: 'assets/projects/project6/17-2.jpg', alt: 'Main dining room' },
        { url: 'assets/projects/project6/15-1.jpg', alt: 'Kitchen view' },
        { url: 'assets/projects/project6/bedroom1.jpg', alt: 'Private bedroom' },
        { url: 'assets/projects/project6/bathroom1.jpg', alt: 'Bathroom view' }
      ]
    },
    {
      id: 'restorant-interior1',
      title: 'Restaurant Interior Design',
      subtitle: 'Bar & Dining Experience',
      category: 'hospitality',
      location: 'Beersheva, Israel',
      year: 2025,
      description: 'A contemporary restaurant interior design that creates a vibrant and inviting atmosphere. The space features a mix of textures, custom lighting, and a layout that encourages social interaction while providing an intimate dining experience.',
      thumbnailUrl: 'assets/projects/project7/1_5 - Photo.jpg',
      heroImageUrl: 'assets/projects/project7/1_10.jpg',
      images: [
        { url: 'assets/projects/project7/1_4.jpg', alt: 'Restaurant main hall' },
        { url: 'assets/projects/project7/1_2.jpg', alt: 'Kitchen view' },
        { url: 'assets/projects/project7/1_1 - Photo.jpg', alt: 'Bar area' },
        { url: 'assets/projects/project7/1_11.jpg', alt: 'Wall details' }
      ]
    },
    {
      id: 'kiusk',
      title: 'Art Gallery Interior Design',
      subtitle: 'Gallery & Exhibition Space',
      category: 'commercial',
      location: 'BeerSheva, Israel',
      year: 2023,
      description: 'An elegant and modern interior design for an art gallery that enhances the viewing experience through thoughtful spatial planning and carefully selected materials.',
      thumbnailUrl: 'assets/projects/project8/1.1.jpg',
      heroImageUrl: 'assets/projects/project8/2.jpg',
      images: [
        { url: 'assets/projects/project8/3.jpg', alt: 'kiosk' },
        { url: 'assets/projects/project8/4.jpg', alt: 'Terrace view' },
        { url: 'assets/projects/project8/5.jpg', alt: 'drone view' },
        { url: 'assets/projects/project8/6.jpg', alt: 'Terrace ' }
      ],
      featured: true
    }
  ];

  // Signals
  readonly projects = signal<Project[]>(this.projectsData);
  readonly selectedCategory = signal<ProjectCategory | 'all'>('all');

  // Computed Signals
  readonly filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') {
      return this.projects();
    }
    return this.projects().filter(p => p.category === category);
  });

  readonly featuredProjects = computed(() => {
    return this.projects().filter(p => p.featured);
  });

  readonly categories: { value: ProjectCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'hospitality', label: 'Hospitality' }
  ];

  setCategory(category: ProjectCategory | 'all'): void {
    this.selectedCategory.set(category);
  }

  getProjectById(id: string): Project | undefined {
    return this.projects().find(p => p.id === id);
  }

  getRelatedProjects(currentId: string, limit = 3): Project[] {
    const current = this.getProjectById(currentId);
    if (!current) return [];

    return this.projects()
      .filter(p => p.id !== currentId && p.category === current.category)
      .slice(0, limit);
  }
}
