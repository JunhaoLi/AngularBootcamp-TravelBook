import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICanComponentDeactivate } from '../shared/can-deactivate.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { TravelEntry } from '../shared/TravelEntry.model';

@Component({
  selector: 'app-create-travel',
  templateUrl: './create-travel.component.html',
  styleUrls: ['./create-travel.component.scss']
})
export class CreateTravelComponent implements OnInit, AfterViewInit, ICanComponentDeactivate{
  isTddDriven = true;
  @ViewChild('f') form: NgForm;

  isEditMode = false;
  editItemIndex = -1;
  travelEntry: TravelEntry;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.isEditMode = this.route.snapshot.queryParams['edit'] == null ? false : this.route.snapshot.queryParams['edit'] == 'true';
    this.editItemIndex = this.route.snapshot.queryParams['id'] == null ? -1 : +this.route.snapshot.queryParams['id'];
  }

  ngAfterViewInit() {
    if (this.isEditMode) {
      this.travelEntry = this.dataService.getTravelHistory(this.editItemIndex);
      setTimeout(() => {
        let imageUrl = this.travelEntry.pictureUrls.length === 0 ? null : this.travelEntry.pictureUrls[0]; // will fix in reacive approach
        this.form.form.patchValue({
          title: this.travelEntry.title,
          fromDate: this.formatDateTimeStr(this.travelEntry.fromDate),
          toDate: this.formatDateTimeStr(this.travelEntry.toDate),
          description: this.travelEntry.description,
          imageUrl: imageUrl
        })
      });
    }
  }

  onSubmitForm() {
    this.travelEntry = <TravelEntry> {
      title: this.form.value['title'],
      fromDate: new Date(this.form.value['fromDate']),
      toDate: new Date(this.form.value['toDate']),
      description: this.form.value['description'],
      pictureUrls: [this.form.value['imageUrl']]
    };

    if (this.isEditMode) {
      this.dataService.updateTravelHistory(this.editItemIndex, this.travelEntry);
    } else {
      this.dataService.addTravelHistory(this.travelEntry);
    }

    this.form.reset();
    this.router.navigate(['/history']);
  }

  onFormClear() {
    this.form.reset();
  }

  canDeactive(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.form.touched) {
      return true;
    } else {
      return confirm('Do you want to discard the changes?');
    }
  }

  private formatDateTimeStr(date: Date): string {
    let year = this.travelEntry.toDate.getFullYear();
    let month = this.travelEntry.toDate.getMonth() > 9 ? this.travelEntry.toDate.getMonth() : `0${this.travelEntry.toDate.getMonth()}`;
    let day =  this.travelEntry.toDate.getDate() > 9 ? this.travelEntry.toDate.getDate() : `0${this.travelEntry.toDate.getDate()}`;
    return `${year}-${month}-${day}`;
  }
}
