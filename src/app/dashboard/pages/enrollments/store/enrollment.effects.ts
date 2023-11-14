import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrollmentActions } from './enrollment.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { Enrollment } from '../models';

@Injectable()
export class EnrollmentEffects {
  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(
      // FILTRAR DE TODAS LAS ACCIONES, SOLO AQUELLAS QUE SEAN DE TIPO EnrollmentActions.loadEnrollments
      ofType(EnrollmentActions.loadEnrollments),

      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getEnrollments().pipe(
          // SI LA PETICION SALE BIEN, DISPARA LA ACCION EnrollmentActions.loadEnrollmentsSuccess
          map((data) => EnrollmentActions.loadEnrollmentsSuccess({ data })),

          // SI LA PETICION SALE MAL DISPARA LA ACCION EnrollmentActions.loadEnrollmentsFailure
          catchError((error) =>
            of(EnrollmentActions.loadEnrollmentsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  getEnrollments(): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>(
      `${environment.baseUrl}/enrollments?_expand=course&_expand=user`
    );
  }
}
