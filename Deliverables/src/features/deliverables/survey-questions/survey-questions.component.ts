import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersBarComponent, FilterLink, ChartType } from './sections/filters-bar.component';
import { TableViewComponent } from './sections/table-view.component';
import { ChartOptionsComponent } from './sections/chart-options.component';

/** Concept column header data */
export interface ConceptColumn {
  letter: string;
  name: string;
  sampleSize: number;
}

/** A single data row in the table */
export interface TableRow {
  label: string;
  values: CellValue[];
}

/** Individual cell value with optional stat-sig letters */
export interface CellValue {
  percentage: number;
  sigLetters?: string;
}

/** Nav tab */
export interface NavTab {
  label: string;
  active: boolean;
}

/** Question for the selector */
export interface SurveyQuestion {
  id: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-survey-questions',
  standalone: true,
  imports: [
    CommonModule,
    FiltersBarComponent,
    TableViewComponent,
    ChartOptionsComponent,
  ],
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.scss'],
})
export class SurveyQuestionsComponent {

  // ── Nav tabs ──────────────────────────
  navTabs: NavTab[] = [
    { label: 'INSIGHTS', active: false },
    { label: 'CONCEPTS', active: false },
    { label: 'DELIVERABLES', active: true },
    { label: 'FILES', active: false },
  ];

  // ── Filters ───────────────────────────
  filterLinks: FilterLink[] = [
    { label: 'All Concepts' },
    { label: 'United States' },
    { label: 'General Population -new' },
  ];

  activeChartType: ChartType = 'table';

  // ── Chart options drawer ──────────────
  chartOptionsOpen = false;

  // ── Question selector ─────────────────
  questions: SurveyQuestion[] = [
    {
      id: 'q1',
      title: 'Brand Purchased (CTF) - US (Potato Chips (Such as Lays, Pringles, etc))',
      subtitle: 'What brands of ${Category2} have you purchased ${CategoryUsageTime}?',
    },
  ];
  selectedQuestion: SurveyQuestion = this.questions[0];

  // ── Concepts / columns ────────────────
  concepts: ConceptColumn[] = [
    { letter: 'A', name: 'Crispies Natural Harvest Sweet Potato', sampleSize: 265 },
    { letter: 'B', name: 'Crispies Natural Harvest Wholesome Ingredients', sampleSize: 265 },
    { letter: 'C', name: 'Crispies Natural Harvest Cassava', sampleSize: 265 },
    { letter: 'D', name: 'Crispies Natural Harvest Concept 4', sampleSize: 265 },
  ];

  // ── Table data ────────────────────────
  rows: TableRow[] = [
    { label: 'Cares for your skin and your senses', values: [{ percentage: 20, sigLetters: 'BCD' }, { percentage: 20 }, { percentage: 20 }, { percentage: 20 }] },
    { label: 'Dermatologically tested', values: [{ percentage: 25 }, { percentage: 25 }, { percentage: 25 }, { percentage: 25 }] },
    { label: 'Good for the whole family', values: [{ percentage: 15 }, { percentage: 15, sigLetters: 'ACD' }, { percentage: 15 }, { percentage: 15 }] },
    { label: 'Leaves skin soft, clean and happy', values: [{ percentage: 26 }, { percentage: 26 }, { percentage: 26 }, { percentage: 26 }] },
    { label: 'Luxury redefined, not by cost but how it makes you feel', values: [{ percentage: 1 }, { percentage: 1 }, { percentage: 1 }, { percentage: 1 }] },
    { label: 'Does luxe differently', values: [{ percentage: 1 }, { percentage: 1 }, { percentage: 1 }, { percentage: 1 }] },
    { label: 'Rooted in Indulgence', values: [{ percentage: 2 }, { percentage: 2 }, { percentage: 2 }, { percentage: 2 }] },
    { label: 'Crafted for the senses', values: [{ percentage: 2 }, { percentage: 2 }, { percentage: 2 }, { percentage: 2 }] },
    { label: 'Transforms the everyday into a rich expressive ritual', values: [{ percentage: 2 }, { percentage: 2 }, { percentage: 2, sigLetters: 'ABD' }, { percentage: 2 }] },
    { label: 'Delivers cleansing moisture', values: [{ percentage: 1 }, { percentage: 1 }, { percentage: 1 }, { percentage: 1 }] },
    { label: 'Fragrances that pop', values: [{ percentage: 1 }, { percentage: 1 }, { percentage: 1 }, { percentage: 1 }] },
    { label: 'Textures that delight', values: [{ percentage: 2 }, { percentage: 2 }, { percentage: 2 }, { percentage: 2, sigLetters: 'ABC' }] },
    { label: 'Provides a sensorial experience', values: [{ percentage: 1 }, { percentage: 1 }, { percentage: 1 }, { percentage: 1 }] },
  ];

  summaryRows: TableRow[] = [
    { label: 'Average', values: [{ percentage: 4 }, { percentage: 4 }, { percentage: 4 }, { percentage: 4 }] },
    { label: 'Mean Fav', values: [{ percentage: 1 }, { percentage: 1 }, { percentage: 1 }, { percentage: 1 }] },
  ];

  // ── Handlers ──────────────────────────
  onChartTypeChange(type: ChartType): void {
    this.activeChartType = type;
  }
}
