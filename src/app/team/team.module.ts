import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams-list/teams.component';
import { TeamsService } from './shared/teams.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeamsComponent],
  providers: [TeamsService]
})
export class TeamModule { }
