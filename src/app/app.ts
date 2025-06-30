import { Component, Inject, PLATFORM_ID, OnInit, DoCheck, ChangeDetectorRef, ViewChild, Renderer2, Inject as NgInject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';

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
  sidebarPosition: 'left' | 'right' = 'left';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  private breakpointSub?: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    @NgInject('DOCUMENT') private document: Document
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.loadEnabledFeatures();
      this.loadHighContrast();
      this.loadSidebarPosition();
      this.setupResponsiveSidenav();
      window.addEventListener('storage', this.handleStorageChange.bind(this));
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
    this.breakpointSub = this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
        this.sidenavMode = 'over';
        this.sidenavOpened = false;
        setTimeout(() => this.sidenav.close(), 0);
      } else {
        this.isMobile = false;
        this.sidenavMode = 'side';
        this.sidenavOpened = true;
        setTimeout(() => this.sidenav.open(), 0);
      }
      setTimeout(() => this.cdr.detectChanges(), 0);
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
    const body = this.document.body;
    if (this.highContrast) {
      this.renderer.addClass(body, 'high-contrast');
    } else {
      this.renderer.removeClass(body, 'high-contrast');
    }
  }

  handleStorageChange(event: StorageEvent) {
    if (event.key === 'enabled-features') {
      this.loadEnabledFeatures();
    }
    if (event.key === 'sidebar-position') {
      this.loadSidebarPosition();
    }
  }

  loadSidebarPosition() {
    if (!this.isBrowser) return;
    this.sidebarPosition = (localStorage.getItem('sidebar-position') as 'left' | 'right') || 'left';
  }

  ngOnDestroy() {
    this.breakpointSub?.unsubscribe();
  }
}
