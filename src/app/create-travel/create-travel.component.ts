import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-travel',
  templateUrl: './create-travel.component.html',
  styleUrls: ['./create-travel.component.scss']
})
export class CreateTravelComponent implements OnInit {

  isEdit = false;
  editItemIndex = -1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isEdit = this.route.snapshot.queryParams['edit'] == null ? false : this.route.snapshot.queryParams['edit'] == 'true';
    this.editItemIndex = this.route.snapshot.queryParams['id'] == null ? -1 : +this.route.snapshot.queryParams['id'];
    console.log(this.editItemIndex);
  }
}
