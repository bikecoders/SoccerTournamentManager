import { CrudList } from './../../shared/crud-list';
import { Injectable } from '@angular/core';
import { Team } from './team.model';

@Injectable()
export class TeamsService extends CrudList<Team> {

  constructor() {
    super();
  }

}
