import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Badge — maps to BASES badge_cc component.
 *
 * Variants: default, success, error, warning, info
 */
@Component({
  selector: 'bases-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [ngClass]="['bases-badge', 'bases-badge--' + variant]">
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() variant: 'default' | 'success' | 'error' | 'warning' | 'info' = 'default';
}
