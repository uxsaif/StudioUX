import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Tab {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * Tabs — maps to BASES tab_cc component.
 *
 * Tabs organize content across different screens, data sets,
 * and other interactions.
 */
@Component({
  selector: 'bases-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() tabs: Tab[] = [];
  @Input() activeTab = '';

  @Output() tabChange = new EventEmitter<string>();

  selectTab(value: string): void {
    this.tabChange.emit(value);
  }
}
