import { createReducer, on } from '@ngrx/store';
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

export const tasksReducer = createReducer(
  initialTasksState,
  on(TasksActionUnion.getAlltoDoById, state => ({
    ...state,
    isLoading: true,
  })),
  on(TasksActionUnion.getAlltoDoSuccess, (state, { payload }) => ({
    ...state,
    tasks: payload,
    isLoading: false,
  })),
  on(TasksActionUnion.addTask, (state) => ({
     ...state,
     isLoading: true,
   })),
  on(TasksActionUnion.addTaskSuccess, (state, { payload }) => ({
    ...state,
    tasks: [...state.tasks, payload],
    isLoading: false,
  })),

  on(TasksActionUnion.tasksLoadingFailure, (state, { error }) => ({
    ...state,
    error: error,
    isLoading: false,
  })),
  on(TasksActionUnion.deleteTask, (state, { payload }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id!== payload),
    isLoading: false,
  })),
  on(TasksActionUnion.markCompletedTask, (state, { payload }) => ({
    ...state,
    tasks: state.tasks.map(task => task.id!== payload? task : {...task,completed:!task.completed}),
    isLoading: false,
  })),
  on(TasksActionUnion.updateTask, (state, { payload }) => ({
    ...state,
    tasks:state.tasks.map(task => task.id!== payload.id ? task : {...task, todo : payload.todo}),
    isLoading: false,
  })),
  on(TasksActionUnion.tasksFilterByCompleted , (state) => ({
    ...state,
    isLoading: false,
    tasks: state.tasks.filter(task => task.completed)
  })),


  on(TasksActionUnion.tasksFilterByIdMaxToMin , (state) => ({
    ...state,
    isLoading: false,
    tasks: state.tasks.sort((a, b) => b.id - a.id)
})),
  on(TasksActionUnion.tasksFilterByIdMinToMax , (state) => ({
    ...state,
    isLoading: false,
    tasks: state.tasks.sort((a, b) => a.id - b.id)
  }))


);
