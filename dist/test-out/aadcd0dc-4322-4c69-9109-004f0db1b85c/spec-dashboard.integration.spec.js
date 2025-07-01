import {
  DashboardPage,
  init_dashboard_page
} from "./chunk-W3W4ZKZ7.js";
import "./chunk-SMARPGGZ.js";
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

// src/app/integration/dashboard.integration.spec.ts
var require_dashboard_integration_spec = __commonJS({
  "src/app/integration/dashboard.integration.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_testing2();
    init_dashboard_page();
    init_auth_service();
    init_common();
    init_core();
    init_platform_browser();
    var TestHostComponent = class TestHostComponent {
    };
    TestHostComponent = __decorate([
      Component({
        template: `<app-dashboard-page></app-dashboard-page>`,
        standalone: true,
        imports: [DashboardPage]
      })
    ], TestHostComponent);
    describe("Dashboard Integration", () => {
      let httpMock;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            HttpClientTestingModule,
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
      it("should display summary data from user data", fakeAsync(() => {
        const dashboard = fixture.debugElement.query(By.directive(DashboardPage)).componentInstance;
        dashboard.currentUser = { id: "1", email: "test@example.com" };
        tick();
        fixture.detectChanges();
        expect(dashboard.currentUser).toBeTruthy();
        expect(dashboard.currentUser.email).toBe("test@example.com");
      }));
    });
  }
});
export default require_dashboard_integration_spec();
//# sourceMappingURL=spec-dashboard.integration.spec.js.map
