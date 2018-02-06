import { CrudList } from './../../shared/crud-list';
import { Injectable } from '@angular/core';
import { Team } from './team.model';

@Injectable()
export class TeamsService extends CrudList<Team> {

  constructor() {
    super();

    this.initFakeData();
  }

  /**
   * Init the service with some random values
   */
  private initFakeData() {
    const italyTeam = <Team>{
      name: 'Italy',
      flag: 'assets/img/fakeTeams/italy/team/flag.png',
      shield: 'assets/img/fakeTeams/italy/team/shield.png'
    };

    const germanyTeam = <Team>{
      name: 'Germany',
      flag: 'assets/img/fakeTeams/germany/team/flag.png',
      shield: 'assets/img/fakeTeams/germany/team/shield.png'
    };

    this.elements.push(italyTeam);
    this.elements.push(germanyTeam);
  }

}
