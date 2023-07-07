import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EvaluationModalDetailComponent} from "./evaluation-modal-detail/evaluation-modal-detail.component";

@Component({
  selector: 'app-evaluation-item',
  templateUrl: './evaluation-item.component.html',
  styles: [
  ]
})
export class EvaluationItemComponent implements OnInit{

  @Input() evaluation: any;

  constructor(private dialog: MatDialog){}

  ngOnInit(): void {
  }

  viewDetails() {
    this.dialog.open(EvaluationModalDetailComponent, {
      data: this.evaluation
    })
  }

}
