import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsPage } from './settings-page';
import { AuthService } from '../../../shared/services/auth.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['updatePreferences']);
    await TestBed.configureTestingModule({
      imports: [
        SettingsPage,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatSlideToggleModule,
        FormsModule,
        MatIconModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should export data', () => {
    component.isBrowser = true;
    spyOn(document, 'createElement').and.returnValue({ click: () => {}, setAttribute: () => {} } as any);
    spyOn(URL, 'createObjectURL').and.returnValue('blob:url');
    spyOn(URL, 'revokeObjectURL');
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      if (key === 'kanban-tasks') return '{"todo":[],"inProgress":[],"done":[]}';
      if (key === 'focus-timer') return '{}';
      if (key === 'snippets') return '[]';
      if (key === 'markdown-note') return 'note';
      return null;
    });
    component.exportData();
    expect(URL.createObjectURL).toHaveBeenCalled();
    expect(URL.revokeObjectURL).toHaveBeenCalled();
  });

  it('should clear all data', () => {
    component.isBrowser = true;
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(localStorage, 'removeItem');
    component.clearAllData();
    expect(localStorage.removeItem).toHaveBeenCalledWith('kanban-tasks');
    expect(localStorage.removeItem).toHaveBeenCalledWith('focus-timer');
    expect(localStorage.removeItem).toHaveBeenCalledWith('markdown-note');
    expect(localStorage.removeItem).toHaveBeenCalledWith('snippets');
  });

  it('should save and load productivity prefs', () => {
    component.isBrowser = true;
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(component, 'saveAllPrefsToBackend');
    component.saveProductivityPrefs();
    expect(localStorage.setItem).toHaveBeenCalled();
    component.loadProductivityPrefs();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
