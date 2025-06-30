import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MarkdownModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './notes-page.html',
  styleUrl: './notes-page.scss'
})
export class NotesPage {
  markdown = '';
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.loadNote();
    }
  }

  saveNote() {
    if (!this.isBrowser) return;
    localStorage.setItem('markdown-note', this.markdown);
  }

  loadNote() {
    if (!this.isBrowser) return;
    this.markdown = localStorage.getItem('markdown-note') || '';
  }

  clearNote() {
    this.markdown = '';
    this.saveNote();
  }
}
