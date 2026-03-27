import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ButtonComponent,
  InputComponent,
  SelectComponent,
  TextAreaComponent,
  CheckboxComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '../../../../components';
import { SurveyQuestion } from '../survey-questions.component';

/**
 * Question Editor — right-panel form for editing a single question.
 *
 * Edits: text, type, answer options, required flag, category.
 */
@Component({
  selector: 'app-question-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    TextAreaComponent,
    CheckboxComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
  ],
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss'],
})
export class QuestionEditorComponent {
  @Input() question!: SurveyQuestion;
  @Output() questionChanged = new EventEmitter<SurveyQuestion>();

  questionTypes = [
    { value: 'single-choice', label: 'Single Choice' },
    { value: 'multi-choice', label: 'Multiple Choice' },
    { value: 'open-ended', label: 'Open-Ended' },
    { value: 'scale', label: 'Scale / Rating' },
    { value: 'ranking', label: 'Ranking' },
  ];

  get hasOptions(): boolean {
    return ['single-choice', 'multi-choice', 'ranking'].includes(this.question.type);
  }

  onTextChange(value: string): void {
    this.emit({ ...this.question, text: value });
  }

  onTypeChange(value: string): void {
    const type = value as SurveyQuestion['type'];
    const updated = { ...this.question, type };
    if (['single-choice', 'multi-choice', 'ranking'].includes(type) && !updated.options?.length) {
      updated.options = ['Option 1', 'Option 2'];
    }
    this.emit(updated);
  }

  onCategoryChange(value: string): void {
    this.emit({ ...this.question, category: value });
  }

  onRequiredChange(value: boolean): void {
    this.emit({ ...this.question, required: value });
  }

  onOptionChange(index: number, value: string): void {
    const options = [...(this.question.options || [])];
    options[index] = value;
    this.emit({ ...this.question, options });
  }

  addOption(): void {
    const options = [...(this.question.options || []), `Option ${(this.question.options?.length || 0) + 1}`];
    this.emit({ ...this.question, options });
  }

  removeOption(index: number): void {
    const options = (this.question.options || []).filter((_, i) => i !== index);
    this.emit({ ...this.question, options });
  }

  private emit(q: SurveyQuestion): void {
    this.questionChanged.emit(q);
  }
}
