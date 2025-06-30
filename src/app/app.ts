import { Component, Inject, PLATFORM_ID } from '@angular/core';
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
export class App {
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.loadEnabledFeatures();
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
}
