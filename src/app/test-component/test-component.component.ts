import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../Modal/user.modal';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  @Input() user: User;
  @Output() selected = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }
  public flag:boolean=false;
  clicked() { this.flag = !this.flag; }
  get message() { return `Clicked button  ${this.flag ? 'On' : 'Off'}`; }
  clickOutput(){ this.selected.emit(this.user); }
}




