import {
  ActivatedRoute,
  Router,
  init_router
} from "./chunk-SMARPGGZ.js";
import {
  FormsModule,
  init_forms
} from "./chunk-5VCTOLDM.js";
import {
  HttpClientTestingModule,
  HttpTestingController,
  init_testing as init_testing2
} from "./chunk-DQE55PZ7.js";
import {
  AuthService,
  environment,
  init_auth_service,
  init_environment
} from "./chunk-3BJ3OYBN.js";
import "./chunk-3YKIIKQF.js";
import {
  CommonModule,
  Component,
  HttpClient,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  fakeAsync,
  init_common,
  init_core,
  init_http,
  init_testing,
  init_tslib_es6,
  tick
} from "./chunk-4OKOT362.js";

// angular:jit:style:inline:src\app\shared\components\login\login.component.ts;CiAgICAubG9naW4tY29udGFpbmVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoOwogICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpOwogICAgICBwYWRkaW5nOiAyMHB4OwogICAgfQogICAgCiAgICAubG9naW4tY2FyZCB7CiAgICAgIGJhY2tncm91bmQ6IHdoaXRlOwogICAgICBwYWRkaW5nOiA0MHB4OwogICAgICBib3JkZXItcmFkaXVzOiAxMnB4OwogICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMik7CiAgICAgIHdpZHRoOiAxMDAlOwogICAgICBtYXgtd2lkdGg6IDQwMHB4OwogICAgfQogICAgCiAgICBoMiB7CiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDsKICAgICAgY29sb3I6ICMzMzM7CiAgICAgIGZvbnQtc2l6ZTogMjhweDsKICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgIH0KICAgIAogICAgLmZvcm0tZ3JvdXAgewogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwogICAgfQogICAgCiAgICBsYWJlbCB7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICBtYXJnaW4tYm90dG9tOiA4cHg7CiAgICAgIGNvbG9yOiAjNTU1OwogICAgICBmb250LXdlaWdodDogNTAwOwogICAgfQogICAgCiAgICAuZm9ybS1jb250cm9sIHsKICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIHBhZGRpbmc6IDEycHggMTZweDsKICAgICAgYm9yZGVyOiAycHggc29saWQgI2UxZTVlOTsKICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7CiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7CiAgICB9CiAgICAKICAgIC5mb3JtLWNvbnRyb2w6Zm9jdXMgewogICAgICBvdXRsaW5lOiBub25lOwogICAgICBib3JkZXItY29sb3I6ICM2NjdlZWE7CiAgICB9CiAgICAKICAgIC5mb3JtLWFjdGlvbnMgewogICAgICBtYXJnaW4tdG9wOiAzMHB4OwogICAgfQogICAgCiAgICAuYnRuLXByaW1hcnkgewogICAgICB3aWR0aDogMTAwJTsKICAgICAgcGFkZGluZzogMTRweDsKICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTsKICAgICAgY29sb3I6IHdoaXRlOwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICBmb250LXdlaWdodDogNjAwOwogICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7CiAgICB9CiAgICAKICAgIC5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7CiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsKICAgIH0KICAgIAogICAgLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHsKICAgICAgb3BhY2l0eTogMC42OwogICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOwogICAgfQogICAgCiAgICAudG9nZ2xlLW1vZGUgewogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIG1hcmdpbi10b3A6IDIwcHg7CiAgICB9CiAgICAKICAgIC5idG4tbGluayB7CiAgICAgIGJhY2tncm91bmQ6IG5vbmU7CiAgICAgIGJvcmRlcjogbm9uZTsKICAgICAgY29sb3I6ICM2NjdlZWE7CiAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKICAgIH0KICAgIAogICAgLmJ0bi1saW5rOmhvdmVyIHsKICAgICAgY29sb3I6ICM3NjRiYTI7CiAgICB9CiAgICAKICAgIC5lcnJvci1tZXNzYWdlIHsKICAgICAgbWFyZ2luLXRvcDogMjBweDsKICAgICAgcGFkZGluZzogMTJweDsKICAgICAgYmFja2dyb3VuZDogI2ZlZTsKICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZjYzsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBjb2xvcjogI2MzMzsKICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgfQogICAgCiAgICAuc3VjY2Vzcy1tZXNzYWdlIHsKICAgICAgbWFyZ2luLXRvcDogMjBweDsKICAgICAgcGFkZGluZzogMTJweDsKICAgICAgYmFja2dyb3VuZDogI2VmZTsKICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NmYzsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBjb2xvcjogIzNjMzsKICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgfQogIA==
var login_component_default;
var init_login_component = __esm({
  "angular:jit:style:inline:src\\app\\shared\\components\\login\\login.component.ts;CiAgICAubG9naW4tY29udGFpbmVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoOwogICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpOwogICAgICBwYWRkaW5nOiAyMHB4OwogICAgfQogICAgCiAgICAubG9naW4tY2FyZCB7CiAgICAgIGJhY2tncm91bmQ6IHdoaXRlOwogICAgICBwYWRkaW5nOiA0MHB4OwogICAgICBib3JkZXItcmFkaXVzOiAxMnB4OwogICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMik7CiAgICAgIHdpZHRoOiAxMDAlOwogICAgICBtYXgtd2lkdGg6IDQwMHB4OwogICAgfQogICAgCiAgICBoMiB7CiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDsKICAgICAgY29sb3I6ICMzMzM7CiAgICAgIGZvbnQtc2l6ZTogMjhweDsKICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgIH0KICAgIAogICAgLmZvcm0tZ3JvdXAgewogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwogICAgfQogICAgCiAgICBsYWJlbCB7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICBtYXJnaW4tYm90dG9tOiA4cHg7CiAgICAgIGNvbG9yOiAjNTU1OwogICAgICBmb250LXdlaWdodDogNTAwOwogICAgfQogICAgCiAgICAuZm9ybS1jb250cm9sIHsKICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIHBhZGRpbmc6IDEycHggMTZweDsKICAgICAgYm9yZGVyOiAycHggc29saWQgI2UxZTVlOTsKICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7CiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7CiAgICB9CiAgICAKICAgIC5mb3JtLWNvbnRyb2w6Zm9jdXMgewogICAgICBvdXRsaW5lOiBub25lOwogICAgICBib3JkZXItY29sb3I6ICM2NjdlZWE7CiAgICB9CiAgICAKICAgIC5mb3JtLWFjdGlvbnMgewogICAgICBtYXJnaW4tdG9wOiAzMHB4OwogICAgfQogICAgCiAgICAuYnRuLXByaW1hcnkgewogICAgICB3aWR0aDogMTAwJTsKICAgICAgcGFkZGluZzogMTRweDsKICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTsKICAgICAgY29sb3I6IHdoaXRlOwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICBmb250LXdlaWdodDogNjAwOwogICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7CiAgICB9CiAgICAKICAgIC5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7CiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsKICAgIH0KICAgIAogICAgLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHsKICAgICAgb3BhY2l0eTogMC42OwogICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOwogICAgfQogICAgCiAgICAudG9nZ2xlLW1vZGUgewogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIG1hcmdpbi10b3A6IDIwcHg7CiAgICB9CiAgICAKICAgIC5idG4tbGluayB7CiAgICAgIGJhY2tncm91bmQ6IG5vbmU7CiAgICAgIGJvcmRlcjogbm9uZTsKICAgICAgY29sb3I6ICM2NjdlZWE7CiAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKICAgIH0KICAgIAogICAgLmJ0bi1saW5rOmhvdmVyIHsKICAgICAgY29sb3I6ICM3NjRiYTI7CiAgICB9CiAgICAKICAgIC5lcnJvci1tZXNzYWdlIHsKICAgICAgbWFyZ2luLXRvcDogMjBweDsKICAgICAgcGFkZGluZzogMTJweDsKICAgICAgYmFja2dyb3VuZDogI2ZlZTsKICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZjYzsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBjb2xvcjogI2MzMzsKICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgfQogICAgCiAgICAuc3VjY2Vzcy1tZXNzYWdlIHsKICAgICAgbWFyZ2luLXRvcDogMjBweDsKICAgICAgcGFkZGluZzogMTJweDsKICAgICAgYmFja2dyb3VuZDogI2VmZTsKICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NmYzsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBjb2xvcjogIzNjMzsKICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgfQogIA=="() {
    login_component_default = "/* angular:styles/component:scss;b533c7ec9c84a71a9a791f3b5d5960cba14f4fc221bfd165b1a09f1be2d882eb;C:\\Users\\Max\\Documents\\GitHub\\dev-dashboard\\src\\app\\shared\\components\\login\\login.component.ts */\n.login-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.login-card {\n  background: white;\n  padding: 40px;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 400px;\n}\nh2 {\n  text-align: center;\n  margin-bottom: 30px;\n  color: #333;\n  font-size: 28px;\n  font-weight: 600;\n}\n.form-group {\n  margin-bottom: 20px;\n}\nlabel {\n  display: block;\n  margin-bottom: 8px;\n  color: #555;\n  font-weight: 500;\n}\n.form-control {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n  font-size: 16px;\n  transition: border-color 0.3s ease;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.form-actions {\n  margin-top: 30px;\n}\n.btn-primary {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.toggle-mode {\n  text-align: center;\n  margin-top: 20px;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: #667eea;\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: underline;\n}\n.btn-link:hover {\n  color: #764ba2;\n}\n.error-message {\n  margin-top: 20px;\n  padding: 12px;\n  background: #fee;\n  border: 1px solid #fcc;\n  border-radius: 6px;\n  color: #c33;\n  text-align: center;\n}\n.success-message {\n  margin-top: 20px;\n  padding: 12px;\n  background: #efe;\n  border: 1px solid #cfc;\n  border-radius: 6px;\n  color: #3c3;\n  text-align: center;\n}\n/*# sourceMappingURL=login.component.css.map */\n";
  }
});

