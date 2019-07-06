import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { DataService } from './data.service';
import { TravelEntry } from './TravelEntry.model';
import { Observable, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(
        private httpClient: HttpClient,
        private dataService: DataService){}

    fetchTravelHistory(): Observable<TravelEntry[]> {
        return this.httpClient.get<TravelEntry[]>(
            'https://angularlearning-hans.firebaseio.com/travelhistory.json'
        )
        .pipe(
            map((response: TravelEntry[]) => {
                this.dataService.setTravelHistories(response);
                return response;
            }),
            catchError(errorResponse => {
                // send to analytics server. etc
                console.log(errorResponse);
                this.dataService.setTravelHistories([]);
                return throwError(errorResponse);
            })
        );
    }

    saveTravelHistory(): void {
        const travelHistory = this.dataService.getTravelHistories();
        this.httpClient.put(
            'https://angularlearning-hans.firebaseio.com/travelhistory.json',
            travelHistory
        )
        .subscribe((response) => {
            console.log(response);
        });
    }
}