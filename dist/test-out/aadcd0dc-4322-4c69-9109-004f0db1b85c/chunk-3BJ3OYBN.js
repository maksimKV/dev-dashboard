import {
  BehaviorSubject,
  HttpClient,
  HttpHeaders,
  Inject,
  Injectable,
  PLATFORM_ID,
  __decorate,
  __esm,
  init_common,
  init_core,
  init_esm,
  init_http,
  init_tslib_es6,
  isPlatformBrowser
} from "./chunk-4OKOT362.js";

// src/environments/environment.ts
var environment;
var init_environment = __esm({
  "src/environments/environment.ts"() {
    "use strict";
    environment = {
      appVersion: "1.0.1",
      author: "Maksim Kanev",
      production: false,
      apiUrl: "http://localhost:4000/api"
    };
  }
});

// src/app/shared/services/auth.service.ts
var AuthService;
var init_auth_service = __esm({
  "src/app/shared/services/auth.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    init_http();
    init_common();
    init_environment();
    AuthService = class AuthService2 {
      http;
      platformId;
      currentUserSubject = new BehaviorSubject(null);
      tokenSubject = new BehaviorSubject(null);
      isAuthenticatedSubject = new BehaviorSubject(false);
      currentUser$ = this.currentUserSubject.asObservable();
      token$ = this.tokenSubject.asObservable();
      isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
      apiUrl = environment.apiUrl;
      isBrowser;
      constructor(http, platformId) {
        this.http = http;
        this.platformId = platformId;
        this.isBrowser = isPlatformBrowser(this.platformId);
        if (this.isBrowser) {
          this.loadStoredAuth();
        }
      }
      loadStoredAuth() {
        if (!this.isBrowser)
          return;
        const token = localStorage.getItem("auth_token");
        const user = localStorage.getItem("auth_user");
        if (token && user) {
          try {
            this.tokenSubject.next(token);
            this.currentUserSubject.next(JSON.parse(user));
            this.isAuthenticatedSubject.next(true);
          } catch (error) {
            console.error("Failed to parse stored auth data:", error);
            this.clearStoredAuth();
          }
        }
      }
      clearStoredAuth() {
        if (!this.isBrowser)
          return;
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user");
      }
      getAuthHeaders() {
        const token = this.tokenSubject.value;
        return new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        });
      }
      register(email, password) {
        return this.http.post(`${this.apiUrl}/auth/register`, {
          email,
          password
        });
      }
      login(email, password) {
        return this.http.post(`${this.apiUrl}/auth/login`, {
          email,
          password
        });
      }
      logout() {
        this.clearStoredAuth();
        this.tokenSubject.next(null);
        this.currentUserSubject.next(null);
        this.isAuthenticatedSubject.next(false);
      }
      setAuth(token, user) {
        if (this.isBrowser) {
          localStorage.setItem("auth_token", token);
          localStorage.setItem("auth_user", JSON.stringify(user));
        }
        this.tokenSubject.next(token);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
      }
      getCurrentUser() {
        return this.currentUserSubject.value;
      }
      getToken() {
        return this.tokenSubject.value;
      }
      isAuthenticated() {
        return this.isAuthenticatedSubject.value;
      }
      // User data API methods
      getUserData() {
        return this.http.get(`${this.apiUrl}/user/data`, {
          headers: this.getAuthHeaders()
        });
      }
      updateKanbanTasks(kanbanTasks) {
        return this.http.put(`${this.apiUrl}/user/kanban-tasks`, { kanbanTasks }, {
          headers: this.getAuthHeaders()
        });
      }
      updateFocusTimer(focusTimer) {
        return this.http.put(`${this.apiUrl}/user/focus-timer`, { focusTimer }, {
          headers: this.getAuthHeaders()
        });
      }
      updateMarkdownNote(markdownNote) {
        return this.http.put(`${this.apiUrl}/user/markdown-note`, { markdownNote }, {
          headers: this.getAuthHeaders()
        });
      }
      updateSnippets(snippets) {
        return this.http.put(`${this.apiUrl}/user/snippets`, { snippets }, {
          headers: this.getAuthHeaders()
        });
      }
      updatePreferences(preferences) {
        return this.http.put(`${this.apiUrl}/user/preferences`, { preferences }, {
          headers: this.getAuthHeaders()
        });
      }
      resendVerification(email) {
        return this.http.post(`${this.apiUrl}/auth/resend-verification`, { email });
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] }
      ];
    };
    AuthService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], AuthService);
  }
});

export {
  environment,
  init_environment,
  AuthService,
  init_auth_service
};
//# sourceMappingURL=chunk-3BJ3OYBN.js.map