// src/app/shared/components/login/login.component.ts
var LoginComponent;
var init_login_component2 = __esm({
  "src/app/shared/components/login/login.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_login_component();
    init_core();
    init_common();
    init_forms();
    init_router();
    init_auth_service();
    LoginComponent = class LoginComponent2 {
      authService;
      router;
      email = "";
      password = "";
      isLoginMode = true;
      isLoading = false;
      error = "";
      success = "";
      showResend = false;
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
      }
      toggleMode() {
        this.isLoginMode = !this.isLoginMode;
        this.error = "";
        this.success = "";
      }
      onSubmit() {
        if (!this.email || !this.password) {
          this.error = "Please fill in all fields";
          return;
        }
        this.isLoading = true;
        this.error = "";
        this.success = "";
        this.showResend = false;
        const authObservable = this.isLoginMode ? this.authService.login(this.email, this.password) : this.authService.register(this.email, this.password);
        authObservable.subscribe({
          next: (response) => {
            if (this.isLoginMode) {
              this.authService.setAuth(response.token, response.user);
              this.success = response.message;
              this.isLoading = false;
              setTimeout(() => {
                this.router.navigate(["/dashboard"]);
              }, 1e3);
            } else {
              this.success = response.message;
              this.isLoading = false;
            }
          },
          error: (error) => {
            this.error = error.error?.error || "An error occurred";
            this.isLoading = false;
            if (this.isLoginMode && this.error.toLowerCase().includes("verify your email")) {
              this.showResend = true;
            }
          }
        });
      }
      resendVerification() {
        this.isLoading = true;
        this.error = "";
        this.success = "";
        this.authService.resendVerification(this.email).subscribe({
          next: (res) => {
            this.success = res.message;
            this.isLoading = false;
          },
          error: (err) => {
            this.error = err.error?.error || "Failed to resend verification email.";
            this.isLoading = false;
          }
        });
      }
      static ctorParameters = () => [
        { type: AuthService },
        { type: Router }
      ];
    };
    LoginComponent = __decorate([
      Component({
        selector: "app-login",
        standalone: true,
        imports: [CommonModule, FormsModule],
        template: `
    <div class="login-container">
      <div class="login-card">
        <h2>{{ isLoginMode ? 'Login' : 'Register' }}</h2>
        
        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="email"
              required
              class="form-control"
              placeholder="Enter email address"
            />
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              [(ngModel)]="password"
              required
              class="form-control"
              placeholder="Enter password"
              minlength="6"
            />
          </div>
          
          <div class="form-actions">
            <button type="submit" [disabled]="!loginForm.valid || isLoading" class="btn-primary">
              {{ isLoading ? 'Loading...' : (isLoginMode ? 'Login' : 'Register') }}
            </button>
          </div>
        </form>
        
        <div class="toggle-mode">
          <button type="button" (click)="toggleMode()" class="btn-link">
            {{ isLoginMode ? 'Need an account? Register' : 'Have an account? Login' }}
          </button>
        </div>
        
        <div *ngIf="error" class="error-message">
          {{ error }}
          <button *ngIf="showResend" (click)="resendVerification()" class="btn-link" [disabled]="isLoading">
            Resend verification email
          </button>
        </div>
        
        <div *ngIf="success" class="success-message">
          {{ success }}
        </div>
      </div>
    </div>
  `,
        styles: [login_component_default]
      })
    ], LoginComponent);
  }
});

