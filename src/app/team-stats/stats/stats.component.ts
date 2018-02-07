import { Player } from './../../player-technician/player-list/shared/player.model';
import { Team } from './../team-list/shared/team.model';
import { TeamsService } from './../team-list/shared/teams.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  /**
   * Variable to store the youngest player asynchronously
   */
  youngestPlayer: Player;

  /**
   * Variable to store the youngest player asynchronously
   */
  oldestPlayer: Player;

  constructor(
    private teamsService: TeamsService
  ) {
    // Find the youngest player
    this.calculateYoungestPlayer()
    .subscribe(
      (youngestPlayer: Player) => this.youngestPlayer = youngestPlayer
    );

    // Find the oldest player
    this.calculateOldestPlayer()
    .subscribe(
      (oldestPlayer: Player) => this.oldestPlayer = oldestPlayer
    );
  }

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

  /**
   * Find the youngest player in all teams.
   *
   * Observables was used because flatMap is not native yet
   */
  calculateYoungestPlayer(): Observable<Player> {
    // Iterate teams
    return Observable.of(this.teamsService.getElements())
      // Iterate teams as a single element
      .switchMap((teams: Array<Team>) => teams)
      // Iterate the players of the Team as a single element
      .switchMap((team: Team) => team.players.getElements())
      // Calculate the youngest player
      .reduce((youngestPlayer: Player, currentPlayer: Player) => {
        if (youngestPlayer.birthDate > currentPlayer.birthDate) {
          return youngestPlayer;
        }

        return currentPlayer;
      });
  }

  calculateOldestPlayer(): Observable<Player> {
    // Iterate teams
    return Observable.of(this.teamsService.getElements())
      // Iterate teams as a single element
      .switchMap((teams: Array<Team>) => teams)
      // Iterate the players of the Team as a single element
      .switchMap((team: Team) => team.players.getElements())
      // Calculate the OLDEST player
      .reduce((oldestPlayer: Player, currentPlayer: Player) => {
        if (oldestPlayer.birthDate < currentPlayer.birthDate) {
          return oldestPlayer;
        }

        return currentPlayer;
      });
  }

}
