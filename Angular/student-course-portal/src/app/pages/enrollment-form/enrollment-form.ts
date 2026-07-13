import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-enrollment-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  studentName = '';
  course = '';

  enroll() {
    alert('Enrollment Successful!');
  }

}