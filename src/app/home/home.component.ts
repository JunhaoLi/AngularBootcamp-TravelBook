import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  
  isUserSignedIn: boolean;

  subscription: Subscription;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.isUserSignedIn = this.authService.isUserSignIn;
    this.subscription = this.authService.signinStatusChanged.subscribe((value: boolean) => {
      this.isUserSignedIn = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectLogInOptoin(e: any) {
    if (e.target.value === 'signin') {
      this.router.navigate(['', 'signin'], {preserveQueryParams: true});
    } else {
      this.router.navigate(['', 'signup']);
    }
  }
}
