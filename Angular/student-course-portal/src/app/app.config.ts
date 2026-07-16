import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { errorInterceptor } from './interceptors/error-interceptor';
import { routes } from './app.routes';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideState } from '@ngrx/store';
import { courseReducer } from './store/course/course.reducer';
import { provideEffects } from '@ngrx/effects';
import { CourseEffects } from './store/course/course.effects';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        errorInterceptor,
        loadingInterceptor
      ])
      
    ),
    provideStore(),
    provideState('course', courseReducer ),
    provideState('enrollment', enrollmentReducer),
    provideEffects(CourseEffects),
    provideStoreDevtools({
      maxAge: 25
    })
  ]
};