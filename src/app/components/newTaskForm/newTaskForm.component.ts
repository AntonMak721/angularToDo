import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskInterface, tasks } from '../../models/task-interface';
import { TaskService } from '../../services/task.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as TaskActionsUnion from '../../store/Actions/tasks.action';
import { Observable } from 'rxjs';
import { TasksState } from '../../store/Reducers/tasks.reducer';
import { selectALLTasks } from '../../store/Selectors/tasks.selector';
import { selectUserID } from '../../store/Selectors/auth.selector';

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
  Tasks$: Observable<TaskInterface[]>;
  UserID$: Observable<number>;
  constructor(public store: Store<TasksState>) {
    this.Tasks$ = this.store.select(selectALLTasks);
    this.UserID$ = this.store.select(selectUserID);
  }

  public tasks: TaskInterface[] = tasks;

  onSubmitNewTask() {
    const newTask: TaskInterface = {
      todo: this.newTaskForm.value.newTask!,
      id: Math.floor(Math.random() * 1000),
      completed: false,
      userId: Number(localStorage.getItem('id')),
    };
    // this.tasks.push(newTask);

    this.store.dispatch(TaskActionsUnion.addTask({ payload: newTask }));
    console.log(newTask);
    this.newTaskForm.reset();
  }
}
