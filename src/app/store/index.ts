import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AuthState, reducer as authReducer } from './Reducers/auth.reducer';

export interface State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<State, any> = {
  auth: authReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
