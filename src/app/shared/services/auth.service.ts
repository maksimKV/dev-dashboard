import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Task } from '../models/task.model';
import { Snippet } from '../models/snippet.model';

export interface User {
  id: string;
  email: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

export interface FocusTimer {
  workDuration: number;
  breakDuration: number;
  timeLeft: number;
  isRunning: boolean;
  isWork: boolean;
  completedFocusSessions: number;
  totalWorkSeconds: number;
}

export interface Preferences {
  defaultLandingPage: string;
  focusDuration: number;
  breakDuration: number;
  features: {
    tasks: boolean;
    notes: boolean;
    timer: boolean;
    snippets: boolean;
    stats: boolean;
  };
  sidebarPosition: string;
  compactMode: boolean;
  fontSize: string;
  highContrast: boolean;
  keyboardShortcuts: boolean;
}

export interface UserData {
  kanbanTasks: {
    todo: Task[];
    inProgress: Task[];
    done: Task[];
  };
  focusTimer: FocusTimer;
  markdownNote: string;
  snippets: Snippet[];
  preferences: Preferences;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private tokenSubject = new BehaviorSubject<string | null>(null);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  currentUser$ = this.currentUserSubject.asObservable();
  token$ = this.tokenSubject.asObservable();
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private apiUrl = 'http://localhost:4000/api';
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.loadStoredAuth();
    }
  }

  private loadStoredAuth() {
    if (!this.isBrowser) return;
    
    const token = localStorage.getItem('auth_token');
    const user = localStorage.getItem('auth_user');
    
    if (token && user) {
      try {
        this.tokenSubject.next(token);
        this.currentUserSubject.next(JSON.parse(user));
        this.isAuthenticatedSubject.next(true);
      } catch (error) {
        console.error('Failed to parse stored auth data:', error);
        this.clearStoredAuth();
      }
    }
  }

  private clearStoredAuth() {
    if (!this.isBrowser) return;
    
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.tokenSubject.value;
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  register(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, {
      email,
      password
    });
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, {
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

  setAuth(token: string, user: User) {
    if (this.isBrowser) {
      localStorage.setItem('auth_token', token);
      localStorage.setItem('auth_user', JSON.stringify(user));
    }
    this.tokenSubject.next(token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  // User data API methods
  getUserData(): Observable<UserData> {
    return this.http.get<UserData>(`${this.apiUrl}/user/data`, {
      headers: this.getAuthHeaders()
    });
  }

  updateKanbanTasks(kanbanTasks: { todo: Task[]; inProgress: Task[]; done: Task[] }): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/user/kanban-tasks`, { kanbanTasks }, {
      headers: this.getAuthHeaders()
    });
  }

  updateFocusTimer(focusTimer: FocusTimer): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/user/focus-timer`, { focusTimer }, {
      headers: this.getAuthHeaders()
    });
  }

  updateMarkdownNote(markdownNote: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/user/markdown-note`, { markdownNote }, {
      headers: this.getAuthHeaders()
    });
  }

  updateSnippets(snippets: Snippet[]): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/user/snippets`, { snippets }, {
      headers: this.getAuthHeaders()
    });
  }

  updatePreferences(preferences: Preferences): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/user/preferences`, { preferences }, {
      headers: this.getAuthHeaders()
    });
  }

  resendVerification(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/resend-verification`, { email });
  }
} 