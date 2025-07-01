import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SnippetsPage } from '../features/snippets/snippets-page/snippets-page';
import { AuthService } from '../shared/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightJS } from 'ngx-highlightjs';

@Component({
  template: `<app-snippets-page></app-snippets-page>`,
  standalone: true,
  imports: [SnippetsPage]
})
class TestHostComponent {}

describe('Snippets Integration', () => {
  let httpMock: HttpTestingController;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        CommonModule,
        HighlightModule,
        TestHostComponent
      ],
      providers: [
        AuthService,
        { provide: HIGHLIGHT_OPTIONS, useValue: { coreLibraryLoader: () => Promise.resolve({}), languages: {} } },
        { provide: HighlightJS, useValue: { highlight: () => ({ value: '', language: '' }), highlightAuto: () => ({ value: '', language: '' }) } }
      ]
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add, edit, delete, and persist snippets', fakeAsync(() => {
    // Simulate loading snippets
    const getReq = httpMock.expectOne(req => req.url.endsWith('/user/data'));
    getReq.flush({ snippets: [], kanbanTasks: {}, markdownNote: '', focusTimer: {}, preferences: {} });
    tick();
    fixture.detectChanges();

    // Simulate adding a snippet
    const snippetsPage = fixture.debugElement.query(By.directive(SnippetsPage)).componentInstance;
    snippetsPage.newSnippet = { title: 'Test Snippet', code: 'console.log(1);', language: 'javascript', tags: [] };
    snippetsPage.addOrUpdateSnippet();
    const putReq = httpMock.expectOne(req => req.url.endsWith('/user/snippets'));
    expect(putReq.request.method).toBe('PUT');
    putReq.flush({});
    tick();
    fixture.detectChanges();
    expect(snippetsPage.snippets.length).toBe(1);
    expect(snippetsPage.snippets[0].title).toBe('Test Snippet');

    // Simulate editing a snippet
    snippetsPage.editSnippet(snippetsPage.snippets[0]);
    snippetsPage.newSnippet.code = 'console.log(2);';
    snippetsPage.addOrUpdateSnippet();
    const putReq2 = httpMock.expectOne(req => req.url.endsWith('/user/snippets'));
    expect(putReq2.request.method).toBe('PUT');
    putReq2.flush({});
    tick();
    fixture.detectChanges();
    expect(snippetsPage.snippets[0].code).toBe('console.log(2);');

    // Simulate deleting a snippet
    snippetsPage.deleteSnippet(snippetsPage.snippets[0].id);
    const putReq3 = httpMock.expectOne(req => req.url.endsWith('/user/snippets'));
    expect(putReq3.request.method).toBe('PUT');
    putReq3.flush({});
    tick();
    fixture.detectChanges();
    expect(snippetsPage.snippets.length).toBe(0);
  }));
}); 