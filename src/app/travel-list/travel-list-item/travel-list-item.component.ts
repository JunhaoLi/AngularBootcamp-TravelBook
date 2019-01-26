import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TravelEntry } from 'src/app/shared/TravelEntry.model';
import { DataService } from 'src/app/shared/data.service';

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
    console.log(this.travelItemIndex);
    this.dataService.selectTravelEntry(this.travelItemIndex);
  }
}
