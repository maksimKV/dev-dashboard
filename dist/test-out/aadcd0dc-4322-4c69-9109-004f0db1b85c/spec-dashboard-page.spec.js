import {
  DashboardPage,
  init_dashboard_page
} from "./chunk-W3W4ZKZ7.js";
import "./chunk-SMARPGGZ.js";
import "./chunk-NQEXKGPT.js";
import {
  HttpClientTestingModule,
  init_testing as init_testing2
} from "./chunk-DQE55PZ7.js";
import "./chunk-3BJ3OYBN.js";
import "./chunk-3YKIIKQF.js";
import {
  TestBed,
  __async,
  __commonJS,
  init_testing
} from "./chunk-4OKOT362.js";

// src/app/features/dashboard/dashboard-page/dashboard-page.spec.ts
var require_dashboard_page_spec = __commonJS({
  "src/app/features/dashboard/dashboard-page/dashboard-page.spec.ts"(exports) {
    init_testing();
    init_testing2();
    init_dashboard_page();
    describe("DashboardPage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            DashboardPage,
            HttpClientTestingModule
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(DashboardPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_dashboard_page_spec();
//# sourceMappingURL=spec-dashboard-page.spec.js.map
