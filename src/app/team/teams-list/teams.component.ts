import { Component, OnInit } from '@angular/core';

import { TeamsService } from './../shared/teams.service';
import { Team } from '../shared/team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  /**
   * The list of the teams
   */
  teamList: Array<Team>;

  constructor(
    private teamsService: TeamsService
  ) {
    // make a copy of the teams
    this.teamList = this.teamsService.getElements();
  }

  ngOnInit() {
  }

}
