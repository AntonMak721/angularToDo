import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/Reducers/auth.reducer';
import { UserInterface } from '../../models/user-interface';
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common';
import { selectUserFirstName } from '../../store/Selectors/auth.selector';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, NgClass],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  firstName$: Observable<string>
  
   

  constructor(public store: Store<AuthState>) { 
     this.firstName$= store.select(selectUserFirstName)
  }
  // firstName = localStorage.getItem('firstName');
  // lastName = localStorage.getItem('lastName');
  // imgSrc = localStorage.getItem('img');
  
}
