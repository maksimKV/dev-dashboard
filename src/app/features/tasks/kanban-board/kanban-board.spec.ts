import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KanbanBoard } from './kanban-board';
import { AuthService } from '../../../shared/services/auth.service';
import { ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

describe('KanbanBoard', () => {
  let component: KanbanBoard;
  let fixture: ComponentFixture<KanbanBoard>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let cdrSpy: jasmine.SpyObj<ChangeDetectorRef>;

  beforeEach(async () => {
    authServiceSpy = {
      updateKanbanTasks: jasmine.createSpy('updateKanbanTasks').and.returnValue(of({})),
      getUserData: jasmine.createSpy('getUserData').and.returnValue(of({ kanbanTasks: { todo: [], inProgress: [], done: [] } })),
      isAuthenticated$: of(true)
    } as any;
    cdrSpy = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);
    await TestBed.configureTestingModule({
      imports: [
        KanbanBoard,
        CommonModule,
        DragDropModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: ChangeDetectorRef, useValue: cdrSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(KanbanBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a task', () => {
    component.newTaskTitle = 'Test Task';
    component.newTaskDescription = 'Desc';
    spyOn(component, 'saveTasks');
    component.addTask();
    expect(component.todo.length).toBe(1);
    expect(component.saveTasks).toHaveBeenCalled();
  });

  it('should not add a task with empty title', () => {
    component.newTaskTitle = '   ';
    spyOn(component, 'saveTasks');
    component.addTask();
    expect(component.todo.length).toBe(0);
    expect(component.saveTasks).not.toHaveBeenCalled();
  });

  it('should delete a task', () => {
    component.todo = [{ id: '1', title: 'A', description: '' }];
    spyOn(component, 'saveTasks');
    component.deleteTask(component.todo, 0);
    expect(component.todo.length).toBe(0);
    expect(component.saveTasks).toHaveBeenCalled();
  });

  it('should call saveTasks on drop', () => {
    spyOn(component, 'saveTasks');
    const event = {
      previousContainer: { data: component.todo },
      container: { data: component.todo },
      previousIndex: 0,
      currentIndex: 0
    } as any;
    component.drop(event);
    expect(component.saveTasks).toHaveBeenCalled();
  });

  it('should call saveTasks and loadTasks', () => {
    authServiceSpy.updateKanbanTasks.and.returnValue(of(void 0));
    authServiceSpy.getUserData.and.returnValue(of({ kanbanTasks: { todo: [], inProgress: [], done: [] } } as any));
    component.isBrowser = true;
    component.saveTasks();
    expect(authServiceSpy.updateKanbanTasks).toHaveBeenCalled();
    component.loadTasks();
    expect(authServiceSpy.getUserData).toHaveBeenCalled();
  });
});
