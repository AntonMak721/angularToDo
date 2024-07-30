import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../models/user-interface';
import { LoginDataInterface } from '../../models/login-data-interface';

export const login = createAction(
  '[Auth] Logging in',
  props<{ payload: LoginDataInterface }>()
);

export const loginSuccess = createAction(
  '[Auth] Login is successful',
  props<{ payload: UserInterface }>()
);
export const loginFailure = createAction(
  '[Auth] Login is failed',
  props<{ error: string }>()
);

export const browserReload = createAction(
  '[Auth] Browser reload',
  props<{ payload: UserInterface }>()
);

export const logout = createAction('[Auth] Logout');