// angular:jit:style:inline:src\app\shared\components\email-verification\email-verification.component.ts;CiAgICAudmVyaWZpY2F0aW9uLWNvbnRhaW5lciB7CiAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtaW4taGVpZ2h0OiAxMDB2aDsKICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTsKICAgICAgcGFkZGluZzogMjBweDsKICAgIH0KICAgIAogICAgLnZlcmlmaWNhdGlvbi1jYXJkIHsKICAgICAgYmFja2dyb3VuZDogd2hpdGU7CiAgICAgIHBhZGRpbmc6IDQwcHg7CiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7CiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsKICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIG1heC13aWR0aDogNDAwcHg7CiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgIH0KICAgIAogICAgaDIgewogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwogICAgICBjb2xvcjogIzMzMzsKICAgICAgZm9udC1zaXplOiAyNHB4OwogICAgICBmb250LXdlaWdodDogNjAwOwogICAgfQogICAgCiAgICBwIHsKICAgICAgY29sb3I6ICM2NjY7CiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7CiAgICB9CiAgICAKICAgIC5sb2FkaW5nLXNwaW5uZXIgewogICAgICB3aWR0aDogNDBweDsKICAgICAgaGVpZ2h0OiA0MHB4OwogICAgICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzOwogICAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzY2N2VlYTsKICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlOwogICAgICBtYXJnaW46IDAgYXV0byAyMHB4OwogICAgfQogICAgCiAgICBAa2V5ZnJhbWVzIHNwaW4gewogICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9CiAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9CiAgICB9CiAgICAKICAgIC5lcnJvci1zdGF0ZSB7CiAgICAgIGNvbG9yOiAjYzMzOwogICAgfQogICAgCiAgICAuc3VjY2Vzcy1zdGF0ZSB7CiAgICAgIGNvbG9yOiAjM2MzOwogICAgfQogICAgCiAgICAuYnRuLXByaW1hcnkgewogICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7CiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgYm9yZGVyOiBub25lOwogICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIGZvbnQtc2l6ZTogMTZweDsKICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlOwogICAgfQogICAgCiAgICAuYnRuLXByaW1hcnk6aG92ZXIgewogICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7CiAgICB9CiAg
var email_verification_component_default;
var init_email_verification_component = __esm({
  "angular:jit:style:inline:src\\app\\shared\\components\\email-verification\\email-verification.component.ts;CiAgICAudmVyaWZpY2F0aW9uLWNvbnRhaW5lciB7CiAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtaW4taGVpZ2h0OiAxMDB2aDsKICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTsKICAgICAgcGFkZGluZzogMjBweDsKICAgIH0KICAgIAogICAgLnZlcmlmaWNhdGlvbi1jYXJkIHsKICAgICAgYmFja2dyb3VuZDogd2hpdGU7CiAgICAgIHBhZGRpbmc6IDQwcHg7CiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7CiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsKICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIG1heC13aWR0aDogNDAwcHg7CiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgIH0KICAgIAogICAgaDIgewogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwogICAgICBjb2xvcjogIzMzMzsKICAgICAgZm9udC1zaXplOiAyNHB4OwogICAgICBmb250LXdlaWdodDogNjAwOwogICAgfQogICAgCiAgICBwIHsKICAgICAgY29sb3I6ICM2NjY7CiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7CiAgICB9CiAgICAKICAgIC5sb2FkaW5nLXNwaW5uZXIgewogICAgICB3aWR0aDogNDBweDsKICAgICAgaGVpZ2h0OiA0MHB4OwogICAgICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzOwogICAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzY2N2VlYTsKICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlOwogICAgICBtYXJnaW46IDAgYXV0byAyMHB4OwogICAgfQogICAgCiAgICBAa2V5ZnJhbWVzIHNwaW4gewogICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9CiAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9CiAgICB9CiAgICAKICAgIC5lcnJvci1zdGF0ZSB7CiAgICAgIGNvbG9yOiAjYzMzOwogICAgfQogICAgCiAgICAuc3VjY2Vzcy1zdGF0ZSB7CiAgICAgIGNvbG9yOiAjM2MzOwogICAgfQogICAgCiAgICAuYnRuLXByaW1hcnkgewogICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7CiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgYm9yZGVyOiBub25lOwogICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIGZvbnQtc2l6ZTogMTZweDsKICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlOwogICAgfQogICAgCiAgICAuYnRuLXByaW1hcnk6aG92ZXIgewogICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7CiAgICB9CiAg"() {
    email_verification_component_default = "/* angular:styles/component:scss;17224470f25ae8658cf5665454e6d5cf66628c6614a8872aae0e44a1b975db83;C:\\Users\\Max\\Documents\\GitHub\\dev-dashboard\\src\\app\\shared\\components\\email-verification\\email-verification.component.ts */\n.verification-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.verification-card {\n  background: white;\n  padding: 40px;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\nh2 {\n  margin-bottom: 20px;\n  color: #333;\n  font-size: 24px;\n  font-weight: 600;\n}\np {\n  color: #666;\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n.loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state {\n  color: #c33;\n}\n.success-state {\n  color: #3c3;\n}\n.btn-primary {\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.btn-primary:hover {\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=email-verification.component.css.map */\n";
  }
});

