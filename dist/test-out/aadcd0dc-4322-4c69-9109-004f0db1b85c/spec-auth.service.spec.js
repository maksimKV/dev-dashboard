import {
  AuthService,
  init_auth_service
} from "./chunk-3BJ3OYBN.js";
import {
  HttpClient,
  TestBed,
  init_esm,
  init_http,
  init_testing,
  of
} from "./chunk-4OKOT362.js";

// src/app/shared/services/auth.service.spec.ts
init_testing();
init_auth_service();
init_http();
init_esm();
var mockUser = { id: "1", email: "test@example.com" };
var mockAuthResponse = { message: "ok", token: "token", user: mockUser };
var mockUserData = {
  kanbanTasks: { todo: [], inProgress: [], done: [] },
  focusTimer: {
    workDuration: 25,
    breakDuration: 5,
    timeLeft: 1500,
    isRunning: false,
    isWork: true,
    completedFocusSessions: 0,
    totalWorkSeconds: 0
  },
  markdownNote: "",
  snippets: [],
  preferences: {
    defaultLandingPage: "dashboard",
    focusDuration: 25,
    breakDuration: 5,
    features: { tasks: true, notes: true, timer: true, snippets: true, stats: true },
    sidebarPosition: "left",
    compactMode: false,
    fontSize: "medium",
    highContrast: false,
    keyboardShortcuts: true
  }
};
describe("AuthService", () => {
  let service;
  let http;
  beforeEach(() => {
    const httpSpy = jasmine.createSpyObj("HttpClient", ["post", "get", "put"]);
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: HttpClient, useValue: httpSpy }
      ]
    });
    service = TestBed.inject(AuthService);
    http = TestBed.inject(HttpClient);
  });
  it("should register a user", () => {
    http.post.and.returnValue(of(mockAuthResponse));
    service.register("test@example.com", "password").subscribe((res) => {
      expect(res).toEqual(mockAuthResponse);
    });
    expect(http.post).toHaveBeenCalled();
  });
  it("should login a user", () => {
    http.post.and.returnValue(of(mockAuthResponse));
    service.login("test@example.com", "password").subscribe((res) => {
      expect(res).toEqual(mockAuthResponse);
    });
    expect(http.post).toHaveBeenCalled();
  });
  it("should logout and clear auth", () => {
    service.setAuth("token", mockUser);
    service.logout();
    expect(service.getCurrentUser()).toBeNull();
    expect(service.getToken()).toBeNull();
    expect(service.isAuthenticated()).toBeFalse();
  });
  it("should set and get auth", () => {
    service.setAuth("token", mockUser);
    expect(service.getCurrentUser()).toEqual(mockUser);
    expect(service.getToken()).toBe("token");
    expect(service.isAuthenticated()).toBeTrue();
  });
  it("should get user data", () => {
    http.get.and.returnValue(of(mockUserData));
    service.getUserData().subscribe((data) => {
      expect(data).toEqual(mockUserData);
    });
    expect(http.get).toHaveBeenCalled();
  });
  it("should update kanban tasks", () => {
    http.put.and.returnValue(of(void 0));
    service.updateKanbanTasks({ todo: [], inProgress: [], done: [] }).subscribe((res) => {
      expect(res).toBeUndefined();
    });
    expect(http.put).toHaveBeenCalled();
  });
  it("should update focus timer", () => {
    http.put.and.returnValue(of(void 0));
    service.updateFocusTimer(mockUserData.focusTimer).subscribe((res) => {
      expect(res).toBeUndefined();
    });
    expect(http.put).toHaveBeenCalled();
  });
  it("should update markdown note", () => {
    http.put.and.returnValue(of(void 0));
    service.updateMarkdownNote("note").subscribe((res) => {
      expect(res).toBeUndefined();
    });
    expect(http.put).toHaveBeenCalled();
  });
  it("should update snippets", () => {
    http.put.and.returnValue(of(void 0));
    service.updateSnippets([]).subscribe((res) => {
      expect(res).toBeUndefined();
    });
    expect(http.put).toHaveBeenCalled();
  });
  it("should update preferences", () => {
    http.put.and.returnValue(of(void 0));
    service.updatePreferences(mockUserData.preferences).subscribe((res) => {
      expect(res).toBeUndefined();
    });
    expect(http.put).toHaveBeenCalled();
  });
  it("should resend verification", () => {
    const mockResendVerificationResponse = { message: "Verification email sent" };
    http.post.and.returnValue(of(mockResendVerificationResponse));
    service.resendVerification("test@example.com").subscribe((res) => {
      expect(res).toEqual(mockResendVerificationResponse);
    });
    expect(http.post).toHaveBeenCalled();
  });
});
//# sourceMappingURL=spec-auth.service.spec.js.map
