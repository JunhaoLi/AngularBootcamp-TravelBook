import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TravelEntry } from 'src/app/shared/TravelEntry.model';
import { DataService } from 'src/app/travel-list/travel-list.service';

@Component({
  selector: 'app-travel-list-item',
  templateUrl: './travel-list-item.component.html',
  styleUrls: ['./travel-list-item.component.scss']
})
export class TravelListItemComponent implements OnInit {

  @Input()travelItemIndex: number;

  private travelItem: TravelEntry;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.travelItem = this.dataService.getTravelHistory(this.travelItemIndex);
  }

  onSelected() {
    this.dataService.selectTravelEntry(this.travelItemIndex);
  }
}
