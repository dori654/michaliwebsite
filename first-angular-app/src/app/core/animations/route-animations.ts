import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

// Reusable animation triggers for components
export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.6s ease-out', style({ opacity: 1 }))
  ])
]);

export const fadeUp = trigger('fadeUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

// Menu overlay animation
export const menuOverlay = trigger('menuOverlay', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.4s ease-out', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('0.3s ease-in', style({ opacity: 0 }))
  ])
]);
