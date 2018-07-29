import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Modal/user.modal';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  URL='http:/localhost:3000'
  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get<User[]>(`${this.URL}/user`);
  }
}



