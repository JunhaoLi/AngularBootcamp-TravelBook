import { Component, OnInit } from '@angular/core';
import { TravelEntry } from '../shared/TravelEntry.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
  providers: [DataService]
})
export class TravelListComponent implements OnInit {
  
  selectedTravelItem: TravelEntry = null;
  
  travelHistoryList: TravelEntry[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.travelHistoryList = this.dataService.getTravelHistories();
  }

  onTravelItemSelected(travelEntry: TravelEntry) {
    this.selectedTravelItem = travelEntry;
  }
}
