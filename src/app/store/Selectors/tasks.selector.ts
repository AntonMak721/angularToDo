import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from '../Reducers/auth.reducer';
import { TASK_FEATURE_KEY, TasksState } from '../Reducers/tasks.reducer';
import { selectAuthState } from './auth.selector';

export const selectTasksState =
  createFeatureSelector<TasksState>(TASK_FEATURE_KEY);

export const selectALLTasks = createSelector(
  selectTasksState,
  state => state.tasks || []
);
