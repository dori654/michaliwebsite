import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { PortfolioGridComponent } from './portfolio-grid/portfolio-grid.component';
import { ProjectCategory } from '../../core/models/project.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioGridComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  readonly portfolioService = inject(PortfolioService);

  setCategory(category: ProjectCategory | 'all'): void {
    this.portfolioService.setCategory(category);
  }
}
