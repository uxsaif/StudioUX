import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Card — generic container for BASES layouts.
 *
 * Variants: default (elevated), outlined, flat
 */
@Component({
  selector: 'bases-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="['bases-card', 'bases-card--' + variant]">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() variant: 'default' | 'outlined' | 'flat' = 'default';
}

@Component({
  selector: 'bases-card-header',
  standalone: true,
  template: `<div class="bases-card__header"><ng-content></ng-content></div>`,
  styleUrls: ['./card.component.scss'],
})
export class CardHeaderComponent {}

@Component({
  selector: 'bases-card-body',
  standalone: true,
  template: `<div class="bases-card__body"><ng-content></ng-content></div>`,
  styleUrls: ['./card.component.scss'],
})
export class CardBodyComponent {}

@Component({
  selector: 'bases-card-footer',
  standalone: true,
  template: `<div class="bases-card__footer"><ng-content></ng-content></div>`,
  styleUrls: ['./card.component.scss'],
})
export class CardFooterComponent {}
