import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ListComponent } from './list/list.component';
import { NavbarModule } from 'src/app/core/components/navbar/navbar.module';
import { SvgModule } from 'src/app/shared/svg/svg.module';
import { PageHeaderModule } from 'src/app/core/components/page-header/page-header.module';


@NgModule({
  declarations: [
    EtudiantsComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    NavbarModule,
    SvgModule,
    PageHeaderModule
  ]
})
export class EtudiantsModule { }
