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
      features = JSON.parse(localStorage.getItem('enabled-features') || '{}');
    }
    if (features[featureKey] === false) {
      router.navigateByUrl('/dashboard');
      return false;
    }
    return true;
  };
} 