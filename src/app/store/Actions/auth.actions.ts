import {Action, createAction, props} from '@ngrx/store';
import {UserInterface} from '../../models/user-interface';


// export enum AuthActionTypes {

//   LOG_IN = '[Auth] Logging in',
//   LOG_IN_SUCCESS = '[Auth] Login is successful',
//   LOG_IN_FAILURE = '[Auth] Login is failed',
//   LOG_OUT = '[Auth] Logout',
//   LOG_OUT_SUCCESS = '[Auth] Logout is successful',
//   LOG_OUT_FAILURE = '[Auth] Login is failed',
// }



export const login = createAction(
  '[Auth] Logging in',
  props<{ payload:any}>()
);
export const loginSuccess = createAction(
  '[Auth] Login is successful',
  props<{ payload:UserInterface}>()
);
export const loginFailure = createAction(
  '[Auth] Login is failed',
  props<{ error:string}>()
);

export const logout = createAction(
  '[Auth] Logout',
  props<{ payload:any}>()
);
export const logoutSuccess = createAction(
  '[Auth] Logout is successful',
  props<{ payload:UserInterface}>()
);
export const logoutFailure = createAction(
  '[Auth] Login is failed',
  props<{ error:string}>()
);

