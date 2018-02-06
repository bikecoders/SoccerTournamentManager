import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams-list/teams.component';
import { TeamsService } from './shared/teams.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TeamsComponent],
  providers: [TeamsService],
  exports: [TeamsComponent]
})
export class TeamModule { }
