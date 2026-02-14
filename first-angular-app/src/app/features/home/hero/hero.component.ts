import { Component, OnInit, OnDestroy, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeroSlide } from '../../../core/models/navigation.interface';
import { fadeUp } from '../../../core/animations/route-animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [fadeUp]
})
export class HeroComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  // Hero slides data
  readonly slides: HeroSlide[] = [
    {
      imageUrl: 'assets/hero/hero1.png',
      title: 'Portfolio',
      subtitle: 'Michal Fourer'
    },
    {
      imageUrl: 'assets/hero/hero2.png',
      title: 'Portfolio',
      subtitle: 'Michal Fourer'
    },
    {
      imageUrl: 'assets/hero/hero4.jpg',
      title: 'Portfolio',
      subtitle: 'Michal Fourer'
    }
  ];

  // Current slide index
  readonly currentIndex = signal(0);

  // Current slide data
  readonly currentSlide = computed(() => this.slides[this.currentIndex()]);

  // Slide duration in ms
  private readonly slideDuration = 8000;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startSlideshow();
    }
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  private startSlideshow(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.slideDuration);
  }

  private stopSlideshow(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextSlide(): void {
    this.currentIndex.update(i => (i + 1) % this.slides.length);
  }

  goToSlide(index: number): void {
    this.currentIndex.set(index);
    // Reset the timer when manually changing slides
    this.stopSlideshow();
    if (isPlatformBrowser(this.platformId)) {
      this.startSlideshow();
    }
  }
}
