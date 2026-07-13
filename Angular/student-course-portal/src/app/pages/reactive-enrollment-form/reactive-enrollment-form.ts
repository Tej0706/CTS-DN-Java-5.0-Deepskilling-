import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn,
  FormArray,
  FormControl
} from '@angular/forms';

function noCourseCode(control: AbstractControl): ValidationErrors | null {

  const value = control.value;

  if (value && value.startsWith('XX')) {
    return { noCourseCode: true };
  }

  return null;

}
function simulateEmailCheck(): AsyncValidatorFn {

  return (control: AbstractControl) => {

    return new Promise<ValidationErrors | null>((resolve) => {

      setTimeout(() => {

        if (control.value && control.value.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }

      }, 800);

    });

  };

}
@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm {

  enrollmentForm;

  constructor(private fb: FormBuilder) {
    this.enrollmentForm = this.fb.group({

  studentName: ['', [Validators.required, Validators.minLength(3)]],

  studentEmail: [
    '',
    [Validators.required, Validators.email],
    [simulateEmailCheck()]
  ],

  course: ['', [Validators.required, noCourseCode]],

  additionalCourses: this.fb.array([])

});
  }

  enroll() {
    if (this.enrollmentForm.valid) {
      alert('Enrollment Successful!');
      console.log(this.enrollmentForm.value);
    }
  }
  get additionalCourses(): FormArray<FormControl> {
  return this.enrollmentForm.get('additionalCourses') as FormArray<FormControl>;
}

addCourse() {
  this.additionalCourses.push(
    new FormControl('', Validators.required)
  );
}

removeCourse(index: number) {
  this.additionalCourses.removeAt(index);
}
}