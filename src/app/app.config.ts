import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MarkdownModule } from 'ngx-markdown';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';

const MARKDOWN_PROVIDERS = MarkdownModule.forRoot().providers ?? [];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ...MARKDOWN_PROVIDERS,
    provideCharts(withDefaultRegisterables()),
    provideHttpClient(withInterceptorsFromDi(), withFetch())
  ]
};
