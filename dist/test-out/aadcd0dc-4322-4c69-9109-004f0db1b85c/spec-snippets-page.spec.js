import {
  Clipboard,
  HighlightModule,
  MatChipListbox,
  MatChipOption,
  MatChipsModule,
  SnippetsPage,
  init_chips,
  init_clipboard,
  init_ngx_highlightjs,
  init_snippets_page
} from "./chunk-4C57Q5FY.js";
import {
  MatSelectModule,
  init_select
} from "./chunk-RBW725AG.js";
import "./chunk-GNF3VMVX.js";
import "./chunk-II4XOFPX.js";
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

// src/app/features/snippets/snippets-page/snippets-page.spec.ts
var require_snippets_page_spec = __commonJS({
  "src/app/features/snippets/snippets-page/snippets-page.spec.ts"(exports) {
    init_testing();
    init_snippets_page();
    init_auth_service();
    init_clipboard();
    init_core();
    init_esm();
    init_forms();
    init_common();
    init_form_field();
    init_input();
    init_button();
    init_icon();
    init_chips();
    init_select();
    init_ngx_highlightjs();
    describe("SnippetsPage", () => {
      let component;
      let fixture;
      let authServiceSpy;
      let clipboardSpy;
      let cdrSpy;
      beforeEach(() => __async(null, null, function* () {
        authServiceSpy = {
          updateSnippets: jasmine.createSpy("updateSnippets").and.returnValue(of({})),
          getUserData: jasmine.createSpy("getUserData").and.returnValue(of({ snippets: [] }))
        };
        clipboardSpy = jasmine.createSpyObj("Clipboard", ["copy"]);
        cdrSpy = jasmine.createSpyObj("ChangeDetectorRef", ["detectChanges"]);
        yield TestBed.configureTestingModule({
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
            { provide: ChangeDetectorRef, useValue: cdrSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(SnippetsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should add a new snippet", () => {
        component.isBrowser = true;
        component.newSnippet = { title: "A", code: "B", language: "typescript", tags: [] };
        spyOn(component, "saveSnippets");
        component.addOrUpdateSnippet();
        expect(component.snippets.length).toBe(1);
        expect(component.saveSnippets).toHaveBeenCalled();
      });
      it("should update an existing snippet", () => {
        component.isBrowser = true;
        component.snippets = [{ id: "1", title: "A", code: "B", language: "typescript", tags: [], createdAt: 1, updatedAt: 1 }];
        component.editingId = "1";
        component.newSnippet = { title: "C", code: "D", language: "typescript", tags: [] };
        spyOn(component, "saveSnippets");
        component.addOrUpdateSnippet();
        expect(component.snippets[0].title).toBe("C");
        expect(component.saveSnippets).toHaveBeenCalled();
      });
      it("should edit a snippet", () => {
        const snippet = { id: "1", title: "A", code: "B", language: "typescript", tags: [], createdAt: 1, updatedAt: 1 };
        component.editSnippet(snippet);
        expect(component.editingId).toBe("1");
        expect(component.newSnippet.title).toBe("A");
      });
      it("should delete a snippet", () => {
        component.snippets = [{ id: "1", title: "A", code: "B", language: "typescript", tags: [], createdAt: 1, updatedAt: 1 }];
        spyOn(component, "saveSnippets");
        component.deleteSnippet("1");
        expect(component.snippets.length).toBe(0);
        expect(component.saveSnippets).toHaveBeenCalled();
      });
      it("should copy a snippet", () => {
        component.copySnippet("code");
        expect(clipboardSpy.copy).toHaveBeenCalledWith("code");
      });
      it("should save and load snippets", () => {
        component.isBrowser = true;
        authServiceSpy.updateSnippets.and.returnValue(of(void 0));
        authServiceSpy.getUserData.and.returnValue(of({ snippets: [] }));
        component.saveSnippets();
        expect(authServiceSpy.updateSnippets).toHaveBeenCalled();
        component.loadSnippets();
        expect(authServiceSpy.getUserData).toHaveBeenCalled();
      });
      it("should add and remove tags", () => {
        component.newSnippet = { title: "", code: "", language: "", tags: [] };
        const input = { value: "tag1" };
        component.addTag(input);
        expect(component.newSnippet.tags).toContain("tag1");
        component.removeTag("tag1");
        expect(component.newSnippet.tags).not.toContain("tag1");
      });
    });
  }
});
export default require_snippets_page_spec();
//# sourceMappingURL=spec-snippets-page.spec.js.map
