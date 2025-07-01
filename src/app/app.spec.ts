import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { ActivatedRoute } from '@angular/router';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    if (app.sidenav) {
      app.sidenav.open = jasmine.createSpy('open');
      app.sidenav.close = jasmine.createSpy('close');
    }
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    if (app.sidenav) {
      app.sidenav.open = jasmine.createSpy('open');
      app.sidenav.close = jasmine.createSpy('close');
    }
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Dashboard');
  });
});
