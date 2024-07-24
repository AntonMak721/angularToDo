import { Component } from '@angular/core';
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
  firstName$: Observable<string>;
  lastName$: Observable<string>;
  userImg$: Observable<string>;

  constructor(public store: Store<AuthState>) {
    this.firstName$ = store.select(selectUserFirstName);
    this.lastName$ = store.select(selectUserLastName);
    this.userImg$ = store.select(selectUserImg);
  }
}
