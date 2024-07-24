import { Injectable, signal, inject } from '@angular/core';
import { UserInterface } from '../models/user-interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthState } from '../store/Reducers/auth.reducer';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  http = inject(HttpClient);
  router = inject(Router);

  baseURL = 'https://dummyjson.com/auth/';

  loginNgRx(payload: { username: string; password: string }) {
    return this.http.post(`${this.baseURL}login`, payload).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('id', response.id);
        return response;
      })
    );
  }

  logoutNgRx() {
    return of(localStorage.setItem('token', ''));
  }
}
