import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTechnicianComponent } from './player-technician.component';

import { PlayerListComponent } from './player/player-list.component';
import { PlayersService } from './player/shared/players.service';

import { TechnicianListComponent } from './technician-list/technician-list.component';
import { TechniciansService } from './technician-list/shared/technicians.service';

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
  providers: [PlayersService, TechniciansService]
})
export class PlayerTechnicianModule { }
