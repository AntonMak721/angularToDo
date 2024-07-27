import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { of } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import {getAlltoDoSuccess, getAlltoDoById, tasksLoadingFailure,deleteTask, updateTask } from '../Actions/tasks.action';
import {HttpClient} from '@angular/common/http';
import { TaskInterface } from '../../models/task-interface';

@Injectable()
export class TasksEffects {
  constructor() {}

  http = inject(HttpClient);
  private actions$ = inject(Actions);
  private router = inject(Router);
  private service = inject(TaskService);

  getAllTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Task] Get all to do by id'),
      switchMap(({payload}) =>
        this.service.getTasks({payload}).pipe(
          map(response =>{
            const todosFromServer: TaskInterface[] = response;
            return ({type:'[Task] Get all to do success', payload: todosFromServer})
            console.log(response);
          }),
          catchError(error => of(tasksLoadingFailure({ error })))
        )
      )
    )
  );

  tasksSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getAlltoDoSuccess),
        tap(async () => {
        })
      ),
    { dispatch: false }
  );

  addTask$ = createEffect(() => this.actions$.pipe(
    ofType('[Task] Add task'),
    switchMap(({ payload }) =>
      this.service.addTask(payload).pipe(
        map(response => getAlltoDoById({ payload: response.userId })),
        catchError(error => of(tasksLoadingFailure({ error })))
      )
    )
  ));

  deleteTask$ = createEffect(() => this.actions$.pipe(
    ofType(deleteTask),
    switchMap(({ payload }) =>
      this.service.deleteTask(payload).pipe(
        map(response => response)
      )
    )
  ))

  // updateTask$ = createEffect(() => this.actions$.pipe(
  //   ofType(updateTask),
  //   switchMap(({ payload }) =>
  //     this.service.updateTask(payload).pipe(
  //       map(response => getAlltoDoById({ payload: response.userId })),
  //       catchError(error => of(tasksLoadingFailure({ error })))
  //     )
  //   )
  // ));
  //     )
  // )
}
