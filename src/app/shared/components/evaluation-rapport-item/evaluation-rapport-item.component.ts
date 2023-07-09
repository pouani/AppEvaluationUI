import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-evaluation-rapport-item',
  templateUrl: './evaluation-rapport-item.component.html',
  styles: [
  ]
})
export class EvaluationRapportItemComponent implements OnInit{

  @Input() rapports: any[] = [];
  selectRapport: any;

  selectRapportMethod(rapport: any){
    this.selectRapport = rapport;
  }

  ngOnInit(): void {
  }

}
