import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotesPage } from './notes-page';
import { AuthService } from '../../../shared/services/auth.service';
import { ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('NotesPage', () => {
  let component: NotesPage;
  let fixture: ComponentFixture<NotesPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let cdrSpy: jasmine.SpyObj<ChangeDetectorRef>;

  beforeEach(async () => {
    authServiceSpy = {
      updateMarkdownNote: jasmine.createSpy('updateMarkdownNote').and.returnValue(of({})),
      getUserData: jasmine.createSpy('getUserData').and.returnValue(of({ markdownNote: '' }))
    } as any;
    cdrSpy = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);
    await TestBed.configureTestingModule({
      imports: [
        NotesPage,
        CommonModule,
        FormsModule,
        MarkdownModule.forRoot(),
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: ChangeDetectorRef, useValue: cdrSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save note', () => {
    component.isBrowser = true;
    component.markdown = 'test note';
    authServiceSpy.updateMarkdownNote.and.returnValue(of(void 0));
    spyOn(localStorage, 'setItem');
    component.saveNote();
    expect(authServiceSpy.updateMarkdownNote).toHaveBeenCalledWith('test note');
    expect(localStorage.setItem).toHaveBeenCalledWith('markdown-note', 'test note');
  });

  it('should load note', () => {
    component.isBrowser = true;
    authServiceSpy.getUserData.and.returnValue(of({ markdownNote: 'loaded note' } as any));
    component.loadNote();
    expect(component.markdown).toBe('loaded note');
    expect(authServiceSpy.getUserData).toHaveBeenCalled();
  });

  it('should clear note', () => {
    component.isBrowser = true;
    component.markdown = 'something';
    spyOn(component, 'saveNote');
    component.clearNote();
    expect(component.markdown).toBe('');
    expect(component.saveNote).toHaveBeenCalled();
  });
});
