import {
  FocusTimer,
  init_focus_timer
} from "./chunk-6DUTAUEL.js";
import "./chunk-XPVP5D3K.js";
import "./chunk-E5SZGRLI.js";
import "./chunk-5VCTOLDM.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-NQEXKGPT.js";
import {
  HttpClientTestingModule,
  init_testing as init_testing2
} from "./chunk-DQE55PZ7.js";
import "./chunk-3BJ3OYBN.js";
import "./chunk-3YKIIKQF.js";
import {
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-4OKOT362.js";

// angular:jit:template:src\app\features\timer\timer-page\timer-page.html
var timer_page_default;
var init_timer_page = __esm({
  "angular:jit:template:src\\app\\features\\timer\\timer-page\\timer-page.html"() {
    timer_page_default = '<div class="feature-card">\r\n  <div class="feature-card-header">\r\n    <mat-icon fontIcon="timer"></mat-icon>\r\n    <h1>Focus Timer</h1>\r\n  </div>\r\n  <app-focus-timer></app-focus-timer>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\features\timer\timer-page\timer-page.scss
var timer_page_default2;
var init_timer_page2 = __esm({
  "angular:jit:style:src\\app\\features\\timer\\timer-page\\timer-page.scss"() {
    timer_page_default2 = "/* src/app/features/timer/timer-page/timer-page.scss */\n.feature-card {\n  max-width: 540px;\n  margin: 2.5rem auto 0 auto;\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08), 0 1.5px 6px 0 rgba(0, 0, 0, 0.04);\n  padding: 2.5rem 2.5rem 2rem 2.5rem;\n  animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.feature-card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.feature-card-header mat-icon {\n  font-size: 2.2rem;\n  height: 2.2rem;\n  width: 2.2rem;\n  min-width: 2.2rem;\n  min-height: 2.2rem;\n  color: #1976d2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  vertical-align: middle;\n  position: relative;\n  top: 0;\n}\n.feature-card-header h1 {\n  font-size: 1.7rem;\n  font-weight: 700;\n  margin: 0;\n  color: #222;\n}\n@media (max-width: 700px) {\n  .feature-card {\n    padding: 1.2rem 0.7rem 1.2rem 0.7rem;\n    max-width: 98vw;\n  }\n  .feature-card-header h1 {\n    font-size: 1.1rem;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n/*# sourceMappingURL=timer-page.css.map */\n";
  }
});

// src/app/features/timer/timer-page/timer-page.ts
var TimerPage;
var init_timer_page3 = __esm({
  "src/app/features/timer/timer-page/timer-page.ts"() {
    "use strict";
    init_tslib_es6();
    init_timer_page();
    init_timer_page2();
    init_core();
    init_focus_timer();
    init_icon();
    TimerPage = class TimerPage2 {
    };
    TimerPage = __decorate([
      Component({
        selector: "app-timer-page",
        standalone: true,
        imports: [FocusTimer, MatIconModule],
        template: timer_page_default,
        styles: [timer_page_default2]
      })
    ], TimerPage);
  }
});

// src/app/features/timer/timer-page/timer-page.spec.ts
var require_timer_page_spec = __commonJS({
  "src/app/features/timer/timer-page/timer-page.spec.ts"(exports) {
    init_testing();
    init_testing2();
    init_timer_page3();
    describe("TimerPage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            TimerPage,
            HttpClientTestingModule
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(TimerPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_timer_page_spec();
//# sourceMappingURL=spec-timer-page.spec.js.map
