import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';

import { Player } from '../staff/players/shared/player.model';
import { Team } from '../teams/shared/team.model';
import { TeamsService } from '../teams/shared/teams.service';

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

  /**
   * Number of non titular players are
   */
  nonTitularPlayers: Number | String;

  /**
   * Average of non titular players on all the teams
   */
  AverageNonTitularPlayers: Number | String;

  constructor(
    private teamsService: TeamsService
  ) {
    this.nonTitularPlayers = this.AverageNonTitularPlayers = 'calculating...';

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

    // Calculate non titular players
    this.calculateNonTitularPlayers()
      .subscribe(
        (nonTitulars: number) => {
          this.nonTitularPlayers = nonTitulars;

          // Calculate average of non titulars players per team
          this.AverageNonTitularPlayers = nonTitulars / this.howManyTeamsAreRegistered();
        }
      );

  }

  ngOnInit() {
  }

  /**
   * How many teams are registered
   */
  howManyTeamsAreRegistered(): number {
    return this.teamsService.getElements().length;
  }

  /**
   * Return how many players are registered
   */
  howManyPlayersWillPlay(): number {
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
    // Iterate players
    return this.allPlayers()
      // Calculate the youngest player
      .reduce((youngestPlayer: Player, currentPlayer: Player) => {
        if (youngestPlayer.birthDate > currentPlayer.birthDate) {
          return youngestPlayer;
        }

        return currentPlayer;
      });
  }

  /**
   * Find the oldest player in all teams.
   *
   * Observables was used because flatMap is not native yet
   */
  calculateOldestPlayer(): Observable<Player> {
    // Iterate players
    return this.allPlayers()
      // Calculate the OLDEST player
      .reduce((oldestPlayer: Player, currentPlayer: Player) => {
        if (oldestPlayer.birthDate < currentPlayer.birthDate) {
          return oldestPlayer;
        }

        return currentPlayer;
      });
  }

  /**
   * Calculate How Many non Players Are.
   *
   * Observables was used because flatMap is not native yet
   */
  calculateNonTitularPlayers(): Observable<number> {
    return this.allPlayers()
      // Sum how many non titulars players are
      .reduce((nonTitular: number, currentPlayer: Player) => {
        // If the players is titular just return, else, sum one and return
        return currentPlayer.titular ? nonTitular : ++nonTitular;
      }, 0);
  }

  /**
   * Iterate all players of the tournament
   *
   * Observables was used because flatMap is not native yet
   */
  private allPlayers(): Observable<Player> {
    // Iterate teams
    return Observable.of(this.teamsService.getElements())
      // Iterate teams as a single element
      .switchMap((teams: Array<Team>) => teams)
      // Iterate the players of the Team as a single element
      .switchMap((team: Team) => team.players.getElements());
  }
}
