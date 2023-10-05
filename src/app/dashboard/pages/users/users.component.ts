import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  userName = '';

  constructor(private matDialog: MatDialog) {}

  openUsersDialog(): void {
    this.matDialog
      .open(UsersDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          console.log('VALOR: ', v);
          if (!!v) {
            this.userName = v;
          }
        },
      });
  }
}
