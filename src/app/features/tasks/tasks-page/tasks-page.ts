import { Component } from '@angular/core';
import { KanbanBoard } from '../kanban-board/kanban-board';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [KanbanBoard, MatIconModule],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.scss'
})
export class TasksPage {}
