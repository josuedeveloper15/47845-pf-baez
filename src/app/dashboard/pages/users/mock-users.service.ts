import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable({
  providedIn: 'root',
})
export class MockUsersService {
  constructor() {}

  getUsers(): User[] {
    console.log('Retornando data mock');
    return [];
  }
}
