import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TaskService } from '../../services/task.service';
import {
  getAlltoDoSuccess,
  tasksLoadingFailure,
  addTaskSuccess,
} from '../Actions/tasks.action';
import { HttpClient } from '@angular/common/http';
import { TaskInterface } from '../../models/task-interface';

@Injectable()
export class TasksEffects {
  private http = inject(HttpClient);
  private actions$ = inject(Actions);
  private service = inject(TaskService);

  public getAllTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Task] Get all to do by id'),
      switchMap(({ payload }) =>
        this.service.getTasks(payload).pipe(
          map(response => {
            const todosFromServer: TaskInterface[] =
              response as TaskInterface[];
            return {
              type: '[Task] Get all to do success',
              payload: todosFromServer,
            };
          }),
          catchError(error => of(tasksLoadingFailure({ error })))
        )
      )
    )
  );

  public tasksSuccess$ = createEffect(
    () => this.actions$.pipe(ofType(getAlltoDoSuccess), tap()),
    { dispatch: false }
  );

  public addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Task] Add task'),
      switchMap(({ payload }) =>
        this.service.addTask(payload).pipe(
          map(response => addTaskSuccess({ payload: response })),
          catchError(error => of(tasksLoadingFailure({ error })))
        )
      )
    )
  );
}