// src/app/shared/components/email-verification/email-verification.component.ts
var EmailVerificationComponent;
var init_email_verification_component2 = __esm({
  "src/app/shared/components/email-verification/email-verification.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_email_verification_component();
    init_core();
    init_common();
    init_router();
    init_http();
    init_environment();
    EmailVerificationComponent = class EmailVerificationComponent2 {
      route;
      router;
      http;
      isLoading = true;
      error = "";
      success = "";
      apiUrl = environment.apiUrl;
      constructor(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
      }
      ngOnInit() {
        this.verifyEmail();
      }
      verifyEmail() {
        const token = this.route.snapshot.queryParams["token"];
        if (!token) {
          this.error = "Invalid verification link. Please check your email and try again.";
          this.isLoading = false;
          return;
        }
        this.http.get(`${this.apiUrl}/auth/verify-email?token=${token}`).subscribe({
          next: (response) => {
            this.success = response.message;
            this.isLoading = false;
          },
          error: (error) => {
            this.error = error.error?.error || "Verification failed. Please try again.";
            this.isLoading = false;
          }
        });
      }
      goToLogin() {
        this.router.navigate(["/login"]);
      }
      static ctorParameters = () => [
        { type: ActivatedRoute },
        { type: Router },
        { type: HttpClient }
      ];
    };
    EmailVerificationComponent = __decorate([
      Component({
        selector: "app-email-verification",
        standalone: true,
        imports: [CommonModule],
        template: `
    <div class="verification-container">
      <div class="verification-card">
        <div *ngIf="!isLoading && !error && !success">
          <h2>Verifying Your Email</h2>
          <p>Please wait while we verify your email address...</p>
        </div>
        
        <div *ngIf="isLoading">
          <h2>Verifying Your Email</h2>
          <div class="loading-spinner"></div>
          <p>Please wait...</p>
        </div>
        
        <div *ngIf="error" class="error-state">
          <h2>Verification Failed</h2>
          <p>{{ error }}</p>
          <button (click)="goToLogin()" class="btn-primary">Go to Login</button>
        </div>
        
        <div *ngIf="success" class="success-state">
          <h2>Email Verified Successfully!</h2>
          <p>{{ success }}</p>
          <button (click)="goToLogin()" class="btn-primary">Go to Login</button>
        </div>
      </div>
    </div>
  `,
        styles: [email_verification_component_default]
      })
    ], EmailVerificationComponent);
  }
});

