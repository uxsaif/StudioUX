import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FilterLink {
  label: string;
}

export type ChartType = 'table' | 'bar' | 'pie';

@Component({
  selector: 'app-filters-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.scss'],
})
export class FiltersBarComponent {
  @Input() filterLinks: FilterLink[] = [];
  @Input() activeChartType: ChartType = 'table';
  @Output() chartTypeChange = new EventEmitter<ChartType>();
  @Output() optionsClick = new EventEmitter<void>();

  chartTypes: { type: ChartType; label: string }[] = [
    { type: 'table', label: 'Table' },
    { type: 'bar', label: 'Bar chart' },
    { type: 'pie', label: 'Pie chart' },
  ];

  setChartType(type: ChartType): void {
    this.chartTypeChange.emit(type);
  }
}
