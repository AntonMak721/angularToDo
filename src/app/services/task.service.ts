import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskInterface } from '../models/task-interface';
import { map } from 'rxjs/operators';
import { NewTaskInterface } from '../models/new-task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);

  apiUrl = 'https://dummyjson.com/todos/';

  public getTasks(id: number): Observable<TaskInterface[]> {
    console.log(id);
    return this.http
      .get<{
        todos: TaskInterface[];
      }>(`${this.apiUrl}user/${id}`)
      .pipe(map(response => response?.todos));
  }
  public addTask(task: NewTaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(`${this.apiUrl}add`, task).pipe(
      map((response: TaskInterface) => {
        return response as TaskInterface;
      })
    );
  }

  public deleteTask(id: number): Observable<object> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
