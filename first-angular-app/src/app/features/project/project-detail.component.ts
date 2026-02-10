import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Project } from '../../core/models/project.interface';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private portfolioService = inject(PortfolioService);

  readonly project = signal<Project | undefined>(undefined);
  readonly relatedProjects = computed(() => {
    const p = this.project();
    return p ? this.portfolioService.getRelatedProjects(p.id, 3) : [];
  });

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      const foundProject = this.portfolioService.getProjectById(projectId);
      this.project.set(foundProject);
    });
  }
}
