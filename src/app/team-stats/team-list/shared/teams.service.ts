import { Injectable } from '@angular/core';

import { Team } from './team.model';
import { Player } from './../../../player-technician/player-list/shared/player.model';
import { Technician } from './../../../player-technician/technician-list/shared/technician-staff.model';
import { CrudList } from './../../../shared/crud-list';

@Injectable()
export class TeamsService extends CrudList<Team> {

  players: CrudList<Player>;
  technician: CrudList<Technician>;

  constructor() {
    super();

    this.initFakeData();
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
