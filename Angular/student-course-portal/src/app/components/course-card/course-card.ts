import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course!: Course;

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Previous Value:', changes['course']?.previousValue);
    console.log('Current Value:', changes['course']?.currentValue);
  }

  toggleEnrollment() {
    this.enrollRequested.emit(this.course.id);

    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
  }

  isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  // Getter keeps the template clean
  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled(),
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

}