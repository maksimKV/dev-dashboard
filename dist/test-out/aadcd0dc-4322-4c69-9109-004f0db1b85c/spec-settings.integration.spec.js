import {
  SettingsPage,
  init_settings_page
} from "./chunk-Y5MD4PAT.js";
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
  environment,
  init_auth_service,
  init_environment
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

// src/app/integration/settings.integration.spec.ts
var require_settings_integration_spec = __commonJS({
  "src/app/integration/settings.integration.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_testing2();
    init_settings_page();
    init_auth_service();
    init_forms();
    init_common();
    init_core();
    init_platform_browser();
    init_environment();
    var TestHostComponent = class TestHostComponent {
    };
    TestHostComponent = __decorate([
      Component({
        template: `<app-settings-page></app-settings-page>`,
        standalone: true,
        imports: [SettingsPage]
      })
    ], TestHostComponent);
    describe("Settings Integration", () => {
      let httpMock;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            HttpClientTestingModule,
            FormsModule,
            CommonModule,
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
      it("should update and persist preferences", fakeAsync(() => {
        const settingsPage = fixture.debugElement.query(By.directive(SettingsPage)).componentInstance;
        settingsPage.fontSize = "large";
        settingsPage.saveProductivityPrefs();
        const putReq = httpMock.expectOne((req) => req.url === `${environment.apiUrl}/user/preferences`);
        expect(putReq.request.method).toBe("PUT");
        putReq.flush({});
        tick();
        fixture.detectChanges();
        expect(settingsPage.fontSize).toBe("large");
      }));
    });
  }
});
export default require_settings_integration_spec();
//# sourceMappingURL=spec-settings.integration.spec.js.map
