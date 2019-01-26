import { Component, OnInit, Output, Input } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()isUserAuthorized;

  toggleManageMenu: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {}
}
