import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { TravelEntry } from './TravelEntry.model';

@Injectable({providedIn: 'root'})
export class DataService {

    public onTravelListChanged: Subject<TravelEntry[]> = new Subject<TravelEntry[]>();

    public onSelectedTravelEntryChanged: Subject<number> = new Subject<number>();

    public selectedTravelIndex = -1;

    private travelHistoryList: TravelEntry[] = [];

      setTravelHistories(histories: TravelEntry[]): void {
        histories.forEach((travelHistory: TravelEntry) => {
            travelHistory.fromDate = new Date(travelHistory.fromDate);
            travelHistory.toDate = new Date(travelHistory.toDate);
        });
        this.travelHistoryList = histories;
      }

      addTravelHistory(item: TravelEntry): number {
        this.travelHistoryList.push(item);
        this.onTravelListChanged.next(this.travelHistoryList.slice());
        return this.travelHistoryList.length -1;
      }

      getTravelHistory(index: number): TravelEntry {
          return this.travelHistoryList[index];
      }

      getTravelHistories(): TravelEntry[] {
          return this.travelHistoryList;
      }

      selectTravelEntry(index: number) {
          this.selectedTravelIndex = index;
          this.onSelectedTravelEntryChanged.next(index);
      }

      updateTravelHistory(index: number, travelItem: TravelEntry) {
          this.travelHistoryList[index] = travelItem;
          this.onTravelListChanged.next(this.travelHistoryList.slice());
      }

      deleteTravelHistory(index: number) {
          this.travelHistoryList.splice(index, 1);
          this.onTravelListChanged.next(this.travelHistoryList.slice());
      }
}

// private travelHistoryList: TravelEntry[] = [
//     <TravelEntry>{
//       title: 'Tokyo Trip',
//       description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//       fromDate: new Date('12/10/2018'),
//       toDate: new Date('12/20/2018'),
//       pictureUrls: [
//         'https://cdn.japantimes.2xx.jp/wp-content/uploads/2018/08/p12-cade-tell-a-20180830-870x580.jpg',
//         'https://gq-images.condecdn.net/image/ApKaQ1WjZvp/crop/1620/landscape/f/tokyo-hp-gq-19oct18_istock_b.jpg'
//       ]
//     },
//     <TravelEntry>{
//       title: 'Hawaii Trip',
//       description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//       fromDate: new Date('6/10/2019'),
//       toDate: new Date('6/20/2019'),
//       pictureUrls: [
//         'https://www.myhawaii.com.au/wp-content/uploads/sites/13/2018/08/Hawaii-Landscape-Copy.jpg',
//         'https://i.kinja-img.com/gawker-media/image/upload/s--84nN7lxH--/c_scale,f_auto,fl_progressive,q_80,w_800/sgaz9g3jifiirne5xxa4.jpg'
//       ]
//     }
//   ];