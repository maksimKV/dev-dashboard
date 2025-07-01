import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnippetsPage } from './snippets-page';
import { AuthService } from '../../../shared/services/auth.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule, MatChipListbox, MatChipOption } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { HighlightModule } from 'ngx-highlightjs';

describe('SnippetsPage', () => {
  let component: SnippetsPage;
  let fixture: ComponentFixture<SnippetsPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let clipboardSpy: jasmine.SpyObj<Clipboard>;
  let cdrSpy: jasmine.SpyObj<ChangeDetectorRef>;

  beforeEach(async () => {
    authServiceSpy = {
      updateSnippets: jasmine.createSpy('updateSnippets').and.returnValue(of({})),
      getUserData: jasmine.createSpy('getUserData').and.returnValue(of({ snippets: [] }))
    } as any;
    clipboardSpy = jasmine.createSpyObj('Clipboard', ['copy']);
    cdrSpy = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);
    await TestBed.configureTestingModule({
      imports: [
        SnippetsPage,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatChipListbox,
        MatChipOption,
        MatSelectModule,
        HighlightModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Clipboard, useValue: clipboardSpy },
        { provide: ChangeDetectorRef, useValue: cdrSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SnippetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new snippet', () => {
    component.isBrowser = true;
    component.newSnippet = { title: 'A', code: 'B', language: 'typescript', tags: [] };
    spyOn(component, 'saveSnippets');
    component.addOrUpdateSnippet();
    expect(component.snippets.length).toBe(1);
    expect(component.saveSnippets).toHaveBeenCalled();
  });

  it('should update an existing snippet', () => {
    component.isBrowser = true;
    component.snippets = [{ id: '1', title: 'A', code: 'B', language: 'typescript', tags: [], createdAt: 1, updatedAt: 1 }];
    component.editingId = '1';
    component.newSnippet = { title: 'C', code: 'D', language: 'typescript', tags: [] };
    spyOn(component, 'saveSnippets');
    component.addOrUpdateSnippet();
    expect(component.snippets[0].title).toBe('C');
    expect(component.saveSnippets).toHaveBeenCalled();
  });

  it('should edit a snippet', () => {
    const snippet = { id: '1', title: 'A', code: 'B', language: 'typescript', tags: [], createdAt: 1, updatedAt: 1 };
    component.editSnippet(snippet);
    expect(component.editingId).toBe('1');
    expect(component.newSnippet.title).toBe('A');
  });

  it('should delete a snippet', () => {
    component.snippets = [{ id: '1', title: 'A', code: 'B', language: 'typescript', tags: [], createdAt: 1, updatedAt: 1 }];
    spyOn(component, 'saveSnippets');
    component.deleteSnippet('1');
    expect(component.snippets.length).toBe(0);
    expect(component.saveSnippets).toHaveBeenCalled();
  });

  it('should copy a snippet', () => {
    component.copySnippet('code');
    expect(clipboardSpy.copy).toHaveBeenCalledWith('code');
  });

  it('should save and load snippets', () => {
    component.isBrowser = true;
    authServiceSpy.updateSnippets.and.returnValue(of(void 0));
    authServiceSpy.getUserData.and.returnValue(of({ snippets: [] } as any));
    component.saveSnippets();
    expect(authServiceSpy.updateSnippets).toHaveBeenCalled();
    component.loadSnippets();
    expect(authServiceSpy.getUserData).toHaveBeenCalled();
  });

  it('should add and remove tags', () => {
    component.newSnippet = { title: '', code: '', language: '', tags: [] };
    const input = { value: 'tag1' } as any;
    component.addTag(input);
    expect(component.newSnippet.tags).toContain('tag1');
    component.removeTag('tag1');
    expect(component.newSnippet.tags).not.toContain('tag1');
  });
});
