import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component';

@NgModule({
  declarations: [UsersComponent, UsersDialogComponent, UsersTableComponent],
  imports: [CommonModule, SharedModule],
  exports: [UsersComponent],
})
export class UsersModule {}
