import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffComponent } from './staff.component';
import { PlayersComponent } from './players/players.component';
import { TechniciansComponent } from './technicians/technicians.component';

import { SharedModule } from './../shared/shared.module';

// Material
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    SharedModule,
  ],
  declarations: [
    StaffComponent,
    PlayersComponent,
    TechniciansComponent
  ],
})
export class StaffModule { }