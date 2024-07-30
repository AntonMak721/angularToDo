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
  private http = inject(HttpClient);
  private router = inject(Router);

  baseURL = 'https://dummyjson.com/auth/';

  public login(payload: { username: string; password: string }) {
    return this.http
      .post<LoginDataInterface>(`${this.baseURL}login`, payload)
      .pipe(
        map(response => {
          const user = response as UserInterface;
          localStorage.setItem('token', user.token);
          localStorage.setItem('id', user.id.toString());
          localStorage.setItem('userData', JSON.stringify(user));
          return user;
        })
      );
  }

  public logout() {
    return of(localStorage.clear());
  }

  public auth() {
    const token = localStorage.getItem('token');
    return this.http
      .get<LoginDataInterface>(`${this.baseURL}me`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .pipe(
        map(response => {
          const user = response as UserInterface;
          localStorage.setItem('id', user.id.toString());
          return user;
        })
      );
  }
}
