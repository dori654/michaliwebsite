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
      description: 'עיצוב פנים ותכנון הדמיות ללקוחות שרכשו וילות מחברת נדל"ן בבאר שבע וביקשו לקבל הדמיות ותכנון פנים',
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
      category: 'commercial',
      location: 'MTower ,BeerSheva',
      year: 2025,
      description: 'בית קפה בעיצוב אורבני בתכנון של קבלן במגדל MTower שביקש לקבל תכנון פנים והדמיות.',
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
      description: 'עיצוב פנים ותכנון הדמיות ללקוחות שרכשו וילות מחברת נדל"ן בבאר שבע וביקשו לקבל הדמיות ותכנון פנים',
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
      description: 'עיצוב פנים ותכנון הדמיות ללקוחות שרכשו וילות מחברת נדל"ן בבאר שבע וביקשו לקבל הדמיות ותכנון פנים',
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
      description: 'עיצוב פנים ותכנון הדמיות ללקוחות שרכשו וילות מחברת נדל"ן בבאר שבע וביקשו לקבל הדמיות ותכנון פנים',
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
      description: 'עיצוב פנים ותכנון הדמיות ללקוחות שרכשו וילות מחברת נדל"ן בבאר שבע וביקשו לקבל הדמיות ותכנון פנים',
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
      category: 'commercial',
      location: 'Beersheva, Israel',
      year: 2025,
      description: 'בר מסעדה בעיצוב אורבני בתכנון של קבלן במגדל MTower שביקש לקבל תכנון פנים והדמיות.',
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
      id: 'lod',
      title: ' לוד גני אביב',
      subtitle: 'מתחם עירוב שימושים',
      category: 'residential',
      location: 'Lod, Israel',
      year: 2025,
      description: 'פרויקט ייחודי באזור שצמוד לתחנת הרכבת לוד גני אביב.\nהמציע שילוב של מגורים,מסחר וגני ילדים. עירוב שימושים נוח אשר ישאיר את הדיירים במתחם וימעיט את הנסיעות לנוחות מירבית וסגירת הסידורים בתחום המתחם.\n\nהמתחם מציע בניין בעל 9 קומות עם קומת מסד של מסחר, קומה ראשונה עם גני ילדים וגינות פרטיות של הגנים, ומעל משרדים ועסקים.\nבניין נוסף עם קומת מסד של מסחר , 22 קומות של מגורים.',
      thumbnailUrl: 'assets/projects/project9/1.jpg',
      heroImageUrl: 'assets/projects/project9/5.jpg',
      images: [
        { url: 'assets/projects/project9/1.jpg', alt: 'Front view' },
        { url: 'assets/projects/project9/4.jpg', alt: 'Street view' },
        { url: 'assets/projects/project9/6.jpg', alt: 'Above view 2' },
        { url: 'assets/projects/project9/7.jpg', alt: 'Above view 3' },
        { url: 'assets/projects/project9/8.png', alt: 'Program1' },
        { url: 'assets/projects/project9/9.png', alt: 'Program2' },
        { url: 'assets/projects/project9/10.png', alt: 'Program3' },
      ]
    },
        {
      id: 'asota',
      title: 'אסותא - בית חולים ',
      subtitle: 'בית חולים',
      category: 'hospitality',
      location: 'Rishon Lezion, Israel',
      year: 2025,
      description: 'הצטרפות לצוות תכנון ביה"ח אסותא ראשל"צ , \n ביצוע תכניות תקרה \n פריסות חדרים רטובים \n ביצוע הדמיות ובחירת חומרים לעיצוב מסדרון וקבלת פנים',
      thumbnailUrl: 'assets/projects/project10/2.jpg',
      heroImageUrl: 'assets/projects/project10/1.jpg',
      images: [
        { url: 'assets/projects/project10/2.jpg', alt: 'Front view' },
        { url: 'assets/projects/project10/3.jpg', alt: 'Back view' },
        { url: 'assets/projects/project10/4.jpg', alt: 'Street view' },
        { url: 'assets/projects/project10/5.jpg', alt: 'Above view' },
        { url: 'assets/projects/project10/6.jpg', alt: 'Above view 2' },
        { url: 'assets/projects/project10/7.jpg', alt: 'Above view 3' },
      ]
    },
            {
      id: 'bilo',
      title: 'מרכז מסחרי ביל״ו  ',
      subtitle: 'מרכז ביל"ו',
      category: 'commercial',
      location: 'Billu, Israel',
      year: 2026,
      description: 'פרויקט מרכז מסחרי בצומת ביל"ו , בקומת הקרקע יתוכנן סופר טיב טעם שיקבל מחסן שירות גדול, \n מרתף חניות תת קרקעי, \n בקומה הראשונה והשנייה יתוכננו משרדים, וקומת גג מרוצפת לשימוש מסחרי.\n\n פרויקט שהצטרפתי אליו לאדריכל שהוא ראש הצוות שלי, ביצעתי מולו תכנון ושיחות מול יזמים, שיחות זום ומתן מענה מיידי בכל הנוגע לפרויקט.',
      thumbnailUrl: 'assets/projects/project11/2.jpg',
      heroImageUrl: 'assets/projects/project11/1.jpg',
      images: [
        { url: 'assets/projects/project11/2.jpg', alt: 'Front view' },
        { url: 'assets/projects/project11/1.jpg', alt: 'Front view' },
        { url: 'assets/projects/project11/3.png', alt: 'Back view' },
        { url: 'assets/projects/project11/4.png', alt: 'Street view' },
        { url: 'assets/projects/project11/5.png', alt: 'Above view' },
        { url: 'assets/projects/project11/6.png', alt: 'Above view 2' },
        { url: 'assets/projects/project11/7.png', alt: 'Above view 3' },
        { url: 'assets/projects/project11/8.png', alt: 'Above view 4' },

      ]
    },
    {
      id: 'ekron',
      title: ' קריית עקרון - תכנית מגורים',
      subtitle: 'מגורים',
      category: 'residential',
      location: 'קריית עקרון , ישראל',
      year: 2026,
      description: 'פרויקט שייעודו מגורים של דירות טיפוסיות של הקבלן שטרית, תכנית שממוקמת בחלקה המזרחי של קרית עקרון צמוד לכפר ביל"ו, התכנית מציעה תמהיל סופי של אזור מגורים עם 5 בניינים טיפוסיים עם 136 יחידות דיור, 2 מרתפים עם חניות ומחסנים, קומות קרקע עם 2 מבנים שמציעים דירות מרתף.\n\n בניין C מדורג וייחודי שמציע דירות פנטהאוז מקומה 6 עד קומה 8 כולל. \n\nכלל המבנים בעלי קומות טיפוסיות עד קומה 6, \nקומה 7 ייחודית\n וקומה 8 פנטהאוז. \nקומת הקרקע מציעה חצר מרכזית שכוללת שטח חלחול של 10.5 אחוז, גינון ופינות ישיבה לדיירי המתחם.',
      thumbnailUrl: 'assets/projects/project8/Picture1.png',
      heroImageUrl: 'assets/projects/project8/Picture2.png',
      images: [
        { url: 'assets/projects/project8/Picture1.png', alt: 'front' },
        { url: 'assets/projects/project8/Picture4.png', alt: 'park' },
        { url: 'assets/projects/project8/Picture3.png', alt: 'drone view' },
        { url: 'assets/projects/project8/Picture5.png', alt: 'program1' },
        { url: 'assets/projects/project8/Picture6.png', alt: 'program2' },
        { url: 'assets/projects/project8/Picture7.png', alt: 'program3' },
        { url: 'assets/projects/project8/Picture8.png', alt: 'program4' },
        { url: 'assets/projects/project8/Picture9.png', alt: 'program5' },
        { url: 'assets/projects/project8/Picture10.png', alt: 'program6' },


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
