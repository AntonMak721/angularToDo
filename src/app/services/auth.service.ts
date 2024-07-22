import { Injectable, signal, inject} from '@angular/core';
import {UserInterface} from '../models/user-interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { AuthState } from '../store/Reducers/auth.reducer';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  http = inject(HttpClient)
  router = inject(Router)

  logout() {
    localStorage.setItem('token', '')
    localStorage.setItem('firstName', '')
    localStorage.setItem('lastName', '')
    this.router.navigateByUrl('/login')
    // this.currentUserSig.set(null)
  }

  baseURL = 'https://dummyjson.com/auth/'


  login (payload: {username: string, password: string}){
    return this.http.post(`${this.baseURL}login`, payload)
      .pipe(
        map((response: any) => {
          console.log('response', response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('firstName', response.firstName);
          localStorage.setItem('lastName', response.lastName);
          localStorage.setItem('img', response.image);


          this.router.navigateByUrl('')
          return response.token;
        })

      )
  }
  loginNgRx (payload:  {username: string, password: string}){
    return this.http.post(`${this.baseURL}login`, payload)
      .pipe(
        map((response: any) => {
          // console.log('response', response);
          localStorage.setItem('token', response.token);
          // localStorage.setItem('firstName', response.user.firstName);
          // localStorage.setItem('lastName', response.user.lastName);
          // localStorage.setItem('img', response.user.image);

          return response;
        })

      )
  }

}
