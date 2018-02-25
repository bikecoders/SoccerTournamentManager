import { Component, OnInit, OnDestroy } from '@angular/core';

import { TeamsService } from '../teams/shared/teams.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit, OnDestroy {

  /**
   * Store the current team name to render it in the nav bar
   */
  public currentTeamName: string;

  constructor(private teamsService: TeamsService) {
    // Get the current team name
    this.currentTeamName = this.teamsService.currentTeamEdited.name;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.teamsService.clearCurrentTeam();
  }

}
