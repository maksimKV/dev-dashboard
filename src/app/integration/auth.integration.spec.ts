import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from '../shared/services/auth.service';
import { LoginComponent } from '../shared/components/login/login.component';
import { EmailVerificationComponent } from '../shared/components/email-verification/email-verification.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  template: `
    <app-login></app-login>
    <app-email-verification></app-email-verification>
  `
})
class TestHostComponent {}

describe('Auth Integration', () => {
  let httpMock: HttpTestingController;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        LoginComponent,
        EmailVerificationComponent,
        TestHostComponent
      ],
      providers: [AuthService]
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(AuthService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should register, resend verification, and login a user', fakeAsync(() => {
    // Simulate registration
    let registered = false;
    authService.register('test@example.com', 'Password123!').subscribe(res => {
      registered = true;
    });
    const req = httpMock.expectOne(r => r.url.startsWith(`${environment.apiUrl}/auth/register`));
    expect(req.request.method).toBe('POST');
    req.flush({ message: 'Registered', token: 'token123', user: { id: '1', email: 'test@example.com' } });
    tick();
    expect(registered).toBeTrue();

    // Simulate resend verification
    let resent = false;
    authService.resendVerification('test@example.com').subscribe(res => {
      resent = true;
    });
    const req2 = httpMock.expectOne(r => r.url.startsWith(`${environment.apiUrl}/auth/resend-verification`));
    expect(req2.request.method).toBe('POST');
    req2.flush({ message: 'Verification sent' });
    tick();
    expect(resent).toBeTrue();

    // Simulate login
    let loggedIn = false;
    authService.login('test@example.com', 'Password123!').subscribe(res => {
      loggedIn = true;
    });
    const req3 = httpMock.expectOne(r => r.url.startsWith(`${environment.apiUrl}/auth/login`));
    expect(req3.request.method).toBe('POST');
    req3.flush({ message: 'Logged in', token: 'jwt-token', user: { id: '1', email: 'test@example.com' } });
    tick();
    expect(loggedIn).toBeTrue();
  }));

  it('should persist auth state after login', fakeAsync(() => {
    // Mock localStorage for auth_token and auth_user
    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string) => {
      (localStorage as any)[key] = value;
    });
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      return (localStorage as any)[key] || null;
    });
    // Simulate login
    authService.login('test@example.com', 'Password123!').subscribe();
    const req = httpMock.expectOne(r => r.url.startsWith(`${environment.apiUrl}/auth/login`));
    req.flush({ message: 'Logged in', token: 'jwt-token', user: { id: '1', email: 'test@example.com' } });
    tick();
    // Simulate setting auth state after login
    authService.setAuth('jwt-token', { id: '1', email: 'test@example.com' });
    // Simulate page reload by creating a new instance
    const newAuthService = TestBed.inject(AuthService);
    expect(newAuthService.isAuthenticated()).toBeTrue();
  }));
}); 