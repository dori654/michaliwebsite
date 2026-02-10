import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { PortfolioService } from '../../core/services/portfolio.service';
import { fadeUp } from '../../core/animations/route-animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeUp]
})
export class HomeComponent {
  readonly portfolioService = inject(PortfolioService);
}
