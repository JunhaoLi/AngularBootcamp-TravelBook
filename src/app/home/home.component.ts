import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @Output()isUserAuthorized: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignupClick() {
    this.authService.SignUp();
    // this.isUserAuthorized.emit(true);
  }

  onSigninClick() {
    this.authService.SignIn();
    // this.isUserAuthorized.emit(true);
  }
}
