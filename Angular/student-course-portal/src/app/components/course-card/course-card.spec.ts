import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCard } from './course-card';
import { EnrollmentService } from '../../services/enrollment';
import { provideStore } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

describe('CourseCard', () => {

  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        provideStore(),
        {
          provide: EnrollmentService,
          useValue: {
            enroll: () => {},
            unenroll: () => {},
            isEnrolled: () => false
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;

    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed'
    };

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Task 103
  it('should display course name', () => {

    const title = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(title.textContent).toContain('Data Structures');

  });

  // Task 104
  it('should emit enrollRequested when Enroll button is clicked', () => {

   vi.spyOn(component.enrollRequested, 'emit');

    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    button.click();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);

  });

  // Task 105
  it('should call ngOnChanges', () => {

    vi.spyOn(console, 'log');

    component.ngOnChanges({
      course: new SimpleChange(
        null,
        component.course,
        true
      )
    });

    expect(console.log).toHaveBeenCalled();

  });

});