import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styles: [],
})
export class UsersTableComponent {
  @Input()
  dataSource: User[] = [];

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter<User>();

  displayedColumns = ['id', 'fullname', 'email', 'actions'];

  constructor(private router: Router) {}

  goToDetail(userId: number): void {
    // /dashboard/users/detail/2
    this.router.navigate(
      [
        'dashboard',
        'users',
        'detail',
        userId,
        {
          nombre: 'josue',
          edad: 28,
        },
      ],
      {
        queryParams: {
          search: 'hola mundo',
        },
      }
    );
  }
}
