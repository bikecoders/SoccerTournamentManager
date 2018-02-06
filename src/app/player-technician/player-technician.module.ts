import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTechnicianComponent } from './player-technician.component';

import { PlayerListComponent } from './player-list/player-list.component';

import { TechnicianListComponent } from './technician-list/technician-list.component';

// Material
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule
  ],
  declarations: [
    PlayerTechnicianComponent,
    PlayerListComponent,
    TechnicianListComponent
  ],
})
export class PlayerTechnicianModule { }
