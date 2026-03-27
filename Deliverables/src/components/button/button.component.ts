import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Button — maps to BASES button_cc components.
 *
 * Variants: basic | flat | hero | primitive | fab | ai
 * Sizes:    sm | md | lg
 * States:   default, hover, active, disabled, loading
 */
@Component({
  selector: 'bases-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: 'basic' | 'flat' | 'hero' | 'primitive' | 'fab' | 'ai' = 'basic';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
}
