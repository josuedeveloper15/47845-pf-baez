import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { FullnamePipe } from './pipes/fullname.pipe';
import { FormErrorsPipe } from './pipes/form-errors.pipe';
import { MatSelectModule } from '@angular/material/select';
import { HeadlineDirective } from './directives/headline.directive';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [FullnamePipe, FormErrorsPipe, HeadlineDirective],
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FullnamePipe,
    MatSelectModule,
    FormErrorsPipe,
    MatTableModule,
    HeadlineDirective,
    MatDatepickerModule,
    MatProgressSpinnerModule,
  ],
})
export class SharedModule {}
