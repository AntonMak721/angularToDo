import { Component, inject, Input } from '@angular/core';
import { TaskInterface } from '../../models/task-interface';
import { NgFor, NgIf, NgClass, AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, AsyncPipe],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  @Input() tasks: TaskInterface[];
  private store = inject(Store);

  public markComplete(id: number) {
    this.store.dispatch({ type: '[Task] Mark complete task', payload: id });
  }
  public deleteTask(id: number) {
    this.store.dispatch({ type: '[Task] Delete task', payload: id });
  }

  public edit(task: TaskInterface) {
    const id = task.id;
    const updateTaskText = document.getElementById(`${id}`)?.innerHTML;
    const newTask = {
      id: task.id,
      todo: updateTaskText,
      completed: task.completed,
      userId: task.userId,
    };
    this.store.dispatch({ type: '[Task] Update task', payload: newTask });
  }
}
