import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActionUnion from '../Actions/auth.actions';
import { UserInterface } from '../../models/user-interface';

export interface AuthState {
  isLogged: boolean;
  isLoading: boolean;
  error: string;
  user: UserInterface;
}

export const initialAuthState: AuthState = {
  isLogged: false,
  isLoading: false,
  error: '',
  user: {
    UserId: 0,
    firstName: '',
    lastName: '',
    username: '',
    token: '',
    password: '',
    image: '',
  },
};

export const AUTH_FEATURE_KEY = 'auth';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActionUnion.login, state => ({ ...state, isLoading: true })),
  on(AuthActionUnion.loginSuccess, (state, { payload }) => ({
    ...state,
    user: payload,
    isLogged: true,
    isLoading: false,
  })),
  on(AuthActionUnion.loginFailure, (state, { error }) => ({
    ...state,
    error: error,
    isLoading: false,
  })),
  on(AuthActionUnion.logout, state => ({
    ...state,
    isLoading: false,
    isLogged: false,
  }))
);
