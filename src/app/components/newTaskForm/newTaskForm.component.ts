import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms'
import {FormGroup, FormControl} from '@angular/forms'
import { TaskInterface, tasks } from '../../models/task-interface';
import { AsyncPipe, NgFor, NgIf, NgClass} from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-newTaskForm',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './newTaskForm.component.html',
  styleUrls: ['./newTaskForm.component.css']
})
export class NewTaskFormComponent {

  

  
  fb = inject(FormBuilder);



  newTaskForm = this.fb.nonNullable.group({
    newTask: ['', [
      Validators.required,
      Validators.minLength(4)
    ]]
  });

  taskService = inject(TaskService)

  constructor() { }

 public tasks:TaskInterface[] = tasks;

  onSubmitNewTask() {
    const newTask: TaskInterface ={
      task: this.newTaskForm.value.newTask!,
      id: tasks.length+1,
      completed: false,
    } 
    this.tasks.push(newTask)
    this.newTaskForm.reset();
  }
}
