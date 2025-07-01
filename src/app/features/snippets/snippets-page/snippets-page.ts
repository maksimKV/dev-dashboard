import { Component, Inject, PLATFORM_ID, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule, MatChipListbox, MatChipOption } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { HighlightModule } from 'ngx-highlightjs';
import { Clipboard } from '@angular/cdk/clipboard';
import { Snippet } from '../../../shared/models/snippet.model';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-snippets-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatChipListbox,
    MatChipOption,
    MatSelectModule,
    HighlightModule
  ],
  templateUrl: './snippets-page.html',
  styleUrl: './snippets-page.scss'
})
export class SnippetsPage implements OnInit {
  snippets: Snippet[] = [];
  search = '';
  filterLang = '';
  editingId: string | null = null;
  newSnippet: Partial<Snippet> = { title: '', code: '', language: '', tags: [] };
  languages = [
    'typescript', 'javascript', 'python', 'html', 'css', 'json', 'bash', 'c', 'cpp', 'java', 'go', 'php', 'ruby', 'sql', 'yaml', 'markdown'
  ];
  isBrowser: boolean;
  isLoading = false;

  constructor(
    private clipboard: Clipboard,
    @Inject(PLATFORM_ID) private platformId: Object,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.loadSnippets();
  }

  get filteredSnippets() {
    return this.snippets.filter(s => {
      const matchesSearch =
        !this.search ||
        s.title.toLowerCase().includes(this.search.toLowerCase()) ||
        s.code.toLowerCase().includes(this.search.toLowerCase()) ||
        (s.tags?.some(tag => tag.toLowerCase().includes(this.search.toLowerCase())));
      const matchesLang = !this.filterLang || s.language === this.filterLang;
      return matchesSearch && matchesLang;
    });
  }

  addOrUpdateSnippet() {
    if (!this.newSnippet.title?.trim() || !this.newSnippet.code?.trim() || !this.newSnippet.language) return;
    if (this.editingId) {
      // Update existing
      const idx = this.snippets.findIndex(s => s.id === this.editingId);
      if (idx > -1) {
        this.snippets[idx] = {
          ...this.snippets[idx],
          ...this.newSnippet,
          updatedAt: Date.now()
        } as Snippet;
      }
    } else {
      // Add new
      const snippet: Snippet = {
        id: Date.now().toString(),
        title: this.newSnippet.title!,
        code: this.newSnippet.code!,
        language: this.newSnippet.language!,
        tags: this.newSnippet.tags || [],
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
      this.snippets.unshift(snippet);
    }
    this.saveSnippets();
    this.cancelEdit();
  }

  editSnippet(snippet: Snippet) {
    this.editingId = snippet.id;
    this.newSnippet = { ...snippet, tags: [...(snippet.tags || [])] };
  }

  deleteSnippet(id: string) {
    this.snippets = this.snippets.filter(s => s.id !== id);
    this.saveSnippets();
    this.cancelEdit();
  }

  copySnippet(code: string) {
    this.clipboard.copy(code);
  }

  saveSnippets() {
    if (!this.isBrowser) return;
    
    this.authService.updateSnippets(this.snippets).subscribe({
      next: () => {
        // Fallback to localStorage if API fails
        localStorage.setItem('snippets', JSON.stringify(this.snippets));
      },
      error: (error) => {
        console.error('Failed to save snippets:', error);
        // Fallback to localStorage
        localStorage.setItem('snippets', JSON.stringify(this.snippets));
      }
    });
  }

  loadSnippets() {
    if (!this.isBrowser) return;
    this.isLoading = true;
    this.authService.getUserData().subscribe({
      next: (userData) => {
        this.snippets = userData.snippets || [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Failed to load snippets from API:', error);
        // Fallback to localStorage
        const data = localStorage.getItem('snippets');
        if (data) {
          try {
            this.snippets = JSON.parse(data);
          } catch (e) {
            this.snippets = [];
            console.error('Failed to parse snippets:', e);
          }
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  cancelEdit() {
    this.editingId = null;
    this.newSnippet = { title: '', code: '', language: '', tags: [] };
  }

  addTag(tagInput: HTMLInputElement) {
    const tag = tagInput.value.trim();
    if (tag && !this.newSnippet.tags?.includes(tag)) {
      this.newSnippet.tags = [...(this.newSnippet.tags || []), tag];
    }
    tagInput.value = '';
  }

  removeTag(tag: string) {
    this.newSnippet.tags = (this.newSnippet.tags || []).filter(t => t !== tag);
  }
}
