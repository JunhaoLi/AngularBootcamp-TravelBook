import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Travel Book";
  isUserAuthorized = false;

  onAuthorize(isUserAuthorized: boolean) {
    console.log(isUserAuthorized);
    this.isUserAuthorized = true;
  }
}
