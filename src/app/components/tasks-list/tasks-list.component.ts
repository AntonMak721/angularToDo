import { Component, inject } from '@angular/core';
import { TaskInterface, tasks } from '../../models/task-interface';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  taskService = inject(TaskService);

  constructor() {}

  public tasks: TaskInterface[] = tasks;

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
