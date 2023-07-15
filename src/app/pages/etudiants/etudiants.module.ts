import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    EtudiantsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule
  ]
})
export class EtudiantsModule { }
