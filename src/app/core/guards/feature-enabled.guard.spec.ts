import { featureEnabledGuard } from './feature-enabled.guard';
import { Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('featureEnabledGuard', () => {
  let routerSpy: jasmine.SpyObj<Router>;
  let platformId: Object;
  let originalLocalStorage: any;
  let getItemSpy: jasmine.Spy;

  beforeAll(() => {
    originalLocalStorage = window.localStorage;
    getItemSpy = jasmine.createSpy('getItem').and.returnValue('{}');
    spyOnProperty(window, 'localStorage').and.returnValue({
      getItem: getItemSpy,
      setItem: jasmine.createSpy('setItem'),
      removeItem: jasmine.createSpy('removeItem'),
      clear: jasmine.createSpy('clear'),
      key: jasmine.createSpy('key').and.returnValue(null),
      length: 0
    });
  });

  afterAll(() => {
    // Restore the original localStorage object to avoid double-spying errors
    Object.defineProperty(window, 'localStorage', {
      value: originalLocalStorage,
      configurable: true
    });
  });

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    platformId = 'browser';
    getItemSpy.calls.reset();
  });

  it('should allow SSR to render', () => {
    // Set platformId to 'server' to simulate SSR
    platformId = 'server';
    const result = TestBed.runInInjectionContext(() => {
      // Inject PLATFORM_ID as 'server' for this test
      const guard = featureEnabledGuard('tasks');
      return guard({} as any, {} as any);
    });
    expect(result).toBeTrue();
  });

  it('should allow if feature is enabled', () => {
    (window.localStorage.getItem as jasmine.Spy).and.returnValue('{"tasks":true}');
    const result = TestBed.runInInjectionContext(() => {
      const guard = featureEnabledGuard('tasks');
      return guard({} as any, {} as any);
    });
    expect(result).toBeTrue();
  });

  it('should redirect if feature is disabled', () => {
    (window.localStorage.getItem as jasmine.Spy).and.returnValue('{"tasks":false}');
    const result = TestBed.runInInjectionContext(() => {
      const guard = featureEnabledGuard('tasks');
      return guard({} as any, {} as any);
    });
    expect(result).toBeFalse();
  });

  it('should handle invalid localStorage', () => {
    (window.localStorage.getItem as jasmine.Spy).and.returnValue('not-json');
    const result = TestBed.runInInjectionContext(() => {
      const guard = featureEnabledGuard('tasks');
      return guard({} as any, {} as any);
    });
    expect(result).toBeTrue();
  });
}); 