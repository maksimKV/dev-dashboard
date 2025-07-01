import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FocusTimer } from '../features/timer/focus-timer/focus-timer';
import { AuthService } from '../shared/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<app-focus-timer></app-focus-timer>`,
  standalone: true,
  imports: [FocusTimer]
})
class TestHostComponent {}

describe('FocusTimer Integration', () => {
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

  it('should load, update, and persist timer state', fakeAsync(() => {
    // Simulate loading timer state
    const getReq = httpMock.expectOne(req => req.url.endsWith('/user/data'));
    getReq.flush({ focusTimer: { workDuration: 25, breakDuration: 5, timeLeft: 1500, isRunning: false, isWork: true, completedFocusSessions: 0, totalWorkSeconds: 0 }, kanbanTasks: {}, markdownNote: '', snippets: [], preferences: {} });
    tick();
    fixture.detectChanges();

    // Simulate updating timer durations
    const timer = fixture.debugElement.query(By.directive(FocusTimer)).componentInstance;
    timer.workDuration = 30;
    timer.breakDuration = 10;
    timer.updateDurations();
    const putReq = httpMock.expectOne(req => req.url.endsWith('/user/focus-timer'));
    expect(putReq.request.method).toBe('PUT');
    putReq.flush({});
    tick();
    fixture.detectChanges();
    expect(timer.workDuration).toBe(30);
    expect(timer.breakDuration).toBe(10);

    // Simulate reset
    timer.reset();
    const putReq2 = httpMock.expectOne(req => req.url.endsWith('/user/focus-timer'));
    expect(putReq2.request.method).toBe('PUT');
    putReq2.flush({});
    tick();
    fixture.detectChanges();
    expect(timer.timeLeft).toBe(30 * 60);
  }));
}); 