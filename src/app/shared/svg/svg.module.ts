import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg.component';
import { DashboardIconComponent } from './dashboard-icon/dashboard-icon.component';
import { DocIconComponent } from './doc-icon/doc-icon.component';
import { AgentsIconComponent } from './agents-icon/agents-icon.component';
import { AccountIconComponent } from './account-icon/account-icon.component';
import { AddPersonnIconComponent } from './add-personn-icon/add-personn-icon.component';
import { BellIconComponent } from './bell-icon/bell-icon.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { EquipementIconComponent } from './equipement-icon/equipement-icon.component';
import { FileIconComponent } from './file-icon/file-icon.component';
import { DeleteIconComponent } from './delete-icon/delete-icon.component';
import { DownloadIconComponent } from './download-icon/download-icon.component';
import { InfoIconComponent } from './info-icon/info-icon.component';
import { SeeIconComponent } from './see-icon/see-icon.component';



@NgModule({
  declarations: [
    SvgComponent,
    DashboardIconComponent,
    DocIconComponent,
    AgentsIconComponent,
    AccountIconComponent,
    AddPersonnIconComponent,
    BellIconComponent,
    MenuIconComponent,
    EquipementIconComponent,
    FileIconComponent,
    DeleteIconComponent,
    DownloadIconComponent,
    InfoIconComponent,
    SeeIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgComponent
  ]
})
export class SvgModule { }
