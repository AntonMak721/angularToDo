import { Component, inject, Input } from '@angular/core';
import { TaskInterface } from '../../models/task-interface';
import { NgFor, NgIf, NgClass, AsyncPipe } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Store } from '@ngrx/store';

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
  markComplete(id: number) {
    this.store.dispatch({ type: '[Task] Mark complete task', payload: id });
  }
  deleteTask(id: number) {
    this.store.dispatch({ type: '[Task] Delete task', payload: id });
  }

  edit(task: TaskInterface) {
    const id = task.id;
    console.log(id);
    const updateTaskText = document.getElementById(`${id}`)?.innerHTML;
    console.log(updateTaskText);
    const newTask = {
      id: task.id,
      todo: updateTaskText,
      completed: task.completed,
      userId: task.userId,
    };
    this.store.dispatch({ type: '[Task] Update task', payload: newTask });
  }
}
