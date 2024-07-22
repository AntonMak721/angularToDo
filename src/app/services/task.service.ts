
import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskInterface, tasks } from '../models/task-interface';

@Injectable({
  providedIn: 'root'
})


export class TaskService {
  constructor() { }




  
   http = inject(HttpClient);
   public tasks:TaskInterface[] = tasks;

  private apiUrl = 'https://dummyjson.com/todos/user/';

  getTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.apiUrl);
  }

  getTask(id: number): Observable<TaskInterface> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<TaskInterface>(url);
  }

  // addTask(task: TaskInterface): Observable<TaskInterface> {
  //   const newTask: TaskInterface ={
  //     task: task.task!,
  //     id: tasks.length+1,
  //     completed: false,
  //   } 
  //   return this.tasks.push(newTask)
  // }

  updateTask(task: TaskInterface): Observable<any> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put(url, task);
  }

  deleteTask(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  
}

