import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Spinner — maps to BASES Spinner_cc component.
 *
 * Sizes: sm (16px), md (24px), lg (40px)
 * Supports overlay mode for locking out page interaction.
 */
@Component({
  selector: 'bases-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() label = 'Loading…';
  @Input() overlay = false;
}
