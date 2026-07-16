import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseCard } from '../../components/course-card/course-card';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading } from '../../store/course/course.selectors';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard,
    Highlight,
    CreditLabelPipe
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses$!: Observable<Course[]>;
  selectedCourseId = 0;
  searchTerm = '';
  loading$!: Observable<boolean>;
  errorMessage = '';

  constructor(
  private router: Router,
  private route: ActivatedRoute,
  private cdr: ChangeDetectorRef,
  private store: Store
) {}

ngOnInit(): void {

  this.searchTerm =
    this.route.snapshot.queryParamMap.get('search') || '';

  this.courses$ = this.store.select(selectAllCourses);
  this.loading$ = this.store.select(selectCoursesLoading);
  this.store.dispatch(loadCourses());

}

  onEnroll(courseId: number) {
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: Course) {
    return course.id;
  }

  viewCourse(course: Course) {
    this.router.navigate(['/courses', course.id]);
  }

  updateSearch() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: this.searchTerm },
      queryParamsHandling: 'merge'
    });
  }

}