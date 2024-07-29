import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { TaskInterface, tasks } from '../../models/task-interface';
import { TaskService } from '../../services/task.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-modeSort',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, NgClass, ButtonComponent],
  templateUrl: './modeSort.component.html',
  styleUrls: ['./modeSort.component.css'],
})
export class ModeSortComponent {
  taskService = inject(TaskService);
  store = inject(Store);

  constructor() {}
  activeButton = 'cloudOff';
  minToMax = false;
  comletedFilterIndicator = false;

  setActiveButton(buttonId: string): void {
    this.activeButton = buttonId;
  }
  UserID = Number(localStorage.getItem('id'));
  getOnlineTasks() {
    this.store.dispatch({
      type: '[Task] Get all to do by id',
      payload: this.UserID,
    });
  }
  sortByCompleted() {
    if (this.comletedFilterIndicator) {
      this.store.dispatch({ type: '[Task] Filter tasks by completed cancel' });
    } else {
      this.store.dispatch({ type: '[Task] Filter tasks by completed' });
    }
  }
  sortById() {
    if (this.minToMax) {
      this.store.dispatch({ type: '[Task] Filter tasks by id min to max' });
    } else {
      this.store.dispatch({ type: '[Task] Filter tasks by id max to min' });
    }
  }
}
