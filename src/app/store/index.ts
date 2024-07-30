import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AuthState, authReducer } from './Reducers/auth.reducer';
import { tasksReducer, TasksState } from './Reducers/tasks.reducer';

export interface State {
  auth: AuthState;
  task: TasksState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  task: tasksReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
