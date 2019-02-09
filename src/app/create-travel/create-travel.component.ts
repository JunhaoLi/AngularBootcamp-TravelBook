import { Component, OnInit, ViewChild } from '@angular/core';
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
export class CreateTravelComponent implements OnInit, ICanComponentDeactivate{
  isTddDriven = true;

  isEditMode = false;
  editItemIndex = -1;

  @ViewChild('f') form: NgForm;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dateService: DataService) { }

  ngOnInit() {
    this.isEditMode = this.route.snapshot.queryParams['edit'] == null ? false : this.route.snapshot.queryParams['edit'] == 'true';
    this.editItemIndex = this.route.snapshot.queryParams['id'] == null ? -1 : +this.route.snapshot.queryParams['id'];
  }

  onSubmitForm() {
    this.dateService.addTravelHistory(<TravelEntry> {
      title: this.form.value['title'],
      fromDate: this.form.value['fromDate'],
      toDate: this.form.value['toDate'],
      description: this.form.value['description'],
      pictureUrls: [this.form.value['imageUrl']]
    });
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
}
