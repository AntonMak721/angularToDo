import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/Reducers/auth.reducer';
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
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  store = inject(Store);
  constructor() {}

  firstName$ = this.store.select(selectUserFirstName);
  lastName$ = this.store.select(selectUserLastName);
  userImg$ = this.store.select(selectUserImg);
}
