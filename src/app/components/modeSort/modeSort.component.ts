import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { TaskInterface, tasks } from '../../models/task-interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-modeSort',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, NgClass, ButtonComponent],
  templateUrl: './modeSort.component.html',
  styleUrls: ['./modeSort.component.css'],
})
export class ModeSortComponent {
  taskService = inject(TaskService);

  constructor() {}

  public tasks: TaskInterface[] = tasks;

  activeButton = 'cloudOn';
  minToMax = true;

  setActiveButton(buttonId: string): void {
    this.activeButton = buttonId;
  }

  isButtonActive(buttonId: string): boolean {
    return this.activeButton === buttonId;
  }
  sortByCompleted() {
    const tasksNew = this.tasks.filter(function (task: TaskInterface) {
      return task.completed;
    });
    console.log(tasksNew);
    this.tasks = tasksNew;
  }
  sortById() {
    if (this.minToMax) {
      this.tasks.sort((a, b) => b.id - a.id);
    } else {
      this.tasks.sort((a, b) => a.id - b.id);
    }
  }
}
