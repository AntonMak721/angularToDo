import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { TaskService } from '../../services/task.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-mode-sort',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, NgClass, ButtonComponent],
  templateUrl: './modeSort.component.html',
  styleUrls: ['./modeSort.component.css'],
})
export class ModeSortComponent {
  taskService = inject(TaskService);
  store = inject(Store);

  activeButton = 'cloudOff';
  minToMax = false;
  completedFilterIndicator = false;

  setActiveButton(buttonId: string): void {
    this.activeButton = buttonId;
  }
  UserID = localStorage.getItem('id');
  getOnlineTasks() {
    this.store.dispatch({
      type: '[Task] Get all to do by id',
      payload: this.UserID,
    });
    this.setActiveButton('cloudOn');
  }
  sortByCompleted() {
    if (this.completedFilterIndicator) {
      this.store.dispatch({ type: '[Task] Filter tasks by completed cancel' });
      this.completedFilterIndicator = !this.completedFilterIndicator;
    } else {
      this.store.dispatch({ type: '[Task] Filter tasks by completed' });
      this.completedFilterIndicator = !this.completedFilterIndicator;
    }
  }
  sortById() {
    if (this.minToMax) {
      this.store.dispatch({ type: '[Task] Filter tasks by id min to max' });
      this.minToMax = !this.minToMax;
    } else {
      this.store.dispatch({ type: '[Task] Filter tasks by id max to min' });
      this.minToMax = !this.minToMax;
    }
  }
}
