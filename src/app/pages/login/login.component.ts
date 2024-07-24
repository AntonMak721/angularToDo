import { Component, inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import * as AuthActionUnion from '../../store/Actions/auth.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);

  loginForm = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private store: Store,
    private router: Router
  ) {}
  error = '';
  onSubmitLogin(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(
        AuthActionUnion.login({ payload: this.loginForm.value })
      );
    }
  }
}
