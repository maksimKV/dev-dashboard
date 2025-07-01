import {
  KanbanBoard,
  init_kanban_board
} from "./chunk-XKRTNTEO.js";
import "./chunk-II4XOFPX.js";
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

// angular:jit:template:src\app\features\tasks\tasks-page\tasks-page.html
var tasks_page_default;
var init_tasks_page = __esm({
  "angular:jit:template:src\\app\\features\\tasks\\tasks-page\\tasks-page.html"() {
    tasks_page_default = '<div class="feature-card">\r\n  <div class="feature-card-header">\r\n    <mat-icon fontIcon="view_kanban"></mat-icon>\r\n    <h1>Tasks</h1>\r\n  </div>\r\n  <app-kanban-board></app-kanban-board>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\features\tasks\tasks-page\tasks-page.scss
var tasks_page_default2;
var init_tasks_page2 = __esm({
  "angular:jit:style:src\\app\\features\\tasks\\tasks-page\\tasks-page.scss"() {
    tasks_page_default2 = "/* src/app/features/tasks/tasks-page/tasks-page.scss */\n.feature-card {\n  max-width: 900px;\n  margin: 2.5rem auto 0 auto;\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08), 0 1.5px 6px 0 rgba(0, 0, 0, 0.04);\n  padding: 2.5rem 2.5rem 2rem 2.5rem;\n  animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.feature-card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.feature-card-header mat-icon {\n  font-size: 2.2rem;\n  height: 2.2rem;\n  width: 2.2rem;\n  min-width: 2.2rem;\n  min-height: 2.2rem;\n  color: #1976d2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  vertical-align: middle;\n  position: relative;\n  top: 0;\n}\n.feature-card-header h1 {\n  font-size: 1.7rem;\n  font-weight: 700;\n  margin: 0;\n  color: #222;\n}\n@media (max-width: 700px) {\n  .feature-card {\n    padding: 1.2rem 0.7rem 1.2rem 0.7rem;\n    max-width: 98vw;\n  }\n  .feature-card-header h1 {\n    font-size: 1.1rem;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n/*# sourceMappingURL=tasks-page.css.map */\n";
  }
});

// src/app/features/tasks/tasks-page/tasks-page.ts
var TasksPage;
var init_tasks_page3 = __esm({
  "src/app/features/tasks/tasks-page/tasks-page.ts"() {
    "use strict";
    init_tslib_es6();
    init_tasks_page();
    init_tasks_page2();
    init_core();
    init_kanban_board();
    init_icon();
    TasksPage = class TasksPage2 {
    };
    TasksPage = __decorate([
      Component({
        selector: "app-tasks-page",
        standalone: true,
        imports: [KanbanBoard, MatIconModule],
        template: tasks_page_default,
        styles: [tasks_page_default2]
      })
    ], TasksPage);
  }
});

// src/app/features/tasks/tasks-page/tasks-page.spec.ts
var require_tasks_page_spec = __commonJS({
  "src/app/features/tasks/tasks-page/tasks-page.spec.ts"(exports) {
    init_testing();
    init_testing2();
    init_tasks_page3();
    describe("TasksPage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            TasksPage,
            HttpClientTestingModule
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(TasksPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_tasks_page_spec();
//# sourceMappingURL=spec-tasks-page.spec.js.map
