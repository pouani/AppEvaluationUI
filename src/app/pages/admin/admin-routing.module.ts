import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {AdminComponent} from "./admin.component";
import {HomeComponent} from "./home/home.component";
import {EmployesComponent} from "./employes/employes.component";
import {RapportsComponent} from "./rapports/rapports.component";
import {EvaluationsComponent} from "./evaluations/evaluations.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'employes', component: EmployesComponent },
      { path: 'rapports', component: RapportsComponent },
      { path: 'evaluations', component: EvaluationsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
