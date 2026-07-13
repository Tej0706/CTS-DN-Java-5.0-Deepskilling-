import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course';
import { switchMap } from 'rxjs/operators';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {

  course?: Course;
  students: any[] = [];
  constructor(
  private route: ActivatedRoute,
  private courseService: CourseService,
  private enrollmentService: EnrollmentService,
  private cdr: ChangeDetectorRef
) {}

  ngOnInit(): void {

  this.route.paramMap.pipe(

    switchMap(params => {

      const id = Number(params.get('id'));

      return this.courseService.getCourseById(id);

    })

  ).subscribe({

    next: (course) => {

      this.course = course;

      this.enrollmentService
        .getStudentsByCourse(Number(course.id))
        .subscribe(data => {

          this.students = data;

          this.cdr.detectChanges();

        });

    }

  });

}
}