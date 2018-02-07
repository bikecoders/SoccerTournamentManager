import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TeamsService } from './shared/teams.service';
import { Team } from './shared/team.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  /**
   * The list of the teams
   */
  teamList: Array<Team>;

  constructor(
    private teamsService: TeamsService,
    private router: Router
  ) {
    // make a copy of the teams
    this.teamList = this.teamsService.getElements();
  }

  ngOnInit() {
  }

  /**
   * When a user clicks on a team this function will trigger.
   * Set the current team being edited and navigate to the correspondent view
   *
   * @param team the team that the user wants to edit
   */
  editTeamStaff(team: Team) {
    // Set the current team
    this.teamsService.setCurrentTeam(team);

    // Navigate
    this.router.navigateByUrl('edit-team');
  }

  /**
   * Return type of element of this list
   */
  getType(): string {
    return Team.name;
  }

}
