import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskInterface } from '../../models/task-interface';
import { Store } from '@ngrx/store';
import * as TaskActionsUnion from '../../store/Actions/tasks.action';
import { Observable } from 'rxjs';
import { selectALLTasks } from '../../store/Selectors/tasks.selector';
import { selectUserID } from '../../store/Selectors/auth.selector';
import { NewTaskInterface } from '../../models/new-task.interface';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './newTaskForm.component.html',
  styleUrls: ['./newTaskForm.component.scss'],
})
export class NewTaskFormComponent {
  public fb = inject(FormBuilder);
  private store = inject(Store);

  Tasks$: Observable<TaskInterface[]> = this.store.select(selectALLTasks);
  UserID$: Observable<number> = this.store.select(selectUserID);

  newTaskForm = this.fb.nonNullable.group({
    newTask: ['', [Validators.required, Validators.minLength(4)]],
  });

  public onSubmitNewTask() {
    const newTask: NewTaskInterface = {
      todo: this.newTaskForm.value.newTask!,
      completed: false,
      userId: Number(localStorage.getItem('id')),
    };

    this.store.dispatch(TaskActionsUnion.addTask({ payload: newTask }));
    this.newTaskForm.reset();
  }
}
