import {
  Router,
  init_router
} from "./chunk-SMARPGGZ.js";
import "./chunk-3YKIIKQF.js";
import {
  PLATFORM_ID,
  TestBed,
  init_common,
  init_core,
  init_testing,
  inject,
  isPlatformBrowser
} from "./chunk-4OKOT362.js";

// src/app/core/guards/feature-enabled.guard.ts
init_core();
init_router();
init_common();
function featureEnabledGuard(featureKey) {
  return (route, state) => {
    const platformId = inject(PLATFORM_ID);
    const router = inject(Router);
    const isBrowser = isPlatformBrowser(platformId);
    if (!isBrowser)
      return true;
    let features = {};
    if (isBrowser) {
      try {
        features = JSON.parse(localStorage.getItem("enabled-features") || "{}");
      } catch (e) {
        features = {};
        console.error("Failed to parse enabled-features:", e);
      }
    }
    if (features[featureKey] === false) {
      router.navigateByUrl("/dashboard");
      return false;
    }
    return true;
  };
}

// src/app/core/guards/feature-enabled.guard.spec.ts
init_core();
init_testing();
describe("featureEnabledGuard", () => {
  let routerSpy;
  let platformId;
  let originalLocalStorage;
  let getItemSpy;
  beforeAll(() => {
    originalLocalStorage = window.localStorage;
    getItemSpy = jasmine.createSpy("getItem").and.returnValue("{}");
    spyOnProperty(window, "localStorage").and.returnValue({
      getItem: getItemSpy,
      setItem: jasmine.createSpy("setItem"),
      removeItem: jasmine.createSpy("removeItem"),
      clear: jasmine.createSpy("clear"),
      key: jasmine.createSpy("key").and.returnValue(null),
      length: 0
    });
  });
  afterAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: originalLocalStorage,
      configurable: true
    });
  });
  beforeEach(() => {
    routerSpy = jasmine.createSpyObj("Router", ["navigateByUrl"]);
    platformId = "browser";
    getItemSpy.calls.reset();
  });
  it("should allow SSR to render", () => {
    TestBed.overrideProvider(PLATFORM_ID, { useValue: "server" });
    const result = TestBed.runInInjectionContext(() => {
      const guard = featureEnabledGuard("tasks");
      return guard({}, {});
    });
    expect(result).toBeTrue();
  });
  it("should allow if feature is enabled", () => {
    window.localStorage.getItem.and.returnValue('{"tasks":true}');
    const result = TestBed.runInInjectionContext(() => {
      const guard = featureEnabledGuard("tasks");
      return guard({}, {});
    });
    expect(result).toBeTrue();
  });
  it("should redirect if feature is disabled", () => {
    window.localStorage.getItem.and.returnValue('{"tasks":false}');
    const result = TestBed.runInInjectionContext(() => {
      const guard = featureEnabledGuard("tasks");
      return guard({}, {});
    });
    expect(result).toBeFalse();
  });
  it("should handle invalid localStorage", () => {
    spyOn(console, "error");
    window.localStorage.getItem.and.returnValue("not-json");
    const result = TestBed.runInInjectionContext(() => {
      const guard = featureEnabledGuard("tasks");
      return guard({}, {});
    });
    expect(result).toBeTrue();
  });
});
//# sourceMappingURL=spec-feature-enabled.guard.spec.js.map
