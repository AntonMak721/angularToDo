import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import * as AuthActionUnion from '../Actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor() {}

  private actions$ = inject(Actions);
  private router = inject(Router);
  private service = inject(AuthService);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionUnion.login),
      switchMap(({ payload }) =>
        this.service.login(payload).pipe(
          map(response => {
            return AuthActionUnion.loginSuccess({
              payload: response,
            });
          }),
          catchError(error => of(AuthActionUnion.loginFailure({ error })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionUnion.loginSuccess),
        tap(async () => {
          await this.router.navigateByUrl('');

        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionUnion.logout),
        switchMap(() => {
          return this.service.logout().pipe(
            map(() => {
              this.router.navigateByUrl('login');
            })
          );
        })
      ),
    { dispatch: false }
  );
}
