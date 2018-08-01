// import { AppComponent } from "./app.component";
// import { UserServiceService } from "./user-service.service";
// import { TestBed } from "@angular/core/testing";
// import { of, Observable } from "rxjs";
// import { User } from "./Modal/user.modal";
// import { HttpClientModule } from "@angular/common/http";

// class MockUserService {
//     isLoggedIn = true;
//     user:User = {Id:'',Name:'',Age:1 };
//   };
//   describe('AppComponent (class only)', () => {
//     let comp: AppComponent;
//     let userService: UserServiceService;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       // provide the component-under-test and dependent service
//       providers: [
//         AppComponent,
//         { provide: UserServiceService, useClass: MockUserService }
//       ]
//     });
//     // inject both the component and the dependent service.
//      comp = TestBed.get(AppComponent);
//      userService = TestBed.get(UserServiceService);
//   });
//   it('should not have welcome message after construction', () => {
//     expect(this.comp).toBeUndefined();
//   });
  
//   it('should welcome logged in user after Angular calls ngOnInit', () => {
//     this.comp.ngOnInit();
//     expect(this.comp).toContain(this.userService.getPosts);
//   });
  
// });