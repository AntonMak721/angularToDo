import { Action, createAction, props } from '@ngrx/store';
import { UserInterface } from '../../models/user-interface';

export const login = createAction(
  '[Auth] Logging in',
  props<{ payload: any }>()
);
export const loginSuccess = createAction(
  '[Auth] Login is successful',
  props<{ payload: UserInterface }>()
);
export const loginFailure = createAction(
  '[Auth] Login is failed',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
// export const logoutSuccess = createAction(
//   '[Auth] Logout is successful',
//   props<{ payload:UserInterface}>()
// );
// export const logoutFailure = createAction(
//   '[Auth] Login is failed',
//   props<{ error:string}>()
// );
