import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from '../../store/enrollment.actions';
import {
  selectCourseOptions,
  selectStudentOptions,
} from '../../store/enrollment.selectors';
import { Observable } from 'rxjs';
import { Course } from '../../../courses/models';
import { User } from '../../../users/models';

@Component({
  selector: 'app-enrollment-dialog',
  templateUrl: './enrollment-dialog.component.html',
  styleUrls: ['./enrollment-dialog.component.scss'],
})
export class EnrollmentDialogComponent {
  courseOptions$: Observable<Course[]>;
  studentOptions$: Observable<User[]>;

  constructor(private store: Store) {
    this.store.dispatch(EnrollmentActions.loadEnrollmentDialogOptions());
    this.courseOptions$ = this.store.select(selectCourseOptions);
    this.studentOptions$ = this.store.select(selectStudentOptions);
  }
}
