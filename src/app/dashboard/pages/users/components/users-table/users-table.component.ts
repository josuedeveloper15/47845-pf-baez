import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserRole } from '../../models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

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

  userRole$: Observable<UserRole | undefined>;

  constructor(private router: Router, private store: Store) {
    this.userRole$ = this.store
      .select(selectAuthUser)
      .pipe(map((u) => u?.role));
  }

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
