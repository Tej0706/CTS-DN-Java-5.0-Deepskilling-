import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  imports: [FormsModule],
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