import { Component, OnInit, Input } from '@angular/core';
import { TravelEntry } from 'src/app/shared/TravelEntry.model';
import { DataService } from 'src/app/shared/data.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.scss']
})
export class TravelDetailComponent implements OnInit {
  private travelItem: TravelEntry = null;

  private selectedTravelItemIndex: number;

  constructor(
    private dataService: DataService,
    private authService: AuthService) {}

  ngOnInit() {
    this.travelItem = null;
    this.dataService.onSelectedTravelEntryChanged.subscribe((i: number) => {
      this.selectedTravelItemIndex = i;
      this.travelItem = this.dataService.getTravelHistory(i);
    });
  }

}
