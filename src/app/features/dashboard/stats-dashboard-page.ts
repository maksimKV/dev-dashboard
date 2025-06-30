import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-stats-dashboard-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, BaseChartDirective],
  templateUrl: './stats-dashboard-page.html',
  styleUrl: './stats-dashboard-page.scss'
})
export class StatsDashboardPage {
  isBrowser: boolean;
  // Task stats
  totalTasks = 0;
  todo = 0;
  inProgress = 0;
  done = 0;
  // Timer stats
  focusSessions = 0;
  totalFocusMinutes = 0;
  // Notes stats
  notesCount = 0;
  notesWordCount = 0;
  // Snippets stats
  snippetsCount = 0;
  topSnippetLang = '';

  // Chart data
  taskChartData: ChartData<'doughnut', number[], string> = {
    labels: ['To Do', 'In Progress', 'Done'],
    datasets: [
      { data: [0, 0, 0], label: 'Tasks' }
    ]
  };
  taskChartType: ChartType = 'doughnut';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.loadStats();
    }
  }

  loadStats() {
    // Kanban tasks
    const kanban = JSON.parse(localStorage.getItem('kanban-tasks') || '{"todo":[],"inProgress":[],"done":[]}');
    this.todo = kanban.todo?.length || 0;
    this.inProgress = kanban.inProgress?.length || 0;
    this.done = kanban.done?.length || 0;
    this.totalTasks = this.todo + this.inProgress + this.done;
    this.taskChartData = {
      labels: ['To Do', 'In Progress', 'Done'],
      datasets: [
        { data: [this.todo, this.inProgress, this.done], label: 'Tasks' }
      ]
    };

    // Focus timer
    const timer = JSON.parse(localStorage.getItem('focus-timer') || '{}');
    this.focusSessions = timer.completedFocusSessions || 0;
    this.totalFocusMinutes = Math.floor((timer.totalWorkSeconds || 0) / 60);

    // Notes
    const note = localStorage.getItem('markdown-note') || '';
    this.notesCount = note.trim() ? 1 : 0;
    this.notesWordCount = note.trim() ? note.trim().split(/\s+/).length : 0;

    // Snippets
    const snippets = JSON.parse(localStorage.getItem('snippets') || '[]');
    this.snippetsCount = snippets.length;
    if (snippets.length) {
      const langCount: Record<string, number> = {};
      for (const s of snippets) {
        langCount[s.language] = (langCount[s.language] || 0) + 1;
      }
      this.topSnippetLang = Object.entries(langCount).sort((a, b) => b[1] - a[1])[0][0];
    } else {
      this.topSnippetLang = '';
    }
  }
} 