import { Injectable } from '@angular/core';

import { Team } from './team.model';
import { Player } from './../../../player-technician/player-list/shared/player.model';
import { Technician } from './../../../player-technician/technician-list/shared/technician-staff.model';
import { CrudList } from './../../../shared/crud-list';

@Injectable()
export class TeamsService extends CrudList<Team> {

  /**
   * Players of the this team
   */
  players: CrudList<Player>;

  /**
   * Technicians of this team
   */
  technician: CrudList<Technician>;

  /**
   * When you are editing a team this property will tell you
   * what team is being edited
   */
  currentTeamEdited: Team;

  constructor() {
    super();

    // Init the arrays
    this.players = new CrudList <Player>();
    this.technician = new CrudList <Technician>();

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
  }

}
