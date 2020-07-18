import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private usersURL = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  getProfile(id: number) {
    return this.http.get(`${this.usersURL}/${id}`);
  }

  register(user: User) {
    return this.http.post(`${this.usersURL}/signup`, user);
  }

  update(user: User) {
    return this.http.put(`${this.usersURL}/${user.id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.usersURL}/${id}`);
  }
}
