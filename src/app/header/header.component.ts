import { Component, OnInit, Output, Input, OnDestroy } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/storage/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{

  toggleManageMenu: boolean = false;

  isAuthenticated: boolean = false;
  private userSub: Subscription;

  constructor(
    private authService: AuthService,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.SignOut();
  }

  fetchTravelHistories() {
    this.dataStorageService.fetchTravelHistory().subscribe();
  }

  saveTravelHistories() {
    this.dataStorageService.saveTravelHistory();
  }
}
