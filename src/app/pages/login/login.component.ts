import { Component, inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import * as AuthActionUnion from '../../store/Actions/auth.actions';
import { LoginDataInterface } from '../../models/login-data-interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public fb = inject(FormBuilder);
  private store = inject(Store);

  loginForm = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  error = '';
  public onSubmitLogin(): void {
    if (this.loginForm.valid) {
      const loginPayload = this.loginForm.value as LoginDataInterface;
      this.store.dispatch(AuthActionUnion.login({ payload: loginPayload }));
      console.log(loginPayload);
    }
  }
}
