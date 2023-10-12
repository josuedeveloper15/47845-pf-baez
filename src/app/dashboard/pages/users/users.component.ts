import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';
import { UsersService } from './users.service';
import { UsersBetterService } from './users-better.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  userName = '';

  users: User[] = [];

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService // MockUsersService // private usersBetterService: UsersBetterService
  ) {
    this.users = this.usersService.getUsers();
    // console.log(this.usersBetterService.getUsersWithProduct());
  }

  openUsersDialog(): void {
    this.matDialog
      .open(UsersDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.users = [
              ...this.users,
              {
                ...v,
                id: new Date().getTime(),
              },
            ];
          }
        },
      });
  }

  onEditUser(user: User): void {
    this.matDialog
      .open(UsersDialogComponent, {
        data: user,
      })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            // CREANDO UNA COPIA DEL ARRAY ACTUAL
            // const arrayNuevo = [...this.users];

            // const indiceToEdit = arrayNuevo.findIndex((u) => u.id === user.id);

            // arrayNuevo[indiceToEdit] = { ...arrayNuevo[indiceToEdit], ...v };

            // this.users = [...arrayNuevo];

            this.users = this.users.map((u) =>
              u.id === user.id ? { ...u, ...v } : u
            );
          }
        },
      });
  }

  onDeleteUser(userId: number): void {
    if (confirm('Esta seguro?')) {
      this.users = this.users.filter((u) => u.id !== userId);
    }
  }
}
