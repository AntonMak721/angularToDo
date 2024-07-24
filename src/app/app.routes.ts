import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ToDoPageComponent } from './pages/to-do-page/to-do-page.component';
import { canActivateAuth } from './guards/auth.guards';
import { provideState } from '@ngrx/store';
import { AUTH_FEATURE_KEY, authReducer } from './store/Reducers/auth.reducer';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    providers: [provideState({ name: AUTH_FEATURE_KEY, reducer: authReducer })],
  },
  { path: '', component: ToDoPageComponent, canActivate: [canActivateAuth] },
];
