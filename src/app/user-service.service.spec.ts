import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UserServiceService } from './user-service.service';

import { User } from './Modal/user.modal';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

describe('UserServiceService', () => {
  let service: UserServiceService;
  let httpMock: HttpTestingController;
  let id:string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule],
      providers: [UserServiceService],
    });

    service = TestBed.get(UserServiceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  // afterEach(() => {
  //   httpMock.verify();
  // });

  it('should retrieve posts from the API via GET', () => {
    const dummyPosts: User[] = [
      { Id: '5b4ced32c554be2831df8549', Name: "hagay", Age: 23 },
      { Id: '5b4f176e225d1b0e1d74f2ac', Name: "moty", Age: 67 }
    ];

    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(`${service.URL}/user`);

    expect(request.request.method).toBe('GET');

    request.flush(dummyPosts);
  });
  it('should get the data successful with id', () => {
    const userId: User = 
      { Id: '5b4ced32c554be2831df8549', Name: "hagay", Age: 23 };
    service.getPostsById('5b4ced32c554be2831df8549').subscribe((data: any) => {
      expect(data).toBe(userId);
    });
  })
});
