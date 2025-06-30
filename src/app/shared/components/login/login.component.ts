import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <h2>{{ isLoginMode ? 'Login' : 'Register' }}</h2>
        
        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              [(ngModel)]="username"
              required
              class="form-control"
              placeholder="Enter username"
            />
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              [(ngModel)]="password"
              required
              class="form-control"
              placeholder="Enter password"
              minlength="6"
            />
          </div>
          
          <div class="form-actions">
            <button type="submit" [disabled]="!loginForm.valid || isLoading" class="btn-primary">
              {{ isLoading ? 'Loading...' : (isLoginMode ? 'Login' : 'Register') }}
            </button>
          </div>
        </form>
        
        <div class="toggle-mode">
          <button type="button" (click)="toggleMode()" class="btn-link">
            {{ isLoginMode ? 'Need an account? Register' : 'Have an account? Login' }}
          </button>
        </div>
        
        <div *ngIf="error" class="error-message">
          {{ error }}
        </div>
        
        <div *ngIf="success" class="success-message">
          {{ success }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }
    
    .login-card {
      background: white;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      width: 100%;
      max-width: 400px;
    }
    
    h2 {
      text-align: center;
      margin-bottom: 30px;
      color: #333;
      font-size: 28px;
      font-weight: 600;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    label {
      display: block;
      margin-bottom: 8px;
      color: #555;
      font-weight: 500;
    }
    
    .form-control {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #e1e5e9;
      border-radius: 8px;
      font-size: 16px;
      transition: border-color 0.3s ease;
      box-sizing: border-box;
    }
    
    .form-control:focus {
      outline: none;
      border-color: #667eea;
    }
    
    .form-actions {
      margin-top: 30px;
    }
    
    .btn-primary {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s ease;
    }
    
    .btn-primary:hover:not(:disabled) {
      transform: translateY(-2px);
    }
    
    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .toggle-mode {
      text-align: center;
      margin-top: 20px;
    }
    
    .btn-link {
      background: none;
      border: none;
      color: #667eea;
      cursor: pointer;
      font-size: 14px;
      text-decoration: underline;
    }
    
    .btn-link:hover {
      color: #764ba2;
    }
    
    .error-message {
      margin-top: 20px;
      padding: 12px;
      background: #fee;
      border: 1px solid #fcc;
      border-radius: 6px;
      color: #c33;
      text-align: center;
    }
    
    .success-message {
      margin-top: 20px;
      padding: 12px;
      background: #efe;
      border: 1px solid #cfc;
      border-radius: 6px;
      color: #3c3;
      text-align: center;
    }
  `]
})
export class LoginComponent {
  username = '';
  password = '';
  isLoginMode = true;
  isLoading = false;
  error = '';
  success = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.error = '';
    this.success = '';
  }

  onSubmit() {
    if (!this.username || !this.password) {
      this.error = 'Please fill in all fields';
      return;
    }

    this.isLoading = true;
    this.error = '';
    this.success = '';

    const authObservable = this.isLoginMode 
      ? this.authService.login(this.username, this.password)
      : this.authService.register(this.username, this.password);

    authObservable.subscribe({
      next: (response) => {
        this.authService.setAuth(response.token, response.user);
        this.success = response.message;
        this.isLoading = false;
        
        // Redirect to dashboard after successful auth
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      },
      error: (error) => {
        this.error = error.error?.error || 'An error occurred';
        this.isLoading = false;
      }
    });
  }
} 