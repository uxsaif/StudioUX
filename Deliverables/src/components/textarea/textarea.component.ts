import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * TextArea — maps to BASES text area_cc component.
 *
 * States: default, focus, error, disabled
 */
@Component({
  selector: 'bases-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextAreaComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() helperText = '';
  @Input() error = '';
  @Input() rows = 4;
  @Input() disabled = false;
  @Input() textareaId = '';
}
