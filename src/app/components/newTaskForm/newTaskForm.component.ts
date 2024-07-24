import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskInterface, tasks } from '../../models/task-interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-newTaskForm',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './newTaskForm.component.html',
  styleUrls: ['./newTaskForm.component.css'],
})
export class NewTaskFormComponent {
  fb = inject(FormBuilder);

  newTaskForm = this.fb.nonNullable.group({
    newTask: ['', [Validators.required, Validators.minLength(4)]],
  });

  taskService = inject(TaskService);

  constructor() {}

  public tasks: TaskInterface[] = tasks;

  onSubmitNewTask() {
    const newTask: TaskInterface = {
      todo: this.newTaskForm.value.newTask!,
      id: tasks.length + 1,
      completed: false,
      userID: Number(localStorage.getItem('id')),
    };
    this.tasks.push(newTask);
    this.newTaskForm.reset();
  }
}
