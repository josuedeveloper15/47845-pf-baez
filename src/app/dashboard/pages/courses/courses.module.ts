import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiUrl } from 'src/app/config/url.token';
import { CoursesComponent } from './courses.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesTableComponent,
    CoursesDialogComponent,
    CourseDetailComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  providers: [
    {
      provide: ApiUrl,
      useValue: {},
    },
  ],
})
export class CoursesModule {}
