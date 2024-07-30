import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TASK_FEATURE_KEY, TasksState } from '../Reducers/tasks.reducer';

export const selectTasksState =
  createFeatureSelector<TasksState>(TASK_FEATURE_KEY);

export const selectALLTasks = createSelector(
  selectTasksState,
  state => state.tasks || []
);
