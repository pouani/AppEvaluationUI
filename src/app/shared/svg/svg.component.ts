import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styles: [
  ]
})
export class SvgComponent implements OnInit{

  @Input() icon: string = ""

  constructor(){}
  ngOnInit(): void {
  }

}
