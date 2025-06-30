import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard-page/dashboard-page').then(m => m.DashboardPage)
  },
  {
    path: 'tasks',
    loadComponent: () => import('./features/tasks/tasks-page/tasks-page').then(m => m.TasksPage)
  },
  {
    path: 'notes',
    loadComponent: () => import('./features/notes/notes-page/notes-page').then(m => m.NotesPage)
  },
  {
    path: 'timer',
    loadComponent: () => import('./features/timer/timer-page/timer-page').then(m => m.TimerPage)
  },
  {
    path: 'snippets',
    loadComponent: () => import('./features/snippets/snippets-page/snippets-page').then(m => m.SnippetsPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./features/settings/settings-page/settings-page').then(m => m.SettingsPage)
  },
  {
    path: 'stats',
    loadComponent: () => import('./features/dashboard/stats-dashboard-page').then(m => m.StatsDashboardPage)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];
