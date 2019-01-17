import { Component, OnInit } from '@angular/core';
import { TravelEntry } from '../shared/TravelEntry.model';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {
  selectedTravelItem: TravelEntry;
  travelHistoryList: TravelEntry[] = [
    <TravelEntry>{
      title: 'Tokyo Trip',
      description: 'Fun Journey',
      fromDate: new Date('12/10/2018'),
      toDate: new Date('12/20/2018'),
      pictureUrls: []
    },
    <TravelEntry>{
      title: 'Hawaii Trip',
      description: 'Vocano Journey',
      fromDate: new Date('6/10/2019'),
      toDate: new Date('6/20/2019'),
      pictureUrls: []
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onTravelItemClick(index: number) {
    this.selectedTravelItem = this.travelHistoryList[index];
  }
}
