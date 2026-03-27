import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SelectOption {
  value: string;
  label: string;
}

/**
 * Select — maps to BASES form/select/flat24_cc.
 *
 * Flat selects are used most often, usually in forms.
 * States: default, focus, error, disabled
 */
@Component({
  selector: 'bases-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() label = '';
  @Input() options: SelectOption[] = [];
  @Input() placeholder = 'Select…';
  @Input() error = '';
  @Input() disabled = false;
  @Input() value = '';
  @Input() selectId = '';

  @Output() valueChange = new EventEmitter<string>();

  onChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.valueChange.emit(target.value);
  }
}
