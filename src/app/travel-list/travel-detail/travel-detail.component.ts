import { Component, OnInit, Input } from '@angular/core';
import { TravelEntry } from 'src/app/shared/TravelEntry.model';
import { DataService } from 'src/app/travel-list/travel-list.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.scss']
})
export class TravelDetailComponent implements OnInit {
  private travelItem: TravelEntry = null;

  private selectedTravelItemIndex: number = -1;

  constructor(
    private router: Router,
    private dataService: DataService,
    private authService: AuthService) {}

  ngOnInit() {
    this.selectedTravelItemIndex = this.dataService.selectedTravelIndex;
    if (this.selectedTravelItemIndex != -1) {
      this.travelItem = this.dataService.getTravelHistory(this.selectedTravelItemIndex);
    }

    this.dataService.onSelectedTravelEntryChanged.subscribe((i: number) => {
      this.selectedTravelItemIndex = i;
      this.travelItem = this.dataService.getTravelHistory(i);
    });
  }

  onEditButtonClicked() {
    this.router.navigate(['/create'], {queryParams: {edit: true, id: this.selectedTravelItemIndex}});
  }

  isTravelItemNull() {
    return this.travelItem != null;
  }
}
