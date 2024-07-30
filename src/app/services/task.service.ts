import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskInterface, tasks } from '../models/task-interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http = inject(HttpClient);
  public tasks: TaskInterface[] = tasks;

  apiUrl = 'https://dummyjson.com/todos/';

  getTasks(id: number): Observable<TaskInterface[]> {
    console.log(id);
    return this.http
      .get<{
      todos: TaskInterface[];
      }>(`${this.apiUrl}user/${id}`)
      .pipe(map(response => response?.todos));
  }
  addTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(`${this.apiUrl}add`, task).pipe(
      map((response: TaskInterface) => {
        return response as TaskInterface;
      })
    );
  }

  deleteTask(id: number): Observable<object> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
