import {
  NotesPage,
  init_notes_page
} from "./chunk-IXFUQNBT.js";
import {
  MarkdownModule,
  init_ngx_markdown
} from "./chunk-IQASRQQO.js";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  init_button,
  init_form_field,
  init_input
} from "./chunk-XPVP5D3K.js";
import "./chunk-E5SZGRLI.js";
import {
  FormsModule,
  init_forms
} from "./chunk-5VCTOLDM.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-NQEXKGPT.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-3BJ3OYBN.js";
import "./chunk-3YKIIKQF.js";
import {
  ChangeDetectorRef,
  CommonModule,
  TestBed,
  __async,
  __commonJS,
  init_common,
  init_core,
  init_esm,
  init_testing,
  of
} from "./chunk-4OKOT362.js";

// src/app/features/notes/notes-page/notes-page.spec.ts
var require_notes_page_spec = __commonJS({
  "src/app/features/notes/notes-page/notes-page.spec.ts"(exports) {
    init_testing();
    init_notes_page();
    init_auth_service();
    init_core();
    init_esm();
    init_common();
    init_forms();
    init_ngx_markdown();
    init_form_field();
    init_input();
    init_button();
    init_icon();
    describe("NotesPage", () => {
      let component;
      let fixture;
      let authServiceSpy;
      let cdrSpy;
      beforeEach(() => __async(null, null, function* () {
        authServiceSpy = {
          updateMarkdownNote: jasmine.createSpy("updateMarkdownNote").and.returnValue(of({})),
          getUserData: jasmine.createSpy("getUserData").and.returnValue(of({ markdownNote: "" }))
        };
        cdrSpy = jasmine.createSpyObj("ChangeDetectorRef", ["detectChanges"]);
        yield TestBed.configureTestingModule({
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
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should save note", () => {
        component.isBrowser = true;
        component.markdown = "test note";
        authServiceSpy.updateMarkdownNote.and.returnValue(of(void 0));
        spyOn(localStorage, "setItem");
        component.saveNote();
        expect(authServiceSpy.updateMarkdownNote).toHaveBeenCalledWith("test note");
        expect(localStorage.setItem).toHaveBeenCalledWith("markdown-note", "test note");
      });
      it("should load note", () => {
        component.isBrowser = true;
        authServiceSpy.getUserData.and.returnValue(of({ markdownNote: "loaded note" }));
        component.loadNote();
        expect(component.markdown).toBe("loaded note");
        expect(authServiceSpy.getUserData).toHaveBeenCalled();
      });
      it("should clear note", () => {
        component.isBrowser = true;
        component.markdown = "something";
        spyOn(component, "saveNote");
        component.clearNote();
        expect(component.markdown).toBe("");
        expect(component.saveNote).toHaveBeenCalled();
      });
    });
  }
});
export default require_notes_page_spec();
//# sourceMappingURL=spec-notes-page.spec.js.map
