import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/project.interface';

@Component({
  selector: 'app-portfolio-grid',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio-grid.component.html',
  styleUrl: './portfolio-grid.component.scss'
})
export class PortfolioGridComponent {
  projects = input.required<Project[]>();
}
