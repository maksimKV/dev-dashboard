import {
  FocusTimer,
  init_focus_timer
} from "./chunk-6DUTAUEL.js";
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

// src/app/features/timer/focus-timer/focus-timer.spec.ts
var require_focus_timer_spec = __commonJS({
  "src/app/features/timer/focus-timer/focus-timer.spec.ts"(exports) {
    init_testing();
    init_focus_timer();
    init_auth_service();
    init_core();
    init_esm();
    init_common();
    init_forms();
    init_button();
    init_form_field();
    init_input();
    init_icon();
    describe("FocusTimer", () => {
      let component;
      let fixture;
      let authServiceSpy;
      let cdrSpy;
      beforeEach(() => __async(null, null, function* () {
        authServiceSpy = {
          updateFocusTimer: jasmine.createSpy("updateFocusTimer").and.returnValue(of({})),
          getUserData: jasmine.createSpy("getUserData").and.returnValue(of({ focusTimer: {} }))
        };
        cdrSpy = jasmine.createSpyObj("ChangeDetectorRef", ["markForCheck", "detectChanges"]);
        yield TestBed.configureTestingModule({
          imports: [
            FocusTimer,
            CommonModule,
            FormsModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule
          ],
          providers: [
            { provide: AuthService, useValue: authServiceSpy },
            { provide: ChangeDetectorRef, useValue: cdrSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(FocusTimer);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should start and pause the timer", () => {
        spyOn(window, "setInterval").and.callFake((fn) => {
          fn();
          return 1;
        });
        spyOn(window, "clearInterval");
        component.timeLeft = 2;
        component.isWork = true;
        component.isRunning = false;
        component.start();
        expect(component.isRunning).toBeTrue();
        component.pause();
        expect(component.isRunning).toBeFalse();
        expect(window.clearInterval).toHaveBeenCalled();
      });
      it("should reset the timer", () => {
        spyOn(window, "clearInterval");
        component.isWork = true;
        component.workDuration = 10;
        component.breakDuration = 5;
        component.timeLeft = 1;
        component.isRunning = true;
        component.reset();
        expect(component.isRunning).toBeFalse();
        expect(component.timeLeft).toBe(600);
        component.isWork = false;
        component.reset();
        expect(component.timeLeft).toBe(300);
      });
      it("should update durations", () => {
        component.isWork = true;
        component.workDuration = 15;
        component.updateDurations();
        expect(component.timeLeft).toBe(900);
        component.isWork = false;
        component.breakDuration = 7;
        component.updateDurations();
        expect(component.timeLeft).toBe(420);
      });
      it("should call saveState and loadState", () => {
        authServiceSpy.updateFocusTimer.and.returnValue(of(void 0));
        authServiceSpy.getUserData.and.returnValue(of({
          focusTimer: {
            workDuration: 20,
            breakDuration: 10,
            timeLeft: 1200,
            isRunning: false,
            isWork: true,
            completedFocusSessions: 2,
            totalWorkSeconds: 1e3
          }
        }));
        component.isBrowser = true;
        component.saveState();
        expect(authServiceSpy.updateFocusTimer).toHaveBeenCalled();
        component.loadState();
        expect(authServiceSpy.getUserData).toHaveBeenCalled();
      });
    });
  }
});
export default require_focus_timer_spec();
//# sourceMappingURL=spec-focus-timer.spec.js.map
