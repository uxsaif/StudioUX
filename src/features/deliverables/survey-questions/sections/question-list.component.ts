import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent, ButtonComponent } from '../../../../components';
import { SurveyQuestion } from '../survey-questions.component';

/**
 * Question List — left sidebar showing all questions.
 *
 * Displays question order, truncated text, type badge, and delete action.
 */
@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule, BadgeComponent, ButtonComponent],
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent {
  @Input() questions: SurveyQuestion[] = [];
  @Input() selectedId = '';

  @Output() questionSelected = new EventEmitter<SurveyQuestion>();
  @Output() questionDeleted = new EventEmitter<SurveyQuestion>();

  typeBadgeVariant(type: string): 'default' | 'info' | 'success' | 'warning' {
    const map: Record<string, 'default' | 'info' | 'success' | 'warning'> = {
      'single-choice': 'info',
      'multi-choice': 'info',
      'open-ended': 'success',
      'scale': 'warning',
      'ranking': 'default',
    };
    return map[type] || 'default';
  }

  typeLabel(type: string): string {
    const map: Record<string, string> = {
      'single-choice': 'Single',
      'multi-choice': 'Multi',
      'open-ended': 'Open',
      'scale': 'Scale',
      'ranking': 'Rank',
    };
    return map[type] || type;
  }
}
