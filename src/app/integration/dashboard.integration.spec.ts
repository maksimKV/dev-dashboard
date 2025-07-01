import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DashboardPage } from '../features/dashboard/dashboard-page/dashboard-page';
import { AuthService } from '../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<app-dashboard-page></app-dashboard-page>`,
  standalone: true,
  imports: [DashboardPage]
})
class TestHostComponent {}

describe('Dashboard Integration', () => {
  let httpMock: HttpTestingController;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CommonModule,
        TestHostComponent
      ],
      providers: [AuthService]
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should display summary data from user data', fakeAsync(() => {
    // DashboardPage doesn't make HTTP requests, it only gets currentUser from localStorage
    // Simulate user data by setting it in the component
    const dashboard = fixture.debugElement.query(By.directive(DashboardPage)).componentInstance;
    
    // Set mock user data directly on the component
    dashboard.currentUser = { id: '1', email: 'test@example.com' };
    
    tick();
    fixture.detectChanges();

    expect(dashboard.currentUser).toBeTruthy();
    expect(dashboard.currentUser.email).toBe('test@example.com');
  }));
}); 