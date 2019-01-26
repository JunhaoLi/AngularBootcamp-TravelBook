import { Component, OnInit } from '@angular/core';
import { TravelEntry } from '../shared/TravelEntry.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
})
export class TravelListComponent implements OnInit {
 
  travelHistoryList: TravelEntry[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.travelHistoryList = this.dataService.getTravelHistories();
  }
}
