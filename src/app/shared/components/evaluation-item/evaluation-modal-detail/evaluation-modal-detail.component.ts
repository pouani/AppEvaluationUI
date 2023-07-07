import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-evaluation-modal-detail',
  templateUrl: './evaluation-modal-detail.component.html',
  styles: [
  ]
})
export class EvaluationModalDetailComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public evaluation: any){}

  ngOnInit(): void {
  }

}
