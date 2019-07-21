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

  private travelItemInner: TravelEntry;

  constructor(private dataService: DataService) { }

  get travelItem() {
    return this.travelItemInner;
  }

  ngOnInit() {
    this.travelItemInner = this.dataService.getTravelHistory(this.travelItemIndex);
  }

  onSelected() {
    this.dataService.selectTravelEntry(this.travelItemIndex);
  }
}
