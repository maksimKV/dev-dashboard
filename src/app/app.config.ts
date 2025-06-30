import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

const MARKDOWN_PROVIDERS = MarkdownModule.forRoot().providers ?? [];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    ...MARKDOWN_PROVIDERS,
    provideCharts(withDefaultRegisterables())
  ]
};
