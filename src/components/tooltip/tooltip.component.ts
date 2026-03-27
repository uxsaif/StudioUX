import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Tooltip — maps to BASES tooltip_cc component.
 *
 * CSS-only tooltip shown on hover/focus.
 */
@Component({
  selector: 'bases-tooltip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="bases-tooltip">
      <ng-content></ng-content>
      <span [ngClass]="['bases-tooltip__content', 'bases-tooltip__content--' + position]" role="tooltip">
        {{ content }}
      </span>
    </span>
  `,
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() content = '';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
}
