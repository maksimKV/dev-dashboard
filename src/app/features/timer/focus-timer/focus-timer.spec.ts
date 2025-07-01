import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FocusTimer } from './focus-timer';
import { AuthService } from '../../../shared/services/auth.service';
import { ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

describe('FocusTimer', () => {
  let component: FocusTimer;
  let fixture: ComponentFixture<FocusTimer>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let cdrSpy: jasmine.SpyObj<ChangeDetectorRef>;

  beforeEach(async () => {
    authServiceSpy = {
      updateFocusTimer: jasmine.createSpy('updateFocusTimer').and.returnValue(of({})),
      getUserData: jasmine.createSpy('getUserData').and.returnValue(of({ focusTimer: {} }))
    } as any;
    cdrSpy = jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck', 'detectChanges']);
    await TestBed.configureTestingModule({
      imports: [
        FocusTimer,
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: ChangeDetectorRef, useValue: cdrSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FocusTimer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start and pause the timer', () => {
    spyOn(window, 'setInterval').and.callFake((fn: any) => { fn(); return 1 as any; });
    spyOn(window, 'clearInterval');
    component.timeLeft = 2;
    component.isWork = true;
    component.isRunning = false;
    component.start();
    expect(component.isRunning).toBeTrue();
    component.pause();
    expect(component.isRunning).toBeFalse();
    expect(window.clearInterval).toHaveBeenCalled();
  });

  it('should reset the timer', () => {
    spyOn(window, 'clearInterval');
    component.isWork = true;
    component.workDuration = 10;
    component.breakDuration = 5;
    component.timeLeft = 1;
    component.isRunning = true;
    component.reset();
    expect(component.isRunning).toBeFalse();
    expect(component.timeLeft).toBe(600);
    component.isWork = false;
    component.reset();
    expect(component.timeLeft).toBe(300);
  });

  it('should update durations', () => {
    component.isWork = true;
    component.workDuration = 15;
    component.updateDurations();
    expect(component.timeLeft).toBe(900);
    component.isWork = false;
    component.breakDuration = 7;
    component.updateDurations();
    expect(component.timeLeft).toBe(420);
  });

  it('should call saveState and loadState', () => {
    authServiceSpy.updateFocusTimer.and.returnValue(of(void 0));
    authServiceSpy.getUserData.and.returnValue(of({
      focusTimer: {
        workDuration: 20,
        breakDuration: 10,
        timeLeft: 1200,
        isRunning: false,
        isWork: true,
        completedFocusSessions: 2,
        totalWorkSeconds: 1000
      }
    } as any));
    component.isBrowser = true;
    component.saveState();
    expect(authServiceSpy.updateFocusTimer).toHaveBeenCalled();
    component.loadState();
    expect(authServiceSpy.getUserData).toHaveBeenCalled();
  });
});
