import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  imports: [],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidget implements OnInit {

  totalCourses = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.loadCourses();

  }

  loadCourses() {

    this.courseService.getCourses().subscribe({

      next: (courses) => {
        this.totalCourses = courses.length;
      },

      error: (err) => {
        console.error(err);
      }

    });

  }

  addCourse() {

    this.courseService.createCourse({

      name: 'Artificial Intelligence',
      code: 'CS10' + (this.totalCourses + 1),
      credits: 3,
      gradeStatus: 'pending'

    }).subscribe({

      next: () => {

        console.log('Course Added');

        this.loadCourses();

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

}