import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';
import { Course } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private matDialog: MatDialog
  ) {
    this.courses$ = this.coursesService.getCourses$();
  }

  addCourse(): void {
    this.matDialog
      .open(CoursesDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.courses$ = this.coursesService.createCourse$({
              id: new Date().getTime(),
              name: result.name,
              endDate: result.endDate,
              startDate: result.startDate,
            });
          }
        },
      });
  }

  onDeleteCourse(courseId: number): void {
    this.courses$ = this.coursesService.deleteCourse$(courseId);
  }

  onEditCourse(courseId: number): void {
    this.matDialog
      .open(CoursesDialogComponent, {
        data: courseId,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.courses$ = this.coursesService.editCourse$(courseId, result);
          }
        },
      });
  }
}
