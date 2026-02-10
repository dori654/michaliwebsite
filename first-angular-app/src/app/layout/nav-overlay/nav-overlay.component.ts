import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { menuOverlay } from '../../core/animations/route-animations';

@Component({
  selector: 'app-nav-overlay',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-overlay.component.html',
  styleUrl: './nav-overlay.component.scss',
  animations: [menuOverlay]
})
export class NavOverlayComponent {
  readonly themeService = inject(ThemeService);
  readonly currentYear = new Date().getFullYear();
}
