import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICanComponentDeactivate } from '../shared/can-deactivate.service';
import { Observable } from 'rxjs';
import { NgForm, FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { TravelEntry } from '../shared/TravelEntry.model';

@Component({
  selector: 'app-create-travel',
  templateUrl: './create-travel.component.html',
  styleUrls: ['./create-travel.component.scss']
})
export class CreateTravelComponent implements OnInit, AfterViewInit, ICanComponentDeactivate{
  isTddDriven = false;
  @ViewChild('f') form: NgForm;

  travelFormGroup: FormGroup;

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
    if (this.isEditMode) {
      this.travelEntry = this.dataService.getTravelHistory(this.editItemIndex);
    } else {
      this.travelEntry = new TravelEntry();
    }
    if (!this.isTddDriven) {
      this.travelFormGroup = new FormGroup({
        'title': new FormControl(this.travelEntry.title, [Validators.required, Validators.minLength(3)]),
        'fromDate': new FormControl(this.formatDateTimeStr(this.travelEntry.fromDate), Validators.required),
        'toDate': new FormControl(this.formatDateTimeStr(this.travelEntry.toDate), Validators.required),
        'description': new FormControl(this.travelEntry.description),
        'imageUrls': this.getImageUrlFormArray(this.travelEntry.pictureUrls)
      });
    }
  }

  ngAfterViewInit() {
    if (this.isEditMode) {
      if (this.isTddDriven) {
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
  }

  onSubmitForm() {
    let updatedEntry: TravelEntry = null;
    if (this.isTddDriven) {
      updatedEntry = <TravelEntry> {
        title: this.form.value['title'],
        fromDate: new Date(this.form.value['fromDate']),
        toDate: new Date(this.form.value['toDate']),
        description: this.form.value['description'],
        pictureUrls: [this.form.value['imageUrl']]
      };
    } else {
      updatedEntry = <TravelEntry> {
        title: this.travelFormGroup.value['title'],
        fromDate: new Date(this.travelFormGroup.value['fromDate']),
        toDate: new Date(this.travelFormGroup.value['toDate']),
        description: this.travelFormGroup.value['description']
      };
    }
    if (this.isEditMode) {
      this.dataService.updateTravelHistory(this.editItemIndex, updatedEntry);
    } else {
      this.dataService.addTravelHistory(updatedEntry);
    }

    this.router.navigate(['/history'], {queryParams: this.isEditMode ? {'id': this.editItemIndex} : null});
  }

  onFormClear() {
    if (this.isTddDriven) {
      this.form.reset();
    } else {
      if (this.isEditMode) {
        this.travelEntry = this.dataService.getTravelHistory(this.editItemIndex);
      } else {
        this.travelEntry = new TravelEntry();
      }

      this.travelFormGroup.reset({
        'title': this.travelEntry.title,
        'fromDate': this.formatDateTimeStr(this.travelEntry.fromDate),
        'toDate': this.formatDateTimeStr(this.travelEntry.toDate),
        'description': this.travelEntry.description,
        'imageUrls': this.getImageUrlFormArray(this.travelEntry.pictureUrls)
      });
    }
  }

  canDeactive(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.isTddDriven && !this.form.touched) || this.travelFormGroup.touched) {
      return true;
    } else {
      return confirm('Do you want to discard the changes?');
    }
  }
  
  public onDeleteImageUrl(index: number):void {
    (<FormArray>this.travelFormGroup.get('imageUrls')).removeAt(index);
  }

  public onAddImageUrl():void {
    (<FormArray>this.travelFormGroup.get('imageUrls')).push(new FormControl(null, Validators.required));
  }

  public getControls(): AbstractControl[] {
    return (<FormArray>this.travelFormGroup.get('imageUrls')).controls;
  }

  private getImageUrlFormArray(imageUrls: string[]): FormArray {
    let imageUrlControls: FormArray = new FormArray([]);
    for (let i = 0; i < imageUrls.length; i++) {
      imageUrlControls.push(new FormControl(imageUrls[i], Validators.required));
    }
    return imageUrlControls;
  }

  private formatDateTimeStr(date: Date): string {
    let year = this.travelEntry.toDate.getFullYear();
    let month = this.travelEntry.toDate.getMonth() > 9 ? this.travelEntry.toDate.getMonth() : `0${this.travelEntry.toDate.getMonth()}`;
    let day =  this.travelEntry.toDate.getDate() > 9 ? this.travelEntry.toDate.getDate() : `0${this.travelEntry.toDate.getDate()}`;
    return `${year}-${month}-${day}`;
  }
}
