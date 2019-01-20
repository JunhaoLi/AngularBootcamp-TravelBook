import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TravelEntry } from 'src/app/shared/TravelEntry.model';

@Component({
  selector: 'app-travel-list-item',
  templateUrl: './travel-list-item.component.html',
  styleUrls: ['./travel-list-item.component.scss']
})
export class TravelListItemComponent implements OnInit {

  @Input()travelItem: TravelEntry;
  @Output()onTravelItemSelected: EventEmitter<TravelEntry> = new EventEmitter<TravelEntry>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.onTravelItemSelected.emit(this.travelItem);
  }
}
