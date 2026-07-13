import { Routes } from '@angular/router';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';
import { Home } from './pages/home/home';
import { StudentProfile } from './pages/student-profile/student-profile';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { NotFound } from './pages/not-found/not-found';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  { path: '', component: Home },

  { path: 'home', component: Home },

  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      { path: '', component: CourseList },
      { path: ':id', component: CourseDetail }
    ]
  },

  {
    path: 'profile',
    component: StudentProfile,
    canActivate: [authGuard]
  },

  {
    path: 'enrollment',
    loadChildren: () =>
      import('./features/enrollment/enrollment-module').then(
        m => m.EnrollmentModule
      )
  },

  { path: '**', component: NotFound }

];