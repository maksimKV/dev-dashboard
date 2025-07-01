import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email-verification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="verification-container">
      <div class="verification-card">
        <div *ngIf="!isLoading && !error && !success">
          <h2>Verifying Your Email</h2>
          <p>Please wait while we verify your email address...</p>
        </div>
        
        <div *ngIf="isLoading">
          <h2>Verifying Your Email</h2>
          <div class="loading-spinner"></div>
          <p>Please wait...</p>
        </div>
        
        <div *ngIf="error" class="error-state">
          <h2>Verification Failed</h2>
          <p>{{ error }}</p>
          <button (click)="goToLogin()" class="btn-primary">Go to Login</button>
        </div>
        
        <div *ngIf="success" class="success-state">
          <h2>Email Verified Successfully!</h2>
          <p>{{ success }}</p>
          <button (click)="goToLogin()" class="btn-primary">Go to Login</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .verification-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }
    
    .verification-card {
      background: white;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      width: 100%;
      max-width: 400px;
      text-align: center;
    }
    
    h2 {
      margin-bottom: 20px;
      color: #333;
      font-size: 24px;
      font-weight: 600;
    }
    
    p {
      color: #666;
      margin-bottom: 20px;
      line-height: 1.5;
    }
    
    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #667eea;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .error-state {
      color: #c33;
    }
    
    .success-state {
      color: #3c3;
    }
    
    .btn-primary {
      padding: 12px 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s ease;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
    }
  `]
})
export class EmailVerificationComponent implements OnInit {
  isLoading = true;
  error = '';
  success = '';
  private apiUrl = 'http://localhost:4000/api';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.verifyEmail();
  }

  verifyEmail() {
    const token = this.route.snapshot.queryParams['token'];
    
    if (!token) {
      this.error = 'Invalid verification link. Please check your email and try again.';
      this.isLoading = false;
      return;
    }

    this.http.get(`${this.apiUrl}/auth/verify-email?token=${token}`).subscribe({
      next: (response: any) => {
        this.success = response.message;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = error.error?.error || 'Verification failed. Please try again.';
        this.isLoading = false;
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
} 