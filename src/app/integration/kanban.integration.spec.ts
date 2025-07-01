import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { KanbanBoard } from '../features/tasks/kanban-board/kanban-board';
import { AuthService } from '../shared/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<app-kanban-board></app-kanban-board>`,
  standalone: true,
  imports: [KanbanBoard]
})
class TestHostComponent {}

describe('Kanban Integration', () => {
  let httpMock: HttpTestingController;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        CommonModule,
        TestHostComponent
      ],
      providers: [AuthService]
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add, delete, and persist tasks', fakeAsync(() => {
    // Simulate loading tasks - handle multiple requests that might be made
    const allReqs = httpMock.match(req => req.url.endsWith('/user/data'));
    if (allReqs.length > 0) {
      allReqs[0].flush({ kanbanTasks: { todo: [], inProgress: [], done: [] }, markdownNote: '', focusTimer: {}, snippets: [], preferences: {} });
    }
    tick();
    fixture.detectChanges();

    // Simulate adding a task
    const kanban = fixture.debugElement.query(By.directive(KanbanBoard)).componentInstance;
    kanban.newTaskTitle = 'Test Task';
    kanban.addTask();
    // Match all PUT requests to /user/kanban-tasks
    let putReqs = httpMock.match(req => req.url.endsWith('/user/kanban-tasks'));
    expect(putReqs.length).toBeGreaterThanOrEqual(1);
    putReqs[0].flush({});
    tick();
    fixture.detectChanges();
    expect(kanban.todo.length).toBe(1);
    expect(kanban.todo[0].title).toBe('Test Task');

    // Simulate deleting a task
    kanban.deleteTask(kanban.todo, 0);
    putReqs = httpMock.match(req => req.url.endsWith('/user/kanban-tasks'));
    expect(putReqs.length).toBeGreaterThanOrEqual(1);
    putReqs[0].flush({});
    tick();
    fixture.detectChanges();
    expect(kanban.todo.length).toBe(0);
  }));
}); 