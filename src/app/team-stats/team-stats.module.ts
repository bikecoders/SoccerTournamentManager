import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamStatsComponent } from './team-stats.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamsService } from './team-list/shared/teams.service';
import { SharedModule } from '../shared/shared.module';

// Material
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule
  ],
  declarations: [TeamStatsComponent, TeamListComponent],
  providers: [TeamsService],
})
export class TeamStatsModule { }