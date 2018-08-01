import { TestComponentComponent } from "./test-component.component";
import { AppComponent } from "../app.component";
import { User } from "../Modal/user.modal";

describe('AppComponent', () => {
    it('#clicked() should toggle #isOn', () => {
      const comp = new TestComponentComponent();
      expect(comp.flag).toBe(false, 'off at first');
      comp.clicked();
      expect(comp.flag).toBe(true, 'on after click');
      comp.clicked();
      expect(comp.flag).toBe(false, 'off after second click');
    });
  
    // it('#clicked() should set #message to "is on"', () => {
    //   const comp = new TestComponentComponent();
    //   expect(comp.message).toMatch(/is off/i, 'off at first');
    //   comp.clicked();
    //   expect(comp.message).toMatch(/is on/i, 'on after clicked');
    // });


    it('raises the selected event when clicked', () => {
      const comp = new TestComponentComponent();
      const user: User =  { Id: '123', Name: "hagay", Age: 23 };
      comp.user = user;
    
      comp.selected.subscribe(selectedHero => expect(selectedHero).toBe(user));
      comp.clickOutput();
    });
  });
