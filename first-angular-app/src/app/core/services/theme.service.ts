import { Injectable, signal, computed, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavItem } from '../models/navigation.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);

  // Navigation Items
  readonly navItems: NavItem[] = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  // UI State Signals
  readonly menuOpen = signal(false);
  readonly scrollPosition = signal(0);

  // Computed Signals
  readonly isScrolled = computed(() => this.scrollPosition() > 50);
  readonly headerSolid = computed(() => this.isScrolled() || this.menuOpen());

  constructor() {
    // Set up scroll listener only in browser
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollListener();
    }

    // Effect to toggle body scroll lock when menu opens/closes
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (this.menuOpen()) {
          document.body.classList.add('menu-open');
        } else {
          document.body.classList.remove('menu-open');
        }
      }
    });
  }

  private initScrollListener(): void {
    window.addEventListener('scroll', () => {
      this.scrollPosition.set(window.scrollY);
    }, { passive: true });
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
