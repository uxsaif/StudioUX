import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chart-options',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chart-options.component.html',
  styleUrls: ['./chart-options.component.scss'],
})
export class ChartOptionsComponent {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  decimals = '0';
  metricsDecimals = '0';
  showAverage = true;
  showMeanFav = true;
  mentionLessThan5 = true;
  combineAllOther = false;
  aggregate = false;
  statTesting = true;
  presentation = 'medium';

  close(): void {
    this.openChange.emit(false);
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('chart-options-overlay')) {
      this.close();
    }
  }
}
