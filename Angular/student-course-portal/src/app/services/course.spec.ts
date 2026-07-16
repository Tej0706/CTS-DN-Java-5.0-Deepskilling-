import { TestBed } from '@angular/core/testing';
import {
  provideHttpClient,
  withInterceptorsFromDi
} from '@angular/common/http';

import {
  provideHttpClientTesting,
  HttpTestingController
} from '@angular/common/http/testing';

import { CourseService } from './course';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Task 107
  it('should return courses', () => {

    const mockCourses = [

      {
        id: 1,
        name: 'Java',
        code: 'CS101',
        credits: 4,
        gradeStatus: 'passed'
      },

      {
        id: 2,
        name: 'Angular',
        code: 'CS102',
        credits: 3,
        gradeStatus: 'pending'
      }

    ];

    service.getCourses().subscribe(courses => {

      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);

    });

    const req =
      httpMock.expectOne('http://localhost:3000/courses');

    expect(req.request.method).toBe('GET');

    req.flush(mockCourses);

  });

  // Task 108
  it('should handle error', () => {

    service.getCourses().subscribe({

     next: () => {
  throw new Error('Expected error');
},

      error: (err) => {

        expect(err.message)
          .toContain('Failed to load courses');

      }

    });

    const req =
      httpMock.expectOne('http://localhost:3000/courses');

    req.flush(
      'Server Error',
      {
        status: 500,
        statusText: 'Server Error'
      }
    );

  });

});