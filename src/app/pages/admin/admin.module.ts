import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {SidebarModule} from "../../core/components/sidebar/sidebar.module";
import {NavbarModule} from "../../core/components/navbar/navbar.module";
import {PageHeaderModule} from "../../core/components/page-header/page-header.module";
import {SvgModule} from "../../shared/svg/svg.module";
import {EvaluationItemModule} from "../../shared/components/evaluation-item/evaluation-item.module";
import { EmployesComponent } from './employes/employes.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { RapportsComponent } from './rapports/rapports.component';
import {EmployeItemModule} from "../../shared/components/employe-item/employe-item.module";



@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    EmployesComponent,
    EvaluationsComponent,
    RapportsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule,
    NavbarModule,
    PageHeaderModule,
    SvgModule,
    EvaluationItemModule,
    EmployeItemModule
  ]
})
export class AdminModule { }
