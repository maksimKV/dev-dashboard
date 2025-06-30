import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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

  constructor() {
    this.loadNote();
  }

  saveNote() {
    localStorage.setItem('markdown-note', this.markdown);
  }

  loadNote() {
    this.markdown = localStorage.getItem('markdown-note') || '';
  }

  clearNote() {
    this.markdown = '';
    this.saveNote();
  }
}
