import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './shared/components/login/login.component';
import { EmailVerificationComponent } from './shared/components/email-verification/email-verification.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'verify-email', component: EmailVerificationComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard-page/dashboard-page').then(m => m.DashboardPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'tasks',
    loadComponent: () => import('./features/tasks/tasks-page/tasks-page').then(m => m.TasksPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'timer',
    loadComponent: () => import('./features/timer/timer-page/timer-page').then(m => m.TimerPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'notes',
    loadComponent: () => import('./features/notes/notes-page/notes-page').then(m => m.NotesPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'snippets',
    loadComponent: () => import('./features/snippets/snippets-page/snippets-page').then(m => m.SnippetsPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    loadComponent: () => import('./features/settings/settings-page/settings-page').then(m => m.SettingsPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'stats',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/dashboard/stats-dashboard-page').then(m => m.StatsDashboardPage)
  },
  { path: '**', redirectTo: 'dashboard' }
];
