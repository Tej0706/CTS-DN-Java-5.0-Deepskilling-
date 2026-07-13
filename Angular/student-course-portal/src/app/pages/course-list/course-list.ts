import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseCard } from '../../components/course-card/course-card';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course';

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

  courses: Course[] = [];
  selectedCourseId = 0;
  searchTerm = '';
  isLoading = true;
  errorMessage = '';

  constructor(
  private courseService: CourseService,
  private router: Router,
  private route: ActivatedRoute,
  private cdr: ChangeDetectorRef
) {}

  ngOnInit(): void {

    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') || '';

   this.courseService.getCourses().subscribe({

  next: (courses) => {

    setTimeout(() => {

      this.courses = courses;
      this.isLoading = false;
      this.cdr.detectChanges();

    }, 1500);

  },

  error: (err) => {

    this.errorMessage = err.message;
    this.isLoading = false;
    this.cdr.detectChanges();

  }

});

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