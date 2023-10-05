import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styles: [],
})
export class UsersDialogComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [],
    });
  }
}
