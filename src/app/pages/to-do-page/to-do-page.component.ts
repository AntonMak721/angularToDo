import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component';
import { NewTaskFormComponent } from '../../components/newTaskForm/newTaskForm.component';
import { UserComponent } from '../../components/user/user.component';
import { ModeSortComponent } from '../../components/modeSort/modeSort.component';
import { AuthService } from '../../services/auth.service';
import { NgFor, NgClass, AsyncPipe, NgForOf } from '@angular/common';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as AuthActionUnion from '../../store/Actions/auth.actions';
import { selectALLTasks } from '../../store/Selectors/tasks.selector';

@Component({
  selector: 'app-to-do-page',
  standalone: true,
  imports: [
    ButtonComponent,
    NgClass,
    TasksListComponent,
    NewTaskFormComponent,
    UserComponent,
    ModeSortComponent,
    NgFor,
    AsyncPipe,
    NgForOf,
  ],
  templateUrl: './to-do-page.component.html',
  styleUrl: './to-do-page.component.scss',
})
export class ToDoPageComponent {
  authService = inject(AuthService);
  store = inject(Store);
  tasks$ = this.store.select(selectALLTasks);
  constructor() {}
  logout() {
    this.store.dispatch(AuthActionUnion.logout());
  }
}
