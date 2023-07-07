import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeItemComponent } from './employe-item.component';
import { EmployeModalDetailComponent } from './employe-modal-detail/employe-modal-detail.component';
import {SvgModule} from "../../svg/svg.module";



@NgModule({
  declarations: [
    EmployeItemComponent,
    EmployeModalDetailComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [
    EmployeItemComponent,
    EmployeModalDetailComponent
  ]
})
export class EmployeItemModule { }
