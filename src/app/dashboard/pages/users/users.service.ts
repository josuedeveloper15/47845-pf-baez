import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUsers(): User[] {
    return [
      {
        id: 1,
        name: 'Naruto',
        lastName: 'Uzumaki',
        email: 'naruto@mail.com',
      },
      {
        id: 2,
        name: 'Sasuke',
        lastName: 'Uchiha',
        email: 'sasuke@mail.com',
      },
    ];
  }
}
