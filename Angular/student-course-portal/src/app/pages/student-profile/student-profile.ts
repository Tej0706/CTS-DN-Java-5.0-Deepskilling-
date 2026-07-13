import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-student-profile',
  imports: [],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile implements OnInit {

  enrolledCourses: Course[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {

    this.enrollmentService.getEnrolledCourses().subscribe({

      next: (courses) => {
        this.enrolledCourses = courses;
      },

      error: (err) => {
        console.error(err);
      }

    });

  }

}