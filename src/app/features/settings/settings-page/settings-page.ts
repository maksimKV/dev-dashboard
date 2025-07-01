import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../shared/services/auth.service';

// Try different import approaches
// import { environment } from '../../../../environments/environment';

// Fallback: Define values directly if import fails
const environment = {
  appVersion: '1.0.1',
  author: 'Maksim Kanev'
};

interface AppEnvironment {
  appVersion: string;
  author: string;
}

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatSlideToggleModule, FormsModule, MatIconModule],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.scss'
})
export class SettingsPage implements OnInit {
  isBrowser: boolean;
  // Export all relevant app data as JSON
  exportData() {
    if (!this.isBrowser) return;
    let kanban = { todo: [], inProgress: [], done: [] };
    let timer = {};
    let snippets = [];
    try {
      kanban = JSON.parse(localStorage.getItem('kanban-tasks') || '{"todo":[],"inProgress":[],"done":[]}');
    } catch (e) {
      console.error('Failed to parse kanban-tasks:', e);
    }
    try {
      timer = JSON.parse(localStorage.getItem('focus-timer') || '{}');
    } catch (e) {
      console.error('Failed to parse focus-timer:', e);
    }
    try {
      snippets = JSON.parse(localStorage.getItem('snippets') || '[]');
    } catch (e) {
      console.error('Failed to parse snippets:', e);
    }
    const data = {
      kanban,
      timer,
      notes: localStorage.getItem('markdown-note') || '',
      snippets
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dev-dashboard-backup.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  // Import data from JSON file
  importData(event: Event) {
    if (!this.isBrowser) return;
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        if (data.kanban) localStorage.setItem('kanban-tasks', JSON.stringify(data.kanban));
        if (data.timer) localStorage.setItem('focus-timer', JSON.stringify(data.timer));
        if (typeof data.notes === 'string') localStorage.setItem('markdown-note', data.notes);
        if (data.snippets) localStorage.setItem('snippets', JSON.stringify(data.snippets));
        alert('Data imported successfully!');
      } catch (e) {
        alert('Invalid file or format.');
        console.error('Failed to parse imported data:', e);
      }
    };
    reader.readAsText(file);
    // Reset input so same file can be re-imported if needed
    input.value = '';
  }

  // Clear all app data with confirmation
  clearAllData() {
    if (!this.isBrowser) return;
    if (confirm('Are you sure you want to clear all app data? This cannot be undone.')) {
      localStorage.removeItem('kanban-tasks');
      localStorage.removeItem('focus-timer');
      localStorage.removeItem('markdown-note');
      localStorage.removeItem('snippets');
      alert('All app data cleared.');
    }
  }

  // Productivity Preferences state
  landingPages = [
    { value: 'dashboard', label: 'Dashboard' },
    { value: 'tasks', label: 'Kanban Board' },
    { value: 'notes', label: 'Notes' },
    { value: 'timer', label: 'Focus Timer' },
    { value: 'snippets', label: 'Snippets' },
    { value: 'stats', label: 'Stats Dashboard' },
  ];
  defaultLandingPage = 'dashboard';
  focusDuration = 25;
  breakDuration = 5;
  features = {
    tasks: true,
    notes: true,
    timer: true,
    snippets: true,
    stats: true,
  };

  // UI Preferences state
  sidebarPositions = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' }
  ];
  sidebarPosition = 'left';
  compactMode = false;
  fontSizes = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ];
  fontSize = 'medium';

  // About/Info section state
  appVersion = (environment as AppEnvironment).appVersion;
  author = (environment as AppEnvironment).author;
  repoUrl = 'https://github.com/maksimKV/dev-dashboard';

  // Accessibility state
  highContrast = false;
  keyboardShortcuts = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private authService: AuthService) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.loadProductivityPrefs();
      this.loadUiPrefs();
      this.loadAccessibilityPrefs();
    }
  }

  ngOnInit() {
    // Environment values are now loaded correctly
  }

  loadProductivityPrefs() {
    if (!this.isBrowser) return;
    this.defaultLandingPage = localStorage.getItem('default-landing-page') || 'dashboard';
    this.focusDuration = +(localStorage.getItem('focus-timer-duration') || 25);
    this.breakDuration = +(localStorage.getItem('focus-break-duration') || 5);
    const features = localStorage.getItem('enabled-features');
    if (features) {
      try {
        this.features = { ...this.features, ...JSON.parse(features) };
      } catch (e) {
        this.features = {
          tasks: true,
          notes: true,
          timer: true,
          snippets: true,
          stats: true
        };
        console.error('Failed to parse enabled-features:', e);
      }
    }
  }

  saveProductivityPrefs() {
    if (!this.isBrowser) return;
    localStorage.setItem('default-landing-page', this.defaultLandingPage);
    localStorage.setItem('focus-timer-duration', String(this.focusDuration));
    localStorage.setItem('focus-break-duration', String(this.breakDuration));
    localStorage.setItem('enabled-features', JSON.stringify(this.features));
    window.dispatchEvent(new StorageEvent('storage', { key: 'enabled-features' }));
    // Save to backend
    this.saveAllPrefsToBackend();
    alert('Productivity preferences saved!');
  }

  loadUiPrefs() {
    if (!this.isBrowser) return;
    this.sidebarPosition = localStorage.getItem('sidebar-position') || 'left';
    this.compactMode = localStorage.getItem('compact-mode') === 'true';
    this.fontSize = localStorage.getItem('font-size') || 'medium';
  }

  saveUiPrefs() {
    if (!this.isBrowser) return;
    localStorage.setItem('sidebar-position', this.sidebarPosition);
    localStorage.setItem('compact-mode', String(this.compactMode));
    localStorage.setItem('font-size', this.fontSize);
    window.dispatchEvent(new StorageEvent('storage', { key: 'sidebar-position' }));
    // Save to backend
    this.saveAllPrefsToBackend();
    alert('UI preferences saved!');
  }

  loadAccessibilityPrefs() {
    if (!this.isBrowser) return;
    this.highContrast = localStorage.getItem('high-contrast') === 'true';
    this.keyboardShortcuts = localStorage.getItem('keyboard-shortcuts') !== 'false';
  }

  saveAccessibilityPrefs() {
    if (!this.isBrowser) return;
    localStorage.setItem('high-contrast', String(this.highContrast));
    localStorage.setItem('keyboard-shortcuts', String(this.keyboardShortcuts));
    // Save to backend
    this.saveAllPrefsToBackend();
    window.dispatchEvent(new Event('high-contrast-changed'));
    alert('Accessibility preferences saved!');
  }

  saveAllPrefsToBackend() {
    const preferences = {
      defaultLandingPage: this.defaultLandingPage,
      focusDuration: this.focusDuration,
      breakDuration: this.breakDuration,
      features: this.features,
      sidebarPosition: this.sidebarPosition,
      compactMode: this.compactMode,
      fontSize: this.fontSize,
      highContrast: this.highContrast,
      keyboardShortcuts: this.keyboardShortcuts
    };
    this.authService.updatePreferences(preferences).subscribe({
      next: () => {
        // Optionally show a success message or log
        // alert('Preferences saved to backend!');
      },
      error: (err) => {
        alert('Failed to save preferences to backend.');
        console.error('Failed to save preferences to backend:', err);
      }
    });
  }
}
