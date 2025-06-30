import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

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
export class FocusTimer implements OnDestroy {
  workDuration = 25; // minutes
  breakDuration = 5; // minutes
  timeLeft = this.workDuration * 60; // seconds
  isRunning = false;
  isWork = true;
  intervalId: any = null;

  completedFocusSessions = 0;
  totalWorkSeconds = 0;

  constructor() {
    this.loadState();
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
        clearInterval(this.intervalId);
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
    }, 1000);
  }

  pause() {
    this.isRunning = false;
    clearInterval(this.intervalId);
    this.saveState();
  }

  reset() {
    this.isRunning = false;
    clearInterval(this.intervalId);
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
    localStorage.setItem('focus-timer', JSON.stringify({
      workDuration: this.workDuration,
      breakDuration: this.breakDuration,
      timeLeft: this.timeLeft,
      isRunning: this.isRunning,
      isWork: this.isWork,
      completedFocusSessions: this.completedFocusSessions,
      totalWorkSeconds: this.totalWorkSeconds
    }));
  }

  loadState() {
    const data = localStorage.getItem('focus-timer');
    if (data) {
      const s = JSON.parse(data);
      this.workDuration = s.workDuration ?? 25;
      this.breakDuration = s.breakDuration ?? 5;
      this.timeLeft = s.timeLeft ?? this.workDuration * 60;
      this.isRunning = false; // always start paused
      this.isWork = s.isWork ?? true;
      this.completedFocusSessions = s.completedFocusSessions ?? 0;
      this.totalWorkSeconds = s.totalWorkSeconds ?? 0;
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
