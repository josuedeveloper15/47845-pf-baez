import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersService } from './users.service';
import { UsersBetterService } from './users-better.service';
import { MockUsersService } from './mock-users.service';
import { ApiUrl } from 'src/app/config/url.token';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    UsersDialogComponent,
    UsersTableComponent,
    UserDetailComponent,
  ],
  imports: [CommonModule, SharedModule, UsersRoutingModule],
  exports: [UsersComponent],

  providers: [
    UsersService,
    // {
    //   provide: UsersBetterService,
    //   useExisting: UsersService,
    // },
    {
      // Cuando se inyecte UsersService,
      provide: UsersService,
      // Enrealidad uses:
      useClass: UsersService,
    },

    {
      provide: ApiUrl,
      useValue: {
        url: 'http://localhost:34322/users',
      },
    },
  ],
})
export class UsersModule {}
