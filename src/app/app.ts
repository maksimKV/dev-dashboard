import { Component, Inject, PLATFORM_ID, OnInit, DoCheck } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MarkdownModule } from 'ngx-markdown';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
    MarkdownModule
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.loadEnabledFeatures();
      this.loadHighContrast();
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
