import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskInterface, tasks } from '../models/task-interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  http = inject(HttpClient);
  public tasks: TaskInterface[] = tasks;

  private apiUrl = 'https://dummyjson.com/todos/';

  getTasks(id: number): Observable<TaskInterface[]> {
    const url = `${this.apiUrl}user/${id}`;
    return this.http.get<TaskInterface[]>(url);
  }

  addTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post(`${this.apiUrl}login`, task).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deleteTask(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
