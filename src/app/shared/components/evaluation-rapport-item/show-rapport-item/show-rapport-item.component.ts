import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-show-rapport-item',
  templateUrl: './show-rapport-item.component.html',
  styles: [
  ]
})
export class ShowRapportItemComponent {

  @Input() rapportSelect: any;

}
