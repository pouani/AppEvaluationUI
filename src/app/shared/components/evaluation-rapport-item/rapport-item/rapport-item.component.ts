import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rapport-item',
  templateUrl: './rapport-item.component.html',
  styles: [
  ]
})
export class RapportItemComponent implements OnInit{

  @Input() rapport: any;

  constructor(){}

  ngOnInit(): void {
  }

}
