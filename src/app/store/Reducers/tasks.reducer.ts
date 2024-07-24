import { Action, createReducer, on } from '@ngrx/store';
import * as TasksActionUnion from '../Actions/tasks.action';
import { TaskInterface } from '../../models/task-interface';

export interface TasksState {
  isLoading: boolean;
  error: string;
  tasks: TaskInterface[];
}

export const initialTasksState: TasksState = {
  isLoading: false,
  error: '',
  tasks: [],
};

export const TASK_FEATURE_KEY = 'task';

export const authReducer = createReducer(
  initialTasksState,
  on(TasksActionUnion.getAlltoDoById, (state, { payload }) => ({
    ...state,
    tasks: payload,
    isLoading: false,
  })),
  on(TasksActionUnion.updateTask, (state, { payload }) => ({
    ...state,
    tasks: payload,
    isLoading: false,
  })),

  on(TasksActionUnion.tasksLoadingFailure, (state, { error }) => ({
    ...state,
    error: error,
    isLoading: false,
  })),

  on(TasksActionUnion.deleteTask, (state, { payload }) => ({
    ...state,
    tasks: payload,
    isLoading: false,
  }))
  // on(AuthActionUnion.logoutSuccess, (state)=>({...state,isLoading: false})),
  // on(AuthActionUnion.logoutFailure, (state,{error})=>({...state,error:error,isLoading: false})),
);
