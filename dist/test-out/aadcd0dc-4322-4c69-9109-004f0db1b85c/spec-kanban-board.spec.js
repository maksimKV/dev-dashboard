import {
  DragDropModule,
  KanbanBoard,
  init_drag_drop,
  init_kanban_board
} from "./chunk-XKRTNTEO.js";
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

// src/app/features/tasks/kanban-board/kanban-board.spec.ts
var require_kanban_board_spec = __commonJS({
  "src/app/features/tasks/kanban-board/kanban-board.spec.ts"(exports) {
    init_testing();
    init_kanban_board();
    init_auth_service();
    init_core();
    init_esm();
    init_common();
    init_drag_drop();
    init_form_field();
    init_input();
    init_button();
    init_icon();
    init_forms();
    describe("KanbanBoard", () => {
      let component;
      let fixture;
      let authServiceSpy;
      let cdrSpy;
      beforeEach(() => __async(null, null, function* () {
        authServiceSpy = {
          updateKanbanTasks: jasmine.createSpy("updateKanbanTasks").and.returnValue(of({})),
          getUserData: jasmine.createSpy("getUserData").and.returnValue(of({ kanbanTasks: { todo: [], inProgress: [], done: [] } })),
          isAuthenticated$: of(true)
        };
        cdrSpy = jasmine.createSpyObj("ChangeDetectorRef", ["detectChanges"]);
        yield TestBed.configureTestingModule({
          imports: [
            KanbanBoard,
            CommonModule,
            DragDropModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule,
            FormsModule
          ],
          providers: [
            { provide: AuthService, useValue: authServiceSpy },
            { provide: ChangeDetectorRef, useValue: cdrSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(KanbanBoard);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should add a task", () => {
        component.newTaskTitle = "Test Task";
        component.newTaskDescription = "Desc";
        spyOn(component, "saveTasks");
        component.addTask();
        expect(component.todo.length).toBe(1);
        expect(component.saveTasks).toHaveBeenCalled();
      });
      it("should not add a task with empty title", () => {
        component.newTaskTitle = "   ";
        spyOn(component, "saveTasks");
        component.addTask();
        expect(component.todo.length).toBe(0);
        expect(component.saveTasks).not.toHaveBeenCalled();
      });
      it("should delete a task", () => {
        component.todo = [{ id: "1", title: "A", description: "" }];
        spyOn(component, "saveTasks");
        component.deleteTask(component.todo, 0);
        expect(component.todo.length).toBe(0);
        expect(component.saveTasks).toHaveBeenCalled();
      });
      it("should call saveTasks on drop", () => {
        spyOn(component, "saveTasks");
        const event = {
          previousContainer: { data: component.todo },
          container: { data: component.todo },
          previousIndex: 0,
          currentIndex: 0
        };
        component.drop(event);
        expect(component.saveTasks).toHaveBeenCalled();
      });
      it("should call saveTasks and loadTasks", () => {
        authServiceSpy.updateKanbanTasks.and.returnValue(of(void 0));
        authServiceSpy.getUserData.and.returnValue(of({ kanbanTasks: { todo: [], inProgress: [], done: [] } }));
        component.isBrowser = true;
        component.saveTasks();
        expect(authServiceSpy.updateKanbanTasks).toHaveBeenCalled();
        component.loadTasks();
        expect(authServiceSpy.getUserData).toHaveBeenCalled();
      });
    });
  }
});
export default require_kanban_board_spec();
//# sourceMappingURL=spec-kanban-board.spec.js.map
