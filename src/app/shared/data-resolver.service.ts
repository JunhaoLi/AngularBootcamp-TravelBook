import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { DataService } from './data.service';
import { DataStorageService } from './data-storage.service';
import { TravelEntry } from './TravelEntry.model';

@Injectable({providedIn: 'root'})
export class DataResolver implements Resolve<TravelEntry[]> {
    constructor(
        private dataService: DataService,
        private dataStorageService: DataStorageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const travelList: TravelEntry[] = this.dataService.getTravelHistories();
        if (travelList.length > 0) {
            return travelList;
        } else {
            return this.dataStorageService.fetchTravelHistory();
        }
    }
}