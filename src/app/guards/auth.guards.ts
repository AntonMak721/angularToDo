import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActionUnion from '../store/Actions/auth.actions';

export const canActivateAuth = async () => {
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
