import { Injectable } from '@angular/core';
import { User } from './models';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap, map } from 'rxjs';
import { environment } from 'src/environments/environment.local';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.baseUrl}/users`);
  }

  createUser(payload: User): Observable<User[]> {
    return this.httpClient
      .post<User>(`${environment.baseUrl}/users`, payload)
      .pipe(concatMap(() => this.getUsers()));
  }

  updateUser(userId: number, payload: User): Observable<User[]> {
    return this.httpClient
      .put<User>(`${environment.baseUrl}/users/${userId}`, payload)
      .pipe(concatMap(() => this.getUsers()));
  }

  deleteUser(id: number): Observable<User[]> {
    return this.httpClient
      .delete<Object>(`${environment.baseUrl}/users/${id}`)
      .pipe(
        // map(() =>  this.getUsers())
        concatMap(() => this.getUsers())
      );
  }
}
