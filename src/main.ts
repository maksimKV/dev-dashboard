import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import sql from 'highlight.js/lib/languages/sql';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('sql', sql);

interface WindowWithHLJS extends Window { hljs: typeof hljs }
((window as unknown) as WindowWithHLJS).hljs = hljs;

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

// Add a global error handler for debugging
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});
