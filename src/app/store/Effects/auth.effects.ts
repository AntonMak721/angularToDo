import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import * as AuthActionUnion from '../Actions/auth.actions';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private router = inject(Router);
  private service = inject(AuthService);

  public login$ = createEffect(() =>
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

  public loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionUnion.loginSuccess),
        tap(async () => {
          await this.router.navigateByUrl('');
        })
      ),
    { dispatch: false }
  );

  public logout$ = createEffect(
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

  public auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionUnion.auth),
      switchMap(() =>
        this.service.auth().pipe(
          map(response => {
            return AuthActionUnion.authSuccess({
              payload: response,
            });
          }),
          catchError(error => of(AuthActionUnion.loginFailure({ error })))
        )
      )
    )
  );
}
