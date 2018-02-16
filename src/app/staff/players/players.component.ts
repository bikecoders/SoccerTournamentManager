import { Component, OnInit } from '@angular/core';

import { TeamsService } from './../../teams/shared/teams.service';
import { Player } from './shared/player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  /**
   * The list of the players
   */
  playersList: Array<Player>;

  constructor(
    private teamsService: TeamsService,
  ) {
  }

  ngOnInit() {
    // make a copy of the teams
    this.playersList = this.teamsService.currentTeamEdited.players.getElements();
  }

  /**
   * Return type of element of this list
   */
  getType(): string {
    return Player.name;
  }

}
