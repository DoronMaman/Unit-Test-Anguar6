import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { User } from './Modal/user.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user:User[];
  public user2:User;
  constructor(private userServcie:UserServiceService){}
  ngOnInit(): void {
    this.userServcie.getPosts().subscribe(user => {
      this.user=user
      console.log(this.user);
    });
    
    this.userServcie.getPostsById('5b4ced32c554be2831df8549').subscribe(user => {
      this.user=user
      console.log(this.user);
    });
    
  }
}
