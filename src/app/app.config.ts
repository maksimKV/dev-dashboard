import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';

const MARKDOWN_PROVIDERS = MarkdownModule.forRoot().providers ?? [];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // provideClientHydration(), // Removed for NG0908 isolation
    ...MARKDOWN_PROVIDERS,
    provideCharts(withDefaultRegisterables()),
    provideHttpClient(withInterceptorsFromDi(), withFetch())
  ]
};
