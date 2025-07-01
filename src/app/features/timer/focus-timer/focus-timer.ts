import { Component, OnDestroy, Inject, PLATFORM_ID, ChangeDetectorRef, OnInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-focus-timer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './focus-timer.html',
  styleUrl: './focus-timer.scss',
})
export class FocusTimer implements OnInit, OnDestroy {
  workDuration = 25; // minutes
  breakDuration = 5; // minutes
  timeLeft = this.workDuration * 60; // seconds
  isRunning = false;
  isWork = true;
  intervalId: ReturnType<typeof setInterval> | null = null;

  completedFocusSessions = 0;
  totalWorkSeconds = 0;
  isBrowser: boolean;
  isLoading = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, 
    private cdr: ChangeDetectorRef,
    private authService: AuthService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.loadState();
    }
  }

  get minutes() {
    return Math.floor(this.timeLeft / 60).toString().padStart(2, '0');
  }
  get seconds() {
    return (this.timeLeft % 60).toString().padStart(2, '0');
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.intervalId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        if (this.isWork) this.totalWorkSeconds++;
      } else {
        this.isRunning = false;
        clearInterval(this.intervalId as any);
        if (this.isWork) {
          this.completedFocusSessions++;
          this.isWork = false;
          this.timeLeft = this.breakDuration * 60;
        } else {
          this.isWork = true;
          this.timeLeft = this.workDuration * 60;
        }
        this.saveState();
        this.start(); // auto-start next interval
      }
      this.saveState();
      this.cdr.markForCheck(); // Ensure UI updates
    }, 1000);
  }

  pause() {
    this.isRunning = false;
    clearInterval(this.intervalId as any);
    this.saveState();
  }

  reset() {
    this.isRunning = false;
    clearInterval(this.intervalId as any);
    this.timeLeft = this.isWork ? this.workDuration * 60 : this.breakDuration * 60;
    this.saveState();
  }

  updateDurations() {
    if (this.isWork) {
      this.timeLeft = this.workDuration * 60;
    } else {
      this.timeLeft = this.breakDuration * 60;
    }
    this.saveState();
  }

  saveState() {
    if (!this.isBrowser) return;
    
    const state = {
      workDuration: this.workDuration,
      breakDuration: this.breakDuration,
      timeLeft: this.timeLeft,
      isRunning: this.isRunning,
      isWork: this.isWork,
      completedFocusSessions: this.completedFocusSessions,
      totalWorkSeconds: this.totalWorkSeconds
    };

    this.authService.updateFocusTimer(state).subscribe({
      next: () => {
        console.log('Timer state saved successfully');
      },
      error: (error) => {
        console.error('Failed to save timer state:', error);
        // Fallback to localStorage if API fails
        localStorage.setItem('focus-timer', JSON.stringify(state));
      }
    });
  }

  loadState() {
    if (!this.isBrowser) return;
    
    this.isLoading = true;
    this.authService.getUserData().subscribe({
      next: (userData) => {
        const s = userData.focusTimer || {};
        this.workDuration = s.workDuration ?? 25;
        this.breakDuration = s.breakDuration ?? 5;
        this.timeLeft = s.timeLeft ?? this.workDuration * 60;
        this.isRunning = false; // always start paused
        this.isWork = s.isWork ?? true;
        this.completedFocusSessions = s.completedFocusSessions ?? 0;
        this.totalWorkSeconds = s.totalWorkSeconds ?? 0;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Failed to load timer state from API:', error);
        // Fallback to localStorage
        const data = localStorage.getItem('focus-timer');
        if (data) {
          try {
            const s = JSON.parse(data);
            this.workDuration = s.workDuration ?? 25;
            this.breakDuration = s.breakDuration ?? 5;
            this.timeLeft = s.timeLeft ?? this.workDuration * 60;
            this.isRunning = false; // always start paused
            this.isWork = s.isWork ?? true;
            this.completedFocusSessions = s.completedFocusSessions ?? 0;
            this.totalWorkSeconds = s.totalWorkSeconds ?? 0;
          } catch (e) {
            // fallback to defaults if corrupted
            this.workDuration = 25;
            this.breakDuration = 5;
            this.timeLeft = 25 * 60;
            this.isRunning = false;
            this.isWork = true;
            this.completedFocusSessions = 0;
            this.totalWorkSeconds = 0;
            console.error('Failed to parse focus-timer data:', e);
          }
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId as any);
  }
}