// src/app/integration/auth.integration.spec.ts
var require_auth_integration_spec = __commonJS({
  "src/app/integration/auth.integration.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_testing2();
    init_auth_service();
    init_login_component2();
    init_email_verification_component2();
    init_forms();
    init_core();
    init_environment();
    var TestHostComponent = class TestHostComponent {
    };
    TestHostComponent = __decorate([
      Component({
        template: `
    <app-login></app-login>
    <app-email-verification></app-email-verification>
  `
      })
    ], TestHostComponent);
    describe("Auth Integration", () => {
      let httpMock;
      let authService;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            HttpClientTestingModule,
            FormsModule,
            LoginComponent,
            EmailVerificationComponent,
            TestHostComponent
          ],
          providers: [AuthService]
        }).compileComponents();
        httpMock = TestBed.inject(HttpTestingController);
        authService = TestBed.inject(AuthService);
      }));
      afterEach(() => {
        httpMock.verify();
      });
      it("should register, resend verification, and login a user", fakeAsync(() => {
        let registered = false;
        authService.register("test@example.com", "Password123!").subscribe((res) => {
          registered = true;
        });
        const req = httpMock.expectOne((r) => r.url.startsWith(`${environment.apiUrl}/auth/register`));
        expect(req.request.method).toBe("POST");
        req.flush({ message: "Registered", token: "token123", user: { id: "1", email: "test@example.com" } });
        tick();
        expect(registered).toBeTrue();
        let resent = false;
        authService.resendVerification("test@example.com").subscribe((res) => {
          resent = true;
        });
        const req2 = httpMock.expectOne((r) => r.url.startsWith(`${environment.apiUrl}/auth/resend-verification`));
        expect(req2.request.method).toBe("POST");
        req2.flush({ message: "Verification sent" });
        tick();
        expect(resent).toBeTrue();
        let loggedIn = false;
        authService.login("test@example.com", "Password123!").subscribe((res) => {
          loggedIn = true;
        });
        const req3 = httpMock.expectOne((r) => r.url.startsWith(`${environment.apiUrl}/auth/login`));
        expect(req3.request.method).toBe("POST");
        req3.flush({ message: "Logged in", token: "jwt-token", user: { id: "1", email: "test@example.com" } });
        tick();
        expect(loggedIn).toBeTrue();
      }));
      it("should persist auth state after login", fakeAsync(() => {
        spyOn(localStorage, "setItem").and.callFake((key, value) => {
          localStorage[key] = value;
        });
        spyOn(localStorage, "getItem").and.callFake((key) => {
          return localStorage[key] || null;
        });
        authService.login("test@example.com", "Password123!").subscribe();
        const req = httpMock.expectOne((r) => r.url.startsWith(`${environment.apiUrl}/auth/login`));
        req.flush({ message: "Logged in", token: "jwt-token", user: { id: "1", email: "test@example.com" } });
        tick();
        authService.setAuth("jwt-token", { id: "1", email: "test@example.com" });
        const newAuthService = TestBed.inject(AuthService);
        expect(newAuthService.isAuthenticated()).toBeTrue();
      }));
    });
  }
});
export default require_auth_integration_spec();
//# sourceMappingURL=spec-auth.integration.spec.js.map
