import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import { Task } from '../../../shared/models/task.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.scss',
})
export class KanbanBoard implements OnInit {
  todo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];

  newTaskTitle = '';
  newTaskDescription = '';
  isBrowser: boolean;
  isLoading = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private authService: AuthService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.loadTasks();
    }
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.saveTasks();
  }

  addTask() {
    if (!this.newTaskTitle.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: this.newTaskTitle,
      description: this.newTaskDescription
    };
    this.todo.push(newTask);
    this.newTaskTitle = '';
    this.newTaskDescription = '';
    this.saveTasks();
  }

  deleteTask(list: Task[], index: number) {
    list.splice(index, 1);
    this.saveTasks();
  }

  saveTasks() {
    if (!this.isBrowser) return;
    
    const data = {
      todo: this.todo,
      inProgress: this.inProgress,
      done: this.done
    };

    this.authService.updateKanbanTasks(data).subscribe({
      next: () => {
        console.log('Tasks saved successfully');
      },
      error: (error) => {
        console.error('Failed to save tasks:', error);
        // Fallback to localStorage if API fails
        localStorage.setItem('kanban-tasks', JSON.stringify(data));
      }
    });
  }

  loadTasks() {
    if (!this.isBrowser) return;
    
    this.isLoading = true;
    this.authService.getUserData().subscribe({
      next: (userData) => {
        this.todo = userData.kanbanTasks?.todo || [];
        this.inProgress = userData.kanbanTasks?.inProgress || [];
        this.done = userData.kanbanTasks?.done || [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load tasks from API:', error);
        // Fallback to localStorage
        const data = localStorage.getItem('kanban-tasks');
        if (data) {
          try {
            const parsed = JSON.parse(data);
            this.todo = parsed.todo || [];
            this.inProgress = parsed.inProgress || [];
            this.done = parsed.done || [];
          } catch (e) {
            this.todo = [];
            this.inProgress = [];
            this.done = [];
            console.error('Failed to parse kanban-tasks:', e);
          }
        }
        this.isLoading = false;
      }
    });
  }
}
