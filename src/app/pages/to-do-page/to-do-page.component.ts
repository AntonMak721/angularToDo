import { Component, inject} from '@angular/core';
import {ButtonComponent} from '../../components/button/button.component';
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component';
import { NewTaskFormComponent } from '../../components/newTaskForm/newTaskForm.component';
import { UserComponent } from '../../components/user/user.component';
import { ModeSortComponent } from '../../components/modeSort/modeSort.component';
import {AuthService} from '../../services/auth.service'
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common';

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
    NgFor
  ],
  templateUrl: './to-do-page.component.html',
  styleUrl: './to-do-page.component.scss'
})
export class ToDoPageComponent {
  authService = inject(AuthService);

 

}
