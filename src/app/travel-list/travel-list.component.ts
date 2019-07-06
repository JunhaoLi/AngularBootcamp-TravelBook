import { Component, OnInit } from '@angular/core';
import { TravelEntry } from '../shared/TravelEntry.model';
import { DataService } from './travel-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
})
export class TravelListComponent implements OnInit {

  selectedTravelItemIndex: number = -1;
 
  travelHistoryList: TravelEntry[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.dataService.onSelectedTravelEntryChanged.subscribe((index: number) => {
      this.selectedTravelItemIndex = index;
    });

    this.travelHistoryList = this.dataService.getTravelHistories();

    if (this.route.snapshot.queryParams['id']) {
      this.dataService.selectTravelEntry(+this.route.snapshot.queryParams['id']);
    }
  }

  onCreateNewButtonClicked() {
    this.router.navigate(['/create'], {queryParams: {edit: false}});
  }
}
