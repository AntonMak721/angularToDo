import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
  store = inject(Store);
  @Input() tasks: TaskInterface[];
  constructor() {
  }
  // tasks$ = this.store.select(selectALLTasks)
  markComplete(id: number) {
    this.store.dispatch({type:'[Task] Mark complete task', payload: id});
  }
  deleteTask(id: number) {
    this.store.dispatch({type:'[Task] Delete task', payload: id});
  }

  edit(task: TaskInterface) {
    const id = task.id;
    console.log(id);
    // const updateTaskText = document.getElementById('task.id')?.innerHTML;
    const updateTaskText = document.getElementById(`${id}`)?.innerHTML;
    console.log(updateTaskText);
    const newTask={
      id: task.id,
      todo: updateTaskText,
      completed: task.completed,
      userId: task.userId,
    }
    this.store.dispatch({type:'[Task] Update task', payload: newTask})

  }

}
