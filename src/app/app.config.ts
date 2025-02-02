import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AUTH_FEATURE_KEY, authReducer } from './store/Reducers/auth.reducer';
import { AuthEffects } from './store/Effects/auth.effects';
import { TASK_FEATURE_KEY, tasksReducer } from './store/Reducers/tasks.reducer';
import { TasksEffects } from './store/Effects/tasks.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      [AUTH_FEATURE_KEY]: authReducer,
      [TASK_FEATURE_KEY]: tasksReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
    provideEffects(AuthEffects),
    provideEffects(TasksEffects),
  ],
};
