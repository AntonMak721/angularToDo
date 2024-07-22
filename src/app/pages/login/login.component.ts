import { Component, inject } from '@angular/core';
import {  Validators , FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import {UserInterface} from '../../models/user-interface';
import { ReactiveFormsModule } from '@angular/forms'
import {ButtonComponent} from '../../components/button/button.component';
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common';
import { Store } from '@ngrx/store'
import * as AuthActionUnion from '../../store/Actions/auth.actions';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  fb = inject(FormBuilder);
  authService = inject(AuthService)


  loginForm = this.fb.nonNullable.group({
    username: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    password: ['',[
      Validators.required,
      Validators.minLength(4)
    ]]
  });

  constructor(private store: Store, private router: Router) {
    // this.store.select(selectToken).subscribe(token => (this.token = token));
    // this.store.select(selectError).subscribe(error => (this.error = error));
    // this.store.select(selectIsLoading).subscribe(isLoading => (this.isLoading = isLoading));

  }
  error = '';
  onSubmitLogin(): void {
    if (this.loginForm.valid) {
      // @ts-ignore
      // this.authService.login(this.loginForm.value)
      //   .subscribe((response)=>{
      //     console.log('response', response)
      //   })
      // this.store.dispatch({type:'[Auth] Logging in'})
      this.store.dispatch(AuthActionUnion.login({payload:this.loginForm.value}))
    }

  }

}



// username = '';
// password = '';
// token = '';
// error = '';
// isLoading = false;
//
// constructor(private store: Store) {
//   this.store.select(selectToken).subscribe(token => (this.token = token));
//   this.store.select(selectError).subscribe(error => (this.error = error));
//   this.store.select(selectIsLoading).subscribe(isLoading => (this.isLoading = isLoading));
// }
//
// onSubmit() {
//   this.store.dispatch(login({ username: this.username, password: this.password }));
// }
