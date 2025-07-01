import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './shared/components/login/login.component';
import { EmailVerificationComponent } from './shared/components/email-verification/email-verification.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'verify-email', component: EmailVerificationComponent },
  { path: '**', redirectTo: 'login' }
];
