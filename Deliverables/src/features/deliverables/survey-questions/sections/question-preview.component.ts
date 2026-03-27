import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  CardBodyComponent,
  BadgeComponent,
} from '../../../../components';
import { SurveyQuestion } from '../survey-questions.component';

/**
 * Question Preview — shows how the question appears to a survey respondent.
 *
 * Renders the appropriate input control based on question type:
 *   single-choice  → radio buttons
 *   multi-choice   → checkboxes
 *   open-ended     → textarea
 *   scale          → numbered scale
 *   ranking        → numbered drag-style list
 */
@Component({
  selector: 'app-question-preview',
  standalone: true,
  imports: [CommonModule, CardComponent, CardBodyComponent, BadgeComponent],
  templateUrl: './question-preview.component.html',
  styleUrls: ['./question-preview.component.scss'],
})
export class QuestionPreviewComponent {
  @Input() question!: SurveyQuestion;

  scalePoints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
