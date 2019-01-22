import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()isUserAuthorized;

  toggleManageMenu: boolean = false;

  constructor() { }

  ngOnInit() {}
}
