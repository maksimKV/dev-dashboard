import { Component } from '@angular/core';
import { KanbanBoard } from '../kanban-board/kanban-board';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [KanbanBoard],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.scss'
})
export class TasksPage {}
