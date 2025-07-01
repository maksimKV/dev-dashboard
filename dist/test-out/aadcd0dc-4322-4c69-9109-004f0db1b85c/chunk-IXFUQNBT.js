import {
  MarkdownModule,
  init_ngx_markdown
} from "./chunk-IQASRQQO.js";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  init_button,
  init_form_field,
  init_input
} from "./chunk-XPVP5D3K.js";
import {
  FormsModule,
  init_forms
} from "./chunk-5VCTOLDM.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-NQEXKGPT.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-3BJ3OYBN.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  Inject,
  PLATFORM_ID,
  __decorate,
  __esm,
  init_common,
  init_core,
  init_tslib_es6,
  isPlatformBrowser
} from "./chunk-4OKOT362.js";

// angular:jit:template:src\app\features\notes\notes-page\notes-page.html
var notes_page_default;
var init_notes_page = __esm({
  "angular:jit:template:src\\app\\features\\notes\\notes-page\\notes-page.html"() {
    notes_page_default = '<div class="feature-card">\r\n  <div class="feature-card-header">\r\n    <mat-icon fontIcon="edit_note"></mat-icon>\r\n    <h1>Notes</h1>\r\n  </div>\r\n  <div class="markdown-editor">\r\n    <mat-form-field appearance="outline" class="editor-field">\r\n      <textarea matInput rows="10" placeholder="Write your note in Markdown..." [(ngModel)]="markdown" (ngModelChange)="saveNote()"></textarea>\r\n    </mat-form-field>\r\n    <div class="editor-actions">\r\n      <button mat-raised-button color="primary" (click)="saveNote()">Save</button>\r\n      <button mat-raised-button color="warn" (click)="clearNote()">Clear</button>\r\n    </div>\r\n    <h3>Preview</h3>\r\n    <div class="preview">\r\n      <markdown [data]="markdown"></markdown>\r\n    </div>\r\n  </div>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\features\notes\notes-page\notes-page.scss
var notes_page_default2;
var init_notes_page2 = __esm({
  "angular:jit:style:src\\app\\features\\notes\\notes-page\\notes-page.scss"() {
    notes_page_default2 = "/* src/app/features/notes/notes-page/notes-page.scss */\n.feature-card {\n  max-width: 700px;\n  margin: 2.5rem auto 0 auto;\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08), 0 1.5px 6px 0 rgba(0, 0, 0, 0.04);\n  padding: 2.5rem 2.5rem 2rem 2.5rem;\n  animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.feature-card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.feature-card-header mat-icon {\n  font-size: 2.2rem;\n  height: 2.2rem;\n  width: 2.2rem;\n  min-width: 2.2rem;\n  min-height: 2.2rem;\n  color: #1976d2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  vertical-align: middle;\n  position: relative;\n  top: 0;\n}\n.feature-card-header h1 {\n  font-size: 1.7rem;\n  font-weight: 700;\n  margin: 0;\n  color: #222;\n}\n.markdown-editor {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.editor-field {\n  width: 100%;\n}\n.editor-actions {\n  display: flex;\n  gap: 1rem;\n}\n.preview {\n  background: #fafafa;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  padding: 1.5rem;\n  min-height: 120px;\n  font-size: 1.1rem;\n}\n@media (max-width: 700px) {\n  .feature-card {\n    padding: 1.2rem 0.7rem 1.2rem 0.7rem;\n    max-width: 98vw;\n  }\n  .feature-card-header h1 {\n    font-size: 1.1rem;\n  }\n  .markdown-editor {\n    max-width: 100%;\n    padding: 0 1rem;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n/*# sourceMappingURL=notes-page.css.map */\n";
  }
});

// src/app/features/notes/notes-page/notes-page.ts
var NotesPage;
var init_notes_page3 = __esm({
  "src/app/features/notes/notes-page/notes-page.ts"() {
    "use strict";
    init_tslib_es6();
    init_notes_page();
    init_notes_page2();
    init_core();
    init_forms();
    init_ngx_markdown();
    init_form_field();
    init_input();
    init_button();
    init_common();
    init_icon();
    init_auth_service();
    NotesPage = class NotesPage2 {
      platformId;
      authService;
      cdr;
      markdown = "";
      isBrowser;
      isLoading = false;
      constructor(platformId, authService, cdr) {
        this.platformId = platformId;
        this.authService = authService;
        this.cdr = cdr;
        this.isBrowser = isPlatformBrowser(this.platformId);
      }
      ngOnInit() {
        if (this.isBrowser) {
          this.loadNote();
        }
      }
      saveNote() {
        if (!this.isBrowser)
          return;
        this.authService.updateMarkdownNote(this.markdown).subscribe({
          next: () => {
            localStorage.setItem("markdown-note", this.markdown);
          },
          error: (error) => {
            console.error("Failed to save note:", error);
            localStorage.setItem("markdown-note", this.markdown);
          }
        });
      }
      loadNote() {
        if (!this.isBrowser)
          return;
        this.isLoading = true;
        this.authService.getUserData().subscribe({
          next: (userData) => {
            this.markdown = userData.markdownNote || "";
            this.isLoading = false;
            this.cdr.detectChanges();
          },
          error: (error) => {
            console.error("Failed to load note from API:", error);
            const data = localStorage.getItem("markdown-note");
            if (data) {
              this.markdown = data;
            } else {
              this.markdown = "";
            }
            this.isLoading = false;
            this.cdr.detectChanges();
          }
        });
      }
      clearNote() {
        this.markdown = "";
        this.saveNote();
      }
      static ctorParameters = () => [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] },
        { type: AuthService },
        { type: ChangeDetectorRef }
      ];
    };
    NotesPage = __decorate([
      Component({
        selector: "app-notes-page",
        standalone: true,
        imports: [
          CommonModule,
          FormsModule,
          MarkdownModule,
          MatFormFieldModule,
          MatInputModule,
          MatButtonModule,
          MatIconModule
        ],
        template: notes_page_default,
        styles: [notes_page_default2]
      })
    ], NotesPage);
  }
});

export {
  NotesPage,
  init_notes_page3 as init_notes_page
};
//# sourceMappingURL=chunk-IXFUQNBT.js.map
