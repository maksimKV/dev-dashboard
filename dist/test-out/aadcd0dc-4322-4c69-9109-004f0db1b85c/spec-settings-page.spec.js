import {
  MatCardModule,
  MatDialogModule,
  MatSlideToggleModule,
  SettingsPage,
  init_card,
  init_dialog,
  init_settings_page,
  init_slide_toggle
} from "./chunk-Y5MD4PAT.js";
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
  CommonModule,
  TestBed,
  __async,
  __commonJS,
  init_common,
  init_testing
} from "./chunk-4OKOT362.js";

// src/app/features/settings/settings-page/settings-page.spec.ts
var require_settings_page_spec = __commonJS({
  "src/app/features/settings/settings-page/settings-page.spec.ts"(exports) {
    init_testing();
    init_settings_page();
    init_auth_service();
    init_common();
    init_card();
    init_button();
    init_dialog();
    init_form_field();
    init_select();
    init_input();
    init_slide_toggle();
    init_forms();
    init_icon();
    describe("SettingsPage", () => {
      let component;
      let fixture;
      let authServiceSpy;
      beforeEach(() => __async(null, null, function* () {
        authServiceSpy = jasmine.createSpyObj("AuthService", ["updatePreferences"]);
        yield TestBed.configureTestingModule({
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
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should export data", () => {
        component.isBrowser = true;
        spyOn(document, "createElement").and.returnValue({ click: () => {
        }, setAttribute: () => {
        } });
        spyOn(URL, "createObjectURL").and.returnValue("blob:url");
        spyOn(URL, "revokeObjectURL");
        spyOn(localStorage, "getItem").and.callFake((key) => {
          if (key === "kanban-tasks")
            return '{"todo":[],"inProgress":[],"done":[]}';
          if (key === "focus-timer")
            return "{}";
          if (key === "snippets")
            return "[]";
          if (key === "markdown-note")
            return "note";
          return null;
        });
        component.exportData();
        expect(URL.createObjectURL).toHaveBeenCalled();
        expect(URL.revokeObjectURL).toHaveBeenCalled();
      });
      it("should clear all data", () => {
        component.isBrowser = true;
        spyOn(window, "confirm").and.returnValue(true);
        spyOn(localStorage, "removeItem");
        component.clearAllData();
        expect(localStorage.removeItem).toHaveBeenCalledWith("kanban-tasks");
        expect(localStorage.removeItem).toHaveBeenCalledWith("focus-timer");
        expect(localStorage.removeItem).toHaveBeenCalledWith("markdown-note");
        expect(localStorage.removeItem).toHaveBeenCalledWith("snippets");
      });
      it("should save and load productivity prefs", () => {
        component.isBrowser = true;
        spyOn(localStorage, "setItem");
        spyOn(localStorage, "getItem").and.returnValue(null);
        spyOn(component, "saveAllPrefsToBackend");
        component.saveProductivityPrefs();
        expect(localStorage.setItem).toHaveBeenCalled();
        component.loadProductivityPrefs();
        expect(localStorage.getItem).toHaveBeenCalled();
      });
    });
  }
});
export default require_settings_page_spec();
//# sourceMappingURL=spec-settings-page.spec.js.map
