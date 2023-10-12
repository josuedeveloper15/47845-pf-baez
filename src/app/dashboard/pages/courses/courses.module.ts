import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiUrl } from 'src/app/config/url.token';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: ApiUrl,
      useValue: {},
    },
  ],
})
export class CoursesModule {}
