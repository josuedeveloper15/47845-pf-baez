import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';

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
}
