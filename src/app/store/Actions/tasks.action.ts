import { createAction, props } from '@ngrx/store';
import { TaskInterface } from '../../models/task-interface';

// export const getAlltoDoById = createAction(
//   '[Task] Get all to do by id',
//   props<{ payload: TaskInterface[] }>()
//   );

export const getAlltoDoById = createAction('[Task] Get all to do by id',
  props<{ payload: any }>()
);

export const getAlltoDoSuccess = createAction(
  '[Task] Get all to do success',
  props<{ payload: any}>()
);

export const updateTask = createAction(
  '[Task] Update task',
  props<{ payload: TaskInterface }>()
);
export const addTask = createAction(
  '[Task] Add task',
  props<{ payload: TaskInterface}>()
);
export const addTaskSuccess= createAction(
  '[Task] Add task Success',
  props<{ payload: TaskInterface }>()
);
export const deleteTask = createAction(
  '[Task] Delete task',
  props<{ payload: any }>()
);

export const tasksLoadingFailure = createAction(
  '[Task] Loading is failed',
  props<{ error: string }>()
);
