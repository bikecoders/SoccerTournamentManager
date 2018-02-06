import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTechnicianComponent } from './player-technician.component';

import { PlayerListComponent } from './player-list/player-list.component';
import { TechnicianListComponent } from './technician-list/technician-list.component';

import { SharedModule } from './../shared/shared.module';

// Material
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    SharedModule
  ],
  declarations: [
    PlayerTechnicianComponent,
    PlayerListComponent,
    TechnicianListComponent
  ],
})
export class PlayerTechnicianModule { }
