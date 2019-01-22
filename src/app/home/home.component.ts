import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output()isUserAuthorized: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onSignupClick() {
    this.isUserAuthorized.emit(true);
  }

  onSigninClick() {
    this.isUserAuthorized.emit(true);
  }
}
