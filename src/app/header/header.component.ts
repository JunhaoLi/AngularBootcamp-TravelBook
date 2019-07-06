import { Component, OnInit, Output, Input } from '@angular/core';

import { AuthService } from '../shared/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleManageMenu: boolean = false;

  constructor(
    private authService: AuthService,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {}

  fetchTravelHistories() {
    this.dataStorageService.fetchTravelHistory().subscribe();
  }

  saveTravelHistories() {
    this.dataStorageService.saveTravelHistory();
  }
}
