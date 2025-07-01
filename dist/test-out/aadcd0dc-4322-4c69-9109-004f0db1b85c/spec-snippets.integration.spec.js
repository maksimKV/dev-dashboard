import {
  HIGHLIGHT_OPTIONS,
  HighlightJS,
  HighlightModule,
  SnippetsPage,
  init_ngx_highlightjs,
  init_snippets_page
} from "./chunk-4C57Q5FY.js";
import "./chunk-RBW725AG.js";
import "./chunk-GNF3VMVX.js";
import "./chunk-II4XOFPX.js";
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

// src/app/integration/snippets.integration.spec.ts
var require_snippets_integration_spec = __commonJS({
  "src/app/integration/snippets.integration.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_testing2();
    init_snippets_page();
    init_auth_service();
    init_forms();
    init_common();
    init_core();
    init_platform_browser();
    init_ngx_highlightjs();
    var TestHostComponent = class TestHostComponent {
    };
    TestHostComponent = __decorate([
      Component({
        template: `<app-snippets-page></app-snippets-page>`,
        standalone: true,
        imports: [SnippetsPage]
      })
    ], TestHostComponent);
    describe("Snippets Integration", () => {
      let httpMock;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
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
            { provide: HighlightJS, useValue: { highlight: () => ({ value: "", language: "" }), highlightAuto: () => ({ value: "", language: "" }) } }
          ]
        }).compileComponents();
        httpMock = TestBed.inject(HttpTestingController);
        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();
      }));
      afterEach(() => {
        httpMock.verify();
      });
      it("should add, edit, delete, and persist snippets", fakeAsync(() => {
        const getReq = httpMock.expectOne((req) => req.url.endsWith("/user/data"));
        getReq.flush({ snippets: [], kanbanTasks: {}, markdownNote: "", focusTimer: {}, preferences: {} });
        tick();
        fixture.detectChanges();
        const snippetsPage = fixture.debugElement.query(By.directive(SnippetsPage)).componentInstance;
        snippetsPage.newSnippet = { title: "Test Snippet", code: "console.log(1);", language: "javascript", tags: [] };
        snippetsPage.addOrUpdateSnippet();
        const putReq = httpMock.expectOne((req) => req.url.endsWith("/user/snippets"));
        expect(putReq.request.method).toBe("PUT");
        putReq.flush({});
        tick();
        fixture.detectChanges();
        expect(snippetsPage.snippets.length).toBe(1);
        expect(snippetsPage.snippets[0].title).toBe("Test Snippet");
        snippetsPage.editSnippet(snippetsPage.snippets[0]);
        snippetsPage.newSnippet.code = "console.log(2);";
        snippetsPage.addOrUpdateSnippet();
        const putReq2 = httpMock.expectOne((req) => req.url.endsWith("/user/snippets"));
        expect(putReq2.request.method).toBe("PUT");
        putReq2.flush({});
        tick();
        fixture.detectChanges();
        expect(snippetsPage.snippets[0].code).toBe("console.log(2);");
        snippetsPage.deleteSnippet(snippetsPage.snippets[0].id);
        const putReq3 = httpMock.expectOne((req) => req.url.endsWith("/user/snippets"));
        expect(putReq3.request.method).toBe("PUT");
        putReq3.flush({});
        tick();
        fixture.detectChanges();
        expect(snippetsPage.snippets.length).toBe(0);
      }));
    });
  }
});
export default require_snippets_integration_spec();
//# sourceMappingURL=spec-snippets.integration.spec.js.map
