import { Component, OnInit } from '@angular/core';
import { TravelEntry } from '../shared/TravelEntry.model';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {

  travelHistoryList: TravelEntry[] = [
    <TravelEntry>{
      title: 'Tokyo',
      description: 'Fun Journey',
      pictureUrls: []
    },
    <TravelEntry>{
      title: 'Hawaii',
      description: 'Vocano Journey',
      pictureUrls: []
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
