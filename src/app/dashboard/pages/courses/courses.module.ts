import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiUrl } from 'src/app/config/url.token';
import { CoursesComponent } from './courses.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';

@NgModule({
  declarations: [CoursesComponent, CoursesTableComponent, CoursesDialogComponent],
  imports: [CommonModule, SharedModule],
  providers: [
    {
      provide: ApiUrl,
      useValue: {},
    },
  ],
})
export class CoursesModule {}
