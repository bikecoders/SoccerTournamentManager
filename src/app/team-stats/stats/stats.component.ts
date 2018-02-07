import { Team } from './../team-list/shared/team.model';
import { TeamsService } from './../team-list/shared/teams.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(
    private teamsService: TeamsService
  ) { }

  ngOnInit() {
  }

  /**
   * How many teams are registered
   */
  howManyTeamsAreRegistered(): Number {
    return this.teamsService.getElements().length;
  }

  /**
   * Return how many players are registered
   */
  howManyPlayersWillPlay(): Number {
    // Iterate teams
    return this.teamsService.getElements()
      // Return the amount of players of a team
      .map((team: Team) => team.players.getElements().length)
      // Sum the numbers of players
      .reduce((prevNumPlayers, currentNumPlayers) => prevNumPlayers + currentNumPlayers );
  }

}
