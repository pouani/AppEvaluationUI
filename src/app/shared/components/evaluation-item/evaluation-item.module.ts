import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationItemComponent } from './evaluation-item.component';
import { EvaluationModalDetailComponent } from './evaluation-modal-detail/evaluation-modal-detail.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {SvgModule} from "../../svg/svg.module";



@NgModule({
  declarations: [
    EvaluationItemComponent,
    EvaluationModalDetailComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    SvgModule
  ],
  exports: [
    EvaluationItemComponent,
    EvaluationModalDetailComponent
  ]
})
export class EvaluationItemModule { }
