import { Component, OnInit, Input } from '@angular/core';
import { TravelEntry } from 'src/app/shared/TravelEntry.model';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.scss']
})
export class TravelDetailComponent implements OnInit {
  @Input()travelItem: TravelEntry;

  constructor() { }

  ngOnInit() {
  }

}
