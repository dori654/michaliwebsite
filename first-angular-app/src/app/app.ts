import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { NavOverlayComponent } from './layout/nav-overlay/nav-overlay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavOverlayComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
