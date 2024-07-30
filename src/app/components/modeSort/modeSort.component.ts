import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-mode-sort',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, NgClass],
  templateUrl: './modeSort.component.html',
  styleUrls: ['./modeSort.component.scss'],
})
export class ModeSortComponent {
  public taskService = inject(TaskService);
  private store = inject(Store);

  activeButton = 'cloudOff';
  minToMax = false;
  completedFilterIndicator = false;

  public setActiveButton(buttonId: string): void {
    this.activeButton = buttonId;
  }
  UserID = localStorage.getItem('id');
  public getOnlineTasks() {
    this.store.dispatch({
      type: '[Task] Get all to do by id',
      payload: this.UserID,
    });
    this.setActiveButton('cloudOn');
  }
  public sortByCompleted() {
    if (this.completedFilterIndicator) {
      this.store.dispatch({ type: '[Task] Filter tasks by completed cancel' });
      this.completedFilterIndicator = !this.completedFilterIndicator;
    } else {
      this.store.dispatch({ type: '[Task] Filter tasks by completed' });
      this.completedFilterIndicator = !this.completedFilterIndicator;
    }
  }
  public sortById() {
    if (this.minToMax) {
      this.store.dispatch({ type: '[Task] Filter tasks by id min to max' });
      this.minToMax = !this.minToMax;
    } else {
      this.store.dispatch({ type: '[Task] Filter tasks by id max to min' });
      this.minToMax = !this.minToMax;
    }
  }
}
