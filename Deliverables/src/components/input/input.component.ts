import { Component, Input, Optional, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgControl, ReactiveFormsModule } from '@angular/forms';

/**
 * Input — maps to BASES form/input24_cc/standard.
 *
 * States: default, focus, error, disabled
 * Includes label, helper text, and error message.
 */
@Component({
  selector: 'bases-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() helperText = '';
  @Input() error = '';
  @Input() type = 'text';
  @Input() disabled = false;
  @Input() inputId = '';

  constructor(@Optional() @Self() public ngControl: NgControl) {}
}
