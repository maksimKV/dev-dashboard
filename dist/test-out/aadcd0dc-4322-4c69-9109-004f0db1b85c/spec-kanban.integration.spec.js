import {
  KanbanBoard,
  init_kanban_board
} from "./chunk-XKRTNTEO.js";
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

// src/app/integration/kanban.integration.spec.ts
var require_kanban_integration_spec = __commonJS({
  "src/app/integration/kanban.integration.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_testing2();
    init_kanban_board();
    init_auth_service();
    init_forms();
    init_common();
    init_core();
    init_platform_browser();
    var TestHostComponent = class TestHostComponent {
    };
    TestHostComponent = __decorate([
      Component({
        template: `<app-kanban-board></app-kanban-board>`,
        standalone: true,
        imports: [KanbanBoard]
      })
    ], TestHostComponent);
    describe("Kanban Integration", () => {
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
      it("should add, delete, and persist tasks", fakeAsync(() => {
        const allReqs = httpMock.match((req) => req.url.endsWith("/user/data"));
        if (allReqs.length > 0) {
          allReqs[0].flush({ kanbanTasks: { todo: [], inProgress: [], done: [] }, markdownNote: "", focusTimer: {}, snippets: [], preferences: {} });
        }
        tick();
        fixture.detectChanges();
        const kanban = fixture.debugElement.query(By.directive(KanbanBoard)).componentInstance;
        kanban.newTaskTitle = "Test Task";
        kanban.addTask();
        let putReqs = httpMock.match((req) => req.url.endsWith("/user/kanban-tasks"));
        expect(putReqs.length).toBeGreaterThanOrEqual(1);
        putReqs[0].flush({});
        tick();
        fixture.detectChanges();
        expect(kanban.todo.length).toBe(1);
        expect(kanban.todo[0].title).toBe("Test Task");
        kanban.deleteTask(kanban.todo, 0);
        putReqs = httpMock.match((req) => req.url.endsWith("/user/kanban-tasks"));
        expect(putReqs.length).toBeGreaterThanOrEqual(1);
        putReqs[0].flush({});
        tick();
        fixture.detectChanges();
        expect(kanban.todo.length).toBe(0);
      }));
    });
  }
});
export default require_kanban_integration_spec();
//# sourceMappingURL=spec-kanban.integration.spec.js.map
