import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserInterface } from '../models/user-interface';
import { LoginDataInterface } from '../models/login-data-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);

  baseURL = 'https://dummyjson.com/auth/';

  login(payload: { username: string; password: string }) {
    return this.http.post<LoginDataInterface>(`${this.baseURL}login`, payload).pipe(
      map((response) => {
        const user = response as UserInterface;
        localStorage.setItem('token', user.token);
        localStorage.setItem('id', user.id.toString());
        localStorage.setItem('userData', JSON.stringify(user));
        return user;
      })
    );
  }

  logout() {
    return of(localStorage.clear());
  }
}
