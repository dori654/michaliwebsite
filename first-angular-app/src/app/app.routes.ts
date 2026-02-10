import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Michali | Architecture & Interior Design'
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./features/portfolio/portfolio.component').then(m => m.PortfolioComponent),
    title: 'Portfolio | Michali'
  },
  {
    path: 'project/:id',
    loadComponent: () => import('./features/project/project-detail.component').then(m => m.ProjectDetailComponent),
    title: 'Project | Michali'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About | Michali'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | Michali'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
