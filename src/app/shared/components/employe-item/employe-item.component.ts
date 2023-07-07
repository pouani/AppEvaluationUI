import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EmployeModalDetailComponent} from "./employe-modal-detail/employe-modal-detail.component";

@Component({
  selector: 'app-employe-item',
  templateUrl: './employe-item.component.html',
  styles: [
  ]
})
export class EmployeItemComponent implements OnInit{

  @Input() employe!: any;

  constructor(private dialog: MatDialog){}

  ngOnInit(): void {
  }

  viewDetails(){
    this.dialog.open(EmployeModalDetailComponent, {
      data: this.employe
    })
  }

}
