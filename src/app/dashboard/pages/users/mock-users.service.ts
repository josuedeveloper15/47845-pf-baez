import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable({
  providedIn: 'root',
})
export class MockUsersService {
  constructor() {}

  getUsers(): User[] {
    console.log('Retornando data mock');
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
