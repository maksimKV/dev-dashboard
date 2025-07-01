import {
  Router,
  init_router
} from "./chunk-SMARPGGZ.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-NQEXKGPT.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-3BJ3OYBN.js";
import {
  CommonModule,
  Component,
  __decorate,
  __esm,
  init_common,
  init_core,
  init_tslib_es6
} from "./chunk-4OKOT362.js";

// angular:jit:template:src\app\features\dashboard\dashboard-page\dashboard-page.html
var dashboard_page_default;
var init_dashboard_page = __esm({
  "angular:jit:template:src\\app\\features\\dashboard\\dashboard-page\\dashboard-page.html"() {
    dashboard_page_default = '<div class="dashboard-welcome-card">\r\n  <div class="dashboard-welcome-header">\r\n    <mat-icon class="dashboard-icon" fontIcon="dashboard"></mat-icon>\r\n    <h1>Welcome to Dev Dashboard!</h1>\r\n    <div class="user-info" *ngIf="currentUser">\r\n      <span>Welcome back, {{ currentUser.email }}!</span>\r\n      <button (click)="logout()" class="logout-btn">\r\n        <mat-icon fontIcon="logout"></mat-icon>\r\n        Logout\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <p class="dashboard-subtitle">Your personal productivity hub for developers.</p>\r\n  <ul class="dashboard-feature-list">\r\n    <li><mat-icon fontIcon="edit_note"></mat-icon> Take notes in <strong>Markdown</strong> with live preview</li>\r\n    <li><mat-icon fontIcon="view_kanban"></mat-icon> Organize tasks with the <strong>Kanban Board</strong></li>\r\n    <li><mat-icon fontIcon="timer"></mat-icon> Stay focused with the <strong>Focus Timer</strong></li>\r\n    <li><mat-icon fontIcon="code"></mat-icon> Save and search <strong>code snippets</strong></li>\r\n    <li><mat-icon fontIcon="bar_chart"></mat-icon> Track your productivity in the <strong>Stats Dashboard</strong></li>\r\n  </ul>\r\n  <p class="dashboard-get-started">Select a feature from the sidebar to get started!</p>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\features\dashboard\dashboard-page\dashboard-page.scss
var dashboard_page_default2;
var init_dashboard_page2 = __esm({
  "angular:jit:style:src\\app\\features\\dashboard\\dashboard-page\\dashboard-page.scss"() {
    dashboard_page_default2 = "/* src/app/features/dashboard/dashboard-page/dashboard-page.scss */\n.dashboard-welcome-card {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  max-width: 800px;\n  margin: 0 auto;\n}\n.dashboard-welcome-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.dashboard-welcome-header h1 {\n  margin: 0;\n  color: #333;\n  font-size: 2rem;\n  font-weight: 600;\n}\n.dashboard-welcome-header .dashboard-icon {\n  font-size: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  color: #667eea;\n}\n.dashboard-welcome-header .user-info {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 0.9rem;\n  color: #666;\n}\n.dashboard-welcome-header .user-info .logout-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.dashboard-welcome-header .user-info .logout-btn:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n.dashboard-welcome-header .user-info .logout-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.dashboard-subtitle {\n  color: #666;\n  font-size: 1.1rem;\n  margin-bottom: 2rem;\n  text-align: center;\n}\n.dashboard-feature-list {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 2rem 0;\n}\n.dashboard-feature-list li {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border-left: 4px solid #667eea;\n  transition: transform 0.2s ease;\n}\n.dashboard-feature-list li:hover {\n  transform: translateX(4px);\n}\n.dashboard-feature-list li mat-icon {\n  color: #667eea;\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.dashboard-feature-list li strong {\n  color: #333;\n}\n.dashboard-get-started {\n  text-align: center;\n  color: #666;\n  font-style: italic;\n  margin: 0;\n}\n@media (max-width: 700px) {\n  .dashboard-welcome-card {\n    padding: 1.2rem 0.7rem 1.2rem 0.7rem;\n    max-width: 98vw;\n  }\n  .dashboard-welcome-header h1 {\n    font-size: 1.3rem;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.feature-card-header mat-icon {\n  font-size: 2.2rem;\n  height: 2.2rem;\n  width: 2.2rem;\n  min-width: 2.2rem;\n  min-height: 2.2rem;\n  color: #1976d2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  vertical-align: middle;\n  position: relative;\n  top: 0;\n}\n/*# sourceMappingURL=dashboard-page.css.map */\n";
  }
});

// src/app/features/dashboard/dashboard-page/dashboard-page.ts
var DashboardPage;
var init_dashboard_page3 = __esm({
  "src/app/features/dashboard/dashboard-page/dashboard-page.ts"() {
    "use strict";
    init_tslib_es6();
    init_dashboard_page();
    init_dashboard_page2();
    init_core();
    init_icon();
    init_common();
    init_router();
    init_auth_service();
    DashboardPage = class DashboardPage2 {
      authService;
      router;
      currentUser = null;
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
      }
      ngOnInit() {
        this.currentUser = this.authService.getCurrentUser();
      }
      logout() {
        this.authService.logout();
        this.router.navigate(["/login"]);
      }
      static ctorParameters = () => [
        { type: AuthService },
        { type: Router }
      ];
    };
    DashboardPage = __decorate([
      Component({
        selector: "app-dashboard-page",
        imports: [MatIconModule, CommonModule],
        template: dashboard_page_default,
        styles: [dashboard_page_default2]
      })
    ], DashboardPage);
  }
});

export {
  DashboardPage,
  init_dashboard_page3 as init_dashboard_page
};
//# sourceMappingURL=chunk-W3W4ZKZ7.js.map
