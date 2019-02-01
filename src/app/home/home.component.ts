import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.router.navigate(['', 'signin']);
  }

  selectLogInOptoin(e: any) {
    if (e.target.value === 'signin') {
      this.router.navigate(['', 'signin'], {preserveQueryParams: true});
    } else {
      this.router.navigate(['', 'signup']);
    }
  }
}
