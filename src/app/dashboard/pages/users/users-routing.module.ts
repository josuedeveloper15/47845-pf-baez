import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';

const routes: Routes = [
  {
    // /users
    path: '',
    component: UsersComponent,
  },
  // {
  //   // /users/detail...
  //   path: 'detail/:id',
  //   component: UsersDialogComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
