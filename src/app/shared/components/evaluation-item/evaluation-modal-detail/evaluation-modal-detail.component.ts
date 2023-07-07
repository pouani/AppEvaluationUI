import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface PeriodicElement {
  name: string;
  student: number;
  evaluations: number;
  note: number;
}

const EVALUATION_DATA: PeriodicElement[] = [
  {name: 'Gl II', student: 24, evaluations: 10, note: 50},
  {name: 'GSI III', student: 14, evaluations: 5, note: 60},
  {name: 'Gl III', student: 14, evaluations: 10, note: 60},
];

@Component({
  selector: 'app-evaluation-modal-detail',
  templateUrl: './evaluation-modal-detail.component.html',
  styles: [
  ]
})
export class EvaluationModalDetailComponent implements OnInit{

  displayedColumns: string[] = ['name', 'student', 'evaluations', 'note'];
  dataSource = EVALUATION_DATA;


  constructor(@Inject(MAT_DIALOG_DATA) public evaluation: any){}

  ngOnInit(): void {
  }

}
