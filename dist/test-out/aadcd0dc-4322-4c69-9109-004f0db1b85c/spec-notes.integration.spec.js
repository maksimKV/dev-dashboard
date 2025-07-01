import {
  NotesPage,
  init_notes_page
} from "./chunk-IXFUQNBT.js";
import {
  MarkdownModule,
  init_ngx_markdown
} from "./chunk-IQASRQQO.js";
import "./chunk-XPVP5D3K.js";
import "./chunk-E5SZGRLI.js";
import {
  FormsModule,
  init_forms
} from "./chunk-5VCTOLDM.js";
import "./chunk-NQEXKGPT.js";
import {
  HttpClientTestingModule,
  HttpTestingController,
  init_testing as init_testing2
} from "./chunk-DQE55PZ7.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-3BJ3OYBN.js";
import {
  By,
  init_platform_browser
} from "./chunk-3YKIIKQF.js";
import {
  CommonModule,
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  fakeAsync,
  init_common,
  init_core,
  init_testing,
  init_tslib_es6,
  tick
} from "./chunk-4OKOT362.js";

// src/app/integration/notes.integration.spec.ts
var require_notes_integration_spec = __commonJS({
  "src/app/integration/notes.integration.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_testing2();
    init_notes_page();
    init_auth_service();
    init_forms();
    init_common();
    init_core();
    init_platform_browser();
    init_ngx_markdown();
    var TestHostComponent = class TestHostComponent {
    };
    TestHostComponent = __decorate([
      Component({
        template: `<app-notes-page></app-notes-page>`,
        standalone: true,
        imports: [NotesPage]
      })
    ], TestHostComponent);
    describe("Notes Integration", () => {
      let httpMock;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
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
      }));
      afterEach(() => {
        httpMock.verify();
      });
      it("should create, edit, and persist a note", fakeAsync(() => {
        const getReq = httpMock.expectOne((req) => req.url.endsWith("/user/data"));
        getReq.flush({ markdownNote: "", kanbanTasks: {}, focusTimer: {}, snippets: [], preferences: {} });
        tick();
        fixture.detectChanges();
        const notesPage = fixture.debugElement.query(By.directive(NotesPage)).componentInstance;
        notesPage.markdown = "My first note";
        notesPage.saveNote();
        const putReq = httpMock.expectOne((req) => req.url.endsWith("/user/markdown-note"));
        expect(putReq.request.method).toBe("PUT");
        putReq.flush({});
        tick();
        fixture.detectChanges();
        expect(notesPage.markdown).toBe("My first note");
        notesPage.clearNote();
        fixture.detectChanges();
        const putReq2 = httpMock.expectOne((req) => req.url.endsWith("/user/markdown-note"));
        expect(putReq2.request.method).toBe("PUT");
        putReq2.flush({});
        tick();
        fixture.detectChanges();
        expect(notesPage.markdown).toBe("");
      }));
    });
  }
});
export default require_notes_integration_spec();
//# sourceMappingURL=spec-notes.integration.spec.js.map
