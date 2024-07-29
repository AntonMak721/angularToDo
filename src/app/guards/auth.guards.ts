import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../store/index';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<State>,
    private router: Router
  ) {}
  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(state => state.auth.isLogged),
      take(1),
      tap(async authenticated => {
        if (!authenticated) await this.router.navigate(['login']);
        return authenticated;
      })
    );
  }
}
