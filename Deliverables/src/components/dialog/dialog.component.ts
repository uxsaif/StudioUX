import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Dialog — maps to BASES dialog_cc component.
 *
 * Uses native <dialog> for focus trap and Escape handling.
 */
@Component({
  selector: 'bases-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnChanges {
  @Input() open = false;
  @Input() title = '';
  @Output() closed = new EventEmitter<void>();

  @ViewChild('dialogEl', { static: true }) dialogRef!: ElementRef<HTMLDialogElement>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open']) {
      const dialog = this.dialogRef?.nativeElement;
      if (!dialog) return;

      if (this.open) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialogRef.nativeElement) {
      this.close();
    }
  }

  close(): void {
    this.closed.emit();
  }
}
