import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CourseList } from './course-list';

describe('CourseList', () => {

  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  const initialState = {
    course: {
      courses: [
        {
          id: 1,
          name: 'Data Structures',
          code: 'CS101',
          credits: 4,
          gradeStatus: 'passed'
        },
        {
          id: 2,
          name: 'Java',
          code: 'CS102',
          credits: 3,
          gradeStatus: 'pending'
        }
      ],
      loading: false,
      error: null
    }
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideRouter([]),

        provideMockStore({
          initialState
        }),

        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: {
                get: () => ''
              }
            }
          }
        }
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Task 109
it('should load courses from store', async () => {

  component.courses$.subscribe(courses => {

    expect(courses.length).toBe(2);
    expect(courses[0].name).toBe('Data Structures');
    return;

  });

});

// Task 110
it('should update loading state', async () => {

  store.setState({
    course: {
      courses: [],
      loading: true,
      error: null
    }
  });

  store.refreshState();

  component.loading$.subscribe(loading => {

    expect(loading).toBe(true);
    return;

  });

});

});