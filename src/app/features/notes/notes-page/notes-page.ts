import { Component, Inject, PLATFORM_ID, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-notes-page',
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
  templateUrl: './notes-page.html',
  styleUrl: './notes-page.scss'
})
export class NotesPage implements OnInit {
  markdown = '';
  isBrowser: boolean;
  isLoading = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.loadNote();
    }
  }

  saveNote() {
    if (!this.isBrowser) return;
    
    this.authService.updateMarkdownNote(this.markdown).subscribe({
      next: () => {
        console.log('Note saved successfully');
      },
      error: (error) => {
        console.error('Failed to save note:', error);
        // Fallback to localStorage if API fails
        localStorage.setItem('markdown-note', this.markdown);
      }
    });
  }

  loadNote() {
    if (!this.isBrowser) return;
    
    this.isLoading = true;
    this.authService.getUserData().subscribe({
      next: (userData) => {
        this.markdown = userData.markdownNote || '';
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Failed to load note from API:', error);
        // Fallback to localStorage
        const data = localStorage.getItem('markdown-note');
        if (data) {
          this.markdown = data;
        } else {
          this.markdown = '';
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  clearNote() {
    this.markdown = '';
    this.saveNote();
  }
}
