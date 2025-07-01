import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NotesPage } from '../features/notes/notes-page/notes-page';
import { AuthService } from '../shared/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  template: `<app-notes-page></app-notes-page>`,
  standalone: true,
  imports: [NotesPage]
})
class TestHostComponent {}

describe('Notes Integration', () => {
  let httpMock: HttpTestingController;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        CommonModule,
        MarkdownModule.forRoot(),
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

  it('should create, edit, and persist a note', fakeAsync(() => {
    // Simulate loading notes
    const getReq = httpMock.expectOne(req => req.url.endsWith('/user/data'));
    getReq.flush({ markdownNote: '', kanbanTasks: {}, focusTimer: {}, snippets: [], preferences: {} });
    tick();
    fixture.detectChanges();

    // Simulate editing note
    const notesPage = fixture.debugElement.query(By.directive(NotesPage)).componentInstance;
    notesPage.markdown = 'My first note';
    notesPage.saveNote();
    const putReq = httpMock.expectOne(req => req.url.endsWith('/user/markdown-note'));
    expect(putReq.request.method).toBe('PUT');
    putReq.flush({});
    tick();
    fixture.detectChanges();
    expect(notesPage.markdown).toBe('My first note');

    // Simulate clearing note
    notesPage.clearNote();
    fixture.detectChanges();
    const putReq2 = httpMock.expectOne(req => req.url.endsWith('/user/markdown-note'));
    expect(putReq2.request.method).toBe('PUT');
    putReq2.flush({});
    tick();
    fixture.detectChanges();
    expect(notesPage.markdown).toBe('');
  }));
}); 