import {
  FocusTimer,
  init_focus_timer
} from "./chunk-6DUTAUEL.js";
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

// src/app/integration/focus-timer.integration.spec.ts
var require_focus_timer_integration_spec = __commonJS({
  "src/app/integration/focus-timer.integration.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_testing2();
    init_focus_timer();
    init_auth_service();
    init_forms();
    init_common();
    init_core();
    init_platform_browser();
    var TestHostComponent = class TestHostComponent {
    };
    TestHostComponent = __decorate([
      Component({
        template: `<app-focus-timer></app-focus-timer>`,
        standalone: true,
        imports: [FocusTimer]
      })
    ], TestHostComponent);
    describe("FocusTimer Integration", () => {
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
      it("should load, update, and persist timer state", fakeAsync(() => {
        const getReq = httpMock.expectOne((req) => req.url.endsWith("/user/data"));
        getReq.flush({ focusTimer: { workDuration: 25, breakDuration: 5, timeLeft: 1500, isRunning: false, isWork: true, completedFocusSessions: 0, totalWorkSeconds: 0 }, kanbanTasks: {}, markdownNote: "", snippets: [], preferences: {} });
        tick();
        fixture.detectChanges();
        const timer = fixture.debugElement.query(By.directive(FocusTimer)).componentInstance;
        timer.workDuration = 30;
        timer.breakDuration = 10;
        timer.updateDurations();
        const putReq = httpMock.expectOne((req) => req.url.endsWith("/user/focus-timer"));
        expect(putReq.request.method).toBe("PUT");
        putReq.flush({});
        tick();
        fixture.detectChanges();
        expect(timer.workDuration).toBe(30);
        expect(timer.breakDuration).toBe(10);
        timer.reset();
        const putReq2 = httpMock.expectOne((req) => req.url.endsWith("/user/focus-timer"));
        expect(putReq2.request.method).toBe("PUT");
        putReq2.flush({});
        tick();
        fixture.detectChanges();
        expect(timer.timeLeft).toBe(30 * 60);
      }));
    });
  }
});
export default require_focus_timer_integration_spec();
//# sourceMappingURL=spec-focus-timer.integration.spec.js.map
