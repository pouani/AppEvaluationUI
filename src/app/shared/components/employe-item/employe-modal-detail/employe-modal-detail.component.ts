import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-employe-modal-detail',
  templateUrl: './employe-modal-detail.component.html',
  styles: [
  ]
})
export class EmployeModalDetailComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public employe: any){}

  ngOnInit(): void {
  }

}
