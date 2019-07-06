import { Component, OnInit, Output, Input } from '@angular/core';

import { AuthService } from '../Core/Auth/auth.service';
import { DataStorageService } from '../shared/storage/data-storage.service';

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
