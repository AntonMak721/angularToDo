import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common';
import {
  selectUserFirstName,
  selectUserImg,
  selectUserLastName,
} from '../../store/Selectors/auth.selector';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, NgClass],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  private store = inject(Store);

  public firstName$ = this.store.select(selectUserFirstName);
  public lastName$ = this.store.select(selectUserLastName);
  public userImg$ = this.store.select(selectUserImg);
}
