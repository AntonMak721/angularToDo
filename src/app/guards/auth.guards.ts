// import { inject, Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { Observable, take } from 'rxjs';
// import { select, Store } from '@ngrx/store';
// import { State } from '../store/index';
// import { tap } from 'rxjs/operators';
//
// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//   constructor(
//     private store: Store<State>,
//     private router: Router
//   ) {}
//   canActivate(): Observable<boolean> {
//     return this.store.pipe(
//       select(state => state.auth.isLogged),
//       take(1),
//       tap(async authenticated => {
//         if (!authenticated) await this.router.navigate(['login']);
//         return authenticated;
//       })
//     );
//   }
// }

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs';
import { loginSuccess } from '../store/Actions/auth.actions';
import { UserInterface } from '../models/user-interface';
import { Store } from '@ngrx/store';
import * as AuthActionUnion from '../store/Actions/auth.actions';
import { selectUser } from '../store/Selectors/auth.selector';

export const canActivateAuth = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const store = inject(Store);

  if (!localStorage.getItem('token')) {
    router.navigate(['/login']);
    return false;
  }

  const userData = JSON.parse(localStorage.getItem('userData'));
  store.dispatch(AuthActionUnion.browserReload({ payload: userData }));
  return true;
};
