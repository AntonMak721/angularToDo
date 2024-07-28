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

  apiUrl = 'https://dummyjson.com/todos/';

  // getTasks() {
  //   return this.http.get<any>('https://dummyjson.com/todos/user/1')
  // }

  getTasks(id: any): Observable<TaskInterface[]> {
    const idPayload= id.payload;
    return this.http.get<any>(`${this.apiUrl}user/${idPayload}`).pipe(
      map(response => response?.todos))
  }
  addTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post(`${this.apiUrl}add`, task).pipe(
      map((response: any) => {
        console.log(response);
        return response}),

    );
  }

  deleteTask(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
