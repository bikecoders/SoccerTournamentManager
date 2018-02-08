import { Injectable } from '@angular/core';

import { Team } from './team.model';
import { Player, ForwardPosition } from './../../../player-technician/player-list/shared/player.model';
import { Technician, TechnicalStaffRoles } from './../../../player-technician/technician-list/shared/technician-staff.model';
import { CrudList } from './../../../shared/crud-list';

@Injectable()
export class TeamsService extends CrudList<Team> {

  /**
   * When you are editing a team this property will tell you
   * what team is being edited
   */
  currentTeamEdited: Team;

  constructor() {
    super();

    this.initFakeData();
  }

  /**
   * Setter for the property currentTeamEdited
   *
   * @param team The team that is being edited
   */
  setCurrentTeam(team: Team) {
    this.currentTeamEdited = team;
  }

  /**
   * Init the service with some random values
   */
  private initFakeData() {
    const italyTeam = new Team(
      'Italy',
      'assets/img/fakeTeams/italy/team/flag.png',
      'assets/img/fakeTeams/italy/team/shield.png'
    );

    const germanyTeam = new Team(
      'Germany',
      'assets/img/fakeTeams/germany/team/flag.png',
      'assets/img/fakeTeams/germany/team/shield.png'
    );

    this.elements.push(italyTeam);
    this.elements.push(germanyTeam);

    this.initFakePlayers();
    this.initFakeTechnicians();
  }

  /**
   * Init the service with some random values
   */
  private initFakePlayers() {
    // Italy
    const player1Italy = new Player(
      this.getElements()[0],
      'Diego',
      'Juliao',
      new Date(1991, 8, 8),
      'assets/img/fakeTeams/italy/player1.jpg',
      9,
      ForwardPosition.centreForward
    );

    this.getElements()[0].players.newElement(player1Italy);

    // Germany
    const player1Germany = new Player(
      this.getElements()[1],
      'Heinz',
      'Stucke',
      new Date(1920, 2, 8),
      'assets/img/fakeTeams/germany/player1.jpg',
      7,
      ForwardPosition.winger,
      true
    );

    this.getElements()[1].players.newElement(player1Germany);
  }

  private initFakeTechnicians() {
    // Italy Only
    const technician1Italy = new Technician(
      this.getElements()[1],
      'Technical',
      'Man',
      new Date(1920, 2, 8),
      'Venezuelan',
      TechnicalStaffRoles.Medic
    );

    this.getElements()[0].technician.newElement(technician1Italy);
  }
}
