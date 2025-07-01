import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SettingsPage } from '../features/settings/settings-page/settings-page';
import { AuthService } from '../shared/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  template: `<app-settings-page></app-settings-page>`,
  standalone: true,
  imports: [SettingsPage]
})
class TestHostComponent {}

describe('Settings Integration', () => {
  let httpMock: HttpTestingController;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
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

  it('should update and persist preferences', fakeAsync(() => {
    // SettingsPage doesn't make initial HTTP requests, it loads from localStorage
    // Simulate updating preferences
    const settingsPage = fixture.debugElement.query(By.directive(SettingsPage)).componentInstance;
    settingsPage.fontSize = 'large';
    
    // This will trigger saveAllPrefsToBackend() which calls updatePreferences()
    settingsPage.saveProductivityPrefs();
    
    // Expect and flush the preferences update request
    const putReq = httpMock.expectOne(req => req.url === `${environment.apiUrl}/user/preferences`);
    expect(putReq.request.method).toBe('PUT');
    putReq.flush({});
    tick();
    fixture.detectChanges();
    expect(settingsPage.fontSize).toBe('large');
  }));
}); 