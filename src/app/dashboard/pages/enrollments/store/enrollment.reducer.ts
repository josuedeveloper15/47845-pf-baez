import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Enrollment } from '../models';
import { Course } from '../../courses/models';
import { User } from '../../users/models';

export const enrollmentFeatureKey = 'enrollment';

export interface State {
  isLoading: boolean;
  isLoadingDialogOptions: boolean;
  courseOptions: Course[];
  studentOptions: User[];
  enrollments: Enrollment[];
  error: unknown;
}

export const initialState: State = {
  isLoading: false,
  isLoadingDialogOptions: false,
  enrollments: [],
  courseOptions: [],
  studentOptions: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  // loadEnrollments
  on(EnrollmentActions.loadEnrollments, (state) => ({
    ...state,
    isLoading: true,
  })),

  // loadEnrollmentsSuccess
  on(EnrollmentActions.loadEnrollmentsSuccess, (state, { data }) => ({
    ...state,
    isLoading: false,
    enrollments: data,
  })),

  // loadEnrollmentsFailure
  on(EnrollmentActions.loadEnrollmentsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  //loadEnrollmentDialogOptions
  on(EnrollmentActions.loadEnrollmentDialogOptions, (state) => {
    return {
      ...state,
      isLoadingDialogOptions: true,
    };
  }),
  //loadEnrollmentDialogOptionsSuccess
  on(EnrollmentActions.loadEnrollmentDialogOptionsSuccess, (state, action) => ({
    ...state,
    courseOptions: action.courses,
    studentOptions: action.students,
    isLoadingDialogOptions: false,
  })),

  //loadEnrollmentDialogOptionsFailure
  on(EnrollmentActions.loadEnrollmentDialogOptionsFailure, (state, action) => ({
    ...state,
    error: action.error,
    isLoadingDialogOptions: false,
  }))
);

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});
