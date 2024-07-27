import { Component, inject } from '@angular/core';
import { TaskInterface, tasks } from '../../models/task-interface';
import { NgFor, NgIf, NgClass, AsyncPipe } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from '../../store/Reducers/auth.reducer';
import { TasksState } from '../../store/Reducers/tasks.reducer';
import { selectALLTasks } from '../../store/Selectors/tasks.selector';
import * as TasksActionUnion from '../../store/Actions/tasks.action';
import { selectUserID } from '../../store/Selectors/auth.selector';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, AsyncPipe],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  taskService = inject(TaskService);
  Tasks$: Observable<TaskInterface[]>;
  UserID$: Observable<number>;
  constructor(public store: Store<TasksState>) {
    this.Tasks$ = this.store.select(selectALLTasks);
    this.UserID$ = this.store.select(selectUserID);

  }

  UserID = Number(localStorage.getItem('id'));

  public tasks: TaskInterface[]=[]



  getTasks() {
    console.log(this.UserID)

    this.store.dispatch(
      {type:'[Task] Get all to do by id', payload: this.UserID}
    )
  }
  edit(task: TaskInterface) {
    // const newTaskText =  Array.from(document.getElementById('task.id')).map((el) => el.innerHTML).join(' ')
    const idTask = String(task.id);
    const newTaskText = document.getElementById(idTask)?.innerText;
    console.log(newTaskText);
    this.tasks.map((t: TaskInterface) => {
      if (t.id === task.id) {
        t.todo = newTaskText!;
        console.log(t.id, t.todo);
      }
    });
  }

  markComplete(task: TaskInterface) {
    this.tasks.map((t: TaskInterface) => {
      if (t.id === task.id) {
        t.completed = !t.completed;
        console.log(t.id, t.completed);
      }
    });
  }
  delete(task: TaskInterface) {
    this.tasks.splice(tasks.indexOf(task), 1);
  }
}
