import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptColumn, TableRow, CellValue } from '../survey-questions.component';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent {
  @Input() concepts: ConceptColumn[] = [];
  @Input() rows: TableRow[] = [];
  @Input() summaryRows: TableRow[] = [];

  formatCell(cell: CellValue): string {
    const sig = cell.sigLetters ? cell.sigLetters + ' ' : '';
    return `${sig}${cell.percentage}%`;
  }

  hasSigLetters(cell: CellValue): boolean {
    return !!cell.sigLetters;
  }
}
