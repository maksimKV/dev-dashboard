import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export function featureEnabledGuard(featureKey: string): CanActivateFn {
  return (route: ActivatedRouteSnapshot, state) => {
    const platformId = inject(PLATFORM_ID);
    const router = inject(Router);
    const isBrowser = isPlatformBrowser(platformId);
    if (!isBrowser) return true; // Allow SSR to render, client will handle redirect
    let features: Record<string, boolean> = {};
    if (isBrowser) {
      try {
        features = JSON.parse(localStorage.getItem('enabled-features') || '{}');
      } catch (e) {
        features = {};
        console.error('Failed to parse enabled-features:', e);
      }
    }
    if (features[featureKey] === false) {
      router.navigateByUrl('/dashboard');
      return false;
    }
    return true;
  };
} 