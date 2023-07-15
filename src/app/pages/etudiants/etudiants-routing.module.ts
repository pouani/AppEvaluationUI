import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './etudiants.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: EtudiantsComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'liste', component: ListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
