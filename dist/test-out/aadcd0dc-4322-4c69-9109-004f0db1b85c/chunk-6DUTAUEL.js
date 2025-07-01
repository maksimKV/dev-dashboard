import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  init_button,
  init_form_field,
  init_input
} from "./chunk-XPVP5D3K.js";
import {
  FormsModule,
  init_forms
} from "./chunk-5VCTOLDM.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-NQEXKGPT.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-3BJ3OYBN.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  Inject,
  PLATFORM_ID,
  __decorate,
  __esm,
  init_common,
  init_core,
  init_tslib_es6,
  isPlatformBrowser
} from "./chunk-4OKOT362.js";

// angular:jit:template:src\app\features\timer\focus-timer\focus-timer.html
var focus_timer_default;
var init_focus_timer = __esm({
  "angular:jit:template:src\\app\\features\\timer\\focus-timer\\focus-timer.html"() {
    focus_timer_default = `<div class="focus-timer">\r
  <form class="settings" (ngSubmit)="updateDurations()">\r
    <mat-form-field appearance="outline">\r
      <mat-label>Work (min)</mat-label>\r
      <input matInput type="number" min="1" [(ngModel)]="workDuration" name="workDuration" required />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Break (min)</mat-label>\r
      <input matInput type="number" min="1" [(ngModel)]="breakDuration" name="breakDuration" required />\r
    </mat-form-field>\r
    <button mat-raised-button color="primary" type="submit">Set</button>\r
  </form>\r
\r
  <div *ngIf="errorMessage" class="error-message">{{ errorMessage }}</div>\r
\r
  <div class="timer-display" [class.break]="!isWork">\r
    <span class="minutes">{{ minutes }}</span>:<span class="seconds">{{ seconds }}</span>\r
    <div class="interval-label">{{ isWork ? 'Work' : 'Break' }}</div>\r
  </div>\r
\r
  <div class="controls">\r
    <button mat-raised-button color="primary" (click)="start()" [disabled]="isRunning">Start</button>\r
    <button mat-raised-button color="accent" (click)="pause()" [disabled]="!isRunning">Pause</button>\r
    <button mat-raised-button color="warn" (click)="reset()">Reset</button>\r
  </div>\r
\r
  <div class="stats">\r
    <div><mat-icon>check_circle</mat-icon> Focus Sessions: {{ completedFocusSessions }}</div>\r
    <div><mat-icon>timer</mat-icon> Time worked: {{ (totalWorkSeconds / 60) | number:'1.0-0' }} min</div>\r
  </div>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\features\timer\focus-timer\focus-timer.scss
var focus_timer_default2;
var init_focus_timer2 = __esm({
  "angular:jit:style:src\\app\\features\\timer\\focus-timer\\focus-timer.scss"() {
    focus_timer_default2 = "/* src/app/features/timer/focus-timer/focus-timer.scss */\n.focus-timer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n  max-width: 400px;\n  margin: 0 auto;\n}\n.settings {\n  display: flex;\n  gap: 1rem;\n  width: 100%;\n  justify-content: center;\n}\n.timer-display {\n  font-size: 3rem;\n  font-weight: 600;\n  color: #3f51b5;\n  background: #f5f5f5;\n  border-radius: 1rem;\n  padding: 1.5rem 2.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 220px;\n}\n.timer-display.break {\n  color: #43a047;\n}\n.interval-label {\n  font-size: 1.1rem;\n  margin-top: 0.5rem;\n  color: #888;\n}\n.controls {\n  display: flex;\n  gap: 1rem;\n}\n.stats {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n  color: #555;\n  font-size: 1.1rem;\n}\n.stats mat-icon {\n  vertical-align: middle;\n  margin-right: 0.3rem;\n  color: #3f51b5;\n}\n@media (max-width: 600px) {\n  .focus-timer {\n    max-width: 100%;\n    padding: 0 1rem;\n  }\n  .timer-display {\n    min-width: 0;\n    padding: 1rem;\n    font-size: 2.2rem;\n  }\n  .settings {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=focus-timer.css.map */\n";
  }
});

// src/app/features/timer/focus-timer/focus-timer.ts
var FocusTimer;
var init_focus_timer3 = __esm({
  "src/app/features/timer/focus-timer/focus-timer.ts"() {
    "use strict";
    init_tslib_es6();
    init_focus_timer();
    init_focus_timer2();
    init_core();
    init_common();
    init_forms();
    init_button();
    init_form_field();
    init_input();
    init_icon();
    init_auth_service();
    FocusTimer = class FocusTimer2 {
      platformId;
      cdr;
      authService;
      workDuration = 25;
      // minutes
      breakDuration = 5;
      // minutes
      timeLeft = this.workDuration * 60;
      // seconds
      isRunning = false;
      isWork = true;
      intervalId = null;
      completedFocusSessions = 0;
      totalWorkSeconds = 0;
      isBrowser;
      isLoading = false;
      finishAudio = null;
      errorMessage = "";
      constructor(platformId, cdr, authService) {
        this.platformId = platformId;
        this.cdr = cdr;
        this.authService = authService;
        this.isBrowser = isPlatformBrowser(this.platformId);
      }
      ngOnInit() {
        if (this.isBrowser) {
          this.loadState();
          this.finishAudio = new Audio("/timer-finish.mp3");
          if ("Notification" in window && Notification.permission === "default") {
            Notification.requestPermission();
          }
        }
      }
      get minutes() {
        return Math.floor(this.timeLeft / 60).toString().padStart(2, "0");
      }
      get seconds() {
        return (this.timeLeft % 60).toString().padStart(2, "0");
      }
      start() {
        if (this.isRunning)
          return;
        this.isRunning = true;
        this.intervalId = setInterval(() => {
          if (this.timeLeft > 0) {
            this.timeLeft--;
            if (this.isWork)
              this.totalWorkSeconds++;
          } else {
            this.isRunning = false;
            if (this.intervalId)
              clearInterval(this.intervalId);
            this.notifyFinish();
            if (this.isWork) {
              this.completedFocusSessions++;
              this.isWork = false;
              this.timeLeft = this.breakDuration * 60;
            } else {
              this.isWork = true;
              this.timeLeft = this.workDuration * 60;
            }
            this.saveState();
            this.start();
          }
          this.saveState();
          this.cdr.markForCheck();
        }, 1e3);
      }
      pause() {
        this.isRunning = false;
        if (this.intervalId)
          clearInterval(this.intervalId);
        this.saveState();
      }
      reset() {
        this.isRunning = false;
        if (this.intervalId)
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
        if (!this.isBrowser)
          return;
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
          },
          error: () => {
            localStorage.setItem("focus-timer", JSON.stringify(state));
          }
        });
      }
      loadState() {
        if (!this.isBrowser)
          return;
        this.isLoading = true;
        this.errorMessage = "";
        this.authService.getUserData().subscribe({
          next: (userData) => {
            const s = userData.focusTimer || {};
            this.workDuration = s.workDuration ?? 25;
            this.breakDuration = s.breakDuration ?? 5;
            this.timeLeft = s.timeLeft ?? this.workDuration * 60;
            this.isRunning = false;
            this.isWork = s.isWork ?? true;
            this.completedFocusSessions = s.completedFocusSessions ?? 0;
            this.totalWorkSeconds = s.totalWorkSeconds ?? 0;
            this.isLoading = false;
            this.cdr.detectChanges();
          },
          error: () => {
            const data = localStorage.getItem("focus-timer");
            if (data) {
              try {
                const s = JSON.parse(data);
                this.workDuration = s.workDuration ?? 25;
                this.breakDuration = s.breakDuration ?? 5;
                this.timeLeft = s.timeLeft ?? this.workDuration * 60;
                this.isRunning = false;
                this.isWork = s.isWork ?? true;
                this.completedFocusSessions = s.completedFocusSessions ?? 0;
                this.totalWorkSeconds = s.totalWorkSeconds ?? 0;
              } catch {
                this.workDuration = 25;
                this.breakDuration = 5;
                this.timeLeft = 25 * 60;
                this.isRunning = false;
                this.isWork = true;
                this.completedFocusSessions = 0;
                this.totalWorkSeconds = 0;
                this.errorMessage = "Could not load your timer state from API or local storage.";
              }
            } else {
              this.workDuration = 25;
              this.breakDuration = 5;
              this.timeLeft = 25 * 60;
              this.isRunning = false;
              this.isWork = true;
              this.completedFocusSessions = 0;
              this.totalWorkSeconds = 0;
              this.errorMessage = "Could not load your timer state from API or local storage.";
            }
            this.isLoading = false;
            this.cdr.detectChanges();
          }
        });
      }
      ngOnDestroy() {
        if (this.intervalId)
          clearInterval(this.intervalId);
      }
      notifyFinish() {
        if (this.finishAudio) {
          let playCount = 0;
          const maxPlays = 6;
          const playSound = () => {
            if (!this.finishAudio)
              return;
            this.finishAudio.currentTime = 0;
            this.finishAudio.play();
            playCount++;
            if (playCount < maxPlays) {
              setTimeout(playSound, 400);
            }
          };
          playSound();
        }
        if (this.isBrowser && "Notification" in window && Notification.permission === "granted") {
          new Notification("Focus Timer", { body: this.isWork ? "Work session finished!" : "Break finished!" });
        }
      }
      static ctorParameters = () => [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] },
        { type: ChangeDetectorRef },
        { type: AuthService }
      ];
    };
    FocusTimer = __decorate([
      Component({
        selector: "app-focus-timer",
        standalone: true,
        imports: [
          CommonModule,
          FormsModule,
          MatButtonModule,
          MatFormFieldModule,
          MatInputModule,
          MatIconModule
        ],
        template: focus_timer_default,
        styles: [focus_timer_default2]
      })
    ], FocusTimer);
  }
});

export {
  FocusTimer,
  init_focus_timer3 as init_focus_timer
};
//# sourceMappingURL=chunk-6DUTAUEL.js.map
