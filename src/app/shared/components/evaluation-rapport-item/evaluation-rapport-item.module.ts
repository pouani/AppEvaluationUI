import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapportItemComponent } from './rapport-item/rapport-item.component';
import { EvaluationRapportItemComponent } from './evaluation-rapport-item.component';
import {SvgModule} from "../../svg/svg.module";
import { ShowRapportItemComponent } from './show-rapport-item/show-rapport-item.component';



@NgModule({
  declarations: [
    RapportItemComponent,
    EvaluationRapportItemComponent,
    ShowRapportItemComponent
  ],
  exports: [
    RapportItemComponent,
    EvaluationRapportItemComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ]
})
export class EvaluationRapportItemModule { }
