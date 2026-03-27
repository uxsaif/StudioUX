import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Radio — maps to BASES radio_cc component.
 *
 * States: unchecked, checked, disabled
 */
@Component({
  selector: 'bases-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
  @Input() label = '';
  @Input() checked = false;
  @Input() disabled = false;
  @Input() name = '';
  @Input() value = '';
  @Input() radioId = '';

  @Output() valueSelected = new EventEmitter<string>();

  onChange(): void {
    this.valueSelected.emit(this.value);
  }
}
