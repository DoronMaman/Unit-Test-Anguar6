import { Injectable } from '@angular/core';
import { User } from './Modal/user.modal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  URL='http://localhost:3000'
  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get<User[]>(`${this.URL}/user`);
  }
  getPostsById(id) {
    return this.http.get<User[]>(`${this.URL}/user/`+id);
  }
}



