import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AuthState, reducer as authReducer } from './Reducers/auth.reducer';
import { tasksReducer, TasksState } from './Reducers/tasks.reducer';

export interface State {
  auth: AuthState;
  task: TasksState;
}

export const reducers: ActionReducerMap<State, any> = {
  auth: authReducer,
  task: tasksReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
