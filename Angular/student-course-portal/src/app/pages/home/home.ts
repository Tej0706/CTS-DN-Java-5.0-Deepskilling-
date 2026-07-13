import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CourseSummaryWidget],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  totalCourses = 0;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {

    console.log('Home Component Initialized');

    this.courseService.getCourses().subscribe({

      next: (courses) => {
        this.totalCourses = courses.length;
      },

      error: (err) => {
        console.error(err);
      }

    });

  }

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

}