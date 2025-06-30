import { Component, Inject, PLATFORM_ID, OnInit, DoCheck } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
    MarkdownModule,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, DoCheck {
  protected title = 'dev-dashboard';
  enabledFeatures = {
    dashboard: true,
    tasks: true,
    notes: true,
    timer: true,
    snippets: true,
    stats: true,
    settings: true
  };
  isBrowser: boolean;
  highContrast = false;
  sidenavMode: 'side' | 'over' = 'side';
  sidenavOpened = true;
  isMobile = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.loadEnabledFeatures();
      this.loadHighContrast();
      this.setupResponsiveSidenav();
    }
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.applyHighContrastClass();
    }
  }

  ngDoCheck() {
    if (this.isBrowser) {
      this.loadHighContrast();
      this.applyHighContrastClass();
    }
  }

  setupResponsiveSidenav() {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe(result => {
      this.isMobile = result.matches;
      if (this.isMobile) {
        this.sidenavMode = 'over';
        this.sidenavOpened = false;
      } else {
        this.sidenavMode = 'side';
        this.sidenavOpened = true;
      }
    });
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  loadEnabledFeatures() {
    if (!this.isBrowser) return;
    const features = localStorage.getItem('enabled-features');
    if (features) {
      const parsed = JSON.parse(features);
      this.enabledFeatures = { ...this.enabledFeatures, ...parsed };
    }
  }

  loadHighContrast() {
    if (!this.isBrowser) return;
    this.highContrast = localStorage.getItem('high-contrast') === 'true';
  }

  applyHighContrastClass() {
    if (!this.isBrowser) return;
    if (this.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }
}
